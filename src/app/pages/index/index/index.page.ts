import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ScrollDetail } from '@ionic/core';
import { IonSlides } from '@ionic/angular';
import { ModalController, LoadingController } from '@ionic/angular'
import { KategoriPage } from '../components/kategori/kategori.page';
import { AccessServer } from '../../../providers/access-server';

@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class IndexPage implements OnInit {

  @ViewChild('mySlider', { read: IonSlides }) slides: IonSlides;
  server: string;
  showToolbar = false;

  hasilproduk: any = [];
  hasilproduks: any = [];
  perpage: number = 10;
  start: number = 0;

  stdisplay: string = "";

  constructor(
    private router: Router,
    private actRoute: ActivatedRoute,
    public modalController: ModalController,
    public loadingCtrl: LoadingController,
    private syncServer: AccessServer,
  ) { 
    this.server = this.syncServer.server;
  }

  ngOnInit() { }

  ionViewWillEnter(){
    this.hasilproduk = [];
    this.hasilproduks = [];
    this.start = 0;
    this.loadProduk();
  }

  ionViewDidLoad(){    

  }

  slidesDidLoad(slides: IonSlides) {
    slides.startAutoplay();
  }

  onScroll($event: CustomEvent<ScrollDetail>) {
    if ($event && $event.detail && $event.detail.scrollTop) {
      const scrollTop = $event.detail.scrollTop;
      this.showToolbar = scrollTop >= 40;
    }
  }

  async doRefresh(event){
    this.stdisplay = "displaynone";
    const loader = await this.loadingCtrl.create({
      message: 'Please wait...',
    });
    loader.present();

    this.ionViewWillEnter();
    event.target.complete();

    this.stdisplay = "";
    loader.dismiss(); 
  }

  loadData(event:any){
    this.start += this.perpage;
//    setTimeout(() =>{
    this.loadProduk().then(()=>{
      event.target.complete();
    });
//    }, 500);
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: KategoriPage
    });
    return await modal.present();
  }


  openProduk(a,b){
    this.router.navigate(['/produk/' + a + '/' + b]);
  }

  loadProduk(){    
    return new Promise(resolve => {  
      let body = {
        aksi : 'load_produk',
        start: this.start,
        limit: this.perpage
      };

      this.syncServer.postData(body, 'index_load.php').subscribe(data => {
        for(let datas of data.resultgenap){
          this.hasilproduk.push(datas);
        }
        for(let datass of data.resultganjil){
          this.hasilproduks.push(datass);
        }
        resolve(true);
      });
    });
  }

}
