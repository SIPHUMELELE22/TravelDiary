import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm!: FormGroup;

  constructor(private authService: AuthService, private fb: FormBuilder, private router: Router) {
    const token = localStorage.getItem('access_token');
    if(token){
      this.router.navigateByUrl('/home');
    }
   }

  ngOnInit() {
    
    this.loginForm  =this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required, Validators.minLength(4)]]
    })
  }


  /**
   * Login Method
   */
  login()
  {
    const loginData = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    };

    console.log('Lofgn ddata:', loginData);

    this.authService.login(loginData).subscribe((res: any) => {
      localStorage.setItem('token', res.access_token);
      localStorage.setItem('userData',JSON.stringify(res.user));
      console.log('LOGIN DATA: ', res);
      this.router.navigateByUrl('/home');
    }),
    (error: any) => {
      console.error('Login error:', error);
    }
  }

}
