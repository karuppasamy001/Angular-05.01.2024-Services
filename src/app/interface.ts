export interface Rooms {
    roomNo: number,
    type: string,
    price: number,
    img: string
}

export interface BookingDetails {
    name: string;
    phoneNumber: number
    startDate: Date
    endDate: Date
    roomNo: number
    totalPrice: number
}