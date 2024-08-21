import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  pushNotifications = true;
  shareLocation = true;
  darkMode = false;
  saveToGallery = true;

  constructor() { }

  ngOnInit() {
  }

  logOut() {

  }

}
