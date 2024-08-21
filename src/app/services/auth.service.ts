import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, throwError, catchError, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  getUserData(): any {

    return {
      name: '',
      email: '',
      password: ''
    };
  }

    constructor (private http: HttpClient){}

login(data: any): Observable<any> {

        return this.http.post(environment.respoApiUrl + '/login', data);
      }

      register(data: any): Observable<any> {

        return this.http.post(environment.respoApiUrl + '/register', data).pipe(
          map((response: any) => {

            if (response.success) {

              return response.data;
            } else {

              throw new Error(response.message);
            }
          }),
          catchError((error: any) => {
            console.log(error.message);
            return throwError('Registration failed. Please try again.');
          })
        );
      }
    
    logout()
    {

    }

    storeToken(token: string) {
        return localStorage.setItem('auth_token', token);
      }

      getToken(): string | null {
        return localStorage.getItem('auth_token');
      }
}