import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { ShoppingService } from "src/app/shopping/shopping.service";
import { Item } from "src/app/item";


@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
 subtitle = "bhaje";
 imagePath = "src/app/images/chair1.jpg";

@Input() item : Item;
 @Output() notify : EventEmitter<Item> = new EventEmitter<Item>();
  constructor() { }

  ngOnInit() {
  
  }
  handleClick(){
    this.notify.emit(this.item);
  }
  

}
