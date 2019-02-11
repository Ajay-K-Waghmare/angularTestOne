import { Component } from '@angular/core';
import { ShoppingService } from "src/app/shopping/shopping.service";
import { Item } from "src/app/item";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
  
  dataFromChild : Item;
  items : Item[];
  constructor(private shoppingservice : ShoppingService) { }

  ngOnInit() {
    this.geItems();
  }

  geItems() : void {
      
      this.shoppingservice.geItems()
      .subscribe(items => this.items = items); 

  }
  handleNotify(eventData : Item): void{
         this.dataFromChild = eventData;
  }
}
