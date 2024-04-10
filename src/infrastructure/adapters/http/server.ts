import { Router } from 'express';
import { Handler } from './handler';
import { Usecase } from 'application/usecases/usecase';

export function setupServer(usecase : Usecase): Router {
        const r = Router();
        const handler = new Handler(usecase)
        
        r.post('/reservation', handler.createReservation.bind(handler))
        r.get('/reservation', handler.GetAllReservation.bind(handler))
        r.delete('/reservation/:id', handler.deleteReservation.bind(handler))
    
    return r
} 