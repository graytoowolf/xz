ServerEvents.recipes(event => {
    const { kubejs } = event.recipes

    event.replaceInput({ id: 'forbidden_arcanus:deorum_ingot' }, 'forbidden_arcanus:mundabitur_dust', 'forbidden_arcanus:stellarite_piece')

    kubejs.shapeless(Item.of('forbidden_arcanus:darkstone', 8), ['mysticalagriculture:dye_essence', "8x #c:stones"])
    kubejs.shapeless('forbidden_arcanus:eternal_stella', ['actuallyadditions:empowered_void_crystal', 'mysticalagriculture:dye_essence', 'actuallyadditions:empowered_emeradic_crystal', 'immersiveengineering:nugget_netherite'])
    kubejs.shapeless('16x forbidden_arcanus:mundabitur_dust', ['forbidden_arcanus:arcane_crystal_dust', 'minecraft:redstone', 'minecraft:blaze_powder', 'minecraft:bone_meal', 'minecraft:phantom_membrane', 'minecraft:gunpowder', 'mekanism_extras:alloy_spectrum'])
    kubejs.shapeless('forbidden_arcanus:xpetrified_orb', 'mysticalagriculture:experience_droplet')
    kubejs.shapeless('forbidden_arcanus:enchanted_soul', ['4x mysticalagriculture:dye_essence', '2x forbidden_arcanus:soul'])


    kubejs.shaped('forbidden_arcanus:divine_pact', ['aa ', '   ', '   '], { a: 'mekanism_extras:alloy_spectrum' })
    kubejs.shaped('forbidden_arcanus:artisan_relic', [' aa', '   ', '   '], { a: 'mekanism_extras:alloy_spectrum' })
    kubejs.shaped('forbidden_arcanus:elementarium', ['a a', '   ', '   '], { a: 'mekanism_extras:alloy_spectrum' })
})