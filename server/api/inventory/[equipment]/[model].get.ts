/*
    后端路径的两种写法：
    1. 使用api目录，则未来nuxt会自动扫描该目录，并为其生成route。其route将以api/开头，目录下内容依次对应其path。
    如果你想要一个api/a的路径，则在api下编写a.js/a.ts来处理请求。
    如果你想要一个动态路径api/:name路径，其中name为传入参数，则在api下编写[name].ts来处理
    如果你想要两组路径，一种是api/:param1，另外一个是api/:param1/:param2，则在api下分别编写[param1].ts和[param1]/[param2].ts。
    nuxt会自动根据带有[]的命名文件/目录将其设定为动态参数，且根据url的截至位置寻找对应的ts处理文件！即如果访问api/a，则访问[param1].ts并
    带入参数param1=a。如果为api/a/b，则访问[param1]/[param2].ts并带入参数param1=a,param2=b
    2. 使用routes目录，此时生成的route将不会以api开头，而是直接以文件/目录为名称，如routes/hello.ts将直接由/hello访问
 */
import {PrismaClient} from '@prisma/client';

const prisma = new PrismaClient();

export default defineEventHandler( async(event) => {
    const reqEquipment = event.context.params.equipment;
    const reqModel = event.context.params.model;

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
