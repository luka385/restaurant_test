import {Request, Response} from 'express'; 
import { UsecasePort } from 'application/ports/port';

export class Handler {
    constructor(private usecase: UsecasePort) {}

    async createReservation(req: Request, res : Response): Promise<void> {
        try {
            const {id, name, phone} = req.body
            const NewUser = await this.usecase.CreateReservation({id, name, phone});
            res.status(201).json(NewUser);
        }catch (err) {
            res.status(500).json({err: 'INTERNAL SERVER ERROR'})
        }
    }

    async deleteReservation(req: Request, res: Response): Promise<void> {
        try{
            const Id = parseInt(req.params.id);
            await this.usecase.DeleteReservation(Id);
            res.status(204).send();
        }catch (err) {
            res.status(500).json({err: 'INTERNAL SERVER ERROR'})
        }
    }

    async GetAllReservation(req: Request, res: Response): Promise<void> {
        try {
            const users = await this.usecase.GetAllReservation()
            res.status(200).json(users);
        }catch (err) {
            res.status(500).json({err : 'INTERNAL SERVER ERROR'})
        }
    }
}