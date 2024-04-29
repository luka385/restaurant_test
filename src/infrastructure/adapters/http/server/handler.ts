import {Request, Response} from 'express'; 
import { UsecasePort } from '../../../../application/ports/port';
import { generateToken } from '../utils/jwtutils';

export class Handler {
    constructor(private usecase: UsecasePort) {}

    async createReservation(req: Request, res : Response): Promise<void> {
        try {
            console.log('Request body:', req.body);

            if (!req.body) {
                throw new Error('Request body is undefined');
            }

            const {id, name, phone} = req.body
            const newReservation = await this.usecase.CreateReservation({id , name, phone});
            
            res.status(201).json(newReservation);
        }catch (err) {
            console.log(err)
            res.status(400).json({err: 'BAD REQUEST'})
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

    async token(req: Request, res: Response): Promise<void> {
        const token = generateToken({name: 'luka', id: 1});
        res.status(200).json({token});
    }
}