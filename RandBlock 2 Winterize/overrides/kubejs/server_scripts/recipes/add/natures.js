ServerEvents.recipes(event => {
    // 闪耀纤维
    event.shaped(Item.of('naturesaura:gold_fiber', 4), [
        'OPO',
        'PIP',
        'OPO'
    ], {
        I: 'winterly:icicle_bars',
        P: '#minecraft:planks',
        O: 'occultism:otherworld_ashes'
    })

    // 瓶与塞
    event.shapeless('naturesaura:bottle_two_the_rebottling', ['minecraft:glass_bottle', 'ars_nouveau:sourcestone_sconce'])

    // 祭祀台
    event.shaped('naturesaura:offering_table', [
        'SIS',
        'TST',
        'LLL'
    ], {
        S: 'minecraft:stone',
        L: '#minecraft:logs',
        I: 'naturesaura:infused_iron',
        T: 'naturesaura:token_sorrow'
    })

    // 含杂橙色粉笔
    event.recipes.naturesaura.tree_ritual('occultism:chalk_orange_impure', ['occultism:chalk_white_impure', 'naturesaura:gold_leaf', 'minecraft:bone_meal', 'winterly:icicle'], 'minecraft:cherry_sapling', 100)

    // 含杂灰色粉笔
    event.recipes.naturesaura.tree_ritual('occultism:chalk_gray_impure', ['occultism:chalk_white_impure', 'occultism:otherstone', 'minecraft:bone_meal', 'winterly:icicle'], 'minecraft:cherry_sapling', 100)

    // 粘土
    event.recipes.naturesaura.tree_ritual(Item.of('minecraft:clay', 8), ['naturesaura:aura_bloom', 'naturesaura:aura_bloom', 'naturesaura:aura_bloom', 'naturesaura:aura_bloom', 'minecraft:snowball', 'minecraft:snowball', 'minecraft:snowball', 'minecraft:snowball'], 'minecraft:cherry_sapling', 40)

    // 魔源宝石
    event.recipes.naturesaura.tree_ritual(Item.of('ars_nouveau:source_gem', 8), ['minecraft:snowball', 'minecraft:snowball', 'minecraft:snowball', 'minecraft:snowball', 'minecraft:snowball', 'minecraft:snowball', 'minecraft:snowball', 'minecraft:snowball'], 'minecraft:cherry_sapling', 400)

    // 愉悦印记
    event.recipes.naturesaura.tree_ritual(Item.of('naturesaura:token_joy', 4), ['naturesaura:aura_bottle[naturesaura:aura_bottle_data={aura_type:"naturesaura:overworld"}]', 'minecraft:torch', 'naturesaura:aura_bloom', 'naturesaura:gold_leaf', 'naturesaura:gold_leaf', 'ars_nouveau:source_gem'], 'minecraft:cherry_sapling', 200)

    // 忧伤印记
    event.recipes.naturesaura.tree_ritual(Item.of('naturesaura:token_sorrow', 4), ['naturesaura:aura_bottle[naturesaura:aura_bottle_data={aura_type:"naturesaura:overworld"}]', 'minecraft:torch', 'naturesaura:aura_bloom', 'minecraft:glass', 'minecraft:glass', 'ars_nouveau:source_gem'], 'minecraft:cherry_sapling', 200)

    // 环境之眼
    event.recipes.naturesaura.tree_ritual('naturesaura:eye', ['naturesaura:gold_leaf', 'naturesaura:gold_leaf', 'kubejs:cold_wave_totem', 'naturesaura:infused_iron'], 'minecraft:cherry_sapling', 200)

    // 艾瑟献祭之碗
    event.recipes.naturesaura.tree_ritual('occultism:iesnium_sacrificial_bowl', ['occultism:golden_sacrificial_bowl', 'ars_nouveau:source_gem_block', 'ars_nouveau:source_gem_block', 'ars_nouveau:source_gem_block'], 'minecraft:cherry_sapling', 100)

    // 紫水晶
    event.recipes.naturesaura.altar('minecraft:amethyst_shard', 'occultism:spirit_attuned_gem', 5000, 100)
    event.recipes.naturesaura.altar('minecraft:amethyst_block', 'occultism:spirit_attuned_crystal', 5000, 100)

    // 恶魂之泪
    event.recipes.naturesaura.altar('minecraft:ghast_tear', 'minecraft:gunpowder', 5000, 100)

    // 冰霜核心
    event.recipes.naturesaura.altar('kubejs:frost_core', 'winterly:packed_icicle_block', 10000, 1000)

    // 灌注铜锭
    event.recipes.naturesaura.altar('naturesaura:infused_iron', 'minecraft:copper_ingot', 3000, 60)

    // 灌注铜块
    event.recipes.naturesaura.altar('naturesaura:infused_iron_block', 'minecraft:copper_block', 30000, 100)

    // 蒲公英
    event.recipes.naturesaura.altar('minecraft:dandelion', 'minecraft:poppy', 3000, 100)


    // 彩虹粉笔
    event.recipes.naturesaura.offering('occultism:chalk_rainbow', 'occultism:chalk_white', 'coffeespawner:coffee')

    // 极光尘
    event.recipes.naturesaura.offering('kubejs:polar_lights_dust', 'kubejs:polar_lights_bottle', 'naturesaura:infused_iron_block')

    // 向日葵
    event.recipes.naturesaura.offering('minecraft:sunflower', 'minecraft:dandelion', 'coffeespawner:coffee')

    // 呼唤之魂
    event.shaped('naturesaura:calling_spirit', [
        ' B ',
        'IPI',
        ' B '
    ], {
        P: 'create:andesite_alloy',
        I: 'naturesaura:infused_iron',
        B: 'naturesaura:aura_bottle[naturesaura:aura_bottle_data={aura_type:"naturesaura:overworld"}]'
    })

})

