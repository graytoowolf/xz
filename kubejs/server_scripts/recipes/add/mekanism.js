ServerEvents.recipes(event => {
    // 粗铜
    event.recipes.mekanism.crushing(Item.of('minecraft:raw_copper', 8), 'minecraft:copper_ore')

    // 氟石
    event.recipes.mekanism.crushing(Item.of('mekanism:fluorite_gem', 4), 'minecraft:echo_shard')

    // 钢制机壳
    event.shaped('mekanism:steel_casing', [
        'SES',
        'EOE',
        'SES'
    ], {
        O: 'kubejs:osmium_ingot',
        S: 'kubejs:steel_ingot',
        E: 'minecraft:emerald'
    })

    // 冶金灌注机
    event.replaceInput('mekanism:metallurgic_infuser', '#c:ingots/osmium', 'mekanism:steel_casing')

    // 灌注合金
    event.recipes.mekanism.metallurgic_infusing('mekanism:alloy_infused', 'kubejs:tin_ingot', '10 x mekanism:redstone', false)

    // 凋零骷髅刷怪蛋
    event.recipes.mekanism.metallurgic_infusing('minecraft:wither_skeleton_spawn_egg', 'minecraft:cow_spawn_egg', '1 x mekanism:carbon', true)

    // 末影合金矿
    event.recipes.mekanism.combining('enderite:enderite_ore', '4x dimensionalpocketsii:dimensional_dust', 'oritech:fluxite')

    // 末影合金碎片
    event.recipes.mekanism.injecting('enderite:enderite_scrap', 'enderite:enderite_ore', '200x mekanism:ethene', false)

    // 公式装配
    event.replaceInput('mekanism:formulaic_assemblicator', 'mekanism:basic_control_circuit', 'kubejs:frozen_iron_ingot')
    event.replaceInput('mekanism:formulaic_assemblicator', 'mekanism:steel_casing', 'industrialforegoing:machine_frame_pity')

    // 合成配方
    event.replaceInput('mekanism:crafting_formula', 'mekanism:basic_control_circuit', 'kubejs:frozen_iron_ingot')

    // 气态幽匿物质
    event.recipes.mekanism.washing('mekanismgenerators:sculk_matter_gas', 'industrialforegoing:ether_gas', 'mekanismgenerators:fusion_fuel')

    //坚守者刷怪蛋
    event.recipes.mekanism.crystallizing('minecraft:warden_spawn_egg', '10000x mekanismgenerators:sculk_matter_gas')

    // 配置器
    event.shaped('mekanism:configurator', [
        'IS ',
        ' S ',
        ' S '
    ], {
        S: 'minecraft:stick',
        I: 'winterly:icicle'
    })

    // 裂变燃料
    event.recipes.mekanism.separating('2x mekanism:chlorine', '2x mekanism:fissile_fuel', '2x create_deep_dark:molten_echo')

    // 氘氚燃料
    event.recipes.mekanism.centrifuging('8x mekanismgenerators:fusion_fuel', '2x mekanism:nuclear_waste')
})
