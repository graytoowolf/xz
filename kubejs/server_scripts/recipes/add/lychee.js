const dye_list = [
    'pink',
    'light_gray',
    'orange',
    'brown',
    'magenta',
    'cyan',
    'lime',
    'yellow',
    'black',
    'light_blue',
    'gray',
    'white',
    'blue',
    'green',
    'red',
    'purple'
]

ServerEvents.recipes(event => {
    // 青色混凝土
    event.custom({
        "type": "lychee:block_interacting",
        "item_in": {
            "item": "winterly:icicle"
        },
        "block_in": "minecraft:cyan_concrete",
        "post": [{
            "type": "prevent_default"
        },
        {
            "type": "drop_item",
            "id": "minecraft:cyan_concrete"
        },
        {
            "type": "delay",
            "s": 1
        }]
    })

    // 白色混凝土
    event.custom({
        "type": "lychee:block_interacting",
        "item_in": {
            "item": "winterly:icicle"
        },
        "block_in": 'minecraft:white_concrete',
        "post": [{
            "type": "prevent_default"
        },
        {
            "type": "drop_item",
            "id": 'minecraft:white_concrete'
        },
        {
            "type": "delay",
            "s": 1
        }]
    })

    // 泥土
    event.custom({
        "type": "lychee:block_interacting",
        "item_in": {
            "item": "winterly:icicle"
        },
        "block_in": 'minecraft:dirt',
        "post": [{
            "type": "prevent_default"
        },
        {
            "type": "drop_item",
            "id": 'minecraft:dirt'
        },
        {
            "type": "delay",
            "s": 1
        }]
    })

    // 铜矿
    event.custom({
        "type": "lychee:dripstone_dripping",
        "comment": `${Text.translate('tooltip.ore.copper').getString()}`,
        "source_block": 'naturesaura:infused_stone',
        "target_block": 'minecraft:gravel',
        "post": [
            {
                "type": "place",
                "block": 'minecraft:copper_ore'
            }
        ]
    })

    // 细雪块
    event.custom({
        "type": "lychee:block_interacting",
        "item_in": {
            "item": 'kubejs:polar_lights_bottle'
        },
        "block_in": 'naturesaura:infused_iron_block',
        "post": [{
            "type": "place",
            "block": 'minecraft:air'
        }
            , {
            "type": "place",
            "block": 'minecraft:powder_snow',
            "contextual": {
                "type": "chance",
                "chance": 0.1
            }
        }]
    })

    // 冻花
    event.custom({
        "type": "lychee:block_interacting",
        "item_in": {
            "item": 'minecraft:powder_snow_bucket'
        },
        "block_in": 'minecraft:cherry_sapling',
        "post": [{
            "type": "drop_item",
            "id": 'winterly:frozen_flower',
            'count': 10
        }, {
            "type": "drop_item",
            "id": 'minecraft:bucket',
            'count': 1
        }, {
            "type": "place",
            "block": 'minecraft:air'
        }]
    })

    // 冻草
    event.custom({
        "type": "lychee:block_interacting",
        "item_in": {
            "item": 'minecraft:powder_snow_bucket'
        },
        "block_in": 'minecraft:short_grass',
        "post": [{
            "type": "drop_item",
            "id": 'winterly:frozen_grass'
        }, {
            "type": "drop_item",
            "id": 'minecraft:bucket',
            'count': 1
        }, {
            "type": "place",
            "block": 'minecraft:air'
        }]
    })

    // 虞美人
    event.custom({
        "type": "lychee:item_burning",
        "item_in": {
            "item": 'winterly:frozen_flower'
        },
        "post": [
            {
                "type": "drop_item",
                "id": 'minecraft:poppy'
            }
        ]
    })

    // 寒潮图腾
    event.custom({
        "type": "lychee:item_inside",
        "item_in": {
            "item": 'kubejs:polar_lights_dust'
        },
        "block_in": {
            "blocks": ["powder_snow_cauldron"],
            "state": {
                "level": "3"
            }
        },
        "if": {
            "type": "weather",
            "weather": "rain"
        },
        "post": [
            {
                "type": "drop_item",
                "id": 'kubejs:cold_wave_totem',
                "count": 2
            },
            {
                "type": "place",
                "block": "cauldron"
            }
        ],
        "time": 1
    })

    // 雪瓶
    event.custom({
        "type": "lychee:block_interacting",
        "item_in": {
            "item": 'minecraft:glass_bottle'
        },
        "block_in": {
            "blocks": ["powder_snow_cauldron"],
            "state": {
                "level": "3"
            }
        },
        "post": [{
            "type": "drop_item",
            "id": 'kubejs:snow_bottle',
            'count': 1
        }, {
            "type": "place",
            "block": "powder_snow_cauldron[level=2]"
        }]
    })
    event.custom({
        "type": "lychee:block_interacting",
        "item_in": {
            "item": 'minecraft:glass_bottle'
        },
        "block_in": {
            "blocks": ["powder_snow_cauldron"],
            "state": {
                "level": "2"
            }
        },
        "post": [{
            "type": "drop_item",
            "id": 'kubejs:snow_bottle',
            'count': 1
        }, {
            "type": "place",
            "block": "powder_snow_cauldron[level=1]"
        }]
    })
    event.custom({
        "type": "lychee:block_interacting",
        "item_in": {
            "item": 'minecraft:glass_bottle'
        },
        "block_in": {
            "blocks": ["powder_snow_cauldron"],
            "state": {
                "level": "1"
            }
        },
        "post": [{
            "type": "drop_item",
            "id": 'kubejs:snow_bottle',
            'count': 1
        }, {
            "type": "place",
            "block": 'minecraft:cauldron'
        }]
    })

    // 炼药锅
    event.custom({
        "type": "lychee:block_interacting",
        "item_in": {
            "item": 'kubejs:snow_bottle'
        },
        "block_in": {
            "blocks": ['minecraft:cauldron']
        },
        "post": [{
            "type": "drop_item",
            "id": 'minecraft:glass_bottle',
            'count': 1
        }, {
            "type": "place",
            "block": "powder_snow_cauldron[level=1]"
        }]
    })
    event.custom({
        "type": "lychee:block_interacting",
        "item_in": {
            "item": 'kubejs:snow_bottle'
        },
        "block_in": {
            "blocks": ["powder_snow_cauldron"],
            "state": {
                "level": "1"
            }
        },
        "post": [{
            "type": "drop_item",
            "id": 'minecraft:glass_bottle',
            'count': 1
        }, {
            "type": "place",
            "block": "powder_snow_cauldron[level=2]"
        }]
    })
    event.custom({
        "type": "lychee:block_interacting",
        "item_in": {
            "item": 'kubejs:snow_bottle'
        },
        "block_in": {
            "blocks": ["powder_snow_cauldron"],
            "state": {
                "level": "2"
            }
        },
        "post": [{
            "type": "drop_item",
            "id": 'minecraft:glass_bottle',
            'count': 1
        }, {
            "type": "place",
            "block": "powder_snow_cauldron[level=3]"
        }]
    })

    // 铜锭
    event.custom({
        "type": "lychee:item_inside",
        "item_in": {
            "item": 'minecraft:raw_copper',
            'count': 2
        },
        "block_in": {
            "blocks": ['tintedcampfires:orange_campfire']
        },
        "post": [
            {
                "type": "drop_item",
                "id": 'minecraft:copper_ingot',
                'count': 2
            },
            {
                "type": "place",
                "block": "minecraft:campfire"
            }
        ]
    })

    // 蜘蛛刷怪蛋
    event.custom({
        "type": "lychee:block_interacting",
        "item_in": {
            "item": 'minecraft:spider_eye'
        },
        "block_in": 'naturesaura:animal_spawner',
        "post": [{
            "type": "drop_item",
            "id": 'minecraft:spider_spawn_egg',
            'count': 1
        }, {
            "type": "place",
            "block": 'minecraft:air'
        }]
    })

    // 牛刷怪蛋
    event.custom({
        "type": "lychee:block_interacting",
        "item_in": {
            "item": 'minecraft:leather'
        },
        "block_in": 'naturesaura:animal_spawner',
        "post": [{
            "type": "drop_item",
            "id": 'minecraft:cow_spawn_egg',
            'count': 1
        }]
    })


    // 火焰弹
    event.custom({
        "type": "lychee:item_inside",
        "item_in": {
            "item": 'mekanism:block_charcoal'
        },
        "block_in": {
            "blocks": ['tintedcampfires:yellow_campfire']
        },
        "post": [
            {
                "type": "drop_item",
                "id": 'minecraft:fire_charge',
                'count': 1
            },
            {
                "type": "place",
                "block": "minecraft:air"
            }
        ]
    })

    // 火焰
    dye_list.forEach(dy => {
        event.custom({
            "type": "lychee:block_interacting",
            "item_in": {
                "item": 'minecraft:shears'
            },
            "block_in": `tintedcampfires:${dy}_campfire`,
            "post": [{
                "type": "prevent_default"
            }, {
                "type": "drop_item",
                "id": `kubejs:${dy}_fire`,
                'count': 1
            }, {
                "type": "place",
                "block": 'minecraft:campfire'
            }, {
                "type": "damage_item"
            }]
        })
        event.custom({
            "type": "lychee:block_interacting",
            "item_in": {
                "item": `minecraft:${dy}_dye`
            },
            "block_in": 'minecraft:campfire',
            "post": [
                {
                    "type": "place",
                    "block": `tintedcampfires:${dy}_campfire`
                }
            ]
        })
    })

    // 彩虹营火
    event.custom({
        "type": "lychee:block_interacting",
        "item_in": {
            "item": 'kubejs:rainbow_dye'
        },
        "block_in": 'minecraft:campfire',
        "post": [
            {
                "type": "place",
                "block": 'kubejs:rainbow_campfire'
            }
        ]
    })
    // 彩虹火焰
    event.custom({
        "type": "lychee:block_interacting",
        "item_in": {
            "item": 'minecraft:shears'
        },
        "block_in": 'kubejs:rainbow_campfire',
        "post": [{
            "type": "prevent_default"
        }, {
            "type": "drop_item",
            "id": 'kubejs:rainbow_fire',
            'count': 1
        }, {
            "type": "place",
            "block": 'minecraft:campfire'
        }, {
            "type": "damage_item"
        }]
    })

    // 雪魄
    event.custom({
        "type": "lychee:block_interacting",
        "item_in": {
            "item": 'minecraft:quartz'
        },
        "block_in": 'plushies:snow_golem_plushie',
        "post": [
            {
                "type": "drop_item",
                "id": 'kubejs:snow_spirit'
            }, {
                "type": "place",
                "block": 'plushies:snow_golem_plushie'
            }
        ]
    })

    // 陨石
    event.custom({
        "type": "lychee:dripstone_dripping",
        "comment": `${Text.translate('tooltip.ore.copper').getString()}`,
        "source_block": 'ae2:sky_stone_block',
        "target_block": 'minecraft:smooth_stone',
        "post": [
            {
                "type": "place",
                "block": 'ae2:sky_stone_block'
            }
        ]
    })

    // 苦力怕刷怪蛋
    event.custom({
        "type": "lychee:block_interacting",
        "item_in": {
            "item": 'minecraft:glowstone_dust'
        },
        "block_in": 'naturesaura:animal_spawner',
        "post": [{
            "type": "drop_item",
            "id": 'minecraft:creeper_spawn_egg',
            'count': 1
        }, {
            "type": "place",
            "block": 'minecraft:air'
        }]
    })

    // 史莱姆刷怪蛋
    event.custom({
        "type": "lychee:block_interacting",
        "item_in": {
            "item": 'minecraft:slime_block'
        },
        "block_in": 'naturesaura:animal_spawner',
        "post": [{
            "type": "drop_item",
            "id": 'minecraft:slime_spawn_egg',
            'count': 1
        }, {
            "type": "place",
            "block": 'minecraft:air'
        }]
    })

    // 工作台
    event.custom({
        "type": "lychee:block_interacting",
        "item_in": {
            "item": 'winterly:icicle'
        },
        "block_in": 'winterly:snowguy',
        "post": [{
            "type": "place",
            "block": 'minecraft:crafting_table'
        }]
    })

    // 蚀刻酸
    event.custom({
        "type": "lychee:item_inside",
        "item_in": [{
            "item": 'pneumaticcraft:plastic',
            'count': 4
        },{
            "item": 'minecraft:bucket',
            'count': 1
        }],
        "block_in": {
            "blocks": ['kubejs:cold_crystal']
        },
        "post": [
            {
                "type": "drop_item",
                "id": 'pneumaticcraft:plastic_bucket',
                'count': 1
            },{
                "type": "place",
                "block": 'minecraft:air'
            }
        ]
    })
})