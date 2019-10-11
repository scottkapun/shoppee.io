import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ModalController, ToastController, NavParams, LoadingController, AlertController, NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { AccessServer } from '../../../../providers/access-server';

import { TambahShopGamePage } from '../tambah-shop-game/tambah-shop-game.page';

@Component({
  selector: 'app-tambah-shop',
  templateUrl: './tambah-shop.page.html',
  styleUrls: ['./tambah-shop.page.scss'],
})
export class TambahShopPage implements OnInit {

	server: string;
	memberlogin: any;

	quantity: any;
	harga_produk: any;
	harga_produk_awal: number;

	singleproduk: any = [];
	singleimgproduk: any = [];
	datagame: any = [];
	stgame: string;

	//disabled_io = "false";
	//disabled_clr = "color: #000";
	label_event = "";


	displaynone: string = "displaynone";
	displaynone2: string = "";
	label_game: string;

	produk_id:number;

	customer_id: number;


	constructor(
		private storage: Storage,
		public modalController: ModalController,
		private router: Router,
		private actRoute: ActivatedRoute,
		public toastController: ToastController,
		public loadingCtrl: LoadingController,
		private navParams: NavParams,
		private syncServer: AccessServer,
		public alertController: AlertController,
		public navCtrl: NavController
	) { 
		this.quantity = 1;
		this.server = this.syncServer.server;
	}

	ngOnInit() {
		//console.table(this.navParams);
	    this.produk_id = this.navParams.data.paramId;
	    this.loadsingleProduk(this.produk_id);

	    this.storage.get('storage_appio').then((res)=>{
	      this.memberlogin = res;
	      this.customer_id = this.memberlogin.customer_id;
	    });
	}

	ionViewDidLoad(){
		this.singleproduk = [];
		this.singleimgproduk = [];
		this.datagame = [];
	}

	loadsingleProduk(a){
	    let body = {
	        aksi : 'load_singleproduk',
	        id   : a
	    };
	    this.syncServer.postData(body, 'index_load.php').subscribe(data => {
	    	for(let datas of data.result){
	        	this.singleproduk.push(datas);
				this.harga_produk_awal = datas.harga_produks;
				this.harga_produk = datas.harga_produks;
	        }
	    	this.singleimgproduk = data.images;
	    	this.datagame = data.datagame;
	    	this.stgame = data.cekevt;
	    	this.label_game = "IKUTI EVENT";
	    });
	}

	segmentChanged(ev: any) {
    	console.log('Segment changed', ev);
	}

	closeModal(){
		this.modalController.dismiss({
      		'dismissed': true
    	});
	}

	async pilihGame(a,b){
		const modal = await this.modalController.create({
	      component: TambahShopGamePage,
	      componentProps: {
	          "gamepId": a,
	          "jumlahmatch": b,
	          "produkId": this.produk_id
	        }
	    });
	    return await modal.present();
	}

	syaratKetentuangame(){
		this.syncServer.modalSyaratketentuangame();
	}

	minQty(){
		if(this.quantity-1 < 1){
			this.quantity = 1;
			this.harga_produk = this.harga_produk_awal;
		}else{
			this.quantity -= 1;
			this.harga_produk = this.harga_produk_awal*this.quantity;
		}
	}

	plusQty(){
		this.quantity += 1;
		this.harga_produk = this.harga_produk_awal*this.quantity;
	}

	gameSo(){
		if(this.displaynone=="displaynone"){
			this.displaynone = "";
			this.displaynone2 = "displaynone";
			this.label_game = "Bayar Normal";
//			this.disabled_io = "true";
//			this.disabled_clr = "color: #a9a9a9";
			this.label_event = "EVENT SERUUUUUU";

		}else{
			this.displaynone = "displaynone";
			this.displaynone2 = "";
			this.label_game = "IKUTI EVENT";
//			this.disabled_io = "false";
//			this.disabled_clr = "";
			this.label_event = "";

		}
	}

	async saveKeranjang(){
		if(this.quantity<1){
	        const toast = await this.toastController.create({
	          message: 'Jumlah beli harus lebih dari 1',
	          duration: 1500
	        });
	        toast.present();
	    }else{
		    const loader = await this.loadingCtrl.create({
		      message: 'Proses sedang berlangsung... <br/> Mohon jangan tinggalkan halaman ini memerlukan waktu hingga 1menit.',
	    	});
		    loader.present();
	        return new Promise(resolve => {
	            let body = {
	              aksi : 'masuk_keranjang',
	              customer_id : this.customer_id,
	              produk_id : this.produk_id,
	              jumlah_beli : this.quantity,
	              harga_total : this.harga_produk
	            };

	            this.syncServer.postDatalimit(body, 'index_proses.php').subscribe(data => {
	            	if(data.success==true){
					    loader.dismiss();
	                	this.modalController.dismiss({
      						'dismissed': true
    					});
	              		//this.router.navigate(['/tabs/tab3']);
	              		this.navCtrl.navigateRoot(['/tabs/tab3']);
	            		this.syncServer.errGlobal(data.alertmsg);
	            	}else{
	            		this.syncServer.alrGlobal();
					    loader.dismiss();
	            	}
	            }, (err) => {
	            	this.syncServer.alrGlobal();
	            });
	        }); 
	    }
	}

}
