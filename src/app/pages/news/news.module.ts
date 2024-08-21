import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewsPageRoutingModule } from './news-routing.module';


import { NewsPage } from './news.page';
import { Router } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewsPageRoutingModule

  ],
  declarations: [NewsPage]
})
export class NewsPageModule {
}



