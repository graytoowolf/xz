ServerEvents.recipes(event => {
    const { kubejs } = event.recipes
    const { naturesaura } = event.recipes

    kubejs.shapeless('2x naturesaura:conversion_catalyst', 'naturesaura:conversion_catalyst')
    kubejs.shapeless('2x naturesaura:crushing_catalyst', 'naturesaura:crushing_catalyst')
    kubejs.shapeless('naturesaura:conversion_catalyst', 'chipped:smooth_yellow_concrete')
    kubejs.shapeless('naturesaura:crushing_catalyst', 'chipped:pegged_black_concrete')

    event.replaceInput({ type: "naturesaura:tree_ritual" }, 'minecraft:oak_sapling', 'occultism:otherworld_sapling')
    event.replaceInput({id:'naturesaura:calling_spirit'},'minecraft:diamond','minecraft:emerald')

    naturesaura.tree_ritual('64x mysticalagriculture:lapis_lazuli_essence',
        ['mysticalagriculture:nature_essence', 'mysticalagriculture:nature_essence', 'minecraft:blue_dye', 'naturesaura:gold_powder', 'minecraft:blue_dye', 'naturesaura:gold_powder'],
        'occultism:otherworld_sapling', 40)

    naturesaura.altar('2x mysticalagriculture:coal_essence', 'minecraft:coal', 5000, 10, 'naturesaura:crushing_catalyst')
    naturesaura.altar('8x minecraft:lapis_lazuli', 'mysticalagriculture:lapis_lazuli_essence', 2000, 20, 'naturesaura:conversion_catalyst')
    naturesaura.altar('naturesaura:nature_altar', 'minecraft:stone_bricks', 1000, 40, 'naturesaura:conversion_catalyst')

    naturesaura.offering('modular_machinery_reborn:controller[modular_machinery_reborn:machine="mmr:atomic_reconstruction_chamber"]', 'extendedcrafting:black_iron_block', 'alltheores:enderium_ingot')
})