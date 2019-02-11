import { Component, OnInit } from '@angular/core';
import { PostsService } from "src/app/posts.service";
import { PostModel } from "src/app/post-model";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any;
  //  model = new PostModel();

  constructor(private service: PostsService) { }

  ngOnInit() {
  }
  getPosts() {
    this.service.get().subscribe(data => {
     // var jsonData = data.json();
     // console.log(jsonData.slice(0,5));
     console.log(data);
     // return this.posts = jsonData.slice(0,5);
     return this.posts = data;
    });
  }
  createPost(userid: HTMLInputElement, title: HTMLTextAreaElement) {
    let newpost = {
      userid: userid.value,
      title: title.value
    }
     this.service.create(newpost).subscribe((response) => {
     // console.log(response.json())
     console.log(response);
     });
     //this.posts.splice(0,0,newpost);
    //  this.posts.push(newpost);
  }
  editPost(post){
      this.service.update(post).subscribe((data)=>{
        //console.log(data.json())
        console.log(data);
      });
  }
  deletePost(post){
    this.service.delete(post.id).subscribe((response)=>{console.log(response)});
    let index = this.posts.indexOf(post);
    this.posts.splice(index,1);
  }
}
