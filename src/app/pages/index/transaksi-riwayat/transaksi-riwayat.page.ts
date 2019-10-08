import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-transaksi-riwayat',
  templateUrl: './transaksi-riwayat.page.html',
  styleUrls: ['./transaksi-riwayat.page.scss'],
})
export class TransaksiRiwayatPage implements OnInit {

	constructor(
		private router: Router,
	    private actRoute: ActivatedRoute
	) { }

	ngOnInit() { }

	openProduk(){
		this.router.navigate(['/produk/1']);
	}

}
