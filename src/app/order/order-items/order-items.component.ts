import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CartItem } from 'app/restaurant-detail/shopping/cart-item.model';

@Component({
  selector: 'mt-order-items',
  templateUrl: './order-items.component.html'
})
export class OrderItemsComponent implements OnInit {
  @Input() items: CartItem[];

  @Output() upQuantity = new EventEmitter<CartItem>();
  @Output() downQuantity = new EventEmitter<CartItem>();
  @Output() remove = new EventEmitter<CartItem>();

  constructor() {}

  ngOnInit() {}

  emitUpQuantity(item: CartItem) {
    this.upQuantity.emit(item);
  }
  emitDownQuantity(item: CartItem) {
    this.downQuantity.emit(item);
  }
  emitRemove(item: CartItem) {
    this.remove.emit(item);
  }
}
