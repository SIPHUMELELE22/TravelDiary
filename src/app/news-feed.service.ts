import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {HttpClient} from '@angular/common/http';

const API_URL = environment.API_URL;
const API_Key = environment.API_Key;

@Injectable({
  providedIn: 'root'
})
export class NewsFeedService {

  constructor(private http:HttpClient) { }

  getNews(url: any){
    return this.http.get('${API_URL} / ${url} &apiKeys = ${API_key}')
  }
}
