ServerEvents.recipes(event => {
    const { kubejs } = event.recipes

    kubejs.shaped('8x pneumaticcraft:pressure_chamber_wall', ['aaa', 'cbc', 'aaa'], { a: 'pneumaticcraft:reinforced_bricks', b: 'mekanism:dust_refined_obsidian', c: 'alltheores:iridium_ingot' })


    event.custom(
        {
            "type": "pneumaticcraft:assembly_drill",
            "input": {
                "count": 4,
                "item": 'minecraft:honeycomb'
            },
            "program": "drill",
            "result": {
                "count": 1,
                "id": 'minecraft:honeycomb_block'
            }
        }
    )
    event.custom(
        {
            "type": "pneumaticcraft:assembly_laser",
            "input": {
                "count": 1,
                "item": 'minecraft:honeycomb_block'
            },
            "program": "laser",
            "result": {
                "count": 1,
                "id": 'productivebees:honey_treat'
            }
        }
    )
})