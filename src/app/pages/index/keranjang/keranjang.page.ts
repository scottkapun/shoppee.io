import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ModalController, ToastController, LoadingController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { AccessServer } from '../../../providers/access-server';

@Component({
  selector: 'app-keranjang',
  templateUrl: './keranjang.page.html',
  styleUrls: ['./keranjang.page.scss'],
})
export class KeranjangPage implements OnInit {

	server: string;
	memberlogin: any;
	customer_id: number;
	hasilkeranjang: any = [];

	
	harga_produk: any;


	harga_total: number;
	
	constructor(
		private storage: Storage,
		public modalController: ModalController,
		private router: Router,
		private actRoute: ActivatedRoute,
		public toastController: ToastController,
		public loadingCtrl: LoadingController,
		private syncServer: AccessServer,
	) { 
		this.server = this.syncServer.server;

		this.storage.get('storage_appio').then((res)=>{
	      this.memberlogin = res;
	      this.customer_id = this.memberlogin.customer_id;
		    this.loadKeranjang();
	    });
	}

	ngOnInit() { 

	}

	ionViewWillEnter(){
	    this.loadKeranjang();
		this.hasilkeranjang = [];
	}

	ionViewDidLoad(){
	}

	loadKeranjang(){
	    let body = {
	        aksi : 'load_keranjang',
	        customer_id: this.customer_id
	    };

	    this.syncServer.postData(body, 'index_load.php').subscribe(data => {
	        for(let datas of data.result){
		        this.hasilkeranjang.push(datas);
		        this.harga_total = datas.harga_total;
	        }
	    });
	}

	delProduk(a){
		let body = {
	        aksi : 'del_keranjang',
	        customer_id: this.customer_id,
	        produk_id: a
	    };

	    this.syncServer.postData(body, 'index_proses.php').subscribe(data => {
	    	this.hasilkeranjang = data.result;
	        for(let datass of data.resulttotal){
		        this.harga_total = datass.harga_total;
	        }
	    });
	}

	minQty(a,b){

		if(b==1){

		}else{

			let body = {
		        aksi : 'updatemin_keranjang',
		        customer_id: this.customer_id,
		        produk_id: a
		    };

		    this.syncServer.postData(body, 'index_proses.php').subscribe(data => {
		        this.hasilkeranjang = data.result;
		        for(let datass of data.resulttotal){
			        this.harga_total = datass.harga_total;
		        }
		    });

		}
	}

	plusQty(a){
		let body = {
	        aksi : 'updateplus_keranjang',
	        customer_id: this.customer_id,
	        produk_id: a
	    };

	    this.syncServer.postData(body, 'index_proses.php').subscribe(data => {
		    this.hasilkeranjang = data.result;
	        for(let datass of data.resulttotal){
		        this.harga_total = datass.harga_total;
	        }
	    });
	}

	openProduk(){
		this.router.navigate(['/produk/1']);
	}

}
