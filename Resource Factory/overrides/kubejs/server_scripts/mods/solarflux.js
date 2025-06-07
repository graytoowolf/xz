ServerEvents.recipes(event => {
    const { kubejs } = event.recipes
    
    kubejs.shaped('solarflux:sp_1', ['aaa', 'bcb', 'ddd'],
        {
            a: "solarflux:mirror",
            b: "#minecraft:planks",
            c: "redstone",
            d: "minecraft:quartz",
        }
    )
    kubejs.shaped('solarflux:sp_2', ['aaa', 'bcb', 'ded'],
        {
            a: "solarflux:mirror",
            b: "#minecraft:planks",
            c: "redstone",
            d: "actuallyadditions:black_quartz",
            e: "minecraft:gold_ingot"
        }
    )
    kubejs.shaped('2x kubejs:photovoltaic_cell_source_gem', ['aaa', 'bbb', 'ccc'], { a: "#c:glass_blocks", b: "ars_nouveau:source_gem_block", c: 'solarflux:mirror' })
    kubejs.shaped('2x solarflux:sp_custom_source_gem_sp', ['aaa', 'bcd', 'efg'],
        {
            a: 'kubejs:photovoltaic_cell_source_gem',
            b: 'ars_nouveau:air_essence',
            c: 'ars_nouveau:item_detector',
            d: 'ars_nouveau:fire_essence',
            e: 'ars_nouveau:earth_essence',
            f: 'minecraft:gold_block',
            g: 'ars_nouveau:water_essence'
        }
    )
    kubejs.shaped('4x kubejs:photovoltaic_cell_summon_focus', ['abc', 'ded', 'fgf'],
        {
            a: 'ars_nouveau:wilden_horn',
            b: 'ars_nouveau:wilden_wing',
            c: 'ars_nouveau:wilden_spike',
            d: 'ars_nouveau:summon_focus',
            e: 'ars_nouveau:ritual_wilden_summon',
            f: 'solarflux:mirror',
            g: 'kubejs:photovoltaic_cell_source_gem'
        }
    )
    kubejs.shaped('2x solarflux:sp_custom_summon_focus_sp', ['aaa', 'bcb', 'bbb'],
        {
            a: 'kubejs:photovoltaic_cell_summon_focus',
            b: 'alltheores:electrum_block',
            c: 'ars_nouveau:source_jar'
        }
    )
    kubejs.shaped('4x kubejs:photovoltaic_cell_marid', ['aba', 'cdc', 'efe'],
        {
            a: 'occultism:echo_dust',
            b: ['occultism:afrit_essence', 'occultism:marid_essence'],
            c: 'occultism:otherworld_essence',
            d: 'occultism:iesnium_sacrificial_bowl',
            e: 'solarflux:mirror',
            f: 'occultism:iesnium_block'
        }
    )
    kubejs.shaped('2x solarflux:sp_custom_marid_sp', ['aaa', 'bcb', 'bbb'],
        {
            a: 'kubejs:photovoltaic_cell_marid',
            b: 'occultism:otherstone',
            c: 'oritech:enderic_lens'
        }
    )
    kubejs.shaped('2x kubejs:photovoltaic_cell_aura', ['aaa', 'bbb', 'cdc'],
        {
            a: 'naturesaura:infused_stone',
            b: 'naturesaura:tainted_gold',
            c: 'solarflux:photovoltaic_cell_4',
            d: 'naturesaura:infused_iron_block'
        }
    )
})