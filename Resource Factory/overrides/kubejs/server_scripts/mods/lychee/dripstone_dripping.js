ServerEvents.recipes(event => {
    event.custom(
        {
            "type": "lychee:dripstone_dripping",
            "source_block": 'ars_nouveau:source_gem_block',
            "target_block": 'minecraft:diorite',
            "post": [
                {
                    "type": "place",
                    "block": 'minecraft:amethyst_block'
                }
            ]
        }
    )
    event.custom(
        {
            type: "lychee:dripstone_dripping",
            source_block: 'occultism:eldritch_chalice',
            target_block: 'minecraft:netherite_block',
            post: [
                {
                    type: 'drop_item',
                    id: 'kubejs:coin',
                }
            ]
        }
    )
})