import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  user: any; 
  subscribe = true;
  

  constructor(private authService: AuthService, private router: Router) {}
  

  ngOnInit() {

    this.user = this.authService.getUserData();
  }

  logOut() {

   
  }
}
