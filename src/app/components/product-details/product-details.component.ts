import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  products: Product[] = [];
  product: Product;

  constructor(private route: ActivatedRoute, private productService: ProductService, private cartService: CartService) {
    this.product = {
      id: 1,
      title: '',
      images: [],
      price: 0,
      description: ''
    }
  }

  ngOnInit() {
    const routeParameters = this.route.snapshot.paramMap;
    console.log(routeParameters);
    const productId = Number(routeParameters.get('productId'))
    console.log(productId);

    this.productService.getProducts().subscribe(res => {
      this.products = res.products;
      console.log(this.products);
      this.product = (this.products.find(product => product.id === productId) as unknown) as Product;
    })
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    alert(`${this.product.title} added to cart!`)
  }
}
