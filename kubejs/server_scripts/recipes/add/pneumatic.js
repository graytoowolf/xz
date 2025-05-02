ServerEvents.recipes(event => {
    // 塑料
    event.shapeless('pneumaticcraft:plastic', ['industrialforegoing:plastic'])

    // 金锭
    event.custom({
        "type": "pneumaticcraft:pressure_chamber",
        "inputs": [
            {
                "count": 9,
                "item": 'minecraft:gold_ore'
            }
        ],
        "pressure": 2.5,
        "results": [
            {
                "count": 3,
                "id": 'minecraft:gold_ingot'
            }
        ]
    })

    // 裂金矿
    event.custom({
        "type": "pneumaticcraft:assembly_laser",
        "input": {
            "count": 4,
            "item": 'minecraft:gold_ore'
        },
        "program": "laser",
        "result": {
            "count": 8,
            "id": 'kubejs:cracked_gold_ore'
        }
    })

    // 粗金
    event.custom({
        "type": "pneumaticcraft:assembly_drill",
        "input": {
            "count": 8,
            "item": 'kubejs:cracked_gold_ore'
        },
        "program": "drill",
        "result": {
            "count": 16,
            "id": 'minecraft:raw_gold'
        }
    })

    // 金锭
    event.custom({
        "type": "pneumaticcraft:thermo_plant",
        "air_use_multiplier": 5.0,
        "inputs": {
            "fluid": {
                "amount": 200,
                "tag": "c:plantoil"
            },
            "item": {
                "item": 'minecraft:raw_gold'
            }
        },
        "outputs": {
            "item_output": {
                "count": 3,
                "id": 'minecraft:gold_ingot'
            }
        },
        "pressure": 4.0,
        "speed": 3.0
    })

    // 定位工具
    event.replaceInput('pneumaticcraft:gps_tool', 'minecraft:diamond', 'minecraft:gold_ingot')

    // 装配钻头
    event.replaceInput('pneumaticcraft:assembly_drill', 'minecraft:diamond', 'kubejs:platinum_ingot')

    // 植物油
    event.custom({
        "type": "pneumaticcraft:thermo_plant",
        "inputs": {
            "item": {
                "tag": "c:seeds"
            }
        },
        "outputs": {
            "fluid_output": {
                "amount": 200,
                "id": "pneumaticcraft:vegetable_oil"
            }
        },
        "pressure": 2.0,
        "speed": 3.0
    })

    // 绿宝石
    event.custom({
        "type": "pneumaticcraft:pressure_chamber",
        "inputs": [
            {
                "count": 2,
                "item": 'minecraft:glowstone'
            }, {
                "count": 1,
                "item": 'kubejs:platinum_block'
            }
        ],
        "pressure": 2.5,
        "results": [
            {
                "count": 3,
                "id": 'minecraft:emerald'
            }
        ]
    })

    // 量子通量压缩机
    event.custom({
        "type": "pneumaticcraft:assembly_laser",
        "input": {
            "count": 1,
            "item": 'pneumaticcraft:flux_compressor'
        },
        "program": "laser",
        "result": {
            "count": 1,
            "id": 'kubejs:quantum_flux_compressor'
        }
    })

    // 蚀刻酸桶
    event.custom({
        "type": "pneumaticcraft:pressure_chamber",
        "inputs": [
            {
                "count": 1,
                "item": "pneumaticcraft:plastic_bucket"
            },
            {
                "count": 2,
                "item": 'kubejs:snow_spirit'
            },
            {
                "count": 2,
                "item": 'naturesaura:gold_leaf'
            },
            {
                "count": 2,
                "tag": "c:gunpowders"
            }
        ],
        "pressure": 1.0,
        "results": [
            {
                "count": 1,
                "id": "pneumaticcraft:etching_acid_bucket"
            }
        ]
    })
})