import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TambahShopGamePage } from './tambah-shop-game.page';

const routes: Routes = [
  {
    path: '',
    component: TambahShopGamePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TambahShopGamePage]
})
export class TambahShopGamePageModule {}
