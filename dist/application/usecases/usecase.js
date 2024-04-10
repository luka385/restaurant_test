"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usecase = void 0;
class Usecase {
    constructor(repositoryPort) {
        this.repositoryPort = repositoryPort;
    }
    async CreateReservation(newReservation) {
        await this.repositoryPort.Save(newReservation);
        return newReservation;
    }
    async GetAllReservation() {
        return await this.repositoryPort.GetAll();
    }
    async DeleteReservation(id) {
        return await this.repositoryPort.Delete(id);
    }
}
exports.Usecase = Usecase;
