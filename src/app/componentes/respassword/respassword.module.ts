import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RespasswordPageRoutingModule } from './respassword-routing.module';

import { RespasswordPage } from './respassword.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RespasswordPageRoutingModule
  ],
  declarations: [RespasswordPage]
})
export class RespasswordPageModule {}
