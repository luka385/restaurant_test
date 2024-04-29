import { Router } from 'express';
import { Handler } from './handler';
import { Usecase } from '../../../../application/usecases/usecase';
import { authenticateToken } from '../middleware/middleware';

export function setupServer(usecase : Usecase): Router {
        const r = Router();
        const handler = new Handler(usecase)
        
        r.get('/token', handler.token.bind(handler)) 
        r.post('/reservation', authenticateToken, handler.createReservation.bind(handler))
        r.get('/reservation', authenticateToken, handler.GetAllReservation.bind(handler))
        r.delete('/reservation/:id', authenticateToken, handler.deleteReservation.bind(handler))
    
    return r
} 