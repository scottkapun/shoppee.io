import { Component, OnInit } from '@angular/core';
import { ToastController, LoadingController, NavController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { AccessServer } from '../../../providers/access-server';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-akun',
  templateUrl: './akun.page.html',
  styleUrls: ['./akun.page.scss'],
})
export class AkunPage implements OnInit {

  constructor(
  	private router: Router,
  	public toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
    private actRoute: ActivatedRoute,
    private syncServer: AccessServer,
    private storage: Storage,
    public navCtrl: NavController,) { }

  ngOnInit() {
  }

  async prosesLogout(){
    this.storage.clear();
    this.navCtrl.navigateRoot(['']);
    const toast = await this.toastCtrl.create({
        message: 'logout succesful',
        duration: 3000
      });
    toast.present();
  }

}
