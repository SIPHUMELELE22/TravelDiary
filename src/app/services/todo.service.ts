import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  name: any;
  email: any;
  password: any;

    constructor (private http: HttpClient)
    {

    }

    // aUTHENTICATED ROUTES, YOU NEED TO BE LOGGED IN AND WHEN YOU DO YOUR POST 
    // YOU NEED TO HAVE THE HEADERS SENDING THE ACCESS_TOKEN ALONG
    getTodos()
    {
        return this.http.get(environment.respoApiUrl+this.getTodos);
    }

    // Post
    postTodos(){
      return this.http

    }
    // DELETE

}