import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItems: Product[] = [];

  constructor() { }

  addToCart(product: Product) {
    // check if product already exists in cart and increment the quantity if it already exists
    let exists = false;
    // let position = 0;
    let oldOrder: Product = {
      id: 1,
      title: '',
      images: [],
      price: 0,
      description: '',
      quantity: 1
    };

    for (let index = 0; index < this.cartItems.length; index++) {
      if (product.id === this.cartItems[index].id) {
        exists = true;
        oldOrder = this.cartItems[index];
        this.removeCartItem(this.cartItems[index]);
        // position = index;
      }
    }
    console.log(`old order: ${oldOrder}`);
    console.log(exists);
    if (exists) {
      // console.log(`quantity before ${this.cartItems[position].quantity}`);
      console.log(`quantity before ${oldOrder.quantity}`);
      console.log(`add ${product.quantity}`);
      // this.cartItems[position].quantity = this.cartItems[position].quantity + product.quantity;
      oldOrder.quantity = oldOrder.quantity + product.quantity;
      // console.log(`quantity after ${this.cartItems[position].quantity}`)
      console.log(`quantity after ${oldOrder.quantity}`)
      console.log(this.cartItems);
      this.cartItems.push(oldOrder);
    } else {
      this.cartItems.push(product);
    }
    console.log(this.cartItems);
  }

  getCartItems() {
    return this.cartItems;
  }

  clearCart() {
    this.cartItems = [];
    return this.cartItems;
  }

  removeCartItem(product: Product): Product[] {
    this.cartItems = this.cartItems.filter(prod => prod.id !== product.id);
    return this.cartItems;
  }

}
