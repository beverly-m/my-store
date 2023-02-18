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
      description: ''
    }
  }

  ngOnInit() {
    
    this.productService.getProducts().subscribe(res => {
      this.products = res.products;
    })

    // this.product = (this.products.find(product => product.id === productId) as unknown) as Product
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    alert(`${this.product.title} added to cart!`)
  }
}
