const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient();

async function main() {
    const electricPalletTruck = await prisma.equipment.upsert({
        where: { id: 1 },
        update : {},
        create: {
            type: "Electric Pallet Truck",
            Model: {
                create: [
                    {
                        name: "F4",
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
                        Optional: {
                            create: [
                                {
                                    description: "Spare Battery",
                                    rrp: 468
                                },
                                {
                                    description: "Balancing Wheels",
                                    rrp: 175
                                }
                            ],
                        },
                        Note: undefined
                    },
                    {
                        name: "EPL1531",
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
                        Optional: {
                            create: [
                                {
                                    description: "Spare Battery",
                                    rrp: 702
                                }
                            ]
                        },
                        Note: {
                            create: [
                                {
                                    description: "Stop new supply. A few stock left to be cleared on special price to dealers at $1250 plus GST (un-assembled)."
                                }
                            ]
                        }
                    },
                    {
                        name: "EPL154",
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
                        Optional: undefined,
                        Note: undefined
                    },
                    {
                        name: "EPL185",
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
                        Optional: {
                            create: [
                                {
                                    description: "48V/30Ah",
                                    rrp: 429
                                }
                            ],
                        },
                        Note: undefined
                    }
                ]
            }
        }
    });

    const electricStacker = await prisma.equipment.upsert({
        where: { id: 2 },
        update : {},
        create: {
            type: "Electric Stacker",
            Model: {
                create: [
                    {
                        name: "ES12-25DM",
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
                        Optional: {
                            create: [
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
                            ]
                        },
                        Note: {
                            create: {
                                description: "Mast Option for 'Duplex 2500mm, 2700mm, 3000mm'"
                            }
                        }
                    },
                    {
                        name: "CQE15S",
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
                        Optional: {
                            create: [
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
                            ]
                        },
                        Note: undefined
                    }
                ]
            }
        }
    });

    const electricOrderPicker = await prisma.equipment.upsert({
        where: { id: 3 },
        update : {},
        create: {
            type: "Electric Order Picker",
            Model: {
                create: [
                    {
                        name: "JX1",
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
                        Optional: {
                            create: [
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
                            ]
                        },
                        Note: undefined
                    },
                    {
                        name: "JX2-1",
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
                        Optional: undefined,
                        Note: undefined
                    }
                ]
            }
        }
    });

    const forklift = await prisma.equipment.upsert({
        where: { id: 4 },
        update: {},
        create: {
            type: "Forklift",
            Model: {
                create: [
                    {
                        name: "EFL181",
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
                        Optional: {
                            create: {
                                description: "48V/205Ah Lithium Battery",
                                rrp: 1785
                            }
                        },
                        Note: undefined
                    },
                    {
                        name: "CPD18TVL",
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
                        Optional: undefined,
                        Note: undefined
                    },
                    {
                        name: "ICE301B",
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
                        Optional: {
                            create: [
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
                            ]
                        },
                        Note: undefined
                    },
                    {
                        name: "CPD20L3",
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
                        Optional: {
                            create: [
                                {
                                    description: "For all 1.8 - 5.0 tons name: Integrated sideshift (EP brand)",
                                    rrp: 0
                                },
                                {
                                    description: "For all 1.8 - 5.0 tons name: Spare 4th valves and pipelines",
                                    rrp: 468
                                },
                                {
                                    description: "For all 1.8 - 2.0 tons name: Cascade fork positioner & sideshifter (incl. 4th valves and pipelines)",
                                    rrp: 1227
                                },
                                {
                                    description: "For all 2.5 - 3.5 tons name: Cascade fork positioner & sideshifter (incl. 4th valves and pipelines)",
                                    rrp: 1450
                                },
                                {
                                    description: "For all 4.0 - 5.0 tons name: Cascade fork positioner & sideshifter (incl. 4th valves and pipelines)",
                                    rrp: 4149
                                }
                            ]
                        },
                        Note: {
                            create: {
                                description: "For all 1.8 - 5.0 tons name: Various mast height pricing refer to \"Options cost\" sheet."
                            }
                        }
                    },
                    {
                        name: "ICE251B",
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
                        Optional: {
                            create: [
                                {
                                    description: "280Ah Lithium Battery",
                                    rrp: 3877
                                },
                                {
                                    description: "410Ah Lithium Battery",
                                    rrp: 7969
                                }
                            ]
                        },
                        Note: undefined
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