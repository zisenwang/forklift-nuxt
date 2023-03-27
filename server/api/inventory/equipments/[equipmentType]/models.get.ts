import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler( async(event) => {
    const equipmentType = event.context.params.equipmentType;

    const results = await prisma.model.findMany({
        where: {
            Equipment: {
                type: equipmentType
            }
        },
        select: {
            name: true
        }
    });

    if (!results.length) {
        throw createError({
            statusCode: 404,
            statusMessage: 'Equipment not found'
        });
    }

    return results;
});