import { Reservation } from "domain/reservation";

export interface RepositoryPort {
    Save(reservation : Reservation): Promise<Reservation>;
    GetAll(): Promise<Reservation[]>;
    Delete(id : number): Promise<void>;
}


export interface UsecasePort{
    CreateReservation(reservation : Reservation): Promise<Reservation>;
    GetAllReservation(): Promise<Reservation[]>;
    DeleteReservation(id : number): Promise<void>;
}
