import { Component } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { PhotoService } from '../services/photo.service';
import * as L from 'leaflet';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  imageSource: any;

  isModalOpen = false;

  setOpen(isOpen: boolean){
    this.isModalOpen = isOpen;
  }

constructor(public photoService: PhotoService) { }

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

ngOnInit() {
}

}

