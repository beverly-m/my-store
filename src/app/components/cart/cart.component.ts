import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OrderDetails } from 'src/app/models/orderDetails';
import { Product } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';
import { OrderDetailsService } from 'src/app/services/order-details.service';

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
  orderDetails: OrderDetails = {
    name: '',
    total: 0
  };

  invalid: boolean = false;

  constructor(private cartService: CartService, private orderDetailsService: OrderDetailsService , private router: Router) {}

  ngOnInit() {
    for (let index = 0; index < this.cartItems.length; index++) {
      this.totalCost = this.totalCost + (this.cartItems[index].price * this.cartItems[index].quantity);
    }
  }

  onSubmit(): void {
    this.orderDetails = {
      name: this.name,
      total: this.totalCost
    };

    this.orderDetailsService.addOrderDetails(this.orderDetails);

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
    
    this.totalCost = 0
    for (let index = 0; index < this.cartItems.length; index++) {
      this.totalCost = this.totalCost + (this.cartItems[index].price * this.cartItems[index].quantity);
    }
  }

  onChange(event: any): void {
    this.totalCost = 0
    for (let index = 0; index < this.cartItems.length; index++) {
      this.totalCost = this.totalCost + (this.cartItems[index].price * this.cartItems[index].quantity);
    }
  }
}
