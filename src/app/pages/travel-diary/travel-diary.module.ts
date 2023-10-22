import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TravelDiaryPageRoutingModule } from './travel-diary-routing.module';

import { TravelDiaryPage } from './travel-diary.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TravelDiaryPageRoutingModule
  ],
  declarations: [TravelDiaryPage]
})
export class TravelDiaryPageModule {}
