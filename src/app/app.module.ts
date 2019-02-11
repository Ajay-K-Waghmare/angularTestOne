import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { ItemsComponent } from './items/items.component';
import { TestDirective } from './test.directive';
import { TestingPipe } from './testing.pipe';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { FormsModule }   from '@angular/forms';
import { CategoriesComponent } from './categories/categories.component';
import { RoutingModule } from './routing/routing.module';
import { ReactiveFormsModule } from "@angular/forms";
import { ConfirmEqualValidatorDirctive } from "src/app/custom-directives";
import { PostsComponent } from './posts/posts.component';
import { PostsService } from "src/app/posts.service";

@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    TestDirective,
    TestingPipe,
    SignupComponent,
    LoginComponent,
    CategoriesComponent,
    ConfirmEqualValidatorDirctive,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RoutingModule,
    HttpClientModule
  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
