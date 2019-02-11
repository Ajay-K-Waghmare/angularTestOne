import { Component } from '@angular/core';
import { FormGroup } from "@angular/forms";
import { FormControl } from "@angular/forms";
import { Validators } from "@angular/forms";
import { AbstractControl } from "@angular/forms";
import { ValidationErrors } from "@angular/forms";
// import {customValidators} from 'app/customValidators';
import {customValidators} from 'src/app/customValidators';
import { FormArray } from "@angular/forms";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor() { }

  login = new FormGroup(
    {
      'fullname': new FormControl('ajay waghmare',
        [Validators.required]),
      username: new FormControl("", [Validators.required,customValidators.spaceNotAllowed]),
      email: new FormControl("", [Validators.required, Validators.pattern("[^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$]")]),
      password: new FormControl("", [Validators.required, Validators.minLength(5)]),
      skills : new FormArray ([])
    }
  )
  onSubmit() {
    console.log(this.login);
  }
  get fullname() {
    return this.login.get('fullname');
  }
  get username() {
    return this.login.get('username');
  }
  get email() {
    return this.login.get('email');
  }
  get password() {
    return this.login.get('password');
  }
addSkills(skl: HTMLInputElement){
    (this.login.get("skills") as FormArray).push(new FormControl(skl.value));
    skl.value="";
}
  
}
