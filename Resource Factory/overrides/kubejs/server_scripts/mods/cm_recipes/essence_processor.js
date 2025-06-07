ServerEvents.recipes(event => {
    const { custommachinery } = event.recipes

    const fluid_item = [
        ['10x kubejs:liquid_prudentium_essence', 'mysticalagriculture:prudentium_essence'],
        ['10x kubejs:liquid_tertium_essence', 'mysticalagriculture:tertium_essence'],
        ['10x kubejs:liquid_imperium_essence', 'mysticalagriculture:imperium_essence'],
        ['10x kubejs:liquid_supremium_essence', 'mysticalagriculture:supremium_essence'],
        ['10x kubejs:liquid_insanium_essence', 'mysticalagradditions:insanium_essence'],
        ['10x kubejs:liquid_inferium_essence', 'mysticalagriculture:inferium_essence']
    ]

    custommachinery.custom_machine("minecraft:essence_processor", 30)
        .requireEnergyPerTick(4000)
        .requireItem('mysticalagriculture:inferium_essence')
        .produceFluid('10x kubejs:liquid_inferium_essence', "output_fluid_1")

    custommachinery.custom_machine("minecraft:essence_processor", 200)
        .requireEnergyPerTick(10000)
        .requireFluid('100x kubejs:liquid_inferium_essence')
        .requireFluid('100x ifeu:liquid_sculk_matter')
        .produceFluid('10x kubejs:liquid_prudentium_essence', "output_fluid_1")
        .produceFluid('10x kubejs:liquid_tertium_essence', "output_fluid_2").chance(0.75)
        .produceFluid('10x kubejs:liquid_imperium_essence', "output_fluid_3").chance(0.5)
        .produceFluid('10x kubejs:liquid_supremium_essence', "output_fluid_4").chance(0.25)
        .produceFluid('10x kubejs:liquid_insanium_essence', "output_fluid_5").chance(0.1)

    custommachinery.custom_machine("minecraft:essence_processor", 200)
        .requireEnergyPerTick(10000)
        .requireFluid('1000x kubejs:liquid_inferium_essence')
        .requireFluid("4000x advanced_ae:quantum_infusion_source")
        .produceFluid('10x kubejs:liquid_prudentium_essence', "output_fluid_1")
        .produceFluid('10x kubejs:liquid_tertium_essence', "output_fluid_2").chance(0.75)
        .produceFluid('10x kubejs:liquid_imperium_essence', "output_fluid_3").chance(0.5)
        .produceFluid('10x kubejs:liquid_supremium_essence', "output_fluid_4").chance(0.25)
        .produceFluid('10x kubejs:liquid_insanium_essence', "output_fluid_5").chance(0.1)

    custommachinery.custom_machine("minecraft:essence_processor", 200)
        .requireEnergyPerTick(10000)
        .requireFluid('4000x actuallyadditions:empowered_oil')
        .requireFluid('40x kubejs:liquid_supremium_essence')
        .requireItem('minecraft:wheat_seeds')
        .produceItem('mysticalagriculture:soulium_seed_base')

    fluid_item.forEach(([inputfluid, outputitem]) => {
        custommachinery.custom_machine("minecraft:essence_processor", 30)
            .requireEnergyPerTick(2000)
            .requireFluid(inputfluid)
            .produceItem(outputitem)
    });
})