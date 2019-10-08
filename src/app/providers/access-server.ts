import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { ToastController, LoadingController, ModalController } from '@ionic/angular';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/timeout';

import { SyaratKetentuanGamePage } from '../pages/index/components/syarat-ketentuan/syarat-ketentuan-game/syarat-ketentuan-game.page';

@Injectable()
export class AccessServer {
  server: string = 'http://167.71.198.54/library/keyapi_appio/';
  //server: string = 'https://www.carvellonic.com/server_laundryapp/';

  constructor(
    public http : Http,   
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
    public modalController: ModalController) {
  }

  postData(body, file) {      
      let type = "application/json; charset=UTF-8";
      let headers = new Headers({ 'Content-Type': type});
      let options = new RequestOptions({ headers: headers });
      return this.http.post(this.server + file, JSON.stringify(body), options)
        .map(res => res.json());
  }

  postDatalimit(body, file) {      
      let type = "application/json; charset=UTF-8";
      let headers = new Headers({ 'Content-Type': type});
      let options = new RequestOptions({ headers: headers });
      return this.http.post(this.server + file, JSON.stringify(body), options)
        .timeout(59000)
        .map(res => res.json());
  }

  async errGlobal(a){
    const toast = await this.toastCtrl.create({
      message: a,
      duration: 2000
    });
    toast.present();
  }

  async alrGlobal(){
    const toast = await this.toastCtrl.create({
      message: 'Koneksi lemah, silahkan coba beberapa saat lagi',
      duration: 2000,
      position: 'top'
    });
    toast.present();
  }

  async modalSyaratketentuangame() {
      const modal = await this.modalController.create({
      component: SyaratKetentuanGamePage,
    });
    return await modal.present();
  }

}