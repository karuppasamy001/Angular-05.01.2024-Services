import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DisplayRoomsComponent } from './display-rooms/display-rooms.component';
import { ConfirmBookingComponent } from './confirm-booking/confirm-booking.component';
import { HotelsService } from './hotels.service';
import { ViewbookingComponent } from './viewbooking/viewbooking.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DisplayRoomsComponent,
    ConfirmBookingComponent,
    ViewbookingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [HotelsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
