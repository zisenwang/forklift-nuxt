import { PrismaClient, Prisma } from '@prisma/client';


const prisma = new PrismaClient();

const equipmentSelect = Prisma.validator<Prisma.EquipmentArgs>() ({
    select: {
        type: true,
    }
});

export type equipmentOutline = Prisma.EquipmentGetPayload<typeof equipmentSelect>;

export default defineEventHandler( async() => {
    return await prisma.equipment.findMany(equipmentSelect);
});
