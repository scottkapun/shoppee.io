import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-syarat-ketentuan-game',
  templateUrl: './syarat-ketentuan-game.page.html',
  styleUrls: ['./syarat-ketentuan-game.page.scss'],
})
export class SyaratKetentuanGamePage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  closeModal(){
		this.modalController.dismiss({
      		'dismissed': true
    	});
	}

}
