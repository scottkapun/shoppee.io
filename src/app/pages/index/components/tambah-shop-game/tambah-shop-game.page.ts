import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ModalController, ToastController, NavParams, LoadingController, AlertController, NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { AccessServer } from '../../../../providers/access-server';

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
	datawls: any = [];

	testing: any = [];


	harga_produk: string;
	singleproduk: any = [];
	game_berakhir: string;

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
	  		this.produk_id = this.navParams.data.produkId;
		    this.loadsingleProduk(this.produk_id);
		    this.pilihGames(this.game_produk_id);
		    this.pilihGamesharga(this.game_produk_id);
		    console.log(this.customer_id);
		    console.log(res);
	    });

  	}

  	ionViewDidLoad(){
		this.datawls = [];
		this.testing = [];
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
			this.game_berakhir = data.tglakhir;
	    });
	}

  	pilihGames(a){
		let body = {
	        aksi : 'load_singleproduk_wl',
	        id   : a
	    };
	    this.syncServer.postData(body, 'index_load.php').subscribe(data => {
	    	this.datawls = data.resultgame;
	    });
	}

	syaratKetentuangame(){
		this.syncServer.modalSyaratketentuangame();
	}

	pilihGamesharga(a){
		let body = {
	        aksi : 'load_singleproduk_wl_harga',
	        id   : a
	    };
	    this.syncServer.postData(body, 'index_load.php').subscribe(data => {
	    	this.harga_produk = data.hrgaevent;
	    	console.log(data);
	    });
	}

	closeModal(){
		this.modalController.dismiss({
      		'dismissed': true
    	});
	}

	asasAa(){
		console.log(this.testing);
		//var input=(document.getElementsByClassName(i)[0]).value;
		//console.log(input);
	}

	customTrackBy(index: number, obj: any): any {
	return index;
}

	async saveKeranjang(){
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
	              pilihan_dia : this.testing
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
	}

}
