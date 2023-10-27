import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  register()
  {
    // asiign your values here 
    const registerData = {
      name:  '',
      email: '',
      password: ''
    }

    this.authService.register(registerData).subscribe((res: any) => {
      console.log('rEGSISTRATION DATA: ', res);
    })

    // Login

    // Logout

  }

}
