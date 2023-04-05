import { createRouter, defineEventHandler, useBase } from 'h3'
import { PrismaClient } from '@prisma/client';

const router = createRouter()
const prisma = new PrismaClient();

// ROUTE HANDLER FOR /inventory/:equipment
const equipment_route = defineEventHandler( async(event) => {
    const reqEquipment = event.context.params?.equipment;

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

    return searchResults;
});

// ROUTE HANDLER FOR /inventory/:equipment/:model
const model_route = defineEventHandler(async(event) => {
    const reqEquipment = event.context.params?.equipment;
    const reqModel = event.context.params?.model;
    
    const searchResults = await prisma.models.findFirstOrThrow({
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
            statusMessage: 'Search query not found :('
        })
    });

    return searchResults;
});

// Path router for inventory/
router.get('/:equipment', equipment_route)
router.get('/:equipment/:model', model_route)

// Catch-all handler for invalid path
// router.get('/**', defineEventHandler( () => {
//     throw createError({
//         statusCode: 404,
//         statusMessage: 'Page not found :( '
//     })
// }))

export default useBase('/inventory', router.handler)

