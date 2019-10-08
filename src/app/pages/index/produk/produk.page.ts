import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ScrollDetail } from '@ionic/core';
import { ModalController } from '@ionic/angular'

import { TambahShopPage } from '../components/tambah-shop/tambah-shop.page';
import { LoginPage } from '../../inindex/login/login.page';

import { AccessServer } from '../../../providers/access-server';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-produk',
  templateUrl: './produk.page.html',
  styleUrls: ['./produk.page.scss'],
})
export class ProdukPage implements OnInit {

	showToolbar = false;
	server: string;

	singleproduk: any = [];
	singleimgproduk: any = [];
	nama_produk: string = "";
	nama_produks: string = "";
	produk_id: number;

	constructor(
	    private storage: Storage,
		public modalController: ModalController,
		private router: Router,
	    private actRoute: ActivatedRoute,
	    private syncServer: AccessServer,
	) { 
		this.server = this.syncServer.server;
	}

	ngOnInit() { 
		this.actRoute.params.subscribe((data: any) =>{
	  		this.produk_id = data.produk_id;
	  		this.nama_produks = data.nama_produk;
	  		this.loadsingleProduk(this.produk_id);
	  	});
	}

	ionViewDidLoad(){
		this.singleproduk = [];
		this.singleimgproduk = [];
  	}

    onScroll($event: CustomEvent<ScrollDetail>) {
		if ($event && $event.detail && $event.detail.scrollTop) {
			const scrollTop = $event.detail.scrollTop;
			this.showToolbar = scrollTop >= 40;
			this.nama_produk = this.nama_produks;
		}else{
			this.nama_produk = "";
		}
	}

	async presentModal(a) {
		this.storage.get('storage_appio').then((res)=>{
	      if(res == null ){
	        this.modalLogin();
	      }else{
	        this.modalBeli(a);
	      }
	    });
	}

	async modalLogin() {
	    const modal = await this.modalController.create({
		  component: LoginPage
		});
		return await modal.present();
	}

	async modalBeli(a) {
	    const modal = await this.modalController.create({
		  component: TambahShopPage,
		  componentProps: {
	        "paramId": a
	      }
		});
		return await modal.present();
	}

	loadsingleProduk(a){
	    let body = {
	        aksi : 'load_singleproduk',
	        id   : a
	    };
	    this.syncServer.postData(body, 'index_load.php').subscribe(data => {
	    	this.singleproduk = data.result;
	    	this.singleimgproduk = data.images;
	    });
	}

	gotoFavorit(){
		this.router.navigate(['/tabs/tab2']);
	}

	gotoKeranjang(){
	    this.router.navigate(['/tabs/tab3']);
	}

}
