import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.page.html',
  styleUrls: ['./gallery.page.scss'],
})
export class GalleryPage implements OnInit {

  images = [
    { url: 'https://i.postimg.cc/dtxcZXhZ/pexels-caroline-cagnin-2007395.jpg', caption: 'Views' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
