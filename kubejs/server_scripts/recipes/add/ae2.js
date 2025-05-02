ServerEvents.recipes(event => {
    // 神秘方块
    event.shaped('ae2:mysterious_cube', [
        'SSS',
        'SNS',
        'SSS'
    ], {
        S: 'ae2:smooth_sky_stone_block',
        N: 'kubejs:snow_spirit'
    })

    // 逻辑电路板
    event.custom({
        "type": "ae2:inscriber",
        "ingredients": {
            "middle": {
                "tag": 'c:ingots/brass'
            },
            "top": {
                "item": "ae2:logic_processor_press"
            }
        },
        "mode": "inscribe",
        "result": {
            "count": 1,
            "id": "ae2:printed_logic_processor"
        }
    })

    // 工程电路板
    event.custom({
        "type": "ae2:inscriber",
        "ingredients": {
            "middle": {
                "item": 'minecraft:ender_pearl'
            },
            "top": {
                "item": "ae2:engineering_processor_press"
            }
        },
        "mode": "inscribe",
        "result": {
            "count": 1,
            "id": "ae2:printed_engineering_processor"
        }
    })

    // 高级卡
    event.shaped('ae2:advanced_card', [
        'EI ',
        'RCI',
        'EI '
    ], {
        E: '#c:dusts/ender_pearl',
        I: 'minecraft:iron_ingot',
        R: 'minecraft:redstone',
        C: 'ae2:calculation_processor'
    })

    // 恩特罗水晶
    event.shaped(Item.of('extendedae:entro_crystal', 3), [
        'EEE',
        'ESE',
        'EEE'
    ], {
        S: 'extendedae:entro_seed',
        E: 'extendedae:entro_shard'
    })

    // 恩特罗碎片
    event.shapeless(Item.of('extendedae:entro_shard', 8), ['extendedae:entro_crystal'])
})
