import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Plugin} from '@capacitor/core/types/definitions';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

    constructor(private router: Router) {}
  
    logout() {
    }
}
