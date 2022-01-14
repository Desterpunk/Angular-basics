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
  editOn: boolean = false;
  selectedPost!: PostI;

  constructor(
    private dataSvc:DataService
  ) { }

  ngOnInit(): void {
    this.dataSvc.getAllPosts().subscribe(data => {
      this.posts = data;
    })

  }

  onSelectPost(post:PostI):void{
    this.selectedPost = post;
  };

  saveNew(): void{
    
    const newPost =   {
      image: "https://i.ytimg.com/an_webp/krwrBp2YtFI/mqdefault_6s.webp?du=3000&sqp=COqPqI4G&rs=AOn4CLDizlTRLgNmO2ThHtBpPH4gW1Iycw",
      tittle: "New Post",
      subtittle: "Que",
      author: {
        name: "Jhon Serna",
        author: ""
      }
    }

    this.dataSvc.addNewPost(newPost).subscribe(data => {
      this.posts.push(data)
    });
  }

  toggleEditOn(){
    if(this.editOn) {
      this.editOn = false;
    } else {
      this.editOn = true;
    }
  }

  onUpdatePost(post: PostI): void {

    this.dataSvc.updatePost(post).subscribe(data => {
      const indexToUpdate = data ? this.posts.findIndex(c => c.id === data.id) : -1;

      if (indexToUpdate > -1) {
        this.posts[indexToUpdate] = data;
      }
    })
  }

  onDeletePost(post: PostI): void {
    this.dataSvc.deletePost(post.id!).subscribe();
    this.posts = this.posts.filter(c => c.id != post.id);
  }

}
