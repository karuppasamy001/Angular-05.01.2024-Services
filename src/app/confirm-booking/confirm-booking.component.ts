import { Component } from '@angular/core';
import { HotelsService } from '../hotels.service';
import { Router } from '@angular/router';
import { BookingDetails } from '../interface';

@Component({
  selector: 'app-confirm-booking',
  templateUrl: './confirm-booking.component.html',
  styleUrls: ['./confirm-booking.component.scss'],
})
export class ConfirmBookingComponent {
  constructor(public hotel: HotelsService, private route: Router) {}

  name: string = '';
  phoneNumber!: number;
  startDate!: string;
  endDate!: string;
  TotalAmount!: number;
  billing: boolean = false;

  confirmBooking() {
    if (this.name === '') {
      alert('Please Enter the Name');
      return;
    }

    if (String(this.phoneNumber).length !== 10) {
      alert('Invalid PhoneNumber');
      return;
    }

    if (!this.startDate) {
      alert('Please Select the FROM Date');
      return;
    }

    if (!this.endDate) {
      alert('Please Select the TO Date');
      return;
    }

    const start = new Date(this.startDate);
    const end = new Date(this.endDate);

    if (this.startDate && this.endDate) {
      const singleDay: number = 24 * 60 * 60 * 1000; // 24 hours * 60 minutes * 60 seconds * 1000 milliseconds
      let diffDays = Math.round((end.getTime() - start.getTime()) / singleDay);

      if (diffDays < 0) {
        alert('Please Select Proper Date');
        return;
      }

      this.TotalAmount = this.calculatePrice(diffDays)
      this.billing = true
    }


    

    this.addToBookingDetails();
  }

  calculatePrice(days: number) {
    for (let i in this.hotel.rooms) {
      if (this.hotel.rooms[i].roomNo === this.hotel.currentBooking) {
        if (days === 0) return this.hotel.rooms[i].price;

        return this.hotel.rooms[i].price * days;
      }
    }

    return 0
  }

  addToBookingDetails() {
    let index: number = 0;

    if (this.hotel.bookingDetails)
      index = Object.values(this.hotel.bookingDetails).length + 1;

    const booking: BookingDetails = {
      name: this.name,
      phoneNumber: this.phoneNumber,
      startDate: new Date(this.startDate),
      endDate: new Date(this.endDate),
      roomNo: this.hotel.currentBooking,
      totalPrice: this.TotalAmount,
    };

    this.hotel.bookingDetails[index] = booking;

    console.log(this.hotel.bookingDetails);

    this.route.navigate(['/Bookings'])
  }
}
