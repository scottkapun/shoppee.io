import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AccessServer } from '../../../providers/access-server';
import { ToastController, LoadingController, AlertController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  opsi_hp: string = "";
  opsi_email: string = "";

  displayhp: string = "";
  displayemail: string = "displaynone";
  activehp: string = "active";
  activeemail: string = "";

  disableButton;

  constructor(
    private router: Router,
    public modalController: ModalController,
    public toastCtrl: ToastController,
    public alertController: AlertController,
    public loadingCtrl: LoadingController,
    private actRoute: ActivatedRoute,
    private syncServer: AccessServer
  ) { }

  ngOnInit() {
  }

  ionViewDidEnter(){
    this.disableButton = false;
  }

  opsiHp(){
    this.displayhp = "";
    this.displayemail = "displaynone";
    this.activehp = "active";
    this.activeemail = "";
  }

  opsiEmail(){
    this.displayhp = "displaynone";
    this.displayemail = "";
    this.activeemail = "active";
    this.activehp = "";
  }

  tutupLogin(){
    this.modalController.dismiss({
      'dismissed': true
    });
  }

  async aktivasiOpsi(){
    var ceknohp = this.opsi_hp.substring(0,1);
    if(this.activehp=='active'){
      if(this.opsi_hp==""){
        const toast = await this.toastCtrl.create({
          message: 'No. handphone tidak boleh kosong',
          duration: 1500
        });
        toast.present();
      }else if(ceknohp!="0"){
        const toast = await this.toastCtrl.create({
          message: 'No. handphone harus di awali dengan angka 0',
          duration: 1500
        });
        toast.present();
      }else{

        this.disableButton = true;

        const loader = await this.loadingCtrl.create({
          message: 'Please wait...',
        });
        loader.present().then(() => {
          return new Promise(resolve => {
            let body = {
              aksi : 'aktivasi_akses',
              opsi_aktivasi : this.opsi_hp,
              opsi_tipe : 'nomor_telepon',
              tipe_aktivasi : '1' // 2 = daftar, 1 = login
            };

            this.syncServer.postData(body, 'index_proses.php').subscribe(data => {
            	if(data.success==true){
              	this.router.navigate(['/aktivasi/1/nomor_telepon/' + '/' + data.kode_aktivasi + '/' + data.opsi_aktivasi]);
		        	  this.disableButton = true;
                this.tutupLogin();
            	}else{
            		this.err('Nomor');
		        	  this.disableButton = false;
            	}
            });
          }); 
        });
        loader.dismiss();
      }
    }else{
      if(this.opsi_email==""){
        const toast = await this.toastCtrl.create({
          message: 'Email tidak boleh kosong',
          duration: 1500
        });
        toast.present();
      }else{


        const loader = await this.loadingCtrl.create({
          message: 'Please wait...',
        });
        loader.present().then(() => {
          return new Promise(resolve => {
            let body = {
              aksi : 'aktivasi_akses',
              opsi_aktivasi : this.opsi_email,
              opsi_tipe : 'email_address',
              tipe_aktivasi : '1' // 2 = daftar, 1 = login
            };

            this.syncServer.postData(body, 'index_proses.php').subscribe(data => {
            	if(data.success==true){
              	this.router.navigate(['/aktivasi/1/email_address/' + '/' + data.kode_aktivasi + '/' + data.opsi_aktivasi]);
		        	  this.disableButton = true;
                this.tutupLogin();
            	}else{
		        	  this.disableButton = false;
		        	  this.err('Email');
            	}
            });
          }); 
        });
        loader.dismiss();
      }
    }
  }

  async err(a){
  	const toast = await this.toastCtrl.create({
	  message: a+' tidak tersedia!',
	  duration: 1500
	});
	toast.present();
  }

  optionDaftar(){
  	this.router.navigate(['daftar']); ///cl-daftar
  }

}
