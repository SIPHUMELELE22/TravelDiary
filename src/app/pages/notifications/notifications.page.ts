import { TitleCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
})
export class NotificationsPage implements OnInit {
  notifications: any[]; // Replace with your actual notification data.

  constructor(private router:Router) {
    this.notifications = [
      {
        title: 'New Message',
        message: 'You have a new message.',
        icon: 'mail-outline',
      },
      {
        title: 'Reminder',
        message: "Don't forget to update your journal.",
        icon: 'alarm-outline',
      },
      {
        title: 'Recommendation',
        message: 'New travel recommendation added.',
        icon: 'star-outline',
      }
    ];
  }
  readNotification(){
    this.router.navigate(['/notification-details'])
  }

  ngOnInit() {
  }

}
