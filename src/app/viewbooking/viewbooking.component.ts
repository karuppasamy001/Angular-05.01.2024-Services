import { Component } from '@angular/core';
import { HotelsService } from '../hotels.service';

@Component({
  selector: 'app-viewbooking',
  templateUrl: './viewbooking.component.html',
  styleUrls: ['./viewbooking.component.scss']
})
export class ViewbookingComponent {
  constructor(public hotel : HotelsService){}

  bookingDetails = Object.values(this.hotel.bookingDetails)
}
