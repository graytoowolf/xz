ServerEvents.recipes(event => {
    // 钢粉
    event.shapeless('immersiveengineering:dust_steel', ['oritech:biosteel_dust'])

    // 钢块
    event.shapeless('immersiveengineering:storage_steel', ['oritech:biosteel_block'])

    // 磨粉机
    event.shaped('oritech:pulverizer_block', [
        'LLL',
        'SCS',
        'GFG'
    ], {
        L: '#minecraft:logs',
        S: 'naturesaura:infused_stone',
        C: 'industrialforegoing:machine_frame_pity',
        G: 'ars_nouveau:source_gem',
        F: 'minecraft:furnace'
    })

    // 冰晶石块
    event.custom({
        "type": "oritech:pulverizer",
        "fluidInputAmount": 0,
        "fluidInputVariant": "minecraft:empty",
        "fluidOutputAmount": 0,
        "fluidOutputVariant": "minecraft:empty",
        "ingredients": [
            {
                "item": 'winterly:packed_icicle_block'
            }
        ],
        "results": [
            {
                "count": 1,
                "id": 'winterly:cryomarble_block'
            }
        ],
        "time": 200
    })

    // 粗铜
    event.custom({
        "type": "oritech:pulverizer",
        "fluidInputAmount": 0,
        "fluidInputVariant": "minecraft:empty",
        "fluidOutputAmount": 0,
        "fluidOutputVariant": "minecraft:empty",
        "ingredients": [
            {
                "item": 'minecraft:copper_ore'
            }
        ],
        "results": [
            {
                "count": 2,
                "id": 'minecraft:raw_copper'
            }
        ],
        "time": 100
    })

    // 粗铜
    event.custom({
        "type": "oritech:grinder",
        "fluidInputAmount": 0,
        "fluidInputVariant": "minecraft:empty",
        "fluidOutputAmount": 0,
        "fluidOutputVariant": "minecraft:empty",
        "ingredients": [
            {
                "item": 'minecraft:copper_ore'
            }
        ],
        "results": [
            {
                "count": 4,
                "id": 'minecraft:raw_copper'
            }
        ],
        "time": 40
    })

    // 沙砾
    event.custom({
        "type": "oritech:pulverizer",
        "fluidInputAmount": 0,
        "fluidInputVariant": "minecraft:empty",
        "fluidOutputAmount": 0,
        "fluidOutputVariant": "minecraft:empty",
        "ingredients": [
            {
                "item": 'minecraft:cobblestone'
            }
        ],
        "results": [
            {
                "count": 1,
                "id": 'minecraft:gravel'
            }
        ],
        "time": 50
    })
    event.custom({
        "type": "oritech:grinder",
        "fluidInputAmount": 0,
        "fluidInputVariant": "minecraft:empty",
        "fluidOutputAmount": 0,
        "fluidOutputVariant": "minecraft:empty",
        "ingredients": [
            {
                "item": 'minecraft:cobblestone'
            }
        ],
        "results": [
            {
                "count": 1,
                "id": 'minecraft:gravel'
            }
        ],
        "time": 20
    })

    // 沙子
    event.custom({
        "type": "oritech:pulverizer",
        "fluidInputAmount": 0,
        "fluidInputVariant": "minecraft:empty",
        "fluidOutputAmount": 0,
        "fluidOutputVariant": "minecraft:empty",
        "ingredients": [
            {
                "item": 'minecraft:gravel'
            }
        ],
        "results": [
            {
                "count": 1,
                "id": 'minecraft:sand'
            }
        ],
        "time": 50
    })
    event.custom({
        "type": "oritech:pulverizer",
        "fluidInputAmount": 0,
        "fluidInputVariant": "minecraft:empty",
        "fluidOutputAmount": 0,
        "fluidOutputVariant": "minecraft:empty",
        "ingredients": [
            {
                "tag": 'c:sandstone/blocks'
            }
        ],
        "results": [
            {
                "count": 1,
                "id": 'minecraft:sand'
            }
        ],
        "time": 50
    })
    event.custom({
        "type": "oritech:grinder",
        "fluidInputAmount": 0,
        "fluidInputVariant": "minecraft:empty",
        "fluidOutputAmount": 0,
        "fluidOutputVariant": "minecraft:empty",
        "ingredients": [
            {
                "item": 'minecraft:gravel'
            }
        ],
        "results": [
            {
                "count": 1,
                "id": 'minecraft:sand'
            }
        ],
        "time": 20
    })
    event.custom({
        "type": "oritech:grinder",
        "fluidInputAmount": 0,
        "fluidInputVariant": "minecraft:empty",
        "fluidOutputAmount": 0,
        "fluidOutputVariant": "minecraft:empty",
        "ingredients": [
            {
                "tag": 'c:sandstone/blocks'
            }
        ],
        "results": [
            {
                "count": 1,
                "id": 'minecraft:sand'
            }
        ],
        "time": 20
    })

    // 硅
    event.custom({
        "type": "oritech:pulverizer",
        "fluidInputAmount": 0,
        "fluidInputVariant": "minecraft:empty",
        "fluidOutputAmount": 0,
        "fluidOutputVariant": "minecraft:empty",
        "ingredients": [
            {
                "tag": 'minecraft:smelts_to_glass'
            }
        ],
        "results": [
            {
                "count": 1,
                "id": 'ae2:silicon'
            }
        ],
        "time": 200
    })
    // 硅
    event.custom({
        "type": "oritech:grinder",
        "fluidInputAmount": 0,
        "fluidInputVariant": "minecraft:empty",
        "fluidOutputAmount": 0,
        "fluidOutputVariant": "minecraft:empty",
        "ingredients": [
            {
                "tag": 'minecraft:smelts_to_glass'
            }
        ],
        "results": [
            {
                "count": 1,
                "id": 'ae2:silicon'
            }
        ],
        "time": 100
    })

    // 马达
    event.replaceInput({ id: 'oritech:motor/motorcraft' }, '#c:ingots/nickel', 'minecraft:iron_ingot')

    // 铸造器
    event.replaceInput({ id: 'oritech:crafting/foundry' }, '#c:ingots/electrum', '#c:ingots/steel')

    // 基础机械核心
    event.replaceInput({ id: 'oritech:crafting/core2' }, 'minecraft:lapis_lazuli', 'kubejs:polar_lights_dust')
    event.replaceInput({ id: 'oritech:crafting/core2alt' }, 'minecraft:lapis_lazuli', 'kubejs:polar_lights_dust')

    // 红石矿
    event.custom({
        "type": "oritech:foundry",
        "fluidInputAmount": 0,
        "fluidInputVariant": "minecraft:empty",
        "fluidOutputAmount": 0,
        "fluidOutputVariant": "minecraft:empty",
        "ingredients": [
            {
                "item": 'kubejs:polar_lights_dust'
            },
            {
                "item": 'minecraft:redstone_ore'
            }
        ],
        "results": [
            {
                "count": 3,
                "id": 'minecraft:redstone_ore'
            }
        ],
        "time": 200
    })
    event.custom({
        "type": "oritech:foundry",
        "fluidInputAmount": 0,
        "fluidInputVariant": "minecraft:empty",
        "fluidOutputAmount": 0,
        "fluidOutputVariant": "minecraft:empty",
        "ingredients": [
            {
                "item": 'minecraft:redstone_ore'
            },
            {
                "item": 'kubejs:polar_lights_dust'
            }
        ],
        "results": [
            {
                "count": 3,
                "id": 'minecraft:redstone_ore'
            }
        ],
        "time": 200
    })

    // 红石
    event.custom({
        "type": "oritech:centrifuge_fluid",
        "fluidInputAmount": 81000,
        "fluidInputVariant": "kubejs:unstable_red",
        "fluidOutputAmount": 0,
        "fluidOutputVariant": "minecraft:empty",
        "ingredients": [
            {
                "item": "ars_nouveau:belt_of_unstable_gifts"
            }
        ],
        "results": [
            {
                "count": 1,
                "id": "minecraft:redstone_block"
            }, {
                "count": 1,
                "id": 'ars_nouveau:belt_of_unstable_gifts'
            }
        ],
        "time": 100
    })

    // 碳纤维
    event.custom({
        "type": "oritech:centrifuge",
        "fluidInputAmount": 0,
        "fluidInputVariant": "minecraft:empty",
        "fluidOutputAmount": 0,
        "fluidOutputVariant": "minecraft:empty",
        "ingredients": [
            {
                "item": 'mekanism:dust_charcoal'
            }
        ],
        "results": [
            {
                "count": 1,
                "id": 'oritech:carbon_fibre_strands'
            }],
        "time": 200
    })

    // 木炭粉
    event.custom({
        "type": "oritech:pulverizer",
        "fluidInputAmount": 0,
        "fluidInputVariant": "minecraft:empty",
        "fluidOutputAmount": 0,
        "fluidOutputVariant": "minecraft:empty",
        "ingredients": [
            {
                "item": 'mekanism:block_charcoal'
            }
        ],
        "results": [
            {
                "count": 4,
                "id": 'mekanism:dust_charcoal'
            }
        ],
        "time": 200
    })
    // 木炭粉
    event.custom({
        "type": "oritech:grinder",
        "fluidInputAmount": 0,
        "fluidInputVariant": "minecraft:empty",
        "fluidOutputAmount": 0,
        "fluidOutputVariant": "minecraft:empty",
        "ingredients": [
            {
                "item": 'mekanism:block_charcoal'
            }
        ],
        "results": [
            {
                "count": 4,
                "id": 'mekanism:dust_charcoal'
            }
        ],
        "time": 100
    })

    // 不稳定红石
    event.custom({
        "type": "oritech:centrifuge_fluid",
        "fluidInputAmount": 81000,
        "fluidInputVariant": "minecraft:empty",
        "fluidOutputAmount": 81000,
        "fluidOutputVariant": "kubejs:unstable_red",
        "ingredients": [
            {
                "item": 'minecraft:redstone_ore'
            }
        ],
        "results": [],
        "time": 100
    })

    // 烈焰棒
    event.custom({
        "type": "oritech:centrifuge_fluid",
        "fluidInputAmount": 40500,
        "fluidInputVariant": "minecraft:lava",
        "fluidOutputAmount": 0,
        "fluidOutputVariant": "minecraft:empty",
        "ingredients": [
            {
                "item": 'minecraft:stick'
            }
        ],
        "results": [
            {
                "count": 1,
                "id": 'minecraft:blaze_rod'
            }
        ],
        "time": 100
    })

    // 海带
    event.custom({
        "type": "oritech:centrifuge",
        "fluidInputAmount": 0,
        "fluidInputVariant": "minecraft:empty",
        "fluidOutputAmount": 0,
        "fluidOutputVariant": "minecraft:empty",
        "ingredients": [
            {
                "item": 'farmersdelight:tree_bark'
            }
        ],
        "results": [
            {
                "count": 2,
                "id": 'minecraft:kelp'
            }],
        "time": 20
    })

    // 萤石
    event.custom({
        "type": "oritech:foundry",
        "fluidInputAmount": 0,
        "fluidInputVariant": "minecraft:empty",
        "fluidOutputAmount": 0,
        "fluidOutputVariant": "minecraft:empty",
        "ingredients": [
            {
                "item": 'minecraft:redstone_block'
            },
            {
                "item": 'kubejs:platinum_ingot'
            }
        ],
        "results": [
            {
                "count": 1,
                "id": 'minecraft:glowstone'
            }
        ],
        "time": 200
    })

    event.custom({
        "type": "oritech:foundry",
        "fluidInputAmount": 0,
        "fluidInputVariant": "minecraft:empty",
        "fluidOutputAmount": 0,
        "fluidOutputVariant": "minecraft:empty",
        "ingredients": [
            {
                "item": 'minecraft:gunpowder'
            },
            {
                "item": 'minecraft:glowstone_dust'
            }
        ],
        "results": [
            {
                "count": 4,
                "id": 'minecraft:glowstone_dust'
            }
        ],
        "time": 80
    })

    event.custom({
        "type": "oritech:foundry",
        "fluidInputAmount": 0,
        "fluidInputVariant": "minecraft:empty",
        "fluidOutputAmount": 0,
        "fluidOutputVariant": "minecraft:empty",
        "ingredients": [
            {
                "item": 'minecraft:glowstone_dust'
            },
            {
                "item": 'minecraft:gunpowder'
            }
        ],
        "results": [
            {
                "count": 4,
                "id": 'minecraft:glowstone_dust'
            }
        ],
        "time": 80
    })

    // 创造压缩机
    event.custom({
        "type": "oritech:laser",
        "fluidInputAmount": 0,
        "fluidInputVariant": "minecraft:empty",
        "fluidOutputAmount": 0,
        "fluidOutputVariant": "minecraft:empty",
        "ingredients": [
            {
                "item": 'kubejs:quantum_flux_compressor'
            }
        ],
        "results": [
            {
                "count": 1,
                "id": 'pneumaticcraft:creative_compressor'
            }
        ],
        "time": 200
    })

    // 精镍锭
    event.shaped('oritech:adamant_ingot', [
        'NN ',
        'PP ',
        '   '
    ], {
        N: 'kubejs:nickel_ingot',
        P: 'kubejs:platinum_ingot'
    })
    event.custom({
        "type": "oritech:foundry",
        "fluidInputAmount": 0,
        "fluidInputVariant": "minecraft:empty",
        "fluidOutputAmount": 0,
        "fluidOutputVariant": "minecraft:empty",
        "ingredients": [
            {
                "item": 'kubejs:platinum_ingot'
            },
            {
                "item": 'kubejs:nickel_ingot'
            }
        ],
        "results": [
            {
                "count": 1,
                "id": 'oritech:adamant_ingot'
            }
        ],
        "time": 80
    })
    event.custom({
        "type": "oritech:foundry",
        "fluidInputAmount": 0,
        "fluidInputVariant": "minecraft:empty",
        "fluidOutputAmount": 0,
        "fluidOutputVariant": "minecraft:empty",
        "ingredients": [
            {
                "item": 'kubejs:nickel_ingot'
            },
            {
                "item": 'kubejs:platinum_ingot'
            }
        ],
        "results": [
            {
                "count": 1,
                "id": 'oritech:adamant_ingot'
            }
        ],
        "time": 80
    })

    // 镍锭
    event.custom({
        "type": "oritech:foundry",
        "fluidInputAmount": 0,
        "fluidInputVariant": "minecraft:empty",
        "fluidOutputAmount": 0,
        "fluidOutputVariant": "minecraft:empty",
        "ingredients": [
            {
                "item": 'minecraft:lapis_lazuli'
            },
            {
                "item": 'megacells:sky_steel_ingot'
            }
        ],
        "results": [
            {
                "count": 2,
                "id": 'kubejs:nickel_ingot'
            }
        ],
        "time": 80
    })
    event.custom({
        "type": "oritech:foundry",
        "fluidInputAmount": 0,
        "fluidInputVariant": "minecraft:empty",
        "fluidOutputAmount": 0,
        "fluidOutputVariant": "minecraft:empty",
        "ingredients": [
            {
                "item": 'megacells:sky_steel_ingot'
            },
            {
                "item": 'minecraft:lapis_lazuli'
            }
        ],
        "results": [
            {
                "count": 2,
                "id": 'kubejs:nickel_ingot'
            }
        ],
        "time": 80
    })

    // 塑料片
    event.shapeless(Item.of('oritech:plastic_sheet', 2), [Item.of('industrialforegoing:plastic', 2)])

    // 琥珀金锭
    event.custom({
        "type": "oritech:assembler",
        "fluidInputAmount": 0,
        "fluidInputVariant": "minecraft:empty",
        "fluidOutputAmount": 0,
        "fluidOutputVariant": "minecraft:empty",
        "ingredients": [
            {
                "item": 'actuallyadditions:palis_crystal_block'
            },
            {
                "item": 'minecraft:gold_block'
            },
            {
                "item": 'oritech:adamant_block'
            },
            {
                "item": 'minecraft:bone_block'
            }
        ],
        "results": [
            {
                "count": 4,
                "id": 'kubejs:electrum_ingot'
            }
        ],
        "time": 160
    })
    event.custom({
        "type": "oritech:foundry",
        "fluidInputAmount": 0,
        "fluidInputVariant": "minecraft:empty",
        "fluidOutputAmount": 0,
        "fluidOutputVariant": "minecraft:empty",
        "ingredients": [
            {
                "item": 'minecraft:gold_ingot'
            },
            {
                "item": 'kubejs:silver_ingot'
            }
        ],
        "results": [
            {
                "count": 2,
                "id": 'kubejs:electrum_ingot'
            }
        ],
        "time": 40
    })
    event.custom({
        "type": "oritech:foundry",
        "fluidInputAmount": 0,
        "fluidInputVariant": "minecraft:empty",
        "fluidOutputAmount": 0,
        "fluidOutputVariant": "minecraft:empty",
        "ingredients": [
            {
                "item": 'kubejs:silver_ingot'
            },
            {
                "item": 'minecraft:gold_ingot'
            }
        ],
        "results": [
            {
                "count": 2,
                "id": 'kubejs:electrum_ingot'
            }
        ],
        "time": 40
    })

    // 流体处理插件
    event.replaceInput('oritech:crafting/addon/fluid', '#c:ingots/electrum', '#c:ingots/steel')

    // x铂粉
    event.custom({
        "type": "oritech:grinder",
        "fluidInputAmount": 0,
        "fluidInputVariant": "minecraft:empty",
        "fluidOutputAmount": 0,
        "fluidOutputVariant": "minecraft:empty",
        "ingredients": [
            {
                "item": 'oritech:fluxite_block'
            }
        ],
        "results": [
            {
                "count": 1,
                "id": 'oritech:duratium_dust'
            }
        ],
        "time": 160
    })

    // 末地传送门
    event.custom({
        "type": "oritech:atomic_forge",
        "fluidInputAmount": 0,
        "fluidInputVariant": "minecraft:empty",
        "fluidOutputAmount": 0,
        "fluidOutputVariant": "minecraft:empty",
        "ingredients": [
            {
                "item": 'kubejs:platinum_block'
            },
            {
                "item": 'oritech:duratium_block'
            },
            {
                "item": 'oritech:duratium_block'
            }
        ],
        "results": [
            {
                "count": 6,
                "id": 'minecraft:end_portal_frame'
            }
        ],
        "time": 200
    })

    // 银锭
    event.custom({
        "type": "oritech:atomic_forge",
        "fluidInputAmount": 0,
        "fluidInputVariant": "minecraft:empty",
        "fluidOutputAmount": 0,
        "fluidOutputVariant": "minecraft:empty",
        "ingredients": [
            {
                "tag": 'c:raw_materials/silver'
            },
            {
                "tag": 'c:raw_materials/silver'
            },
            {
                "tag": 'c:raw_materials/silver'
            }
        ],
        "results": [
            {
                "count": 6,
                "id": 'kubejs:silver_ingot'
            }
        ],
        "time": 20
    })

    // 镍
    event.custom({
        "type": "oritech:atomic_forge",
        "fluidInputAmount": 0,
        "fluidInputVariant": "minecraft:empty",
        "fluidOutputAmount": 0,
        "fluidOutputVariant": "minecraft:empty",
        "ingredients": [
            {
                "tag": 'c:raw_materials/nickel'
            },
            {
                "tag": 'c:raw_materials/nickel'
            },
            {
                "tag": 'c:raw_materials/nickel'
            }
        ],
        "results": [
            {
                "count": 6,
                "id": 'kubejs:nickel_ingot'
            }
        ],
        "time": 20
    })

    //锡
    event.custom({
        "type": "oritech:atomic_forge",
        "fluidInputAmount": 0,
        "fluidInputVariant": "minecraft:empty",
        "fluidOutputAmount": 0,
        "fluidOutputVariant": "minecraft:empty",
        "ingredients": [
            {
                "tag": 'c:raw_materials/tin'
            },
            {
                "tag": 'c:raw_materials/tin'
            },
            {
                "tag": 'c:raw_materials/tin'
            }
        ],
        "results": [
            {
                "count": 6,
                "id": 'kubejs:tin_ingot'
            }
        ],
        "time": 20
    })

    // 铅
    event.custom({
        "type": "oritech:atomic_forge",
        "fluidInputAmount": 0,
        "fluidInputVariant": "minecraft:empty",
        "fluidOutputAmount": 0,
        "fluidOutputVariant": "minecraft:empty",
        "ingredients": [
            {
                "tag": 'c:raw_materials/lead'
            },
            {
                "tag": 'c:raw_materials/lead'
            },
            {
                "tag": 'c:raw_materials/lead'
            }
        ],
        "results": [
            {
                "count": 6,
                "id": 'kubejs:lead_ingot'
            }
        ],
        "time": 20
    })

    // 锇
    event.custom({
        "type": "oritech:atomic_forge",
        "fluidInputAmount": 0,
        "fluidInputVariant": "minecraft:empty",
        "fluidOutputAmount": 0,
        "fluidOutputVariant": "minecraft:empty",
        "ingredients": [
            {
                "tag": 'c:raw_materials/osmium'
            },
            {
                "tag": 'c:raw_materials/osmium'
            },
            {
                "tag": 'c:raw_materials/osmium'
            }
        ],
        "results": [
            {
                "count": 6,
                "id": 'kubejs:osmium_ingot'
            }
        ],
        "time": 20
    })

    // 细导线
    event.shaped(Item.of('oritech:insulated_wire', 2), [
        '   ',
        'CCC',
        '   '
    ], {
        C: 'minecraft:copper_ingot'
    })


})