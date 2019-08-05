import { Injectable } from '@angular/core';
import { ShoppingService } from 'app/restaurant-detail/shopping/shopping.service';
import { CartItem } from 'app/restaurant-detail/shopping/cart-item.model';
import { Observable } from 'rxjs/Observable';
import { Order } from './order.model';
import { map } from 'rxjs/operator/map';
import { Http, RequestOptions, Headers } from '@angular/http';
import { MEAT_API } from 'app/app.api';

@Injectable()
class OrderService {
  constructor(private cartService: ShoppingService, private http: Http) {}

  itemsValue(): number {
    return this.cartService.total();
  }

  cartItems(): CartItem[] {
    return this.cartService.items;
  }

  upQuantity(item: CartItem) {
    this.cartService.upQuantity(item);
  }
  downQuantity(item: CartItem) {
    this.cartService.downQuantity(item);
  }

  remove(item: CartItem) {
    this.cartService.removeItem(item);
  }

  checkOrder(order: Order): Observable<string> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http
      .post(`${MEAT_API}/orders`, JSON.stringify(order), new RequestOptions({ headers: headers }))
      .map(response => response.json())
      .map(order => order.id);
  }
  clear() {
    this.cartService.clear();
  }
}

export { OrderService };
