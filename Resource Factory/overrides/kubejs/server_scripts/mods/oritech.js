ServerEvents.recipes(event => {
    event.replaceInput({ id: 'oritech:crafting/addon/fluid' }, 'alltheores:electrum_ingot', 'minecraft:copper_ingot')
    event.replaceInput({ output: 'oritech:assembler_block' }, 'oritech:adamant_ingot', 'alltheores:platinum_ingot')
    event.replaceInput({ id: "oritech:crafting/particlecontroller" }, 'oritech:flux_gate', 'powah:uraninite')



    //铸造器
    event.custom(
        {
            "type": "oritech:foundry",
            "fluidInput": {
                "amount": 0,
                "fluid": "minecraft:empty"
            },
            "fluidOutput": {
                "amount": 0,
                "fluid": "minecraft:empty"
            },
            "ingredients": [
                {
                    "item": 'stellaris:heavy_metal_ingot'
                },
                {
                    "item": 'mekanism:dust_refined_obsidian'
                }
            ],
            "results": [
                {
                    "count": 16,
                    "id": 'extendedcrafting:black_iron_ingot'
                }
            ],
            "time": 200
        }
    )
    event.custom(
        {
            "type": "oritech:foundry",
            "fluidInput": {
                "amount": 0,
                "fluid": "minecraft:empty"
            },
            "fluidOutput": {
                "amount": 0,
                "fluid": "minecraft:empty"
            },
            "ingredients": [
                {
                    "item": 'stellaris:heavy_metal_ingot'
                },
                {
                    "item": 'mekanism:dust_refined_obsidian'
                }
            ],
            "results": [
                {
                    "count": 16,
                    "id": 'extendedcrafting:black_iron_ingot'
                }
            ],
            "time": 200
        }
    )
    event.custom(
        {
            "type": "oritech:foundry",
            "fluidInput": {
                "amount": 0,
                "fluid": "minecraft:empty"
            },
            "fluidOutput": {
                "amount": 0,
                "fluid": "minecraft:empty"
            },
            "ingredients": [
                {
                    "item": 'oritech:energite_ingot'
                },
                {
                    "item": 'minecraft:netherite_scrap'
                }
            ],
            "results": [
                {
                    "count": 1,
                    "id": 'minecraft:netherite_ingot'
                }
            ],
            "time": 100
        }
    )



    //离心机
    event.custom(
        {
            "type": "oritech:centrifuge",
            "fluidInput": {
                "amount": 0,
                "fluid": "minecraft:empty"
            },
            "fluidOutput": {
                "amount": 0,
                "fluid": "minecraft:empty"
            },
            "ingredients": [
                {
                    "item": "oritech:biomass"
                }
            ],
            "results": [
                {
                    "count": 1,
                    "id": 'minecraft:oak_planks'
                },
                {
                    "count": 1,
                    "id": 'minecraft:stick'
                }
            ],
            "time": 100
        }
    )
    event.custom(
        {
            "type": "oritech:centrifuge",
            "fluidInput": {
                "amount": 0,
                "fluid": "minecraft:empty"
            },
            "fluidOutput": {
                "amount": 0,
                "fluid": "minecraft:empty"
            },
            "ingredients": [
                {
                    "item": 'kubejs:mixed_dust'
                }
            ],
            "results": [
                {
                    "count": 1,
                    "id": 'minecraft:redstone'
                },
                {
                    "count": 3,
                    "id": 'kubejs:small_mixed_dust'
                }
            ],
            "time": 20
        }
    )
    event.custom(
        {
            "type": "oritech:centrifuge",
            "fluidInput": {
                "amount": 0,
                "fluid": "minecraft:empty"
            },
            "fluidOutput": {
                "amount": 0,
                "fluid": "minecraft:empty"
            },
            "ingredients": [
                {
                    "item": 'minecraft:dirt'
                }
            ],
            "results": [
                {
                    "count": 4,
                    "id": 'minecraft:oak_planks'
                },
                {
                    "count": 4,
                    "id": 'minecraft:stick'
                }
            ],
            "time": 100
        }
    )
    //流体离心
    event.custom(
        {
            "type": "oritech:centrifuge_fluid",
            "fluidInput": {
                "amount": 1000,
                "fluid": "oritech:still_biofuel"
            },
            "fluidOutput": {
                "amount": 1000,
                "fluid": "minecraft:lava"
            },
            "ingredients": [
                {
                    "item": 'minecraft:redstone'
                }
            ],
            "results": [],
            "time": 20
        }
    )
    event.custom(
        {
            "type": "oritech:centrifuge_fluid",
            "fluidInput": {
                "amount": 4000,
                "fluid": "minecraft:water"
            },
            "fluidOutput": {
                "amount": 4000,
                "fluid": "kubejs:ore_catalytic_liquid"
            },
            "ingredients": [
                {
                    "item": 'ars_nouveau:magebloom'
                }
            ],
            "results": [],
            "time": 100
        }
    )

    //原子锻造
    atomicforgeRecipes(2, 'mysticalagriculture:certus_quartz_essence', 'mysticalagriculture:dye_essence', 'mysticalagriculture:nether_quartz_essence')
    atomicforgeRecipes(24, 'mysticalagriculture:redstone_essence', 'minecraft:redstone', 'kubejs:mixed_dust')
    atomicforgeRecipes(24, 'mysticalagriculture:glowstone_essence', 'minecraft:glowstone_dust', 'kubejs:mixed_dust')
    atomicforgeRecipes(12, 'alltheores:platinum_ingot', 'alltheores:raw_platinum', 'alltheores:raw_platinum')
    atomicforgeRecipes(12, 'alltheores:iridium_ingot', 'alltheores:raw_iridium', 'alltheores:raw_iridium')
    atomicforgeRecipes(12, 'alltheores:uranium_ingot', 'alltheores:raw_uranium', 'alltheores:raw_uranium')
    atomicforgeRecipes(12, 'alltheores:silver_ingot', 'alltheores:raw_silver', 'alltheores:raw_silver')
    atomicforgeRecipes(12, 'alltheores:osmium_ingot', 'alltheores:raw_osmium', 'alltheores:raw_osmium')
    atomicforgeRecipes(32, 'modular_machinery_reborn:modularium', 'oritech:duratium_ingot', 'mysticalagriculture:dye_essence')
    atomicforgeRecipes(4, 'mysticalagriculture:sky_stone_essence', 'mysticalagriculture:dye_essence', 'occultism:burnt_otherstone')
    atomicforgeRecipes(8, 'minecraft:diamond', 'hostilenetworks:prediction_matrix', 'mysticalagriculture:diamond_essence')
    atomicforgeRecipes(2, 'powah:dielectric_casing', 'minecraft:netherite_ingot', 'powah:capacitor_basic_large')
    atomicforgeRecipes(4, 'mysticalagriculture:diamond_essence', 'mysticalagriculture:dye_essence', 'mysticalagriculture:coal_essence')


    //粒子加速器
    particleRecipe(300, 4, 'industrialforegoing:machine_frame_pity', 'actuallyadditions:iron_casing', 'actuallyadditions:wood_casing')
    particleRecipe(500, 8, 'justdirethings:gooblock_tier1', 'minecraft:dirt', 'minecraft:rotten_flesh')
    particleRecipe(2500, 4, 'justdirethings:gooblock_tier4', 'minecraft:sculk', 'minecraft:sculk_shrieker')
    particleRecipe(15000, 1, 'minecraft:command_block', 'minecraft:snowball', 'minecraft:snowball')
    particleRecipe(10, 16, 'stellaris:desh_ingot', 'stellaris:raw_desh_ingot', 'stellaris:raw_desh_ingot')


    //粉碎
    pulverizer("minecraft:armor_stand", "minecraft:oak_planks", 3, "minecraft:cobblestone", 1, 100);
    pulverizer("minecraft:string", "oritech:biomass", 2, null, null, 100);
    pulverizer("mysticalagriculture:inferium_essence", "oritech:biomass", 4, null, null, 100);
    pulverizer("minecraft:sand", "ae2:silicon", 1, null, null, 60);
    pulverizer("minecraft:raw_iron", "oritech:small_iron_dust", 4, null, null, 20);
    pulverizer("minecraft:raw_copper", "oritech:small_copper_dust", 4, null, null, 20);
    pulverizer("minecraft:raw_gold", "oritech:small_gold_dust", 4, null, null, 20);
    pulverizer('ae2:matter_ball', 'kubejs:small_mixed_dust', 5, null, null, 20)
    pulverizer('immersiveengineering:coal_coke', 'immersiveengineering:dust_coke', 1, null, null, 60)


    //装配器
    assemblerRecipe(240, 4, 'silentgear:tyrian_steel_ingot', 'silentgear:crimson_steel_ingot', 'silentgear:azure_electrum_ingot', 'silentgear:crushed_shulker_shell', 'minecraft:netherite_scrap')
    assemblerRecipe(450, 1, 'pneumaticcraft:etching_acid_bucket', 'ifeu:liquid_malic_acid_bucket', 'minecraft:rotten_flesh', 'minecraft:gunpowder', 'minecraft:spider_eye')

    function pulverizer(inputItem, output1, count1, output2, count2, time) {
        let recipe = {
            "type": "oritech:pulverizer",
            "fluidInput": { "amount": 0, "fluid": "minecraft:empty" },
            "fluidOutput": { "amount": 0, "fluid": "minecraft:empty" },
            "ingredients": [{ "item": inputItem }],
            "time": time || 80
        };

        if (output2) {
            recipe.results = [
                { "count": count1 || 1, "id": output1 },
                { "count": count2 || 1, "id": output2 }
            ]
        } else {
            recipe.results = [
                { "count": count1 || 1, "id": output1 }
            ]
        }
        event.custom(recipe)
    }

    function atomicforgeRecipes(count, output, input, item, time) {
        event.custom(
            {
                "type": "oritech:atomic_forge",
                "fluidInput": { "amount": 0, "fluid": "minecraft:empty" },
                "fluidOutput": { "amount": 0, "fluid": "minecraft:empty" },
                "ingredients": [
                    {
                        "item": input
                    },
                    {
                        "item": item
                    },
                    {
                        "item": item
                    }
                ],
                "results": [
                    {
                        "count": count,
                        "id": output
                    }
                ],
                "time": time || 20
            }
        )
    }

    function particleRecipe(energy, count, output, input1, input2) {
        event.custom(
            {
                "type": "oritech:particle_collision",
                "fluidInput": { "amount": 0, "fluid": "minecraft:empty" },
                "fluidOutput": { "amount": 0, "fluid": "minecraft:empty" },
                "ingredients": [
                    {
                        "item": input1
                    },
                    {
                        "item": input2
                    }
                ],
                "results": [
                    {
                        "count": count,
                        "id": output
                    }
                ],
                "time": energy
            }
        )
    }

    function assemblerRecipe(time, count, output, input1, input2, input3, input4) {
        event.custom(
            {
                "type": "oritech:assembler",
                "fluidInput": { "amount": 0, "fluid": "minecraft:empty" },
                "fluidOutput": { "amount": 0, "fluid": "minecraft:empty" },
                "ingredients": [
                    {
                        "item": input1
                    },
                    {
                        "item": input2
                    },
                    {
                        "item": input3
                    },
                    {
                        "item": input4
                    }
                ],
                "results": [
                    {
                        "count": count,
                        "id": output
                    }
                ],
                "time": time
            }
        )
    }
})