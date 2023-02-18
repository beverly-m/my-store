import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItems: Product[] = []

  constructor() { }

  addToCart(product: Product) {
    this.cartItems.push(product);
  }

  getCartItems() {
    return this.cartItems;
  }

  clearCart() {
    this.cartItems = [];
    return this.cartItems;
  }
}
