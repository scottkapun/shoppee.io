import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ModalController, ToastController, NavParams, LoadingController, AlertController, NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { AccessServer } from '../../../../providers/access-server';

import { TambahShopClubPage } from '../tambah-shop-club/tambah-shop-club.page';

@Component({
  selector: 'app-tambah-shop-game',
  templateUrl: './tambah-shop-game.page.html',
  styleUrls: ['./tambah-shop-game.page.scss'],
})
export class TambahShopGamePage implements OnInit {

	server: string;
	memberlogin: any;

	game_produk_id:number;
	produk_id:number;
	customer_id: number;
	allclubs: any = [];

	jumlahmatch: number;
	totaldipilih: number;
	harga_produk: string;
	harga_produk_p: string;
	matchny: string;
	singleproduk: any = [];

	limitClub;

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
  		this.server = this.syncServer.server;
	}

  	ngOnInit() {

  		this.storage.get('storage_appio').then((res)=>{
	    	this.memberlogin = res;
	    	this.customer_id = this.memberlogin.customer_id;
	  		this.game_produk_id = this.navParams.data.gamepId;
	  		this.jumlahmatch = this.navParams.data.jumlahmatch;
	  		this.produk_id = this.navParams.data.produkId;
		    this.loadsingleProduk(this.produk_id);
		    this.pilihGames();
		    this.pilihGamesharga(this.game_produk_id);
	    });

  	}

  	ionViewDidLoad(){
		this.allclubs = [];
	}

	loadsingleProduk(a){
	    let body = {
	        aksi : 'load_singleproduk',
	        id   : a
	    };
	    this.syncServer.postData(body, 'index_load.php').subscribe(data => {
	    	for(let datas of data.result){
	        	this.singleproduk.push(datas);
	        }
	    });
	}

  	pilihGames(){
		let body = {
	        aksi : 'load_singleproduk_ev',
	        customer_id : this.customer_id,
	        produk_id : this.produk_id
	    };
	    this.syncServer.postData(body, 'index_load.php').subscribe(data => {
	    	this.allclubs = data.resultgame;
	    	for(let datass of data.resultgame){
		        this.totaldipilih = datass.totaldipilih;
	        }
	    });

	}

	pilihGamesharga(a){
		let body = {
	        aksi : 'load_singleproduk_ev_harga_only',
	        id   : a
	    };
	    this.syncServer.postData(body, 'index_load.php').subscribe(data => {
	    	this.harga_produk = data.hrgaevent_rp;
	    	this.harga_produk_p = data.hrgaevent_poin;
	    	this.matchny = data.matchny;
	    	console.log(data);
	    });
	}

	async pilihClub(a){
		let body = {
	        aksi : 'load_singleproduk_ev_dmiss',
	        id   : a,
	        customer_id : this.customer_id,
	        produk_id : this.produk_id
	    };
	    this.syncServer.postData(body, 'index_load.php').subscribe(data => {
	    	if(data.success==true){
				this.modalClub(a);
			}else{
				if(this.jumlahmatch==this.totaldipilih){
	            	this.syncServer.errGlobal('Opsss, ke-'+this.jumlahmatch+' match pilihan anda sudah terisi semua.');
			    }else{
					this.modalClub(a);
				}
			}
	    });
	}
	async modalClub(a){
		const modal = await this.modalController.create({
	      component: TambahShopClubPage,
	      componentProps: {
	          "gameId": a,
	          "gamepId": this.game_produk_id,
	          "jumlahmatch": this.jumlahmatch,
	          "produkId": this.produk_id
	        },
	        cssClass: "ion-modal-cg-ex",
	        showBackdrop:true,
	        backdropDismiss:false,
	    });

	    modal.onDidDismiss().then((limitClub) => {
	    	this.pilihGames();
	      /*if (limitClub !== null) {
	        this.limitClub = limitClub.data;
	      }*/
	    });

	    return await modal.present();
	}

	syaratKetentuangame(){
		this.syncServer.modalSyaratketentuangame();
	}

	closeModal(){
		this.modalController.dismiss({
      		'dismissed': true
    	});
	}

	async saveKeranjang(){
		/*
		    const loader = await this.loadingCtrl.create({
		      message: 'Proses sedang berlangsung... <br/> Mohon jangan tinggalkan halaman ini memerlukan waktu hingga 1menit.',
	    	});
		    loader.present();
	        return new Promise(resolve => {
	            let body = {
	              aksi : 'masuk_keranjang',
	              customer_id : this.customer_id,
	              produk_id : this.produk_id,
	              jumlah_beli : '1',
	              harga_total : this.harga_produk,
	              game_produk_id : this.game_produk_id,
	              status_game : 'y',
	              pilihan_dia : this.checked_club
	            };

	            this.syncServer.postDatalimit(body, 'index_proses.php').subscribe(data => {
	            	if(data.success==true){
					    loader.dismiss();
	                	this.modalController.dismiss({
      						'dismissed': true
    					});
//	              		this.router.navigate(['/tabs/tab3']);
//	              		this.navCtrl.navigateRoot(['/tabs/tab3']);
	            		this.syncServer.errGlobal(data.alertmsg);
	            	}else{
	            		this.syncServer.alrGlobal();
					    loader.dismiss();
	            	}
	            }, (err) => {
	            	this.syncServer.alrGlobal();
	            });
	        }); 
	        */
	}

}
