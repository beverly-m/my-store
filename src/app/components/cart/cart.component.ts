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
}
