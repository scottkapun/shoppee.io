import { Component, OnInit } from '@angular/core';
import { ToastController, LoadingController, NavController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { AccessServer } from '../../../providers/access-server';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-aktivasi',
  templateUrl: './aktivasi.page.html',
  styleUrls: ['./aktivasi.page.scss'],
})
export class AktivasiPage implements OnInit {

  tipe_aktivasi: string;
  kode_aktivasi: string;
  opsi_aktivasi: string;
  opsi_tipe: string;

  kode_verifikasi: string;
  constructor(
  	private router: Router,
  	public toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
    private actRoute: ActivatedRoute,
    private syncServer: AccessServer,
    private storage: Storage,
    public navCtrl: NavController,
  ) { }

  ngOnInit() {
    this.actRoute.params.subscribe((data: any) =>{
      this.tipe_aktivasi = data.tipe_aktivasi;
      this.kode_aktivasi = data.kode_aktivasi;
      this.opsi_aktivasi = data.opsi_aktivasi;
      this.opsi_tipe     = data.opsi_tipe;
      console.log(data);
    });
  }

  async verifikasiKode(){
    if(this.kode_verifikasi!=this.kode_aktivasi){
      const toast = await this.toastCtrl.create({
        message: 'Kode aktivasi tidak sesuai',
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
            aksi : 'verifikasi_kode',
            kode_verifikasi : this.kode_verifikasi,
            opsi_aktivasi : this.opsi_aktivasi,
            tipe_aktivasi : this.tipe_aktivasi,
            opsi_tipe     : this.opsi_tipe

          };

          this.syncServer.postData(body, 'index_proses.php').subscribe(data => {
            if(data.success==true){
              if(this.tipe_aktivasi=='1'){
                this.storage.set('storage_appio', data.result);
                this.navCtrl.navigateRoot(['']);
              }else{
                this.router.navigate(['/templaundry/' + data.opsi_aktivasi]);
              }
            }else{
              this.syncServer.errGlobal(data.alertmsg);
            }
          });
        });
      });
      loader.dismiss(); 
    }
  }

}
