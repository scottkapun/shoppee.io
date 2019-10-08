import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { FilterPage } from '../components/filter/filter.page';

@Component({
  selector: 'app-transaksi',
  templateUrl: './transaksi.page.html',
  styleUrls: ['./transaksi.page.scss'],
})
export class TransaksiPage implements OnInit {

	constructor(
	    public popoverController: PopoverController,
	    private router: Router,
	    private actRoute: ActivatedRoute
	) { }

	ngOnInit() { }

	async filterPopover(ev: any) {
    	const popover = await this.popoverController.create({
    	  component: FilterPage,
    	  event: ev,
    	  translucent: true
    	});
    	return await popover.present();
	}

	openRiwayat(){
		this.router.navigate(['/transaksi-riwayat/1']);
	}

}
