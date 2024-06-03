import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/modelos/Order';
import { AltioraService } from 'src/app/servicios/altiora.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  orders: Order[] = [];
  selectedOrders: Order[] = [];

  constructor(private altioraService: AltioraService) {
    this.getAllOrders();
  }

  ngOnInit(): void {
  }

  async getAllOrders() {
    this.orders = await this.altioraService.GetAllOrders();
    console.log("orders", this.orders)
}

openNew() {
}

editProduct(order: Order) {
}

deleteProduct(order: Order) {
}

}
