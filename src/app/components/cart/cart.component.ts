import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent {
  cartItems: Product[] = this.cartService.getCartItems();
  name: string = '';
  address: string = '';
  cardNo: string = '';
  totalCost: number = 0;

  invalid: boolean = false;

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit() {
    for (let index = 0; index < this.cartItems.length; index++) {
      this.totalCost = this.totalCost + this.cartItems[index].price;
    }
  }

  onSubmit(): void {
    this.cartItems = this.cartService.clearCart();
    this.name = '';
    this.address = '';
    this.cardNo = '';
    // redirect to success page
    this.router.navigate(['/confirmation'])
  }

  removeProduct(product: Product) {
    this.cartItems = this.cartService.removeCartItem(product);
    alert(`${product.title} removed from cart`);
  }

  onChange(event: any): void {
    this.invalid = this.cardNo.length < 16
  }
}
