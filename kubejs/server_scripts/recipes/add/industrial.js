ServerEvents.recipes(event => {
    // 简易机器框架
    event.shaped('industrialforegoing:machine_frame_pity', [
        'ILI',
        'LCL',
        'ILI'
    ], {
        C: 'kubejs:enchantment_core',
        I: 'naturesaura:infused_stone',
        L: '#minecraft:logs'
    })

    //凛铁矿
    event.custom({
        "type": "ifeu:shapeless",
        "inputFluid": {
            "amount": 500,
            "id": "kubejs:cold_crystal"
        },
        "inputs": [
            {
                "item": 'minecraft:iron_ore'
            }
        ],
        "output": {
            "count": 1,
            "id": 'kubejs:frozen_iron_ore'
        }
    })
    event.custom({
        "type": "ifeu:shapeless",
        "inputFluid": {
            "amount": 4000,
            "id": "kubejs:cold_crystal"
        },
        "inputs": [
            {
                "item": 'minecraft:iron_ore'
            }, {
                'item': 'minecraft:iron_ore'
            }, {
                'item': 'minecraft:iron_ore'
            }, {
                'item': 'minecraft:iron_ore'
            }, {
                'item': 'minecraft:iron_ore'
            }, {
                'item': 'minecraft:iron_ore'
            }, {
                'item': 'minecraft:iron_ore'
            }, {
                'item': 'minecraft:iron_ore'
            }, {
                'item': 'minecraft:iron_ore'
            }
        ],
        "output": {
            "count": 9,
            "id": 'kubejs:frozen_iron_ore'
        }
    })

    // 流体工作台
    event.shaped('ifeu:fluid_crafting_table', [
        ' C ',
        ' S ',
        ' B '
    ], {
        C: 'minecraft:crafting_table',
        B: 'minecraft:bucket',
        S: 'minecraft:slime_block'
    })

    // 液体提取机
    event.shaped('industrialforegoing:fluid_extractor', [
        'ITI',
        'CMC',
        'IBI'
    ], {
        T: 'kubejs:cold_wave_totem',
        B: 'minecraft:bucket',
        M: 'industrialforegoing:machine_frame_pity',
        C: 'minecraft:cobblestone',
        I: 'naturesaura:infused_iron'
    })

    // 胶乳
    event.custom({
        "type": "industrialforegoing:fluid_extractor",
        "breakChance": 0.01,
        "defaultRecipe": false,
        "input": {
            "item": "minecraft:cherry_log"
        },
        "output": {
            "amount": 10,
            "id": "industrialforegoing:latex"
        },
        "result": {
            "Name": "minecraft:air",
            "Properties": {
                "axis": "y"
            }
        }
    })

    // 冰晶寒流
    event.custom({
        "type": "industrialforegoing:fluid_extractor",
        "breakChance": 0.01,
        "defaultRecipe": false,
        "input": {
            "item": 'kubejs:polar_lights_dust_block'
        },
        "output": {
            "amount": 8,
            "id": 'kubejs:cold_crystal'
        },
        "result": {
            "Name": "minecraft:air",
            "Properties": {
                "axis": "y"
            }
        }
    })

    // 兑水咖啡
    event.recipes.industrialforegoing.dissolution_chamber('actuallyadditions:empty_cup', [
        'coffeespawner:coffee'
    ], Fluid.of("minecraft:water", 8000), 200, Fluid.of("kubejs:black_coffee_diluted_with_water", 8000))

    // 胶乳加工机
    event.shaped('industrialforegoing:latex_processing_unit', [
        'IDI',
        'BMB',
        'IFI'
    ], {
        M: 'industrialforegoing:machine_frame_pity',
        B: 'minecraft:bucket',
        I: 'naturesaura:infused_iron',
        F: 'minecraft:furnace',
        D: 'kubejs:polar_lights_dust'
    })

    // 溶解成型机
    event.shaped('industrialforegoing:dissolution_chamber', [
        'PCP',
        'BMB',
        'ITI'
    ], {
        M: 'industrialforegoing:machine_frame_pity',
        C: '#c:chests/wooden',
        P: 'industrialforegoing:plastic',
        B: 'minecraft:bucket',
        I: 'naturesaura:infused_iron',
        T: 'kubejs:cold_wave_totem'
    })

    // 凛铁块
    event.custom({
        "type": "ifeu:shaped",
        "inputFluid": {
            "amount": 1000,
            "id": 'kubejs:cold_crystal'
        },
        "inputs": [
            {
                "item": 'minecraft:iron_ingot'
            },
            {
                "item": 'minecraft:iron_ingot'
            },
            {
                "item": 'minecraft:iron_ingot'
            },
            {
                "item": 'minecraft:iron_ingot'
            },
            {
                "item": 'minecraft:iron_ingot'
            },
            {
                "item": 'minecraft:iron_ingot'
            },
            {
                "item": 'minecraft:iron_ingot'
            },
            {
                "item": 'minecraft:iron_ingot'
            },
            {
                "item": 'minecraft:iron_ingot'
            }
        ],
        "output": {
            "count": 1,
            "id": 'kubejs:frozen_iron_block'
        }
    })

    // 铁矿
    event.custom({
        "type": "ifeu:shaped",
        "inputFluid": {
            "amount": 500,
            "id": 'minecraft:lava'
        },
        "inputs": [
            {
                "item": 'minecraft:cobblestone'
            },
            {
                "item": 'minecraft:cobblestone'
            },
            {
                "item": 'minecraft:cobblestone'
            },
            {
                "item": 'minecraft:cobblestone'
            },
            {
                "item": 'kubejs:frozen_iron_ingot'
            },
            {
                "item": 'minecraft:cobblestone'
            },
            {
                "item": 'minecraft:cobblestone'
            },
            {
                "item": 'minecraft:cobblestone'
            },
            {
                "item": 'minecraft:cobblestone'
            }
        ],
        "output": {
            "count": 2,
            "id": 'minecraft:iron_ore'
        }
    })
    event.custom({
        "type": "ifeu:shaped",
        "inputFluid": {
            "amount": 1000,
            "id": 'minecraft:lava'
        },
        "inputs": [
            {
                "item": 'minecraft:stone'
            },
            {
                "item": 'minecraft:stone'
            },
            {
                "item": 'minecraft:stone'
            },
            {
                "item": 'minecraft:stone'
            },
            {
                "item": 'kubejs:frozen_iron_ingot'
            },
            {
                "item": 'minecraft:stone'
            },
            {
                "item": 'minecraft:stone'
            },
            {
                "item": 'minecraft:stone'
            },
            {
                "item": 'minecraft:stone'
            }
        ],
        "output": {
            "count": 4,
            "id": 'minecraft:iron_ore'
        }
    })

    // 灌注器
    event.replaceInput({ id: 'ifeu:infuser' }, 'minecraft:dragon_egg', '#c:storage_blocks/steel')

    // 原始冰碎片
    event.custom({
        "type": "ifeu:infuser",
        "input": {
            "count": 1,
            "id": 'winterly:cryomarble_block'
        },
        "inputFluid": {
            "amount": 1000,
            "id": "kubejs:cold_crystal"
        },
        "output": {
            "count": 4,
            "id": 'winterly:raw_cryomarble_shard'
        },
        "processingTime": 200
    })

    // 石英
    event.custom({
        "type": "ifeu:shapeless",
        "inputFluid": {
            "amount": 4000,
            "id": "minecraft:water"
        },
        "inputs": [
            {
                "item": 'kubejs:snow_spirit'
            }, {
                'item': 'kubejs:snow_spirit'
            }, {
                'item': 'kubejs:snow_spirit'
            }, {
                'item': 'kubejs:snow_spirit'
            }, {
                'item': 'kubejs:snow_spirit'
            }, {
                'item': 'kubejs:snow_spirit'
            }, {
                'item': 'kubejs:snow_spirit'
            }, {
                'item': 'kubejs:snow_spirit'
            }, {
                'item': 'kubejs:snow_spirit'
            }
        ],
        "output": {
            "count": 9,
            "id": 'minecraft:quartz_block'
        }
    })

    // 动物资源收获机
    event.replaceInput('industrialforegoing:animal_rancher', '#c:gears/gold', '#c:plates/brass')

    // 艾瑟金属
    event.recipes.industrialforegoing.dissolution_chamber('4x occultism:iesnium_ingot', [
        'kubejs:nickel_ingot', 'kubejs:nickel_ingot', 'kubejs:nickel_ingot', 'kubejs:nickel_ingot'
    ], Fluid.of('industrialforegoing:ether_gas', 250), 100)

    // 哭泣的黑曜石
    event.recipes.industrialforegoing.dissolution_chamber('2x minecraft:crying_obsidian', [
        'minecraft:obsidian', 'minecraft:obsidian'
    ], Fluid.of('mekanism:heavy_water', 1000), 100)




})

