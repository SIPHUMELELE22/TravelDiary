import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
})
export class NotificationsPage implements OnInit {
  notifications = [
    { badge: 'Reminder', message: "Don't forget to update your journal." },
    { badge: 'Journal Reminder', message: 'Capture your travel memories in your diary.' },
    { badge: 'Travel Update', message: 'Explore a new destination: Venice, Italy!' },
    { badge: 'Adventure Awaits', message: 'Plan your next adventure and make it unforgettable.' },
  { badge: 'Recommendation', message: 'New travel recommendation added.' },
];


  constructor() { }

  ngOnInit() {
  }

}
