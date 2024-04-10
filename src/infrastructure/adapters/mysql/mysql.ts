import { PrismaClient} from '@prisma/client';
import { RepositoryPort } from 'application/ports/port';
import { Reservation } from 'domain/reservation';

const prisma = new PrismaClient();

export class PrismaRepository implements RepositoryPort {
    async Save(reservation: Reservation): Promise<Reservation> {
        return await prisma.reservation_test.create({data: reservation})
    }

    async Delete(id: number): Promise<void> {
        await prisma.reservation_test.delete({where: {id}});
    }

    async GetAll(): Promise<Reservation[]> {
        return await prisma.reservation_test.findMany();
    }
}