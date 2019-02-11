import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {HttpHeaders } from '@angular/common/http';
import {Observable} from "rxjs";
import { PostModel } from "src/app/post-model";
// import 'rxjs/add/operator/map';
import {map} from 'rxjs/operators';
import { HttpResponse } from "@angular/common/http";
// import {pipe} from 'rxjs/operators';
// import 'rxjs/Rx';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class PostsService {

  constructor(private http:HttpClient) { }
  url = "http://jsonplaceholder.typicode.com/posts";

  // get(uid:number){
  //   return this.http.get(`${this.url}/${uid}`);
  // }
  get():Observable<HttpResponse<any>>{
    // return this.http.get(this.url).pipe(map(response => response.json()));
    return this.http.get<any>(this.url, { observe: 'response' });
  }
  create(postmodel:any){
    console.log("new post created");
     return this.http.post(this.url,postmodel);
  }
  update(post){
    let testbody ={
      updated: true
    }
     let postUrl =  this.url+"/"+post.id;
     return this.http.patch(postUrl,testbody);
  }
  delete(postId){
    // let postUrl =  this.url+"/"+postId;
    return this.http.delete(`${this.url}/${postId}`);
  }
}
