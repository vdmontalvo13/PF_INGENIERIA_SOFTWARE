import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { firebaseConfig} from "../environments/environment";

import { AngularFireModule} from "@angular/fire";
import {AngularFireAuthModule} from "@angular/fire/auth";

import {LoginPage} from '../app/componentes/login/login.page';

@NgModule({
  declarations: [AppComponent,LoginPage],
  entryComponents: [LoginPage],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule],
    
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
