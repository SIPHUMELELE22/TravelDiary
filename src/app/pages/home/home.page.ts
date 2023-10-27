import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { PhotoService } from '../../services/photo.service';
import { NewsFeedService } from '../../news-feed.service';
import * as L from 'leaflet';

import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  quotes: any;

  imageSource: any;

  isModalOpen = false;
  todos: any;

  setOpen(isOpen: boolean){
    this.isModalOpen = isOpen;
  }

constructor(
  public photoService: PhotoService,
  public newsFeedService: NewsFeedService,
  public todoService: TodoService
  ){ }

takePicture = async () => {
  const image = await Camera.getPhoto({
    quality: 90,
    allowEditing: false,
    resultType: CameraResultType.DataUrl,
    source: CameraSource.Prompt
  });

  this.imageSource = image.dataUrl;
}

addPhotoToGallery() {
  this.photoService.addNewToGallery();
}

getQuotes(){
  // this.quotes = this.newsFeedService.getQuotes().subscribe((data: any) => {
  //   this.quotes = data.quote;
  // });
  }


ngOnInit() {
  this.getTodos();
}

getTodos()
{
  this.todoService.getTodos().subscribe((res:any) => {
    this.todos = res.data;
    console.log('Todos:' , res.data);
  })
}

}

