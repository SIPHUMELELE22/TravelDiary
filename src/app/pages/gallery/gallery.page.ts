import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.page.html',
  styleUrls: ['./gallery.page.scss'],
})
export class GalleryPage implements OnInit {

  
  images = [
    { url: 'https://i.postimg.cc/ncvD7x7P/pexels-ann-h-1765033.jpg', caption: 'Beautiful landscape' },
    { url: 'https://i.postimg.cc/ncvD7x7P/pexels-ann-h-1765033.jpg', caption: 'Exploring the city' },
    { url: 'https://i.postimg.cc/ncvD7x7P/pexels-ann-h-1765033.jpg.jpg', caption: 'Scenic views' },
  ];

  constructor() { }

  ngOnInit() {
  }

}
