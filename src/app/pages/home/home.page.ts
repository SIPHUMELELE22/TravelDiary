import { Component } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { ActivatedRoute, Router } from '@angular/router';
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
  diary: { date: string } = {
    date: '',
  };

  imageSource: any;

  isModalOpen = false;
  todos: any;
  user: any = '';

  sliderImages =[
    {
      'id': 1,
      'image': 'https://i.postimg.cc/wvYcZ3mX/pexels-element-digital-1051073.jpg',
    },
    {
      'id': 1,
      'image': 'https://i.postimg.cc/kGd81HLf/pexels-sachin-c-nair-954929.jpg',
    },
    {
      'id': 1,
      'image': 'https://i.postimg.cc/25XHVCMM/pexels-oliver-sj-str-m-1122408.jpg',
    },
    {
      'id': 1,
      'image': 'https://i.postimg.cc/hPDcRskW/pexels-jacob-colvin-1761279.jpg',
    },
    {
      'id': 1,
      'image': 'https://i.postimg.cc/pX67cBxB/pexels-anna-shvets-7258001.jpg',
    },
    {
      'id': 1,
      'image': 'https://i.postimg.cc/hGf5cJvN/pexels-haris-khan-8502445.jpg.jpg',
    }
  ]

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  constructor(
    public photoService: PhotoService,
    public newsFeedService: NewsFeedService,
    private route: ActivatedRoute,
    public todoService: TodoService
  ) {
    const user: any = localStorage.getItem('userData');
    console.log(user);
    this.user = JSON.parse(user);
  }

  takePicture = async () => {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Prompt,
    });

    this.imageSource = image.dataUrl;
  };

  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }

  ngOnInit() {
    this.getTodos();
  }

  getTodos() {
    this.todoService.getTodos().subscribe((res: any) => {
      this.todos = res.data;
      console.log('Todos:', res.data);
    });
  }
  postTodos(todoData: any) {
    this.route.queryParams.subscribe((params) => {
      this.postTodos = params['name'];
      this.postTodos = params['email'];
      this.postTodos = params['password'];
    });
  }

  deleteTodos() {}
}
