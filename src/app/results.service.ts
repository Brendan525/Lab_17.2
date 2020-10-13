import { Injectable } from '@angular/core';
import{ HttpClient } from '@angular/common/http';
import { Post, Posts } from './interfaces/post';

@Injectable({
  providedIn: 'root'
})
export class ResultsService {

  //apiUrl: 'https://www.reddit.com/r/aww/.json'
  
  constructor(private http:HttpClient) { }

  getPosts() {
    return this.http.get<Posts>('https://www.reddit.com/r/aww/.json')
  }

  getTitle(url:string) {
    return this.http.get<Posts>(url);
  }

  getLink(url:string) {
    return this.http.get<Posts>(url);
  }
  
}
