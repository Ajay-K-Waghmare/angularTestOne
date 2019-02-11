import { Component } from '@angular/core';
import { ShoppingService } from "src/app/shopping/shopping.service";
import { Item } from "src/app/item";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'IKEA';
 
  constructor() { }

  ngOnInit() {
  
  }
}
