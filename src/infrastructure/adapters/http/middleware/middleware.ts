import { Request, Response, NextFunction } from "express";
import {verifyToken} from "../utils/jwtutils"

export const authenticateToken = async (req: Request, res : Response, next: NextFunction) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
        return res.status(401).json({message : 'no token providet'});
    } 
    
    const decoded = verifyToken(token);
    if (!decoded){
        return res.status(401).json({message: 'invalid token'})
    }

    next();
}