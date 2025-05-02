ServerEvents.recipes(event => {
    // 冰凌
    event.shapeless(Item.of('winterly:icicle', 2), ['winterly:icicle'])

    // 炼药锅
    event.shaped('minecraft:cauldron', [
        'W W',
        'W W',
        'WWW'
    ], {
        W: 'winterly:icicle'
    })

    // 骷髅头
    event.shaped('minecraft:skeleton_skull', [
        'BBB',
        'IGI',
        'BBB'
    ], {
        B: 'minecraft:bone_block',
        G: 'naturesaura:gold_leaf',
        I: 'winterly:icicle'
    })

    // 粘土球
    event.shapeless(Item.of('minecraft:clay_ball', 4), ['minecraft:clay'])

    // 反光板
    event.shaped('solarcooker:reflector', [
        ' P ',
        ' I ',
        ' P '
    ], {
        P: 'minecraft:clay_ball',
        I: 'winterly:icicle_block'
    })

    // 太阳灶
    event.shaped('solarcooker:solar_cooker', [
        'GRG',
        'RCR',
        'RRR'
    ], {
        G: 'occultism:spirit_attuned_gem',
        R: 'solarcooker:reflector',
        C: '#c:chests/wooden'
    })

    // 桶
    event.shaped('minecraft:bucket', [
        'G G',
        'G G',
        'GGG'
    ], {
        G: 'ars_nouveau:source_gem'
    })

    // 暗淡脉冲水晶
    event.shaped('enigmaticunity:dim_source_generator', [
        '   ',
        ' A ',
        'SLS'
    ], {
        A: 'minecraft:amethyst_shard',
        S: 'naturesaura:infused_stone',
        L: 'ars_nouveau:blue_archwood_log'
    })

    // 熔炉
    event.shaped('minecraft:furnace', [
        'CCC',
        'CFC',
        'CCC'
    ], {
        C: '#mekanism:stone_crafting_materials',
        F: 'kubejs:frost_core'
    })

    // 铜粒
    event.smelting(Item.of('create:copper_nugget', 3), 'minecraft:raw_copper')
    event.blasting(Item.of('create:copper_nugget', 3), 'minecraft:raw_copper')

    // 捕获瓶
    event.shapeless(Item.of('kubejs:capture_bottle', 3), [Item.of('minecraft:glass_bottle', 3), 'naturesaura:infused_iron'])

    // 极光尘/块
    event.shapeless('kubejs:polar_lights_dust_block', [Item.of('kubejs:polar_lights_dust', 9)])
    event.shapeless(Item.of('kubejs:polar_lights_dust', 9), ['kubejs:polar_lights_dust_block'])

    // 橙色染料
    event.shapeless(Item.of('minecraft:orange_dye', 16), ['minecraft:copper_ingot', 'minecraft:copper_ingot'])

    // 打火石
    event.shapeless('minecraft:flint_and_steel', ['naturesaura:infused_iron', 'minecraft:flint'])

    // 皮革
    event.shaped('minecraft:leather', [
        'SSS',
        'STS',
        'SSS'
    ], {
        T: 'kubejs:cold_wave_totem',
        S: 'minecraft:string'
    })

    //  线
    event.shapeless(Item.of('minecraft:string', 5), ['minecraft:cobweb'])

    // 蜘蛛网
    event.shaped('minecraft:cobweb', [
        ' S ',
        'SSS',
        ' S '
    ], {
        S: 'minecraft:string'
    })

    // 石头
    event.shapeless('minecraft:stone', [Item.of('minecraft:stone_slab', 2)])
    event.shapeless('minecraft:smooth_stone', [Item.of('minecraft:smooth_stone_slab', 2)])

    // 绿色染料
    event.shapeless(Item.of('minecraft:green_dye', 16), [Item.of('naturesaura:infused_iron', 2)])

    // 粘液块
    event.shaped('minecraft:slime_block', [
        'CCC',
        'CGC',
        'CCC'
    ], {
        C: 'minecraft:cobweb',
        G: 'minecraft:green_dye'
    })

    // 凛铁粒
    event.smelting(Item.of('kubejs:frozen_iron_nugget', 1), 'kubejs:frozen_iron_ore')
    event.blasting(Item.of('kubejs:frozen_iron_nugget', 1), 'kubejs:frozen_iron_ore')
    event.shapeless(Item.of('kubejs:frozen_iron_nugget', 9), ['kubejs:frozen_iron_ingot'])
    event.shapeless('kubejs:frozen_iron_ingot', [Item.of('kubejs:frozen_iron_nugget', 9)])
    event.shapeless('kubejs:frozen_iron_block', [Item.of('kubejs:frozen_iron_ingot', 9)])
    event.shapeless(Item.of('kubejs:frozen_iron_ingot', 9), ['kubejs:frozen_iron_block'])

    // 高炉
    event.shaped('minecraft:blast_furnace', [
        'III',
        'IFI',
        'SSS'
    ], {
        I: 'naturesaura:infused_iron',
        F: 'minecraft:furnace',
        S: 'minecraft:smooth_stone'
    })

    // 剪刀
    event.shaped('minecraft:shears', [
        ' I ',
        'I  ',
        '   '
    ], {
        I: 'kubejs:frozen_iron_ingot'
    })

    // 染料生成器
    event.shaped('custommachinery:dye_generator', [
        'OYO',
        'YBY',
        'OYO'
    ], {
        B: 'kubejs:cold_crystal_bucket',
        O: 'minecraft:orange_dye',
        Y: 'minecraft:yellow_dye'
    })

    // 异火提取器
    event.shaped('custommachinery:fire_generator', [
        'ICI',
        'SFS',
        'IBI'
    ], {
        B: 'minecraft:bucket',
        S: 'ars_nouveau:source_jar',
        C: '#c:chests/wooden',
        I: 'naturesaura:infused_iron',
        F: 'kubejs:frozen_iron_ingot'
    })

    // 异火冶炼厂
    event.shaped('custommachinery:fire_smelter', [
        'ILI',
        'SFS',
        'ILI'
    ], {
        S: 'ars_nouveau:source_jar',
        F: 'kubejs:frozen_iron_ingot',
        I: 'naturesaura:infused_iron',
        L: 'kubejs:lotus_fire'
    })

    event.replaceInput({}, 'oritech:silicon', 'ae2:silicon')

    // 空白模板
    event.shaped(Item.of('modularrouters:blank_module', 2), [
        ' D ',
        'PPP',
        'III'
    ], {
        D: 'kubejs:polar_lights_dust',
        P: 'minecraft:paper',
        I: 'minecraft:iron_nugget'
    })

    // 空白升级
    event.shaped(Item.of('modularrouters:blank_upgrade', 2), [
        'PPI',
        'PDI',
        ' PI'
    ], {
        D: 'kubejs:polar_lights_dust',
        P: 'minecraft:paper',
        I: 'minecraft:iron_nugget'
    })

    // 投掷器 发射器
    event.replaceInput({ id: 'minecraft:dropper' }, 'minecraft:redstone', 'kubejs:polar_lights_dust')
    event.replaceInput({ id: 'minecraft:dispenser' }, 'minecraft:redstone', 'kubejs:polar_lights_dust')

    // 执行模块
    event.shaped('modularrouters:activator_module', [
        'IVI',
        'DBD',
        'LLL'
    ], {
        D: 'minecraft:dispenser',
        L: 'kubejs:polar_lights_dust',
        V: 'minecraft:lever',
        B: 'modularrouters:blank_module',
        I: 'kubejs:frozen_iron_ingot'

    })

    // 活塞
    event.shaped('minecraft:piston', [
        'PPP',
        'CIC',
        'CDC'
    ], {
        P: '#minecraft:planks',
        C: 'minecraft:cobblestone',
        I: 'minecraft:iron_ingot',
        D: 'kubejs:polar_lights_dust'
    })

    // 粉红色染料
    event.shapeless(Item.of('minecraft:pink_dye', 2), ['minecraft:red_dye', 'minecraft:white_dye'])

    // 极光玻璃
    event.shapeless('kubejs:polar_lights_glass', ['kubejs:polar_lights_dust', '#c:glass_blocks'])

    // 极光棱镜
    event.shaped('kubejs:polar_lights_prism', [
        'GGG',
        'GBG',
        'GGG'
    ], {
        G: 'kubejs:polar_lights_glass',
        B: 'minecraft:iron_block'
    })

    // 极光瓶
    event.shapeless('kubejs:polar_lights_bottle', ['kubejs:polar_lights_dust', 'minecraft:glass_bottle'])

    event.replaceInput({ mod: 'mekanism' }, 'mekanism:dust_coal', 'oritech:coal_dust')
    event.replaceOutput({ mod: 'mekanism' }, 'mekanism:dust_coal', 'oritech:coal_dust')

    // 铁方块生成器
    event.replaceInput({ id: 'cobblegengalore:crafting/block_gen_iron' }, 'minecraft:iron_ingot', 'kubejs:steel_ingot')

    // 雪块
    event.shapeless('minecraft:snow_block', [Item.of('kubejs:cold_wave_totem', 9)])

    // 钢块
    event.shapeless('immersiveengineering:storage_steel', ['mekanism:block_steel'])

    // 细雪桶
    event.shapeless('minecraft:powder_snow_bucket', ['winterly:snowguy', Item.of('minecraft:bucket')])

    // 铁矿
    event.shaped('minecraft:iron_ore', [
        'SSS',
        'SIS',
        'SSS'
    ], {
        I: 'kubejs:frozen_iron_ingot',
        S: 'minecraft:cobblestone'
    })

    // 铁矿
    event.shaped(Item.of('minecraft:iron_ore', 3), [
        'SSS',
        'SIS',
        'SSS'
    ], {
        I: 'kubejs:frozen_iron_ingot',
        S: 'minecraft:stone'
    })

    // 钢块
    event.stonecutting('immersiveengineering:storage_steel', 'kubejs:steel_block')

    //  魔法应力生成器
    event.shaped('custommachinery:stress_generator', [
        'LNL',
        'CAC',
        'LSL'
    ], {
        A: 'create:andesite_casing',
        S: 'kubejs:steel_block',
        L: 'create:andesite_alloy',
        N: 'ars_nouveau:source_jar',
        C: 'create:cogwheel'
    })

    // 序列装配机
    event.shaped('custommachinery:sequenced_assembly', [
        'PSP',
        'MAD',
        'PBP'
    ], {
        P: '#c:plates/brass',
        A: 'create:andesite_casing',
        M: 'create:mechanical_press',
        S: 'create:spout',
        D: 'create:deployer',
        B: 'create:belt_connector'
    })

    // 批量压印器
    event.shaped('custommachinery:batch_inscriber', [
        'ASA',
        'CIL',
        'AEA'
    ], {
        I: 'ae2:inscriber',
        A: 'create:andesite_alloy',
        C: 'ae2:calculation_processor_press',
        E: 'ae2:engineering_processor_press',
        L: 'ae2:logic_processor_press',
        S: 'ae2:silicon_press'
    })

    // 随机之种
    event.shaped('kubejs:random_crop_seeds', [
        'WOW',
        'TSL',
        'JNJ'
    ], {
        O: 'mekanism:osmium_ore',
        T: 'mekanism:tin_ore',
        S: 'immersiveengineering:ore_silver',
        L: 'mekanism:lead_ore',
        N: 'immersiveengineering:ore_nickel',
        W: 'minecraft:wheat_seeds',
        J: 'oritech:fluxite'
    })

    // 下界岩
    event.shaped('minecraft:netherrack', [
        'SSS',
        'SDS',
        'SSS'
    ], {
        D: 'dimensionalpocketsii:dimensional_shard',
        S: 'minecraft:stone'
    })

    // 雪傀儡
    event.shaped('plushies:snow_golem_plushie', [
        ' D ',
        ' S ',
        ' S '
    ], {
        D: 'dimensionalpocketsii:dimensional_shard',
        S: 'minecraft:snow_block'
    })

    // 绿宝石信用卡
    event.shapeless('kubejs:emerald_credit_card', ['minecraft:diamond_block', 'dimensionalpocketsii:dimensional_shard'])

    // 下界合金锭
    event.shapeless(Item.of('minecraft:netherite_ingot', 2), [Item.of('enderite:enderite_scrap', 4), Item.of('kubejs:electrum_ingot', 4), 'minecraft:nether_star'])

    // 幽匿块
    event.shaped('minecraft:sculk', [
        ' E ',
        'EFE',
        ' E '
    ], {
        E: 'minecraft:echo_shard',
        F: 'oritech:fluxite_block'
    })

    // 动物压榨室
    event.shaped('custommachinery:animal_press', [
        'FWF',
        'WSW',
        'FWF'
    ], {
        S: 'minecraft:slime_block',
        F: 'kubejs:frozen_iron_ingot',
        W: 'minecraft:stone_sword'
    })

    // 凭证组装室
    event.shaped('custommachinery:token_fabricate', [
        'LEL',
        'EBE',
        'LEL'
    ], {
        L: 'ifeu:liquid_sculk_matter_bucket',
        E: 'create_deep_dark:echo_block',
        B: 'create:brass_casing'
    }).replaceIngredient({ item: 'ifeu:liquid_sculk_matter_bucket' }, 'minecraft:bucket')

    // 计数过滤器
    event.shapeless('laserio:filter_count', ['laserio:filter_basic', 'minecraft:observer', 'minecraft:diamond'])

    dye_list.forEach(dl => {
        event.shapeless(`tintedcampfires:${dl}_campfire`, ['minecraft:campfire', `minecraft:${dl}_dye`])
    })

    // 野火灯笼
    event.shaped('torchmaster:feral_flare_lantern', [
        ' I ',
        'LGL',
        ' I '
    ], {
        L: '#minecraft:logs',
        I: 'winterly:icicle',
        G: 'naturesaura:gold_leaf'
    })

    // 天使方块
    event.shaped('utilitarian:angel_block', [
        ' W ',
        'W W',
        ' W '
    ], {
        W: 'minecraft:white_wool'
    })

    // 小麦种子
    event.shapeless(Item.of('minecraft:wheat_seeds', 9), [Item.of('minecraft:wheat', 9)])

    // 咖啡机
    event.shaped('coffeespawner:coffee_machine', [
        ' I ',
        'ICI',
        'GGG'
    ], {
        I: 'minecraft:iron_block',
        G: 'minecraft:gold_block',
        C: 'actuallyadditions:empty_cup'
    })

    // 镍锭
    event.shapeless(Item.of('kubejs:nickel_ingot', 9), ['#c:storage_blocks/nickel'])

    // 下界合金
    event.smelting('minecraft:netherite_scrap', 'minecraft:ancient_debris')
    event.blasting('minecraft:netherite_scrap', 'minecraft:ancient_debris')
})

if (Platform.isLoaded('tiab')) {
    ServerEvents.recipes(event => {
        event.replaceInput('tiab:time_in_a_bottle', 'minecraft:gold_ingot', 'minecraft:echo_shard')
        event.replaceInput('tiab:time_in_a_bottle', 'minecraft:diamond', 'minecraft:nether_star')
        event.replaceInput('tiab:time_in_a_bottle', 'minecraft:lapis_lazuli', 'mekanismgenerators:fusion_fuel_bucket')
        event.replaceInput('tiab:time_in_a_bottle', 'minecraft:glass_bottle', 'occultism:miner_afrit_deeps[occultism:max_mining_time=200,occultism:rolls_per_operation=1]')
    })
}
if (Platform.isLoaded('torcherino')) {
    ServerEvents.recipes(event => {
        event.replaceInput('torcherino:torcherino', 'minecraft:clock', 'ifeu:liquid_sculk_matter_bucket')
    })
}
