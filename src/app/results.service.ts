import { Injectable } from '@angular/core';
import{ HttpClient } from '@angular/common/http';
import {  Posts } from './interfaces/post';

@Injectable({
  providedIn: 'root'
})
export class ResultsService {

  //apiUrl: 'https://www.reddit.com/r/aww/.json'
  
  constructor(private http:HttpClient) { }

  getPosts() {
    return this.http.get<Posts>('https://www.reddit.com/r/aww/.json')
    //return this.http.get<Posts>(`${this.apiUrl}/r/aww/.json`)
  }
  
}
