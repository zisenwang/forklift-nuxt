import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient();

async function main() {

    const electricPalletTruck = await prisma.inventory.create({
        data: {
            equipment: "Electric pallet truck",
            Models: {
                create: [
                    {
                        model: "F4",
                        description: "Walkie type, Single PU wheel",
                        capacity_kg: 1500,
                        lift_height_mm: null,                  
                        fork_size: "1150*685mm",
                        battery_voltage: 24,
                        battery_ampere: 20,
                        battery_type: null, 
                        controller_type: null,
                        travel_speed_kmh: null,
                        rrp: 1985,
                        optionals: [
                            {
                                description: "Spare Battery",
                                rrp: 468
                            },
                            {
                                description: "Balancing Wheels",
                                rrp: 175
                            }
                        ] as Prisma.JsonArray,
                        notes: []
                    },
                    {
                        model: "EPL1531",
                        description: "Walkie type",
                        capacity_kg: 1500,
                        lift_height_mm: null,                    
                        fork_size: "1150*685mm",
                        battery_voltage: 24,
                        battery_ampere: 20,
                        battery_type: "Lithium",
                        controller_type: "DC Curtis",
                        travel_speed_kmh: 5.0,
                        rrp: 2540,
                        optionals: [
                            {
                                description: "Spare Battery",
                                rrp: 702
                            }
                        ] as Prisma.JsonArray,
                        notes: [
                            "Stop new supply. A few stock left to be cleared on special price to dealers at $1250 plus GST (un-assembled)."
                        ]
                    },
                    {
                        model: "EPL154",
                        description: "Walkie type",
                        capacity_kg: 1500,
                        lift_height_mm: null,                   
                        fork_size: "1150*685mm, with Balance Wheel",
                        battery_voltage: 24,
                        battery_ampere: 30,
                        battery_type: "Lithium",
                        controller_type: "DC Curtis",
                        travel_speed_kmh: 5.0,
                        rrp: 3935,
                        optionals: undefined,
                        notes: []
                    },
                    {
                        model: "EPL185",
                        description: "Walkie type",
                        capacity_kg: 1800,
                        lift_height_mm: null,                   
                        fork_size: "1150*685mm, with Balance Wheel",
                        battery_voltage: 48,
                        battery_ampere: 20,
                        battery_type: "Lithium",
                        controller_type: "DC Curtis",
                        travel_speed_kmh: 5.5,
                        rrp: 4911,
                        optionals: [
                            {
                                description: "48V/30Ah",
                                rrp: 429
                            }
                        ] as Prisma.JsonArray,
                        notes: []
                    }
                ]
            }
        }
    });

    const electricStacker = await prisma.inventory.create({
        data: {
            equipment: "Electric stacker",
            Models: {
                create: [
                    {
                        model: "ES12-25DM",
                        description: "Walkie type, Duplex Mast",
                        capacity_kg: 1200,
                        lift_height_mm: 3000,                   
                        fork_size: "1070*800mm",
                        battery_voltage: 24,
                        battery_ampere: 105,
                        battery_type: "AGM",
                        controller_type: "DC Curtis",
                        travel_speed_kmh: 4.5,
                        rrp: 7282,
                        optionals: [
                            {
                                description: "Proportional Lifting & Lowering",
                                rrp: 751
                            },
                            {
                                description: "Duplex 2500mm",
                                rrp: 0
                            },
                            {
                                description: "Duplex 2700mm",
                                rrp: 0
                            },
                            {
                                description: "Duplex 3000mm",
                                rrp: 0
                            },
                            {
                                description: "Duplex 3300mm",
                                rrp: 119
                            },
                            {
                                description: "Duplex 3600mm",
                                rrp: 250
                            }
                        ] as Prisma.JsonArray,
                        notes: [
                            "Mast Option for 'Duplex 2500mm, 2700mm, 3000mm'"
                        ]
                    },
                    {
                        model: "CQE15S",
                        description: "Walkie type, Duplex Mast, Side Shifter (incl. 3rd Valves & Pipeline), Electric Power Steering, Proportional Lifting & Lowering, Reach Distance 590mm",
                        capacity_kg: 1500,
                        lift_height_mm: 3000,                   
                        fork_size: "1070*800mm",
                        battery_voltage: 24,
                        battery_ampere: 224,
                        battery_type: "AGM free maintenance, integrated charger",
                        controller_type: "AC",
                        travel_speed_kmh: 6.0,
                        rrp: 20195,
                        optionals: [
                            {
                                description: "Li-ion Battery 24V/210Ah, with Charger",
                                rrp: 3145
                            },
                            {
                                description: "254mm Loading Wheel",
                                rrp: 1171
                            },
                            {
                                description: "Duplex Mast, Lifting Height 4000mm",
                                rrp: 468
                            },
                            {
                                description: "Triplex Mast, Lifting Height 4500mm",
                                rrp: 1405
                            },
                            {
                                description: "Triplex Mast, Lifting Height 4800mm",
                                rrp: 1517
                            },
                            {
                                description: "Triplex Mast, Lifting Height 5000mm",
                                rrp: 1640
                            },
                            {
                                description: "Triplex Mast, Lifting Height 5500mm",
                                rrp: 1874
                            },
                            {
                                description: "Triplex Mast, Lifting Height 6000mm",
                                rrp: 3703
                            }
                        ] as Prisma.JsonArray,
                        notes: []
                    }
                ]
            }
        }
    });

    const electricOrderPicker = await prisma.inventory.create({
        data: {
            equipment: "Electric order picker",
            Models: {
                create: [
                    {
                        model: "JX1",
                        description: "Electric Power Steering",
                        capacity_kg: 500,
                        lift_height_mm: 3600,                   
                        fork_size: null,
                        battery_voltage: 24,
                        battery_ampere: 224,
                        battery_type: "AGM battery",
                        controller_type: "AC Zapi",
                        travel_speed_kmh: 5.5,
                        rrp: 18854,
                        optionals: [
                            {
                                description: "Lifting Height 4100mm",
                                rrp: 323
                            },
                            {
                                description: "Lifting Height 4880mm",
                                rrp: 646
                            },
                            {
                                description: "205Ah Li-ion Battery",
                                rrp: 3037
                            },
                            {
                                description: "Beeper: Beep on movement down, forward and backward (except lifting)",
                                rrp: 108
                            }
                        ] as Prisma.JsonArray,
                        notes: []
                    },
                    {
                        model: "JX2-1",
                        description: "Electric Power Steering",
                        capacity_kg: 700,
                        lift_height_mm: 1800,                
                        fork_size: null,
                        battery_voltage: 24,
                        battery_ampere: 360,
                        battery_type: "with 24V/50A Charger",
                        controller_type: "AC Zapi",
                        travel_speed_kmh: 8.0,
                        rrp: 19931,
                        optionals: undefined,
                        notes: []
                    }
                ]
            }
        }
    });

    const forklift = await prisma.inventory.create({
        data: {
            equipment: "Forklift",
            Models: {
                create: [
                    {
                        model: "EFL181",
                        description: "Four-wheel electric forklift, Triplex Mast, Solid tire, with Cascade Hang-on Sideshift, LED lights, Suspension Seat, with OPS System",
                        capacity_kg: 1800,
                        lift_height_mm: 4800,                 
                        fork_size: "1070mm",
                        battery_voltage: 48,
                        battery_ampere: 150,
                        battery_type: "Lithium, with built-in charger",
                        controller_type: "AC Zapi",
                        travel_speed_kmh: 9.0,
                        rrp: 28463,
                        optionals: [
                            {
                                description: "48V/205Ah Lithium Battery",
                                rrp: 1785
                            }
                        ] as Prisma.JsonArray,
                        notes: []
                    },
                    {
                        model: "CPD18TVL",
                        description: "Three-wheel electric forklift, Triplex Mast, Solid tire, with Cascade Hang-on Sideshift, LED lights, Suspension Seat, with OPS System",
                        capacity_kg: 1800,
                        lift_height_mm: 4800,                   
                        fork_size: "1070mm",
                        battery_voltage: 80,
                        battery_ampere: 205,
                        battery_type: "Lithium, with 65A charger",
                        controller_type: "AC Zapi",
                        travel_speed_kmh: null,
                        rrp: 36743,
                        optionals: undefined,
                        notes: []
                    },
                    {
                        model: "ICE301B",
                        description: "Four-wheel electric forklift, Triplex Mast, Solid tire, with Cascade Hang-on Sideshift, LED Lights, with OPS System, Driving speed deduction",
                        capacity_kg: 3000,
                        lift_height_mm: 4500,                   
                        fork_size: "1070mm",
                        battery_voltage: 80,
                        battery_ampere: 205,
                        battery_type: "Lithium, with charger",
                        controller_type: "AC Zapi",
                        travel_speed_kmh: null,
                        rrp: 33062,
                        optionals: [
                            {
                                description: "280Ah Lithium Battery",
                                rrp: 3877
                            },
                            {
                                description: "410Ah Lithium Battery",
                                rrp: 7969
                            },
                            {
                                description: "Duplex Mast, Lifting Height 3000mm",
                                rrp: -2154
                            }
                        ] as Prisma.JsonArray,
                        notes: []
                    },
                    {
                        model: "CPD20L3",
                        description: "Three-wheel electric forklift, Triplex Mast, New design with control levers next to dash, Germany Schabmuller Driving Motor, Germany ZF Transmission, Solid tire, with Cascade Hang-on Sideshift, LED lights, Suspension Seat, with OPS System",
                        capacity_kg: 2000,
                        lift_height_mm: 4800,                  
                        fork_size: "1070mm",
                        battery_voltage: 48,
                        battery_ampere: 360,
                        battery_type: "Lithium, with charger",
                        controller_type: "AC Zapi",
                        travel_speed_kmh: null,
                        rrp: 43223,
                        optionals: [
                            {
                                description: "For all 1.8 - 5.0 tons model: Integrated sideshift (EP brand)",
                                rrp: 0
                            },
                            {
                                description: "For all 1.8 - 5.0 tons model: Spare 4th valves and pipelines",
                                rrp: 468
                            },
                            {
                                description: "For all 1.8 - 2.0 tons model: Cascade fork positioner & sideshifter (incl. 4th valves and pipelines)",
                                rrp: 1227
                            },
                            {
                                description: "For all 2.5 - 3.5 tons model: Cascade fork positioner & sideshifter (incl. 4th valves and pipelines)",
                                rrp: 1450
                            },
                            {
                                description: "For all 4.0 - 5.0 tons model: Cascade fork positioner & sideshifter (incl. 4th valves and pipelines)",
                                rrp: 4149
                            }
                        ] as Prisma.JsonArray,
                        notes: [
                            "For all 1.8 - 5.0 tons model: Various mast height pricing refer to \"Options cost\" sheet."
                        ]
                    },
                    {
                        model: "ICE251B",
                        description: "Four-wheel electric forklift, Triplex Mast, Solid tires, with Cascade Hang-on Sideshift, LED Lights, with OPS System",
                        capacity_kg: 2500,
                        lift_height_mm: 4500,                  
                        fork_size: "1070mm",
                        battery_voltage: 80,
                        battery_ampere: 205,
                        battery_type: "Lithium, with charger",
                        controller_type: "AC Zapi",
                        travel_speed_kmh: null,
                        rrp: 31632,
                        optionals: [
                            {
                                description: "280Ah Lithium Battery",
                                rrp: 3877
                            },
                            {
                                description: "410Ah Lithium Battery",
                                rrp: 7969
                            }
                        ] as Prisma.JsonArray,
                        notes: []
                    }
                ]
            }
        }
    });

}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })