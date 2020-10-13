import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../interfaces/post';

@Component({
  selector: 'app-single-result',
  templateUrl: './single-result.component.html',
  styleUrls: ['./single-result.component.css']
})
export class SingleResultComponent implements OnInit {
  @Input() myPost: Post

  constructor() { }

  ngOnInit(): void {
  }

}
