import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = [];

  addToCart(item) {
   this.items.push(item);

  };

  returnItems() {
    return this.items;
  };

  clearItems(item){
    this.items = [];
    return this.items;

  };

  constructor() { }

}