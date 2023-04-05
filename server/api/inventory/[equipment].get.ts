import {PrismaClient} from '@prisma/client';

const prisma = new PrismaClient();

export default defineEventHandler( async(event) => {
    const reqEquipment = event.context.params.equipment;

    // Handle different route requests
    const searchResults = await prisma.inventory.findFirstOrThrow({
        where: {
            equipment: {
                equals: reqEquipment,
                mode: 'insensitive'
            }
        },
        select: {
            Models: {
                select: {
                    model: true
                }
            }
        }
    })
        .catch(() => {
            throw createError({
                statusCode: 404,
                statusMessage: 'Search query: \''+reqEquipment+"\' not found :("
            })
        });

    return {
        searchResults,
        path: `/inventory/${reqEquipment}`,
    }


});
