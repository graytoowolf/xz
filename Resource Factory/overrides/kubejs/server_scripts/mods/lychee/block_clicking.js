ServerEvents.recipes(event => {
    event.custom(
        {
            "type": "lychee:block_clicking",
            "item_in": {
                "item": "minecraft:snow_block"
            },
            "block_in": "naturesaura:crushing_catalyst",
            "post": [
                {
                    "type": "drop_item",
                    "id": "silentgear:pebble",
                    "count": 4,
                    "if": {
                        "type": "chance",
                        "chance": 0.5
                    }
                }
            ]
        }
    )
    event.custom(
        {
            "type": "lychee:block_clicking",
            "item_in": {
                "item": 'chipped:orange_concrete_panel'
            },
            "block_in": 'naturesaura:conversion_catalyst',
            "post": [
                {
                    "type": "drop_item",
                    "id": 'alltheores:copper_nugget',
                    "if": {
                        "type": "chance",
                        "chance": 0.5
                    }
                }
            ]
        }
    )
    event.custom(
        {
            "type": "lychee:block_clicking",
            "item_in": {
                "item": 'chipped:chisel'
            },
            "block_in": 'minecraft:bone_block',
            "post": [
                {
                    "type": "prevent_default"
                },
                {
                    "type": "place",
                    "block": 'minecraft:skeleton_skull'
                }
            ]
        }
    )
    event.custom(
        {
            "type": "lychee:block_clicking",
            "item_in": {
                "item": 'minecraft:zombie_spawn_egg'
            },
            "block_in": 'naturesaura:conversion_catalyst',
            "post": [
                {
                    "type": "drop_item",
                    "id": 'minecraft:witch_spawn_egg'
                }
            ]
        }
    )
    event.custom(
        {
            "type": "lychee:block_clicking",
            "item_in": {
                "item": 'oritech:biomass'
            },
            "block_in": 'minecraft:obsidian',
            "post": [
                {
                    "type": "drop_item",
                    "id": 'minecraft:dirt',
                    "count": 2
                }
            ]
        }
    )
})