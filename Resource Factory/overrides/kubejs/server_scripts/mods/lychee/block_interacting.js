ServerEvents.recipes(event => {
    event.custom(
        {
            "type": "lychee:block_interacting",
            "item_in": {
                "item": 'oritech:biomass'
            },
            "block_in": 'chipped:orange_concrete_panel',
            "post": [
                {
                    "type": "prevent_default"
                },
                {
                    "type": "drop_item",
                    "id": 'chipped:orange_concrete_panel',
                }
            ]
        }
    )
    event.custom(
        {
            "type": "lychee:block_interacting",
            "item_in": {
                "item": 'oritech:biomass'
            },
            "block_in": 'chipped:white_concrete_panel',
            "post": [
                {
                    "type": "prevent_default"
                },
                {
                    "type": "drop_item",
                    "id": 'chipped:white_concrete_panel',
                }
            ]
        }
    )
    event.custom(
        {
            "type": "lychee:block_interacting",
            "item_in": {
                "item": 'oritech:biomass'
            },
            "block_in": 'chipped:smooth_yellow_concrete',
            "post": [
                {
                    "type": "prevent_default"
                },
                {
                    "type": "drop_item",
                    "id": 'chipped:smooth_yellow_concrete',
                }
            ]
        }
    )
    event.custom(
        {
            "type": "lychee:block_interacting",
            "item_in": {
                "item": 'oreberriesreplanted:iron_oreberry'
            },
            "block_in": 'naturesaura:conversion_catalyst',
            "post": [
                {
                    "type": "drop_item",
                    "id": 'minecraft:quartz',
                    "count": 2
                }
            ]
        }
    )
    event.custom(
        {
            "type": "lychee:block_interacting",
            "item_in": {
                "item": 'minecraft:snowball'
            },
            "block_in": 'eternal_starlight:chiseled_voidstone',
            "post": [
                {
                    "type": "drop_item",
                    "id": 'eternal_starlight:orb_of_prophecy',
                    "count": 1
                }
            ]
        }
    )
    event.custom(
        {
            "type": "lychee:block_interacting",
            "item_in": {
                "item": 'oritech:biomass'
            },
            "block_in": 'minecraft:obsidian',
            "post": [
                {
                    "type": "drop_item",
                    "id": 'minecraft:grass_block',
                    "count": 2
                }
            ]
        }
    )
    event.custom(
        {
            "type": "lychee:block_interacting",
            "item_in": {
                "item": 'oritech:biomass'
            },
            "block_in": 'minecraft:cobblestone',
            "post": [
                {
                    "type": "place",
                    "block": 'minecraft:mossy_cobblestone',
                }
            ]
        }
    )
    event.custom(
        {
            "type": "lychee:block_interacting",
            "item_in": {
                "item": 'mysticalagriculture:dye_essence'
            },
            "block_in": 'occultism:golden_sacrificial_bowl',
            "post": [
                {
                    "type": "place",
                    "block": 'occultism:iesnium_sacrificial_bowl',
                }
            ]
        }
    )
    event.custom(
        {
            "type": "lychee:block_interacting",
            "item_in": {
                "item": 'extendedcrafting:black_iron_ingot'
            },
            "block_in": 'occultism:iesnium_sacrificial_bowl',
            "post": [
                {
                    "type": "place",
                    "block": 'occultism:eldritch_chalice',
                }
            ]
        }
    )
    event.custom(
        {
            "type": "lychee:block_interacting",
            "item_in": {
                "item": 'actuallyadditions:black_quartz'
            },
            "block_in": 'actuallyadditions:iron_casing',
            "post": [
                {
                    "type": "place",
                    "block": 'actuallyadditions:atomic_reconstructor',
                }
            ]
        }
    )
    event.custom(
        {
            "type": "lychee:block_interacting",
            "item_in": {
                "item": 'naturesaura:sky_ingot'
            },
            "block_in": 'ae2:controller',
            "post": [
                {
                    "type": "drop_item",
                    "id": 'ae2:pattern_encoding_terminal'
                },
                {
                    "type": "place",
                    "block": "minecraft:air"
                }
            ]
        }
    )
    event.custom(
        {
            "type": "lychee:block_interacting",
            "item_in": {
                "item": 'naturesaura:sky_ingot'
            },
            "block_in": 'actuallyadditions:iron_casing',
            "post": [
                {
                    "type": "place",
                    "block": 'ae2:interface'
                }
            ]
        }
    )
    event.custom(
        {
            "type": "lychee:block_interacting",
            "item_in": {
                "item": 'enderio:vibrant_alloy_ingot'
            },
            "block_in": 'ae2:interface',
            "post": [
                {
                    "type": "place",
                    "block": 'ae2:pattern_provider'
                }
            ]
        }
    )
    event.custom(
        {
            "type": "lychee:block_interacting",
            "item_in": {
                "item": 'actuallyadditions:empowered_diamatine_crystal'
            },
            "block_in": 'minecraft:deepslate_coal_ore',
            "post": [
                {
                    "type": "place",
                    "block": 'silentgems:white_diamond_block'
                }
            ]
        }
    )
    event.custom(
        {
            "type": "lychee:block_interacting",
            "item_in": {
                "item": 'actuallyadditions:empowered_void_crystal'
            },
            "block_in": 'minecraft:deepslate',
            "post": [
                {
                    "type": "place",
                    "block": 'minecraft:deepslate_coal_ore'
                }
            ]
        }
    )
})