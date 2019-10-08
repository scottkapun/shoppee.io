import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  //{ path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '', loadChildren: './pages/index/menutabs/menutabs.module#MenutabsPageModule' },
  
  { path: 'index', loadChildren: './pages/index/index/index.module#IndexPageModule' },
  { path: 'akun', loadChildren: './pages/index/akun/akun.module#AkunPageModule' },
  { path: 'produk/:produk_id/:nama_produk', loadChildren: './pages/index/produk/produk.module#ProdukPageModule' },
  { path: 'menutabs', loadChildren: './pages/index/menutabs/menutabs.module#MenutabsPageModule' },
  
  { path: 'intro', loadChildren: './pages/inindex/intro/intro.module#IntroPageModule' },
//  { path: 'login', loadChildren: './pages/inindex/login/login.module#LoginPageModule' },
  { path: 'daftar', loadChildren: './pages/inindex/daftar/daftar.module#DaftarPageModule' },
  { path: 'aktivasi/:tipe_aktivasi/:opsi_tipe/:kode_aktivasi/:opsi_aktivasi', loadChildren: './pages/inindex/aktivasi/aktivasi.module#AktivasiPageModule' },
  { path: 'favorit', loadChildren: './pages/index/favorit/favorit.module#FavoritPageModule' },
  { path: 'transaksi', loadChildren: './pages/index/transaksi/transaksi.module#TransaksiPageModule' },
  { path: 'keranjang', loadChildren: './pages/index/keranjang/keranjang.module#KeranjangPageModule' },
  { path: 'transaksi-riwayat/:transaksi_id', loadChildren: './pages/index/transaksi-riwayat/transaksi-riwayat.module#TransaksiRiwayatPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
