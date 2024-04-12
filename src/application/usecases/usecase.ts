import { RepositoryPort } from "../ports/port";
import { Reservation } from "../../domain/reservation";
import { UsecasePort } from "../ports/port";


export class Usecase implements UsecasePort {
    constructor(private repositoryPort: RepositoryPort) {}

    async CreateReservation(newReservation : Reservation): Promise<Reservation> {
        await this.repositoryPort.Save(newReservation);
        return newReservation;
    }

    async GetAllReservation(): Promise<Reservation[]> {
        return await this.repositoryPort.GetAll();
    }

    async DeleteReservation(id : number): Promise<void> {
        return await this.repositoryPort.Delete(id);
    }
}