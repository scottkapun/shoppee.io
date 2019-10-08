import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ModalController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-kategori',
  templateUrl: './kategori.page.html',
  styleUrls: ['./kategori.page.scss'],
})
export class KategoriPage implements OnInit {

	constructor(
		public modalController: ModalController,
		private router: Router,
		private actRoute: ActivatedRoute,
		public toastController: ToastController
	) { }

	ngOnInit() { }

	closeModal(){
		this.modalController.dismiss({
      		'dismissed': true
    	});
	}

}
