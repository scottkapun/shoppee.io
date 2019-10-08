import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MenutabsPage } from './menutabs.page';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

const routes: Routes = [
  {
    path: 'tabs',
    component: MenutabsPage,
    children:[
        { path: 'tab1', loadChildren: '../index/index.module#IndexPageModule' },
        { path: 'tab2', loadChildren: '../favorit/favorit.module#FavoritPageModule' },
        { path: 'tab3', loadChildren: '../keranjang/keranjang.module#KeranjangPageModule' },
        { path: 'tab4', loadChildren: '../transaksi/transaksi.module#TransaksiPageModule' },
        { path: 'tab5', loadChildren: '../akun/akun.module#AkunPageModule' },
    ]
  },
  {
    path:'',
    redirectTo:'/tabs/tab1',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    FontAwesomeModule
  ],
  declarations: [MenutabsPage]
})
export class MenutabsPageModule {}
