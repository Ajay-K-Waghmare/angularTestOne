import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from "src/app/signup/signup.component";
import { LoginComponent } from "src/app/login/login.component";

const routes: Routes = [
  { path: "signup", component: SignupComponent },
  { path: "login", component: LoginComponent }

];

@NgModule({
  imports : [RouterModule.forRoot(routes) ],
  exports: [RouterModule],
  
})


export class RoutingModule { }
