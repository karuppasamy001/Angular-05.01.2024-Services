import { Injectable } from '@angular/core';
import { BookingDetails, Rooms } from './interface';

@Injectable({
  providedIn: 'root',
})
export class HotelsService {


  currentBooking: number = 0

  bookingDetails: { [key: string] : BookingDetails } = {};



  rooms: { [key: number]: Rooms } = {
    1: {
      roomNo: 1,
      type: 'Single BedRoom',
      price: 1000,
      img: 'https://source.unsplash.com/800x600/?hotel-room',
    },
    2: {
      roomNo: 2,
      type: 'Double BedRoom',
      price: 1200,
      img: 'https://source.unsplash.com/800x600/?bedroom',
    },
    3: {
      roomNo: 3,
      type: 'Suite',
      price: 1500,
      img: 'https://source.unsplash.com/800x600/?suite',
    },
    4: {
      roomNo: 4,
      type: 'Deluxe Room',
      price: 1800,
      img: 'https://source.unsplash.com/800x600/?luxury-room',
    },
    5: {
      roomNo: 5,
      type: 'Studio',
      price: 1100,
      img: 'https://source.unsplash.com/800x600/?modern-room',
    },
    6: {
      roomNo: 6,
      type: 'Apartment',
      price: 2000,
      img: 'https://source.unsplash.com/800x600/?cozy-room',
    },
    7: {
      roomNo: 7,
      type: 'Penthouse',
      price: 2500,
      img: 'https://source.unsplash.com/800x600/?apartment',
    },
    8: {
      roomNo: 8,
      type: 'Family Room',
      price: 1600,
      img: 'https://source.unsplash.com/800x600/?elegant-room',
    },
    9: {
      roomNo: 9,
      type: 'Executive Suite',
      price: 2200,
      img: 'https://source.unsplash.com/800x600/?spacious-room',
    },
    10: {
      roomNo: 10,
      type: 'King Room',
      price: 1900,
      img: 'https://source.unsplash.com/800x600/?chic-room',
    },
    11: {
      roomNo: 11,
      type: 'Standard Room',
      price: 800,
      img: 'https://source.unsplash.com/800x600/?vintage-room',
    },
    12: {
      roomNo: 12,
      type: 'Budget Room',
      price: 600,
      img: 'https://source.unsplash.com/800x600/?rustic-room',
    },
    13: {
      roomNo: 13,
      type: 'Ocean View Room',
      price: 1700,
      img: 'https://source.unsplash.com/800x600/?scenic-room',
    },
    14: {
      roomNo: 14,
      type: 'Mountain View Room',
      price: 1400,
      img: 'https://source.unsplash.com/800x600/?ocean-view-room',
    },
    15: {
      roomNo: 15,
      type: 'Vintage Room',
      price: 1300,
      img: 'https://source.unsplash.com/800x600/?mountain-view-room',
    },
    16: {
      roomNo: 16,
      type: 'Modern Room',
      price: 2100,
      img: 'https://source.unsplash.com/800x600/?apartment-interior',
    },
    17: {
      roomNo: 17,
      type: 'Luxury Suite',
      price: 2800,
      img: 'https://source.unsplash.com/800x600/?luxury-suite',
    },
    18: {
      roomNo: 18,
      type: 'Business Class Room',
      price: 2400,
      img: 'https://source.unsplash.com/800x600/?modern-interior',
    },
    19: {
      roomNo: 19,
      type: 'Economy Room',
      price: 900,
      img: 'https://source.unsplash.com/800x600/?bed',
    },
    20: {
      roomNo: 20,
      type: 'Spa Retreat Room',
      price: 1700,
      img: 'https://source.unsplash.com/800x600/?living-room',
    },
    21: {
      roomNo: 21,
      type: 'Nature View Room',
      price: 1500,
      img: 'https://source.unsplash.com/800x600/?nature-view-room',
    },
  };
}
