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
    if (this.hotel.currentBooking === 0) {
      alert('Wrong Path');
      this.route.navigate(['/']);
      return;
    }

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
        alert('Your Start Date and End Date is not valid');
        return;
      }

      if(!this.roomsAvailable(start, end, this.hotel.currentBooking)){
        alert("At your Dates the Selected Room is Already Booked Please Select Different Rooms or Please Select Different Dates Thanks")
        this.route.navigate(['/Rooms'])
        return
      }

      this.TotalAmount = this.calculatePrice(diffDays);
      this.billing = true;
    }

    this.addToBookingDetails();
  }

  roomsAvailable(startDate: Date, endDate: Date, roomNo: number): boolean{
    if(Object.values(this.hotel.bookingDetails).length === 0) return true


    for(let i in this.hotel.bookingDetails){
      if(this.hotel.bookingDetails[i].roomNo === roomNo){
        if((startDate < this.hotel.bookingDetails[i].startDate && endDate < this.hotel.bookingDetails[i].startDate) || (startDate > this.hotel.bookingDetails[i].endDate &&  endDate > this.hotel.bookingDetails[i].endDate) ){
          continue
        }else{
          return false
        }
      }
    }

    return true
  }

  calculatePrice(days: number) {
    for (let i in this.hotel.rooms) {
      if (this.hotel.rooms[i].roomNo === this.hotel.currentBooking) {
        if (days === 0) return this.hotel.rooms[i].price;

        return this.hotel.rooms[i].price * days;
      }
    }

    return 0;
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
    this.hotel.currentBooking = 0;

    this.route.navigate(['/Bookings']);
  }
}
