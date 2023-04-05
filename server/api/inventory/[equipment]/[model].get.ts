import {PrismaClient} from '@prisma/client';

const prisma = new PrismaClient();

export default defineEventHandler( async(event) => {
    const {reqEquipment,reqModel} = event.context.params;

    return await prisma.models.findFirstOrThrow({
        where: {
            model: {
                equals: reqModel,
                mode: 'insensitive'
            },
            Inventory: {
                equipment: {
                    equals: reqEquipment,
                    mode: 'insensitive'
                }
            }
        },
        select: {
            model: true,
            description: true,
            capacity_kg: true,
            lift_height_mm: true,
            fork_size: true,
            battery_voltage: true,
            battery_ampere: true,
            battery_type: true,
            controller_type: true,
            travel_speed_kmh: true,
            rrp: true,
            optionals: true,
            notes: true,
        }
    })
        .catch(() => {
            throw createError({
                statusCode: 404,
                statusMessage: 'Search query: \''+reqEquipment+"/"+reqModel+"\' not found :("
            })
        });
});
