import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ProdukPage } from './produk.page';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IonicRatingModule } from "ionic4-rating";

const routes: Routes = [
  {
    path: '',
    component: ProdukPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    FontAwesomeModule,
    IonicRatingModule
  ],
  declarations: [ProdukPage]
})
export class ProdukPageModule {}
