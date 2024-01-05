import { Router } from '@angular/router';
import { Rooms } from './../interface';
import { Component } from '@angular/core';
import { HotelsService } from '../hotels.service';

@Component({
  selector: 'app-display-rooms',
  templateUrl: './display-rooms.component.html',
  styleUrls: ['./display-rooms.component.scss']
})
export class DisplayRoomsComponent {

  constructor(public hotel: HotelsService, private route: Router){}

  rooms: { [key: number] : Rooms } = this.hotel.rooms 


  getRooms(){
    return Object.values(this.rooms)
  }


  bookRooms(roomId: number){
    this.hotel.currentBooking = roomId
    
    this.route.navigate(['/confirmBooking'])
  }

}
