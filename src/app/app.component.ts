import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public alertButtons = [
    {
      text: 'Log Out',
      role: 'alert-button-confirm',
    },
    {
      text: 'Cancel',
      cssClass: 'alert-button-cancel',
    },
  ];


  constructor() {}
}
