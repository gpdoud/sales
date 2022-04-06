import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Orderline } from '../../orderline/orderline.class';
import { Order } from '../order.class';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-order-line',
  templateUrl: './order-line.component.html',
  styleUrls: ['./order-line.component.css']
})
export class OrderLineComponent implements OnInit {

  order!: Order;

  constructor(
    private ordsvc: OrderService,
    private route: ActivatedRoute
  ) { }

  review(): void {
    
  }
  edit(id: number): void {

  }
  remove(orderline: Orderline): void {

  }

  ngOnInit(): void {
    let orderId = this.route.snapshot.params["id"];
    this.ordsvc.get(orderId).subscribe({
      next: (res) => {
        console.debug("Order:", res);
        this.order = res;
      },
      error: (err) => console.error(err)
    });
  }

}
