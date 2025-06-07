ServerEvents.recipes(event => {
    const { kubejs } = event.recipes

    const add = [
        'ars_nouveau:sourceberry_bush',
        'minecraft:torchflower_seeds',
        'actuallyadditions:coffee_beans',
        'silentgear:flax_seeds',
        'silentgear:fluffy_seeds',
        'minecraft:pitcher_pod'
    ]

    add.forEach(item => {
        event.custom(
            {
                type: "farmingforblockheads:market",
                category: "farmingforblockheads:seeds",
                preset: 'farmingforblockheads:custom_presets',
                result: {
                    item: item
                }
            }
        )
    });
})
