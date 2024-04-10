"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaRepository = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
class PrismaRepository {
    async Save(reservation) {
        return await prisma.reservation_test.create({ data: reservation });
    }
    async Delete(id) {
        await prisma.reservation_test.delete({ where: { id } });
    }
    async GetAll() {
        return await prisma.reservation_test.findMany();
    }
}
exports.PrismaRepository = PrismaRepository;
