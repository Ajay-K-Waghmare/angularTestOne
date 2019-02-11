import { Component, OnInit } from '@angular/core';
import { UserModel } from "src/app/user-model";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

 
  constructor() { }

  ngOnInit() {
  }
  // model = new UserModel('ajwag','Ajay','akw@1993','abc','abc',14226156,'fccvjjvv');
  model = new UserModel();
  submitted = false;

  loger(userf : UserModel){
    console.log(userf);
  }
  onSubmit(uform : UserModel){
    this.submitted = true;
    this.model = uform;
  }
  get details(){
     return  JSON.stringify(this.model);
    
  }
}
