import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, NavController } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';


import { HomePageRoutingModule } from './home-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
  ],
  declarations: [HomePage]
})
export class HomePageModule {
    constructor(public navCtrl: NavController){

    }

  irLogin(){
    this.navCtrl.navigateForward('../componentes/login/login.page');
  }

}