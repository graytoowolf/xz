ServerEvents.recipes(event => {
    event.custom(
        {
            type: "lychee:block_crushing",
            falling_block: 'minecraft:gravel',
            landing_block: 'minecraft:gold_block',
            post: [
                {
                    type: "prevent_default"
                },
                {
                    type: "place",
                    block: "*"
                },
                {
                    type: "drop_item",
                    id: 'kubejs:coin',
                    count: 2
                }
            ]
        }
    )
})