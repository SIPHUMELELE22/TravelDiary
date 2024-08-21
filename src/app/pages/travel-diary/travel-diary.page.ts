import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Camera } from '@capacitor/camera';


@Component({
  selector: 'app-travel-diary',
  templateUrl: './travel-diary.page.html',
  styleUrls: ['./travel-diary.page.scss'],
})
export class TravelDiaryPage implements OnInit {

  previousEntries: { date: Date; content: string }[] = [];
  
  diaryEntry: string = '';
  photoData: string = '';
  uploadPhoto: any;

  constructor() {

    this.fetchPreviousEntries();
   }

  ngOnInit() {
  }

  ploadPhoto(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      this.photoData = reader.result as string;
    };
    reader.readAsDataURL(file);
  }

  saveDiaryEntry() {
    const entry = {
      text: this.diaryEntry,
      photo: this.photoData,
      date: new Date().toISOString(),
    };
  }
  fetchPreviousEntries() {

    this.previousEntries = [

    ];
  }

}
