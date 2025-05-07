ServerEvents.recipes(event => {
    // 高炉砖
    event.shaped(Item.of('immersiveengineering:blastbrick', 9), [
        'IGI',
        'GFG',
        'IGI'
    ], {
        I: 'minecraft:brick',
        F: 'kubejs:polar_lights_dust',
        G: 'minecraft:iron_ingot'
    })

    // 高炉燃烧物
    event.custom({
        "type": "immersiveengineering:blast_furnace_fuel",
        "input": {
            "item": 'kubejs:lotus_fire'
        },
        "time": 36000
    })

    // 钢锭
    event.custom({
        "type": "immersiveengineering:blast_furnace",
        "input": {
            "tag": "c:ingots/iron"
        },
        "result": {
            "item": 'kubejs:steel_ingot'
        },
        "slag": {
            "tag": "c:slag"
        },
        "time": 200
    })
    // 钢块
    event.custom({
        "type": "immersiveengineering:blast_furnace",
        "input": {
            "tag": "c:storage_blocks/iron"
        },
        "result": {
            "item": 'kubejs:steel_block'
        },
        "slag": {
            "basePredicate": {
                "tag": "c:slag"
            },
            "count": 9
        },
        "time": 1800
    })

    // 陨石
    event.custom({
        "type": "immersiveengineering:blast_furnace",
        "input": {
            "item": 'actuallyadditions:black_quartz_block'
        },
        "result": {
            "item": 'ae2:sky_stone_block'
        },
        "slag": {
            "tag": "c:slag"
        },
        "time": 2000
    })


    // 合金窑
    event.custom({
        "neoforge:conditions": [
            {
                "type": "neoforge:not",
                "value": {
                    "type": "neoforge:tag_empty",
                    "tag": "c:ingots/brass"
                }
            },
            {
                "type": "neoforge:not",
                "value": {
                    "type": "neoforge:tag_empty",
                    "tag": "c:ingots/zinc"
                }
            }
        ],
        "type": "immersiveengineering:alloy",
        "input0": {
            "tag": "c:ingots/copper"
        },
        "input1": {
            "tag": "c:ingots/zinc"
        },
        "result": {
            "basePredicate": {
                "item": 'kubejs:brass_ingot'
            },
            "count": 2
        }
    })
    event.custom({
        "neoforge:conditions": [
            {
                "type": "neoforge:not",
                "value": {
                    "type": "neoforge:tag_empty",
                    "tag": "c:ingots/bronze"
                }
            },
            {
                "type": "neoforge:not",
                "value": {
                    "type": "neoforge:tag_empty",
                    "tag": "c:ingots/tin"
                }
            }
        ],
        "type": "immersiveengineering:alloy",
        "input0": {
            "basePredicate": {
                "tag": "c:ingots/copper"
            },
            "count": 3
        },
        "input1": {
            "tag": "c:ingots/tin"
        },
        "result": {
            "basePredicate": {
                "item": "c:ingots/bronze"
            },
            "count": 4
        }
    })
    event.custom({
        "type": "immersiveengineering:alloy",
        "input0": {
            "tag": "c:ingots/copper"
        },
        "input1": {
            "tag": "c:ingots/nickel"
        },
        "result": {
            "basePredicate": {
                "item": 'kubejs:constantan_ingot'
            },
            "count": 2
        }
    })
    event.custom({
        "type": "immersiveengineering:alloy",
        "input0": {
            "tag": "c:ingots/gold"
        },
        "input1": {
            "tag": "c:ingots/silver"
        },
        "result": {
            "basePredicate": {
                "item": 'kubejs:electrum_ingot'
            },
            "count": 2
        }
    })
    event.custom({
        "neoforge:conditions": [
            {
                "type": "neoforge:not",
                "value": {
                    "type": "neoforge:tag_empty",
                    "tag": "c:rods/steel"
                }
            }
        ],
        "type": "immersiveengineering:metal_press",
        "energy": 2400,
        "input": {
            "tag": "c:ingots/steel"
        },
        "mold": "immersiveengineering:mold_rod",
        "result": {
            "basePredicate": {
                "item": 'kubejs:steel_rod'
            },
            "count": 2
        }
    })
    event.custom({
        "neoforge:conditions": [
            {
                "type": "neoforge:not",
                "value": {
                    "type": "neoforge:tag_empty",
                    "tag": "c:rods/aluminum"
                }
            }
        ],
        "type": "immersiveengineering:metal_press",
        "energy": 2400,
        "input": {
            "tag": "c:ingots/aluminum"
        },
        "mold": "immersiveengineering:mold_rod",
        "result": {
            "basePredicate": {
                "item": 'kubejs:aluminum_rod'
            },
            "count": 2
        }
    })
    event.custom({
        "type": "immersiveengineering:alloy",
        "input0": {
            "basePredicate": {
                "tag": 'c:ingots/copper',
            },
            "count": 3
        },
        "input1": {
            "tag": 'c:ingots/tin'
        },
        "result": {
            "basePredicate": {
                "item": 'kubejs:bronze_ingot'
            },
            "count": 4
        }
    })

    // 青金石
    event.custom({
        "type": "immersiveengineering:cloche",
        "input": {
            "item": 'minecraft:lapis_ore'
        },
        "render": {
            "type": "immersiveengineering:stacking",
            "block": 'minecraft:lapis_ore'
        },
        "results": [
            {
                "id": 'actuallyadditions:palis_crystal',
                "count": 4
            }
        ],
        "soil": {
            "item": 'kubejs:ethereal_gold_ore'
        },
        "time": 40
    })

    // 钢棒
    event.shaped(Item.of('kubejs:steel_rod', 2), [
        ' I ',
        ' I ',
        '   '
    ], {
        I: 'kubejs:steel_ingot'
    })

    // 次元块
    event.custom({
        "type": "immersiveengineering:metal_press",
        "energy": 900,
        "input": {
            "item": "minecraft:netherrack"
        },
        "mold": "immersiveengineering:mold_plate",
        "result": {
            "item": "dimensionalpocketsii:block_dimensional"
        }
    })

    // 钻石齿轮
    event.custom({
        "neoforge:conditions": [
            {
                "type": "neoforge:not",
                "value": {
                    "type": "neoforge:tag_empty",
                    "tag": "c:gears/silver"
                }
            }
        ],
        "type": "immersiveengineering:metal_press",
        "energy": 2400,
        "input": {
            "basePredicate": {
                "tag": 'c:gems/diamond'
            },
            "count": 4
        },
        "mold": "immersiveengineering:mold_gear",
        "result": {
            "tag": 'c:gears/diamond'
        }
    })

})