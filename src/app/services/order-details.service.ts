import { Injectable } from '@angular/core';
import { OrderDetails } from '../models/orderDetails';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  orderDetails: OrderDetails = {
    name: '',
    total: 0
  };

  constructor() { }

  addOrderDetails(details: OrderDetails) {
    this.orderDetails = details;
  }

  getOrderDetails() {
    return this.orderDetails;
  }
}
