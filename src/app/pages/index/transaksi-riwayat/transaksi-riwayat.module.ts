import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TransaksiRiwayatPage } from './transaksi-riwayat.page';

const routes: Routes = [
  {
    path: '',
    component: TransaksiRiwayatPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TransaksiRiwayatPage]
})
export class TransaksiRiwayatPageModule {}
