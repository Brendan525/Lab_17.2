import { Component, OnInit } from '@angular/core';
import { Posts } from '../interfaces/post';
import { ResultsService } from '../results.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  posts: Posts;

  constructor(private resultService: ResultsService) { }

  ngOnInit(): void {

    this.resultService.getPosts().subscribe(
      (data: Posts) => {
        debugger;
        this.posts = data 
      }
    );
  }
}
