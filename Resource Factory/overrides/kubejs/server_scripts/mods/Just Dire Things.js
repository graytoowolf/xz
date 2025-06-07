ServerEvents.recipes(event => {
    const { kubejs } = event.recipes

    event.replaceInput({ id: 'justdirethings:experienceholder' }, 'justdirethings:blazegold_ingot', 'alltheores:electrum_ingot')

    event.custom(
        {
            "type": "justdirethings:goospread",
            "craftingDuration": 4800,
            "id": "justdirethings:dire_diamond_block",
            "input": {
                "Name": 'immersiveengineering:duroplast'
            },
            "output": {
                "Name": 'minecraft:honeycomb_block',
                "Properties": {
                    "facing": "north"
                }
            },
            "tierRequirement": 3
        }
    )
})