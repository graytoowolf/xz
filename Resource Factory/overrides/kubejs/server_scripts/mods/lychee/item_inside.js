ServerEvents.recipes(event => {
    event.custom(
        {
            "type": "lychee:item_inside",
            "item_in": {
                "item": 'ars_nouveau:dominion_wand'
            },
            "block_in": {
                "blocks": "oritech:still_biofuel_block",
                "state": {
                    "level": "0"
                }
            },
            "post": [
                {
                    "type": "drop_item",
                    "id": 'ars_nouveau:apprentice_spell_book'
                },
                {
                    "type": "place",
                    "block": "*"
                }
            ]
        }
    )
    event.custom(
        {
            "type": "lychee:item_inside",
            "item_in": {
                "item": 'oreberriesreplanted:iron_oreberry'
            },
            "block_in": {
                "blocks": "kubejs:ore_catalytic_liquid",
                "state": {
                    "level": "0"
                }
            },
            "post": [
                {
                    "type": "drop_item",
                    "id": 'minecraft:iron_ore'
                }
            ]
        }
    )
    event.custom(
        {
            "type": "lychee:item_inside",
            "item_in": {
                "item": 'kubejs:mixed_dust'
            },
            "block_in": {
                "blocks": "kubejs:ore_catalytic_liquid",
                "state": {
                    "level": "0"
                }
            },
            "post": [
                {
                    "type": "drop_item",
                    "id": 'minecraft:glowstone_dust'
                }
            ]
        }
    )
    event.custom(
        {
            "type": "lychee:item_inside",
            "item_in": {
                "item": 'ars_nouveau:magebloom'
            },
            "block_in": {
                "blocks": "water",
                "state": {
                    "level": "0"
                }
            },
            "post": [
                {
                    "type": "place",
                    "block": "kubejs:ore_catalytic_liquid"
                }
            ]
        }
    )
    event.custom(
        {
            "type": "lychee:item_inside",
            "item_in": {
                "item": 'minecraft:black_dye'
            },
            "block_in": {
                "blocks": "kubejs:ore_catalytic_liquid",
                "state": {
                    "level": "0"
                }
            },
            "post": [
                {
                    "type": "drop_item",
                    "id": 'minecraft:ink_sac'
                }
            ]
        }
    )
    event.custom(
        {
            "type": "lychee:item_inside",
            "item_in": {
                "item": 'minecraft:light_gray_dye'
            },
            "block_in": {
                "blocks": "kubejs:ore_catalytic_liquid",
                "state": {
                    "level": "0"
                }
            },
            "post": [
                {
                    "type": "drop_item",
                    "id": 'minecraft:feather'
                }
            ]
        }
    )
    event.custom(
        {
            "type": "lychee:item_inside",
            "item_in": {
                "item": 'alltheores:platinum_ingot'
            },
            "block_in": {
                "blocks": 'minecraft:lava',
                "state": {
                    "level": "0"
                }
            },
            "post": [
                {
                    "type": "drop_item",
                    "id": 'modular_machinery_reborn:modularium',
                    "count": 4
                }
            ]
        }
    )
    event.custom(
        {
            type: "lychee:item_inside",
            item_in: {
                item: 'silentgems:white_diamond'
            },
            block_in: {
                blocks: "kubejs:ore_catalytic_liquid"
            },
            post: [
                {
                    type: "random",
                    rolls: {
                        min: 8,
                        max: 16
                    },
                    entries: [
                        {
                            type: "drop_item",
                            id: 'silentgear:diamond_shard',
                            if: {
                                type: "chance",
                                chance: 0.5
                            }
                        }
                    ]
                },
                {
                    type: "random",
                    rolls: {
                        min: 1,
                        max: 4
                    },
                    entries: [
                        {
                            type: "drop_item",
                            id: 'minecraft:diamond',
                            if: {
                                type: "chance",
                                chance: 0.5
                            }
                        }
                    ]
                }
            ]
        }
    )
})