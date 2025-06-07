ServerEvents.recipes(event => {
    const { kubejs } = event.recipes

    event.custom(
        {
            "type": "industrialforegoing:dissolution_chamber",
            "input": [
                {
                    "tag": 'chipped:orange_concrete'
                },
                {
                    "tag": 'chipped:orange_concrete'
                },
                {
                    "tag": 'chipped:orange_concrete'
                },
                {
                    "tag": 'chipped:orange_concrete'
                }
            ],
            "inputFluid": {
                "amount": 50,
                "fluid": "oritech:still_biofuel"
            },
            "output": {
                "count": 12,
                "id": 'oreberriesreplanted:copper_oreberry'
            },
            "processingTime": 10
        }
    )
    event.custom(
        {
            "type": "industrialforegoing:dissolution_chamber",
            "input": [
                {
                    "tag": 'chipped:white_concrete'
                },
                {
                    "tag": 'chipped:white_concrete'
                },
                {
                    "tag": 'chipped:white_concrete'
                },
                {
                    "tag": 'chipped:white_concrete'
                }
            ],
            "inputFluid": {
                "amount": 100,
                "fluid": "oritech:still_biofuel"
            },
            "output": {
                "count": 12,
                "id": 'oreberriesreplanted:iron_oreberry'
            },
            "processingTime": 10
        }
    )
    event.custom(
        {
            "type": "industrialforegoing:dissolution_chamber",
            "input": [
                {
                    "tag": 'chipped:yellow_concrete'
                },
                {
                    "tag": 'chipped:yellow_concrete'
                },
                {
                    "tag": 'chipped:yellow_concrete'
                },
                {
                    "tag": 'chipped:yellow_concrete'
                }
            ],
            "inputFluid": {
                "amount": 200,
                "fluid": "oritech:still_biofuel"
            },
            "output": {
                "count": 2,
                "id": 'oreberriesreplanted:gold_oreberry'
            },
            "processingTime": 20
        }
    )
    event.custom(
        {
            "type": "industrialforegoing:dissolution_chamber",
            "input": [
                {
                    "item": 'minecraft:quartz'
                },
                {
                    "item": 'minecraft:quartz'
                },
                {
                    "item": 'minecraft:quartz'
                },
                {
                    "item": 'minecraft:quartz'
                },
                {
                    "item": "minecraft:coal"
                }
            ],
            "inputFluid": {
                "amount": 100,
                "fluid": "oritech:still_biofuel"
            },
            "output": {
                "count": 4,
                "id": 'actuallyadditions:black_quartz'
            },
            "processingTime": 100
        }
    )
    event.custom(
        {
            "type": "industrialforegoing:dissolution_chamber",
            "input": [
                {
                    "item": 'occultism:otherworld_essence'
                },
                {
                    "item": 'occultism:otherworld_essence'
                },
                {
                    "item": 'minecraft:redstone_block'
                },
                {
                    "item": 'minecraft:iron_block'
                },
                {
                    "item": 'mob_grinding_utils:spikes'
                }
            ],
            "inputFluid": {
                "amount": 1000,
                "fluid": "oritech:still_biofuel"
            },
            "output": {
                "count": 1,
                "id": 'mob_grinding_utils:saw'
            },
            "processingTime": 400
        }
    )
    event.custom(
        {
            "type": "industrialforegoing:dissolution_chamber",
            "input": [
                {
                    "item": 'occultism:otherworld_essence'
                },
                {
                    "item": 'ae2:matter_ball'
                },
                {
                    "item": 'ae2:matter_ball'
                },
                {
                    "item": 'ae2:matter_ball'
                }
            ],
            "inputFluid": {
                "amount": 50,
                "fluid": "oritech:still_biofuel"
            },
            "output": {
                "count": 1,
                "id": 'minecraft:gold_ore'
            },
            "processingTime": 20
        }
    )
    event.custom(
        {
            "type": "industrialforegoing:dissolution_chamber",
            "input": [
                {
                    "item": 'oritech:gold_gem'
                },
                {
                    "item": 'oritech:copper_gem'
                },
                {
                    "item": 'oritech:iron_gem'
                },
                {
                    "item": 'minecraft:red_dye'
                }
            ],
            "inputFluid": {
                "amount": 1000,
                "fluid": 'kubejs:ore_catalytic_liquid'
            },
            "output": {
                "count": 16,
                "id": 'mysticalagriculture:dye_essence'
            },
            "processingTime": 200
        }
    )
    event.custom(
        {
            "type": "industrialforegoing:dissolution_chamber",
            "input": [
                {
                    "item": 'oritech:gold_gem'
                },
                {
                    "item": 'oritech:copper_gem'
                },
                {
                    "item": 'oritech:iron_gem'
                },
                {
                    "item": 'mysticalagriculture:dye_essence'
                }
            ],
            "inputFluid": {
                "amount": 1000,
                "fluid": 'kubejs:ore_catalytic_liquid'
            },
            "output": {
                "count": 32,
                "id": 'mysticalagriculture:nature_essence'
            },
            "processingTime": 200
        }
    )
    event.custom(
        {
            "type": "industrialforegoing:dissolution_chamber",
            "input": [
                {
                    "item": 'occultism:otherworld_essence'
                },
                {
                    "item": 'occultism:iesnium_nugget'
                },
                {
                    "item": 'ars_nouveau:water_essence'
                }
            ],
            "inputFluid": {
                "amount": 2000,
                "fluid": "water"
            },
            "output": {
                "count": 1,
                "id": 'ars_nouveau:source_gem'
            },
            "outputFluid": {
                "amount": 2000,
                "id": 'oritech:still_oil'
            },
            "processingTime": 100
        }
    )
    event.custom(
        {
            "type": "industrialforegoing:dissolution_chamber",
            "input": [
                {
                    "item": 'minecraft:ancient_debris'
                }
            ],
            "inputFluid": {
                "amount": 5,
                "fluid": 'actuallyadditions:empowered_oil'
            },
            "output": {
                "count": 1,
                "id": 'minecraft:netherite_scrap'
            },
            "processingTime": 40
        }
    )

    const creeper_ore = [
        'ore_creeper:emerald_creeper_spawn_egg',
        'ore_creeper:coal_creeper_spawn_egg',
        'ore_creeper:lapis_lazuli_creeper_spawn_egg',
        'ore_creeper:diamond_creeper_spawn_egg',
        'ore_creeper:ancient_debris_creeper_spawn_egg',
        'ore_creeper:nether_gold_creeper_spawn_egg',
        'ore_creeper:gold_creeper_spawn_egg',
        'ore_creeper:copper_creeper_spawn_egg',
        'ore_creeper:nether_quartz_creeper_spawn_egg',
        'ore_creeper:redstone_creeper_spawn_egg',
        'ore_creeper:iron_creeper_spawn_egg'
    ]

    creeper_ore.forEach((creeper) => {
        event.custom(
            {
                "type": "industrialforegoing:laser_drill_ore",
                "catalyst": {
                    "item": 'industrialforegoing:cyan_laser_lens'
                },
                "output": {
                    "item": creeper
                },
                "rarity": [
                    {
                        "biome_filter": {
                            "blacklist": [],
                            "whitelist": []
                        },
                        "depth_max": 30,
                        "depth_min": 15,
                        "dimension_filter": {
                            "blacklist": [],
                            "whitelist": ["minecraft:the_end"]
                        },
                        "weight": 10
                    },
                ]
            }
        )
    });
})