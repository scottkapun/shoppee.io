import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';

import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

import { IonicRatingModule } from 'ionic4-rating';

// components
import { FilterPageModule } from './pages/index/components/filter/filter.module';
import { LoginPageModule } from './pages/inindex/login/login.module';
import { KategoriPageModule } from './pages/index/components/kategori/kategori.module';
import { TambahShopPageModule } from './pages/index/components/tambah-shop/tambah-shop.module';
import { TambahShopGamePageModule } from './pages/index/components/tambah-shop-game/tambah-shop-game.module';
import { TambahShopClubPageModule } from './pages/index/components/tambah-shop-club/tambah-shop-club.module';
import { SyaratKetentuanGamePageModule } from './pages/index/components/syarat-ketentuan/syarat-ketentuan-game/syarat-ketentuan-game.module';

import { IonicStorageModule } from '@ionic/storage';
import { HttpModule } from '@angular/http';
import { AccessServer } from './providers/access-server';

library.add(fas, far, fab);

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
  BrowserModule, 
  IonicModule.forRoot({ _forceStatusbarPadding: false }), 
  IonicStorageModule.forRoot(), 
  AppRoutingModule,
  HttpModule,
  FontAwesomeModule,
  FilterPageModule,
  LoginPageModule,
  TambahShopPageModule,
  TambahShopGamePageModule,
  TambahShopClubPageModule,
  KategoriPageModule,
  SyaratKetentuanGamePageModule,
  IonicRatingModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AccessServer,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
