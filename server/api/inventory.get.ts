import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler( async() => {
    return await prisma.$queryRaw`SELECT table_name as equipment FROM information_schema.columns WHERE column_name='model';`;
})