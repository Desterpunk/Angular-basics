import { PostI } from 'src/app/cores/models/post/post.interface'; 
import { DataService } from 'src/app/cores/services/posts/data.service'; 
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  posts: PostI[] = [];

  constructor(
    private dataSvc:DataService
  ) { }

  ngOnInit(): void {
    this.dataSvc.getAllCities().subscribe(data => {
      this.posts = data;
    })

  }

}
