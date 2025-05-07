ServerEvents.recipes(event => {
    event.shapeless('occultism:datura_seeds', [Item.of('winterly:icicle', 3)])
    event.shapeless('occultism:datura', [Item.of('occultism:datura_seeds', 3)])

    // 含杂白色粉笔
    event.shapeless('occultism:chalk_white_impure', [Item.of('minecraft:white_concrete', 2)])

    // 黄金献祭之碗
    event.shaped('occultism:golden_sacrificial_bowl', [
        'GGG',
        'GSG',
        'GGG'
    ], {
        S: 'occultism:sacrificial_bowl',
        G: 'occultism:spirit_attuned_gem'
    })

    // 屠刀
    event.shaped('occultism:butcher_knife', [
        ' IS',
        'IS ',
        'S  '
    ], {
        I: 'minecraft:copper_ingot',
        S: 'minecraft:stick'
    })

    // 魔灵同调宝石
    event.recipes.occultism.spirit_fire('occultism:spirit_attuned_gem', 'winterly:icicle')

    // 异界石
    event.recipes.occultism.spirit_fire('occultism:otherstone', 'minecraft:cyan_concrete')

    // 樱花树
    event.recipes.occultism.spirit_fire('minecraft:cherry_sapling', 'kubejs:frosty_cherry_sapling')

    // 草方块
    event.recipes.occultism.spirit_fire('minecraft:grass_block', 'minecraft:dirt')

    // 小帮手充电
    event.recipes.occultism.spirit_fire(Item.of('buildinggadgets2:gadget_copy_paste[buildinggadgets2:forge_energy=1000000]'), 'buildinggadgets2:gadget_copy_paste')
    event.recipes.occultism.spirit_fire(Item.of('buildinggadgets2:gadget_building[buildinggadgets2:forge_energy=500000]'), 'buildinggadgets2:gadget_building')
    event.recipes.occultism.spirit_fire(Item.of('buildinggadgets2:gadget_exchanging[buildinggadgets2:forge_energy=500000]'), 'buildinggadgets2:gadget_exchanging')
    event.recipes.occultism.spirit_fire(Item.of('buildinggadgets2:gadget_cut_paste[buildinggadgets2:paste_replace_toggle=1b,buildinggadgets2:forge_energy=5000000]'), 'buildinggadgets2:gadget_cut_paste')
    event.recipes.occultism.spirit_fire(Item.of('buildinggadgets2:gadget_destruction[buildinggadgets2:forge_energy=2000000]'), 'buildinggadgets2:gadget_destruction')

    // 至高木树苗
    event.recipes.occultism.spirit_fire('ars_nouveau:blue_archwood_sapling', 'ars_nouveau:red_archwood_sapling')
    event.recipes.occultism.spirit_fire('ars_nouveau:purple_archwood_sapling', 'ars_nouveau:blue_archwood_sapling')
    event.recipes.occultism.spirit_fire('ars_nouveau:green_archwood_sapling', 'ars_nouveau:purple_archwood_sapling')
    event.recipes.occultism.spirit_fire('ars_nouveau:red_archwood_sapling', 'ars_nouveau:green_archwood_sapling')

    // 甘蔗、竹子、仙人掌
    event.recipes.occultism.spirit_fire('minecraft:sugar_cane', 'minecraft:kelp')
    event.recipes.occultism.spirit_fire('minecraft:bamboo', 'minecraft:sugar_cane')
    event.recipes.occultism.spirit_fire('minecraft:cactus', 'minecraft:bamboo')


    // 含杂淡灰色粉笔
    event.recipes.occultism.ritual('occultism:chalk_light_gray_impure', ['minecraft:white_concrete', 'minecraft:white_concrete', 'occultism:spirit_attuned_gem', 'winterly:icicle'], 'occultism:chalk_white_impure', 'occultism:summon_foliot').id('custom_1')

    // 含杂黄绿色粉笔
    event.recipes.occultism.ritual('occultism:chalk_lime_impure', ['minecraft:cyan_concrete', 'minecraft:cyan_concrete', 'occultism:spirit_attuned_gem', 'occultism:datura'], 'occultism:chalk_white_impure', 'occultism:summon_foliot').id('custom_2')

    // 冻结的樱花树苗
    event.recipes.occultism.ritual('kubejs:frosty_cherry_sapling', ['winterly:icicle_block', 'winterly:icicle_block', 'winterly:icicle_block', 'winterly:icicle_block', 'occultism:otherworld_essence', 'occultism:otherworld_essence', 'occultism:spirit_attuned_gem', 'occultism:spirit_attuned_gem'], 'occultism:datura_seeds', 'occultism:summon_djinni').id('custom_3')

    // 泥土
    event.recipes.occultism.ritual('minecraft:dirt', ['winterly:icicle_block', 'winterly:icicle_block', 'winterly:icicle_block', 'winterly:icicle_block', 'occultism:otherstone', 'occultism:otherstone', 'occultism:otherstone', 'occultism:otherstone'], 'minecraft:cherry_sapling', 'occultism:summon_djinni').id('custom_4')

    // 骨块
    event.recipes.occultism.ritual(Item.of('minecraft:bone_block', 8), ['occultism:otherworld_essence', 'occultism:otherworld_essence', 'minecraft:white_concrete', 'minecraft:white_concrete', 'minecraft:white_concrete', 'minecraft:white_concrete', 'minecraft:white_concrete', 'minecraft:white_concrete'], 'winterly:icicle', 'occultism:summon_djinni').id('custom_5')

    // 异界树苗
    event.recipes.occultism.ritual('occultism:otherworld_sapling', ['minecraft:cherry_sapling', 'minecraft:cherry_sapling', 'minecraft:cherry_sapling', 'minecraft:cherry_sapling', 'minecraft:cherry_sapling', 'minecraft:cherry_sapling', 'minecraft:cherry_sapling', 'minecraft:cherry_sapling'], 'occultism:otherworld_essence', 'occultism:summon_djinni').id('custom_6')

    // 黄金叶
    event.recipes.occultism.ritual(Item.of('naturesaura:gold_leaf', 16), ['naturesaura:gold_fiber', 'naturesaura:gold_fiber', 'naturesaura:gold_fiber', 'naturesaura:gold_fiber'], '#minecraft:saplings', 'occultism:summon_djinni').id('custom_7')

    // 手工仪式挎包
    event.recipes.occultism.ritual(Item.of('occultism:ritual_satchel_t2'), ['occultism:chalk_rainbow'], 'occultism:chalk_rainbow', 'occultism:summon_djinni').id('custom_21')

    // 虚空粉笔
    event.recipes.occultism.ritual(Item.of('occultism:chalk_void'), ['occultism:chalk_rainbow', 'occultism:chalk_rainbow'], 'coffeespawner:coffee', 'occultism:summon_djinni').id('custom_22')

    // 模板管理器
    event.recipes.occultism.ritual('buildinggadgets2:template_manager', ['minecraft:cherry_log', 'minecraft:cherry_log', 'winterly:icicle_block', 'winterly:icicle_block', 'winterly:icicle', 'winterly:icicle', 'minecraft:paper', 'minecraft:paper'], 'naturesaura:gold_leaf', 'occultism:summon_djinni').id('custom_8')

    // 小帮手
    event.recipes.occultism.ritual('buildinggadgets2:gadget_copy_paste', ['occultism:otherworld_essence', 'occultism:otherworld_essence', 'occultism:spirit_attuned_gem', 'occultism:spirit_attuned_gem', 'occultism:otherworld_ashes', 'occultism:otherworld_ashes'], 'naturesaura:gold_leaf', 'occultism:summon_djinni').id('custom_9')
    event.recipes.occultism.ritual('buildinggadgets2:gadget_building', ['occultism:otherworld_essence', 'occultism:otherworld_essence', 'occultism:spirit_attuned_gem', 'occultism:spirit_attuned_gem', 'occultism:otherworld_ashes', 'occultism:otherworld_ashes'], 'minecraft:cherry_planks', 'occultism:summon_djinni').id('custom_10')
    event.recipes.occultism.ritual('buildinggadgets2:gadget_exchanging', ['occultism:otherworld_essence', 'occultism:otherworld_essence', 'occultism:spirit_attuned_gem', 'occultism:spirit_attuned_gem', 'occultism:otherworld_ashes', 'occultism:otherworld_ashes'], 'naturesaura:gold_powder', 'occultism:summon_djinni').id('custom_11')
    event.recipes.occultism.ritual('buildinggadgets2:gadget_cut_paste', ['occultism:otherworld_essence', 'occultism:otherworld_essence', 'occultism:spirit_attuned_gem', 'occultism:spirit_attuned_gem', 'occultism:otherworld_ashes', 'occultism:otherworld_ashes'], 'minecraft:paper', 'occultism:summon_djinni').id('custom_12')
    event.recipes.occultism.ritual('buildinggadgets2:gadget_destruction', ['occultism:otherworld_essence', 'occultism:otherworld_essence', 'occultism:spirit_attuned_gem', 'occultism:spirit_attuned_gem', 'occultism:otherworld_ashes', 'occultism:otherworld_ashes'], 'winterly:icicle', 'occultism:summon_djinni').id('custom_13')

    // 灵气花
    event.recipes.occultism.ritual(Item.of('naturesaura:aura_bloom', 8), ['minecraft:grass_block', 'minecraft:snowball', 'minecraft:snowball', 'occultism:otherworld_sapling', 'occultism:otherworld_sapling', 'occultism:otherworld_sapling', 'occultism:otherworld_sapling'], 'minecraft:cherry_sapling', 'occultism:summon_unbound_afrit').id('custom_14')

    // 烈焰至高木树苗
    event.recipes.occultism.ritual(Item.of('ars_nouveau:red_archwood_sapling', 4), ['occultism:spirit_attuned_gem', 'occultism:spirit_attuned_gem', 'occultism:spirit_attuned_gem', 'occultism:spirit_attuned_gem', 'ars_nouveau:source_gem', 'ars_nouveau:source_gem', 'ars_nouveau:source_gem', 'ars_nouveau:source_gem'], 'occultism:otherworld_sapling', 'occultism:summon_unbound_afrit').id('custom_15')

    // 熔岩桶
    event.recipes.occultism.ritual('minecraft:lava_bucket', ['naturesaura:aura_bottle[naturesaura:aura_bottle_data={aura_type:"naturesaura:overworld"}]', 'naturesaura:aura_bottle[naturesaura:aura_bottle_data={aura_type:"naturesaura:overworld"}]', 'naturesaura:token_joy'], 'minecraft:bucket', 'occultism:summon_unbound_afrit').id('custom_16')

    // 水桶
    event.recipes.occultism.ritual('minecraft:water_bucket', ['naturesaura:aura_bottle[naturesaura:aura_bottle_data={aura_type:"naturesaura:overworld"}]', 'naturesaura:aura_bottle[naturesaura:aura_bottle_data={aura_type:"naturesaura:overworld"}]', 'naturesaura:token_sorrow'], 'minecraft:bucket', 'occultism:summon_unbound_afrit').id('custom_17')

    // 自然祭坛
    event.recipes.occultism.ritual('naturesaura:nature_altar', ['minecraft:stone', 'minecraft:stone', 'minecraft:stone', 'naturesaura:gold_leaf', 'naturesaura:token_joy', 'naturesaura:token_joy'], 'minecraft:bricks', 'occultism:summon_unbound_afrit').id('custom_18')

    // 滴水石锥
    event.recipes.occultism.ritual(Item.of('minecraft:pointed_dripstone', 8), ['mekanism:dust_copper', 'mekanism:dust_copper', 'mekanism:dust_copper', 'mekanism:dust_copper', 'kubejs:frost_core'], 'kubejs:polar_lights_bottle', 'occultism:summon_unbound_afrit').id('custom_19')

    // 黏不拉几的凛铁锭
    event.recipes.occultism.ritual(Item.of('kubejs:slime_frozen_iron_ingot', 4), ['kubejs:half_frozen_iron_ingot', 'kubejs:half_frozen_iron_ingot', 'kubejs:half_frozen_iron_ingot', 'kubejs:half_frozen_iron_ingot', 'kubejs:half_frozen_iron_ingot', 'kubejs:half_frozen_iron_ingot', 'kubejs:half_frozen_iron_ingot', 'kubejs:half_frozen_iron_ingot'], 'minecraft:slime_ball', 'occultism:craft_afrit').id('custom_20')

    // 寒脉矿
    event.recipes.occultism.miner(WeightedRecipeResult.of('kubejs:frosting_ore', 8, 50), ['occultism:miner_djinni_ores[occultism:max_mining_time=300,occultism:rolls_per_operation=1]', 'occultism:miner_afrit_deeps[occultism:max_mining_time=200,occultism:rolls_per_operation=1]', 'occultism:miner_marid_master[occultism:max_mining_time=100,occultism:rolls_per_operation=1]', 'occultism:miner_ancient_eldritch[occultism:max_mining_time=15,occultism:rolls_per_operation=1]'])

    // 纯净墨水
    event.recipes.occultism.spirit_fire('occultism:purified_ink', 'dimensionalpocketsii:dimensional_dust')

    // 觉醒羽毛
    event.recipes.occultism.spirit_fire('occultism:awakened_feather', 'minecraft:paper')

    // 回响蛋糕
    event.recipes.occultism.miner(WeightedRecipeResult.of('create_deep_dark:echo_cake', 2, 10), ['occultism:miner_afrit_deeps[occultism:max_mining_time=200,occultism:rolls_per_operation=1]', 'occultism:miner_marid_master[occultism:max_mining_time=100,occultism:rolls_per_operation=1]', 'occultism:miner_ancient_eldritch[occultism:max_mining_time=15,occultism:rolls_per_operation=1]'])

    // 邪灵圣杯
    event.shaped(Item.of('occultism:eldritch_chalice', 2), [
        ' G ',
        'GOG',
        ' G '
    ], {
        G: 'minecraft:gold_block',
        O: 'occultism:eldritch_chalice'
    })

    // 无法破坏
    event.shapeless('occultism:miner_afrit_deeps[minecraft:unbreakable={},occultism:max_mining_time=200,occultism:rolls_per_operation=1]', ['occultism:miner_afrit_deeps[occultism:max_mining_time=200,occultism:rolls_per_operation=1]', 'minecraft:dragon_egg'])
})