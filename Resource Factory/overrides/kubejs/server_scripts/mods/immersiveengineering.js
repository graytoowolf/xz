ServerEvents.recipes(event => {
    const { kubejs } = event.recipes

    event.replaceInput({ id: 'immersiveengineering:crafting/heavy_engineering' }, 'alltheores:electrum_ingot', 'extendedcrafting:black_iron_ingot')
    event.replaceInput({ id: 'immersiveengineering:crafting/light_engineering' }, 'minecraft:copper_ingot', 'extendedcrafting:black_iron_ingot')
    event.replaceInput({ id: 'immersiveengineering:crafting/rs_engineering' }, 'minecraft:copper_ingot', 'extendedcrafting:black_iron_ingot')


    kubejs.shapeless('alltheores:silver_plate', ['minecraft:light_gray_dye', 'minecraft:light_gray_dye', 'minecraft:light_gray_dye', 'minecraft:light_gray_dye', 'ars_nouveau:glyph_animate_block', 'minecraft:gold_block'])

    kubejs.shaped('9x immersiveengineering:blastbrick', ['aba', 'bcb', 'aba'],
        {
            a: 'enderio:copper_alloy_ingot',
            b: 'productivemetalworks:fire_brick',
            c: 'minecraft:magma_block'
        }
    )

    event.custom(
        {
            "type": "immersiveengineering:blast_furnace",
            "input": {
                "item": 'stellaris:heavy_metal_ingot'
            },
            "result": {
                "item": 'extendedcrafting:black_iron_ingot'
            },
            "slag": {
                "tag": "c:slag"
            },
            "time": 600
        }
    )
    event.custom(
        {
            "type": "immersiveengineering:blast_furnace",
            "input": {
                "item": 'immersiveengineering:coke'
            },
            "conut": 3,
            "result": {
                "item": 'immersiveengineering:dust_hop_graphite'
            },
            "slag": {
                "tag": "c:slag"
            },
            "time": 2400
        }
    )
    event.custom(
        {
            "type": "immersiveengineering:blast_furnace_fuel",
            "input": {
                "item": 'ars_nouveau:fire_essence'
            },
            "time": 12000
        }
    )
    event.custom(
        {
            "type": "immersiveengineering:arc_furnace",
            "additives": [
                {
                    "basePredicate": {
                        "item": 'minecraft:sand'
                    },
                    "count": 16
                }
            ],
            "energy": 100000,
            "input": {
                "basePredicate": {
                    "item": 'immersiveengineering:plate_duroplast'
                },
                "count": 1
            },
            "results": [
                {
                    "basePredicate": {
                        "item": 'minecraft:diamond'
                    },
                    "count": 12
                }
            ],
            "time": 100
        }
    )
    event.custom(
        {
            "type": "immersiveengineering:squeezer",
            "energy": 19200,
            "input": {
                "basePredicate": {
                    "item": 'minecraft:gilded_blackstone'
                },
                "count": 3
            },
            "result": {
                "item": 'minecraft:ancient_debris'
            }
        }
    )

    //园艺玻璃罩
    event.custom(
        {
            "type": "immersiveengineering:cloche",
            "input": {
                "item": 'occultism:datura_seeds'
            },
            "render": {
                "type": "immersiveengineering:crop",
                "block": 'occultism:datura'
            },
            "results": [
                {
                    "basePredicate": {
                        "item": 'occultism:datura'
                    },
                    "count": 4
                },
                {
                    "item": 'occultism:datura_seeds'
                }
            ],
            "soil": {
                "item": 'occultism:otherworld_essence'
            },
            "time": 600
        }
    )
    event.custom({
        "type": "immersiveengineering:cloche",
        "input": {
            "item": 'ars_nouveau:magebloom_crop'
        },
        "render": {
            "type": "immersiveengineering:crop",
            "block": 'ars_nouveau:magebloom_crop'
        },
        "results": [
            {
                "id": 'ars_nouveau:magebloom',
                "count": 2
            }
        ],
        "soil": {
            "item": 'ars_nouveau:creative_source_jar'
        },
        "time": 600
    })
})