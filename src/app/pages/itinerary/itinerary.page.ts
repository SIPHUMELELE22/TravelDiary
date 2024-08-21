import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-itinerary',
  templateUrl: './itinerary.page.html',
  styleUrls: ['./itinerary.page.scss'],
})
export class ItineraryPage implements OnInit {

  itinerary: { date: string, activity: string } = {
    date: '',
    activity: ''
  };
  itineraryItems: { date: string, activity: string }[] = [];

  addItineraryItem() {
    if (this.itinerary.date && this.itinerary.activity) {
      this.itineraryItems.push({ date: this.itinerary.date, activity: this.itinerary.activity });
      this.itinerary.date = '';
      this.itinerary.activity = '';
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
