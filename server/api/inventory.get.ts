import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler( async() => {
    return await prisma.inventory.findMany({
        select: {
            equipment: true,
        }
    });
})