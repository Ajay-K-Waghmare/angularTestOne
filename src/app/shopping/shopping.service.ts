import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import { ITEMS } from "src/app/mock-items";
import { Item } from "src/app/item";
@Injectable({
  providedIn: 'root'
})
export class ShoppingService {

  constructor() { }

  geItems() : Observable<Item[]>{

     return of(ITEMS);
  }
}
