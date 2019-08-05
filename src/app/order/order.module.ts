import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderComponent } from './order.component';
import { DeliveryCostsComponent } from './delivery-costs/delivery-costs.component';
import { OrderItemsComponent } from './order-items/order-items.component';
import { SharedModule } from 'app/shared/shared.module';

const ROUTES: Routes = [{ path: '', component: OrderComponent }];

@NgModule({
  declarations: [OrderComponent, DeliveryCostsComponent, OrderItemsComponent],
  imports: [SharedModule, RouterModule.forChild(ROUTES)]
})
export class OrderModule {}
