import { Component, OnInit } from '@angular/core';
import { ShoppingService } from './shopping.service';
import { trigger, transition, state, style, animate, keyframes } from '@angular/animations';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'mt-shopping',
  templateUrl: './shopping.component.html',
  animations: [
    trigger('row', [
      state('ready', style({ opacity: 1 })),
      transition(
        'void => ready',
        animate(
          '300ms 0s ease-in',
          keyframes([
            style({ opacity: 0, transform: 'translateX(-30px)', offset: 0 }),
            style({ opacity: 0.8, transform: 'translateX(10px)', offset: 0.8 }),
            style({ opacity: 1, transform: 'translateX(0px)', offset: 1 })
          ])
        )
      ),
      transition(
        'ready => void',
        animate(
          '300ms 0s ease-out',
          keyframes([
            style({ opacity: 1, transform: 'translateX(0px)', offset: 0 }),
            style({ opacity: 0.8, transform: 'translateX(-10px)', offset: 0.2 }),
            style({ opacity: 0, transform: 'translateX(30px)', offset: 1 })
          ])
        )
      )
    ])
  ]
})
export class ShoppingComponent implements OnInit {
  rowState = 'ready';
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
