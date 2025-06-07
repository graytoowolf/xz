ServerEvents.recipes(event => {
    const { kubejs } = event.recipes


    event.replaceInput({ id: 'tesseract:tesseract' }, 'minecraft:diamond_block', 'mysticalagriculture:dye_essence')
    event.replaceInput({ id: 'clickmachine:click_machine' }, 'minecraft:chorus_flower', 'mysticalagriculture:dye_essence')
    event.replaceInput({ id: 'functionalstorage:linking_tool' }, 'minecraft:diamond', 'minecraft:ender_pearl')
    event.replaceInput({ id: 'functionalstorage:configuration_tool' }, 'minecraft:emerald', 'occultism:spirit_attuned_gem')
    event.replaceInput({ mod: 'buildinggadgets2' }, 'minecraft:lapis_lazuli', 'minecraft:amethyst_shard')
    event.replaceInput({ mod: 'buildinggadgets2' }, 'minecraft:emerald', 'ars_nouveau:source_gem')
    event.replaceInput({ mod: 'buildinggadgets2' }, 'minecraft:diamond', 'occultism:spirit_attuned_gem')
    event.replaceInput({ id: 'fluxnetworks:flux_core' }, 'minecraft:ender_eye', 'oritech:biomass_block')



    kubejs.shapeless('kubejs:mixed_dust', '9x kubejs:small_mixed_dust')
    kubejs.shapeless('9x kubejs:small_mixed_dust', 'kubejs:mixed_dust')
    kubejs.shapeless('4x minecraft:echo_shard', 'minecraft:sculk')
    kubejs.shapeless('integrateddynamics:menril_sapling', ['mysticalagriculture:wood_essence', 'occultism:spirit_attuned_gem', 'mysticalagriculture:nature_essence'])
    kubejs.shapeless('minecraft:netherite_scrap', 'minecraft:netherite_ingot')
    kubejs.shapeless('4x minecraft:quartz', 'minecraft:quartz_block')
    kubejs.shapeless('silentgear:crimson_iron_ore', ['minecraft:netherrack', 'mysticalagriculture:dye_essence', 'minecraft:iron_ingot'])
    kubejs.shapeless('oritech:creative_tank_block', 'mekanism:creative_fluid_tank')
    kubejs.shapeless('4x minecraft:pointed_dripstone', ['ars_nouveau:source_gem', "#c:stones", "#c:stones", "#c:stones", "#c:stones"])
    kubejs.shapeless('rftoolsutility:crafter2', 'rftoolsutility:crafter2')
    kubejs.shapeless('rftoolsutility:crafter3', 'rftoolsutility:crafter3')
    kubejs.shapeless('4x minecraft:clay_ball', 'minecraft:clay')

    
    kubejs.shaped('minecraft:bucket', ['   ', 'a a', ' a '], { a: "minecraft:copper_ingot" })
    kubejs.shaped('8x minecraft:netherrack', ['aaa', 'aba', 'aaa'], { a: 'ars_nouveau:sourcestone', b: 'ars_nouveau:manipulation_essence' })
    kubejs.shaped('minecraft:netherite_upgrade_smithing_template', ['aba', 'aca', 'aaa'], { a: 'minecraft:diamond', b: 'minecraft:netherite_scrap', c: 'minecraft:netherrack' })
    kubejs.shaped('2x kubejs:lens_cube', ['aba', 'cdc', 'aea'],
        {
            a: 'solarflux:ender_glass',
            b: 'kubejs:overload_core_upgrade',
            c: 'actuallyadditions:empowered_emeradic_crystal',
            d: 'actuallyadditions:lens_of_color',
            e: 'oritech:heisenberg_compensator'
        }
    )
    kubejs.shaped('kubejs:alloy_gear', [' a ', 'a a', ' a '], { a: 'kubejs:alloy_ingots' })
    kubejs.shaped('kubejs:data_storage_core', ['aba', 'bcb', 'aba'], { a: 'actuallyadditions:empowered_emeradic_crystal_block', b: 'advanced_ae:data_entangler', c: 'megacells:cell_component_256m' })
    kubejs.shaped('kubejs:storage_matrix', ['aba', 'bcb', 'aba'], { a: 'extendedae:machine_frame', b: 'appflux:core_1m', c: 'kubejs:data_storage_core' })
    kubejs.shaped('minecraft:stone_sword', [' a ', ' a ', ' a '], { a: 'minecraft:cobblestone' })
    kubejs.shaped('rftoolsutility:syringe', ['  a', ' b ', 'b  '], { a: 'occultism:spirit_attuned_gem', b: 'minecraft:glass' })
    kubejs.shaped('notenoughwands:acceleration_wand', ['ab ', 'bc ', '  c'], { a: 'ars_nouveau:wilden_tribute', b: 'minecraft:netherite_scrap', c: 'notenoughwands:advanced_wand_core' })


    //永恒星光
    kubejs.shaped('8x eternal_starlight:chiseled_voidstone', ['aaa', 'aba', 'aaa'], { a: 'occultism:otherstone', b: 'mysticalagriculture:nature_essence' })
    kubejs.shaped('8x minecraft:deepslate', ['aaa', 'aba', 'aaa'], { a: 'occultism:otherstone', b: 'ars_nouveau:manipulation_essence' })


    //寂静宝石
    kubejs.shapeless('silentgear:raw_crimson_iron', ['minecraft:raw_iron', 'mysticalagriculture:dye_essence'])
    kubejs.shapeless('silentgear:raw_azure_silver', ['minecraft:raw_gold', 'mysticalagriculture:dye_essence'])


    //塑料
    kubejs.shapeless('2x oritech:plastic_sheet', 'pneumaticcraft:plastic')
    kubejs.shapeless('2x oritech:plastic_sheet', 'industrialforegoing:plastic')
    kubejs.shapeless('pneumaticcraft:plastic', 'industrialforegoing:plastic')
    kubejs.shapeless('industrialforegoing:plastic', 'pneumaticcraft:plastic')
    kubejs.shapeless('pneumaticcraft:plastic', '2x oritech:plastic_sheet')
    kubejs.shapeless('industrialforegoing:plastic', '2x oritech:plastic_sheet')

    


    //寂静宝石
    kubejs.shaped('silentgear:nether_banana', ['  a', ' ab', 'ab '], { a: 'mysticalagriculture:nature_essence', b: 'mysticalagriculture:nether_essence' })


    //简单村民
    kubejs.shaped('easy_villagers:inventory_viewer', ['aaa', 'aba', 'ccc'], { a: 'minecraft:glass_pane', b: 'minecraft:redstone', c: 'stellaris:heavy_metal_ingot' })


    //抽屉
    event.replaceInput({ id: 'functionalstorage:armory_cabinet' }, 'minecraft:netherite_ingot', 'extendedcrafting:black_iron_ingot')



})