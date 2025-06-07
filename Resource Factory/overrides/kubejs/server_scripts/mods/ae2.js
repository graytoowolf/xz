ServerEvents.recipes(event => {
    const { kubejs } = event.recipes

    kubejs.shapeless('2x ae2:terminal', 'ae2:terminal')
    kubejs.shapeless('2x ae2:crafting_terminal', 'ae2:crafting_terminal')

    kubejs.shaped('ae2:condenser', ['aba', 'bcb', 'aba'], { a: 'ae2:quartz_block', b: 'ae2:quartz_vibrant_glass', c: 'ae2:fluix_pearl' })
    kubejs.shaped('ae2:controller', ['aba', 'bcb', 'aba'], { a: 'naturesaura:sky_ingot', b: 'minecraft:emerald', c: 'oritech:machine_core_4' })
    kubejs.shaped('2x ae2:fluix_glass_cable', ['ab ', 'b  ', '   '], { a: 'ae2:quartz_fiber', b: 'ars_nouveau:magebloom' })
    kubejs.shaped('ae2:quartz_fiber', ['aaa', 'bbb', 'aaa'], { a: "#c:glass_blocks", b: ['mekanism:dust_quartz', 'ae2:certus_quartz_dust'] })
})