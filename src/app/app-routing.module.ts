import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DisplayRoomsComponent } from './display-rooms/display-rooms.component';
import { ViewbookingComponent } from './viewbooking/viewbooking.component';
import { ConfirmBookingComponent } from './confirm-booking/confirm-booking.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'Rooms', component: DisplayRoomsComponent},
  {path: 'Bookings', component: ViewbookingComponent},
  {path: 'confirmBooking', component: ConfirmBookingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
