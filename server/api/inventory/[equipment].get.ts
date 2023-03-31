import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler( async(event) => {
    const reqEquipment = event.context.params?.equipment;

    const searchResults = await prisma.inventory.findFirstOrThrow({
        where: {
            equipment: reqEquipment
        },
        select: {
            Models: {
                select: {
                    model: true
                }
            }
        }
    });

    return searchResults;
})