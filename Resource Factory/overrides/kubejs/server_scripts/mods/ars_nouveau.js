ServerEvents.recipes(event => {
    const { kubejs } = event.recipes

    kubejs.shapeless('ars_nouveau:ritual_wilden_summon', ['ars_nouveau:purple_archwood_log', 'occultism:book_of_binding_empty'])
    kubejs.shapeless('ars_nouveau:drygmy_se', ['ars_nouveau:manipulation_essence', 'ars_nouveau:source_gem', 'minecraft:copper_ingot'])
    kubejs.shapeless('ars_nouveau:starbuncle_se', ['ars_nouveau:manipulation_essence', 'ars_nouveau:source_gem', 'minecraft:gold_ingot'])
    kubejs.shapeless('ars_nouveau:whirlisprig_se', ['ars_nouveau:manipulation_essence', 'ars_nouveau:source_gem', 'mysticalagriculture:nature_essence'])
    kubejs.shapeless('4x ars_nouveau:ritual_cloudshaping', ['ars_nouveau:blue_archwood_log', 'ars_nouveau:source_gem_block', 'minecraft:snowball'])

    kubejs.shaped('ars_caelum:ritual_conjure_island_end_portal', ['abc', 'ded', 'fbg'],
        {
            a: 'ars_nouveau:blue_archwood_log',
            b: 'waystones:warp_stone',
            c: 'ars_nouveau:green_archwood_log',
            d: 'oritech:prometheum_ingot',
            e: 'ars_nouveau:summon_focus',
            f: 'ars_nouveau:red_archwood_log',
            g: 'ars_nouveau:purple_archwood_log'
        }
    )


    event.custom(
        {
            "type": "ars_nouveau:crush",
            "input": {
                "item": 'minecraft:iron_ore'
            },
            "output": [
                {
                    "chance": 1.0,
                    "maxRange": 1,
                    "stack": {
                        "count": 6,
                        "id": 'oritech:small_iron_clump'
                    }
                }
            ]
        }
    )
    event.custom(
        {
            "type": "ars_nouveau:crush",
            "input": {
                "item": 'minecraft:copper_ore'
            },
            "output": [
                {
                    "chance": 1.0,
                    "maxRange": 1,
                    "stack": {
                        "count": 6,
                        "id": 'oritech:small_copper_clump'
                    }
                }
            ]
        }
    )
    event.custom(
        {
            "type": "ars_nouveau:crush",
            "input": {
                "item": 'minecraft:gold_ore'
            },
            "output": [
                {
                    "chance": 1.0,
                    "maxRange": 1,
                    "stack": {
                        "count": 6,
                        "id": 'oritech:small_gold_clump'
                    }
                }
            ]
        }
    )
    event.custom(
        {
            "type": "ars_nouveau:enchanting_apparatus",
            "keepNbtOfReagent": true,
            "pedestalItems": [
                {
                    "item": 'minecraft:amethyst_block'
                },
                {
                    "item": 'minecraft:amethyst_block'
                },
                {
                    "item": 'minecraft:amethyst_block'
                },
                {
                    "item": 'minecraft:amethyst_block'
                },
                {
                    "item": 'minecraft:amethyst_block'
                },
                {
                    "item": 'minecraft:amethyst_block'
                },
                {
                    "item": 'minecraft:amethyst_block'
                },
                {
                    "item": 'minecraft:amethyst_block'
                }
            ],
            "reagent": {
                "item": 'oritech:processing_unit'
            },
            "result": {
                "count": 2,
                "id": 'minecraft:budding_amethyst'
            },
            "sourceCost": 0
        }
    )
    event.custom(
        {
            "type": "ars_nouveau:enchanting_apparatus",
            "keepNbtOfReagent": true,
            "pedestalItems": [
                {
                    "tag": 'minecraft:leaves'
                },
                {
                    "item": 'naturesaura:gold_fiber'
                },
                {
                    "tag": 'minecraft:leaves'
                },
                {
                    "item": 'naturesaura:gold_fiber'
                },
                {
                    "tag": 'minecraft:leaves'
                },
                {
                    "item": 'naturesaura:gold_fiber'
                },
                {
                    "tag": 'minecraft:leaves'
                },
                {
                    "item": 'naturesaura:gold_fiber'
                }
            ],
            "reagent": {
                "item": 'occultism:otherworld_essence'
            },
            "result": {
                "count": 64,
                "id": 'naturesaura:gold_leaf'
            },
            "sourceCost": 10000
        }
    )


    event.custom(
        {
            "type": "ars_nouveau:imbuement",
            "input": {
                "item": 'ars_nouveau:magebloom_fiber'
            },
            "output": {
                "count": 8,
                "id": 'naturesaura:gold_fiber'
            },
            "pedestalItems": [
                {
                    "item": 'ars_nouveau:air_essence'
                },
                {
                    "item": 'occultism:iesnium_nugget'
                },
                {
                    "item": 'ars_nouveau:manipulation_essence'
                }
            ],
            "source": 2000
        }
    )
    event.custom(
        {
            "type": "ars_nouveau:imbuement",
            "input": {
                "item": 'ae2:crafting_terminal'
            },
            "output": {
                "count": 1,
                "id": 'ae2:wireless_crafting_terminal'
            },
            "pedestalItems": [
                {
                    "item": 'naturesaura:conversion_catalyst'
                }
            ],
            "source": 5000
        }
    )
    event.custom(
        {
            "type": "ars_nouveau:imbuement",
            "input": {
                "item": 'minecraft:ender_pearl'
            },
            "output": {
                "count": 1,
                "id": 'ae2:wireless_booster'
            },
            "pedestalItems": [
                {
                    "item": 'naturesaura:crushing_catalyst'
                }
            ],
            "source": 1000
        }
    )
    event.custom(
        {
            "type": "ars_nouveau:imbuement",
            "input": {
                "item": 'minecraft:amethyst_block'
            },
            "output": {
                "count": 1,
                "id": 'ae2:wireless_access_point'
            },
            "pedestalItems": [
                {
                    "item": 'naturesaura:conversion_catalyst'
                }
            ],
            "source": 5000
        }
    )
    event.custom(
        {
            "type": "ars_nouveau:imbuement",
            "input": {
                "item": 'minecraft:iron_block'
            },
            "output": {
                "count": 1,
                "id": 'ae2wtlib:magnet_card'
            },
            "pedestalItems": [],
            "source": 5000
        }
    )
    event.custom(
        {
            "type": "ars_nouveau:imbuement",
            "input": {
                "item": 'minecraft:light_gray_dye'
            },
            "output": {
                "count": 4,
                "id": 'mysticalagriculture:nether_quartz_essence'
            },
            "pedestalItems": [
                {
                    "item": 'occultism:otherglass_natural'
                }
            ],
            "source": 100
        }
    )
})