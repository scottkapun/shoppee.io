import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ModalController, ToastController, NavParams, LoadingController, AlertController, NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { AccessServer } from '../../../../providers/access-server';

@Component({
  selector: 'app-tambah-shop-club',
  templateUrl: './tambah-shop-club.page.html',
  styleUrls: ['./tambah-shop-club.page.scss'],
})
export class TambahShopClubPage implements OnInit {
	server: string;
	memberlogin: any;

	produk_id:number;
	game_id:number;
	game_produk_id:number;
	customer_id: number;
	checked_club: string;
	jumlah_match: number;

	totaldipilih: number;

	dclub: any = [];

	limitclub: string;

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
	  		this.game_id = this.navParams.data.gameId;
	  		this.jumlah_match = this.navParams.data.jumlahmatch;
	  		this.produk_id = this.navParams.data.produkId;
		    this.pilihEclub(this.game_id);
	    });


  	}

  	ionViewDidLoad(){
		this.dclub = [];
	}

	closeModal(){
		this.modalController.dismiss({
      		'dismissed': true
    	});
	}

	async closeModal2(a) {
	    const onClosedData: string = a;
	    await this.modalController.dismiss(onClosedData);
	  }

	pilihEclub(a){
		let body = {
	        aksi : 'load_singleproduk_eclub',
	        id : a
	    };
	    this.syncServer.postData(body, 'index_load.php').subscribe(data => {
	    	this.dclub = data.resultclub;
	    	console.log(data);
	    });
	}

	async simpanClub(){
		    const loader = await this.loadingCtrl.create({
		      message: 'Proses sedang berlangsung... <br/> Mohon jangan tinggalkan halaman ini memerlukan waktu hingga 1menit.',
	    	});
		    loader.present();
	        return new Promise(resolve => {
	            let body = {
	              aksi : 'masuk_club',
	              game_produk_id : this.game_produk_id,
	              produk_id : this.produk_id,
	              game_id : this.game_id,
	              jumlah_match : this.jumlah_match,
	              customer_id : this.customer_id,
	              pilihan_dia : this.checked_club
	            };

	            this.syncServer.postDatalimit(body, 'index_proses.php').subscribe(data => {
	            	if(data.success==true){
					    loader.dismiss();
					    this.closeModal();
/*					    if(this.jumlah_match==data.terpilih){
				        	this.limitclub = true;
				        }else{
				        	this.limitclub = false;
				        }
	                	this.closeModal2(this.limitclub);
*/
//	              		this.router.navigate(['/tabs/tab3']);
//	              		this.navCtrl.navigateRoot(['/tabs/tab3']);
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
