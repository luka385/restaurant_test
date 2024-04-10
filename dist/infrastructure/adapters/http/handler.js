"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Handler = void 0;
class Handler {
    constructor(usecase) {
        this.usecase = usecase;
    }
    async createReservation(req, res) {
        try {
            const { id, name, phone } = req.body;
            const NewUser = await this.usecase.CreateReservation({ id, name, phone });
            res.status(201).json(NewUser);
        }
        catch (err) {
            res.status(500).json({ err: 'INTERNAL SERVER ERROR' });
        }
    }
    async deleteReservation(req, res) {
        try {
            const Id = parseInt(req.params.id);
            await this.usecase.DeleteReservation(Id);
            res.status(204).send();
        }
        catch (err) {
            res.status(500).json({ err: 'INTERNAL SERVER ERROR' });
        }
    }
    async GetAllReservation(req, res) {
        try {
            const users = await this.usecase.GetAllReservation();
            res.status(200).json(users);
        }
        catch (err) {
            res.status(500).json({ err: 'INTERNAL SERVER ERROR' });
        }
    }
}
exports.Handler = Handler;
