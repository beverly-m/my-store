import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  @Input() product: Product;
  @Output() addProduct: EventEmitter<Product> = new EventEmitter;
 
  products: Product[] = [];

  constructor(private cartService: CartService, private productService: ProductService) {
    this.product = {
      id: 1,
      title: '',
      images: [],
      price: 0,
      description: '',
      quantity: 1,
    }
  }

  ngOnInit() {
    
    this.productService.getProducts().subscribe(res => {
      this.products = res.products;
      for (let index = 0; index < this.products.length; index++) {
        this.products[index].quantity = 1;
      }
    })

  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    alert(`${this.product.title} added to cart!`)
    this.product.quantity = 1;
  }
}
