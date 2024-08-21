import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  registerForm!: FormGroup;

  constructor(private authService: AuthService, private fb: FormBuilder) { }

  ngOnInit() {
    
    this.registerForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', Validators.email],
      password: ['', [Validators.required, Validators.minLength(5)]]
    })

  }

  register()
  {
    const regCode = 123123123;
    // asiign your values here 
    const registerData = {
      name: this.registerForm.value.name,
      email: this.registerForm.value.email,
      password: this.registerForm.value.password,
    };
    console.log('Register Form Data:', registerData);
 

    this.authService.register(registerData).subscribe((res: any) => {
      console.log('Registration Data: ', res);
    }),
    (error: any) => {
      console.error('Registration error:', error);
    }

    // Login

    // Logout

  }

}
