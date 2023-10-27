import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = environment.API_URL;
const API_Key = environment.API_Key;

@Injectable({
  providedIn: 'root'
})
export class NewsFeedService {

  constructor(private httpClient: HttpClient) { }

  getPopularNews():Observable<any>{
    return this.httpClient.get(`${environment.API_URL}top-headlines?country=za&apiKey=${environment.API_Key}`); 
  }

  getArticleByCategory(category: any):Observable<any>{
    return this.httpClient.get(`${environment.API_URL}top-headlines?country=za&${category}=entertainment&apiKey=${environment.API_Key}`);
  }

  getQuotes()
    {

    }

}
