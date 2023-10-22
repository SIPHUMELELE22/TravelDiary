import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-travel-diary',
  templateUrl: './travel-diary.page.html',
  styleUrls: ['./travel-diary.page.scss'],
})
export class TravelDiaryPage implements OnInit {
  isModalOpen = false;

  setOpen(isOpen: boolean){
    this.isModalOpen = isOpen;
  }

  constructor() { }

  ngOnInit() {
  }

}
