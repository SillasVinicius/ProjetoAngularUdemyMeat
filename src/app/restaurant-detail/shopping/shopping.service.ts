import { CartItem } from './cart-item.model';
import { MenuItem } from '../menu-item/menu-item.model';
import { Injectable } from '@angular/core';
import { NotificationService } from 'app/shared/messages/notificatio.service';
@Injectable()
class ShoppingService {
  constructor(private notificationService: NotificationService) {}
  items: CartItem[] = [];
  clear() {
    this.items = [];
  }
  total(): number {
    return this.items.map(item => item.value()).reduce((prev, value) => prev + value, 0);
  }
  addItem(item: MenuItem) {
    let foundItem = this.items.find(mItem => mItem.menuItem.id === item.id);
    if (foundItem) {
      this.upQuantity(foundItem);
    } else {
      this.items.push(new CartItem(item));
    }
    this.notificationService.notify(`item ${item.name} adicionado!`);
  }
  removeItem(item: CartItem) {
    this.items.splice(this.items.indexOf(item), 1);
    this.notificationService.notify(`item ${item.menuItem.name} removido!`);
  }
  upQuantity(item: CartItem) {
    item.quantity += 1;
  }
  downQuantity(item: CartItem) {
    item.quantity -= 1;
    if (item.quantity === 0) {
      this.removeItem(item);
    }
  }
}
export { ShoppingService };
