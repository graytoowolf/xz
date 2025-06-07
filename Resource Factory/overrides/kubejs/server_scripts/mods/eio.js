ServerEvents.recipes(event => {
    const { kubejs, enderio } = event.recipes

    kubejs.shaped('enderio:void_chassis', ['aba', 'bcb', 'aba'], { a: 'enderio:dark_steel_bars', b: 'enderio:dark_steel_ingot', c: 'enderio:grains_of_infinity' })

    enderio.alloy_smelting(
        Item.of('kubejs:alloy_ingots'),
        [Ingredient.of('silentgear:tyrian_steel_ingot'), Ingredient.of('enderio:weather_crystal'), 'naturesaura:depth_ingot']
    ).energy(8000)
    enderio.alloy_smelting(
        Item.of('enderio:ender_crystal'),
        [Ingredient.of('enderio:empty_soul_vial'), Ingredient.of('hostilenetworks:prediction[hostilenetworks:data_model="hostilenetworks:enderman"]'), 'enderio:vibrant_crystal']
    ).energy(4000)
    enderio.alloy_smelting(
        Item.of('mekanism:alloy_infused', 2),
        [Ingredient.of('actuallyadditions:empowered_restonia_crystal'), '3x enderio:copper_alloy_ingot']
    ).energy(1600)
    enderio.alloy_smelting(
        Item.of('mekanism:alloy_reinforced'),
        [Ingredient.of('actuallyadditions:empowered_diamatine_crystal'), '3x mekanism:alloy_infused']
    )
    enderio.alloy_smelting(
        Item.of('mekanism:alloy_atomic'),
        [Ingredient.of('mekanism:dust_refined_obsidian'), '3x mekanism:alloy_reinforced']
    ).energy(4000)
    enderio.alloy_smelting(
        Item.of('mekanism:dust_refined_obsidian', 2),
        [Ingredient.of('actuallyadditions:empowered_diamatine_crystal'), '3x mekanism:dust_obsidian']
    )
})