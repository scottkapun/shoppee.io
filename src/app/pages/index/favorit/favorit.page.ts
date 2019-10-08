import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { FilterPage } from '../components/filter/filter.page';

@Component({
  selector: 'app-favorit',
  templateUrl: './favorit.page.html',
  styleUrls: ['./favorit.page.scss'],
})
export class FavoritPage implements OnInit {

  constructor(
    public popoverController: PopoverController,
    private router: Router,
    private actRoute: ActivatedRoute
  ) { }

  ngOnInit() {
  }

  async filterPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: FilterPage,
      event: ev,
      translucent: true
    });
    return await popover.present();
  }

  openProduk(){
    this.router.navigate(['/produk/1']);
  }

  gotoKeranjang(){
    this.router.navigate(['/tabs/tab3']);
  }

}
