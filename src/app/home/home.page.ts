import { Component } from '@angular/core';
import { IonicModule, NavController } from '@ionic/angular';
//import {LoginPage} from '../componentes/login/login.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public navCtrl: NavController) {}
  
irlogin(){
  this.navCtrl.navigateForward('../componentes/login/login.page');
}
}
