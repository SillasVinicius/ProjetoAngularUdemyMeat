import { NgModule, ModuleWithProviders } from '@angular/core';
import { InputComponent } from './input/input.component';
import { RadioComponent } from './radio/radio.component';
import { RatingComponent } from './rating/rating.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ShoppingService } from '../restaurant-detail/shopping/shopping.service';
import { OrderService } from '../order/order.service';
import { RestaurantsService } from '../restaurants/restaurants.service';
import { SnackbarComponent } from './messages/snackbar/snackbar.component';
import { NotificationService } from './messages/notificatio.service';

@NgModule({
  declarations: [InputComponent, RadioComponent, RatingComponent, SnackbarComponent],
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  exports: [
    InputComponent,
    RadioComponent,
    RatingComponent,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    SnackbarComponent
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [ShoppingService, OrderService, RestaurantsService, NotificationService]
    };
  }
}
