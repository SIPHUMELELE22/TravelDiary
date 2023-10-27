import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

    constructor (private http: HttpClient)
    {

    }

    login()
    {
        // return the response
        // save the response token to localstorage with key 'access_token'
    }

    register(data:any)
    {
        return this.http.post(environment.respoApiUrl+'/register', data);
    }

    logout()
    {

    }

}