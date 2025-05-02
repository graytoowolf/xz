Platform.getInfo('kubejs').name = 'Randblock2'

const custom_ingot = [
    'osmium',
    'tin',
    'lead',
    'uranium',
    'aluminum',
    'silver',
    'nickel',
    'zinc',
    'platinum',

    'bronze',
    'steel',
    'constantan',
    'electrum',
    'brass',
    'refined_obsidian',
    'refined_glowstone',
    'invar',
    'iesnium'

]

const token = [
    'adamant_token',
    'echo_token',
    'calculation_token',
    'copper_token',
    'diamond_token',
    'engineering_token',
    'glowstone_token',
    'gold_token',
    'iron_token',
    'lapis_token',
    'netherite_token',
    'recipe_token',
    'redstone_token',
    'sky_token'
]

StartupEvents.registry("item", (event) => {

    var stages = {}
    for (var i = 0; i < 5; i++) {
        stages[i] = 'stage' + i
        event.create(`${stages[i]}`).rarity('EPIC').fireResistant(true).maxStackSize(1).glow(true).tooltip(Text.translate(`tooltip.kubejs.stage${i}`)).texture('kubejs:item/stage')
    }
    event.create('stage_time_mix').rarity('EPIC').fireResistant(true).maxStackSize(1).tooltip(Text.translate('tooltip.kubejs.stage_time_mix')).texture('kubejs:item/stage')
    event.create('stage_time_max').rarity('EPIC').fireResistant(true).maxStackSize(1).tooltip(Text.translate('tooltip.kubejs.stage_time_max')).texture('kubejs:item/stage')
    event.create('stage_time_master').rarity('EPIC').fireResistant(true).maxStackSize(1).tooltip(Text.translate('tooltip.kubejs.stage_time_master')).texture('kubejs:item/stage')
    event.create('stage_off').rarity('EPIC').fireResistant(true).maxStackSize(1).tooltip(Text.translate('tooltip.kubejs.stage_off')).texture('kubejs:item/stage')

    event.create('frosty_cherry_sapling').maxStackSize(64)

    event.create('frost_core').maxStackSize(64).fireResistant(true)
    event.create('enchantment_core').maxStackSize(64).fireResistant(true).glow(true)

    event.create('capture_bottle').maxStackSize(8).fireResistant(true)
    event.create('polar_lights_bottle').maxStackSize(8).fireResistant(true).glow(true)
    event.create('polar_lights_dust').maxStackSize(64).fireResistant(true).glow(true)

    event.create('cold_wave_totem').maxStackSize(1).fireResistant(true)

    event.create('frozen_iron_ingot').maxStackSize(64).fireResistant(true)
    event.create('frozen_iron_nugget').maxStackSize(64).fireResistant(true)
    event.create('snow_spirit').maxStackSize(16).fireResistant(true)
    event.create('half_frozen_iron_ingot').maxStackSize(64).fireResistant(true)
    event.create('slime_frozen_iron_ingot').maxStackSize(64).fireResistant(true)

    event.create('lotus_fire').maxStackSize(16).fireResistant(true).burnTime(288000).glow(true).rarity('epic')

    event.create('emerald_credit_card').maxStackSize(1).rarity('EPIC').fireResistant(true).tooltip(Text.translate('tooltip.kubejs.card'))

    // 凭证
    token.forEach(to => {
        event.create(to).maxStackSize(8).rarity('EPIC').fireResistant(true)
    })

    // 硬币
    event.create('coin').maxStackSize(64).rarity('EPIC').fireResistant(true)
    event.create('paradox_coin').maxStackSize(1).rarity('EPIC').fireResistant(true).tooltip(Text.translate('tooltip.kubejs.paradox_coin'))

    // 熵能镐
    event.create('entropy_pickaxe', "pickaxe").speed(9).rarity('EPIC').fireResistant(true).maxStackSize(1).tooltip(Text.translate('tooltip.kubejs.entropy_pickaxe')).maxDamage(64).tier('gold')

    // 跃迁罗盘
    event.create('transition_compass').maxStackSize(1).rarity('EPIC').fireResistant(true).tooltip(Text.translate('tooltip.kubejs.transition_compass'))

    // 锻造模板抽奖箱
    event.create('upgrade_smithing_raffle_box').maxStackSize(8).rarity('EPIC').fireResistant(true)

    // 升级抽奖箱
    event.create('upgrade_raffle_box').maxStackSize(8).rarity('EPIC').fireResistant(true)

    // 工具抽奖箱
    event.create('tools_raffle_box').maxStackSize(8).rarity('EPIC').fireResistant(true)

    // 雪瓶
    event.create('snow_bottle').maxStackSize(1)

    // 彩虹染料
    event.create('rainbow_dye').maxStackSize(64)

    // 自定义机器升级
    event.create('custommachinery:custom_upgrade').maxStackSize(4)

    // 金属
    custom_ingot.forEach(ci => {
        if (['iesnium', 'refined_obsidian', 'refined_glowstone'].includes(ci)) {
            event.create(`${ci}_gear`).tag([`c:gears/${ci}`, 'c:gears'])
            event.create(`${ci}_plate`).tag([`c:plates/${ci}`, 'c:plates'])
            event.create(`${ci}_rod`).tag([`c:rods/${ci}`, 'c:rods/all_metal'])
        } else {
            event.create(`${ci}_ingot`).tag([`c:ingots/${ci}`, 'c:ingots'])
            event.create(`${ci}_nugget`).tag([`c:nuggets/${ci}`, 'c:nuggets'])
            event.create(`${ci}_dust`).tag([`c:dusts/${ci}`, 'c:dusts'])
            event.create(`${ci}_gear`).tag([`c:gears/${ci}`, 'c:gears'])
            event.create(`${ci}_plate`).tag([`c:plates/${ci}`, 'c:plates'])
            event.create(`${ci}_rod`).tag([`c:rods/${ci}`, 'c:rods/all_metal'])
        }

    })
    event.create('iesnium_dust').tag(['c:dusts/iesnium', 'c:dusts'])

    // 无限元件
    const infinity_cell = [
        ['dirt', 'minecraft:dirt'],
        ['icicle', 'winterly:icicle'],
        ['cyan_concrete', 'minecraft:cyan_concrete'],
        ['white_concrete', 'minecraft:white_concrete'],
    ]
    infinity_cell.forEach(([id, itemType]) => {
        event.create(`extendedae:${id}_infinity_cell`, 'custom_infinity_cell')
            .itemType(itemType)
            .tag('extendedae:infinity_cells')
            .texture(`kubejs:item/infinity_cell_${id}`)
    })
    event.create('extendedae:lava_infinity_cell', 'custom_infinity_cell')
        .fluidType('minecraft:lava')
        .tag('extendedae:infinity_cells')
        .texture(`kubejs:item/infinity_cell_lava`)
})

