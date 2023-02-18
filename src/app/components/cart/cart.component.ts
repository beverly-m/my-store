import { Component } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cartItems: Product[] = this.cartService.getCartItems();

  constructor(private cartService: CartService) {}
}
