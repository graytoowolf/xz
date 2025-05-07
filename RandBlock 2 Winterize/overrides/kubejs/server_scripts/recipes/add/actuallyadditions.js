ServerEvents.recipes(event => {
    // 粗铜
    event.recipes.actuallyadditions.crushing(Item.of('minecraft:raw_copper', 2), 'minecraft:copper_ore')

    // 铁锭
    event.recipes.actuallyadditions.laser('minecraft:iron_ingot', 'kubejs:slime_frozen_iron_ingot', 1000)

    // 原子再构机
    event.shaped('actuallyadditions:atomic_reconstructor', [
        'IFI',
        'FGF',
        'IFI'
    ], {
        I: 'kubejs:frozen_iron_ingot',
        F: 'kubejs:lotus_fire',
        G: 'minecraft:glass_pane'
    })

    // 机器升级
    event.recipes.actuallyadditions.empowering(
        Item.of('custommachinery:custom_upgrade', 4),
        'actuallyadditions:empowered_palis_crystal_block',
        [
            'sophisticatedbackpacks:upgrade_base',
            'sophisticatedbackpacks:upgrade_base',
            'sophisticatedbackpacks:upgrade_base',
            'sophisticatedbackpacks:upgrade_base'
        ],
        2000,
        Color.CYAN_DYE.argb,
        60
    )

    // 幻灵接口
    event.replaceInput('actuallyadditions:phantom_itemface', 'minecraft:phantom_membrane', 'minecraft:emerald')
})