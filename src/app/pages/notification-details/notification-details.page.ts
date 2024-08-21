import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification-details',
  templateUrl: './notification-details.page.html',
  styleUrls: ['./notification-details.page.scss'],
})
export class NotificationDetailsPage implements OnInit {
  
  title: any;
  message: any;
  icon: any;

  constructor() { }

  ngOnInit() {
  }
  
}
