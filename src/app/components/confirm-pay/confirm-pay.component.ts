import { Component } from '@angular/core';
import { OrderDetails } from 'src/app/models/orderDetails.model';
import { OrderDetailsService } from 'src/app/services/order-details.service';

@Component({
  selector: 'app-confirm-pay',
  templateUrl: './confirm-pay.component.html',
  styleUrls: ['./confirm-pay.component.css']
})
export class ConfirmPayComponent {
  orderDetails: OrderDetails = {
    name: '',
    total: 0
  }

  constructor(private orderDetailsService: OrderDetailsService) {}

  ngOnInit() {
    this.orderDetails = this.orderDetailsService.getOrderDetails();
  }
}
