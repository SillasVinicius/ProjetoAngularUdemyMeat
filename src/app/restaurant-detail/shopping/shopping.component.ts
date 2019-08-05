import { Component, OnInit } from '@angular/core';
import { ShoppingService } from './shopping.service';

@Component({
  selector: 'mt-shopping',
  templateUrl: './shopping.component.html'
})
export class ShoppingComponent implements OnInit {
  constructor(private shoppingService: ShoppingService) {}

  ngOnInit() {}

  items(): any[] {
    return this.shoppingService.items;
  }

  clear() {
    this.shoppingService.clear();
  }

  removeItem(item: any) {
    return this.shoppingService.removeItem(item);
  }

  addItem(item: any) {
    return this.shoppingService.addItem(item);
  }

  total(): number {
    return this.shoppingService.total();
  }
}
