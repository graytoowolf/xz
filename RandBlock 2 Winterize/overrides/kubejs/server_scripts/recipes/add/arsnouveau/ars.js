ServerEvents.recipes(event => {
    // 火山魔源通道
    event.shaped('ars_nouveau:volcanic_sourcelink', [
        ' G ',
        'BJB',
        ' G '
    ], {
        J: 'ars_nouveau:source_jar',
        G: 'ars_nouveau:source_gem',
        B: 'minecraft:brick'
    })

    // 魔源石
    event.shaped(Item.of('ars_nouveau:sourcestone', 4), [
        'OBO',
        'BGB',
        'OBO'
    ], {
        O: 'occultism:otherstone',
        B: 'minecraft:bone_block',
        G: 'ars_nouveau:source_gem'
    })

    // 附魔装置
    event.shaped('ars_nouveau:enchanting_apparatus', [
        'GSG',
        'LAL',
        'GSG'
    ], {
        S: 'ars_nouveau:sourcestone',
        L: 'naturesaura:gold_leaf',
        G: 'naturesaura:gold_powder',
        A: 'occultism:spirit_attuned_gem'
    })

    // 奥术核心
    event.shaped('ars_nouveau:arcane_core', [
        'SSS',
        'LGL',
        'SSS'
    ], {
        L: 'naturesaura:gold_leaf',
        S: 'ars_nouveau:sourcestone',
        G: 'ars_nouveau:source_gem'
    })

    // 奥术基座
    event.shaped(Item.of('ars_nouveau:arcane_pedestal', 8), [
        'SGS',
        'CSC',
        'CSC'
    ], {
        S: 'ars_nouveau:sourcestone',
        C: 'mekanism:block_charcoal',
        G: 'ars_nouveau:source_gem'
    })

    // 瓶塞
    event.shaped(Item.of('ars_nouveau:sourcestone_sconce', 4), [
        'GS ',
        'SL ',
        '   '
    ], {
        L: 'naturesaura:gold_leaf',
        G: 'ars_nouveau:source_gem',
        S: 'ars_nouveau:sourcestone'
    })

    // 星宝石挖掘工帽
    event.shaped('starbunclemania:star_miner', [
        'III',
        'I I',
        '   '
    ], {
        I: 'minecraft:copper_ingot'
    })

    // 星宝石建筑工帽
    event.shaped('starbunclemania:star_build', [
        'III',
        'I I',
        'N N'
    ], {
        I: 'minecraft:copper_ingot',
        N: '#c:nuggets/copper'
    })

    // 灌注室
    event.shaped('ars_nouveau:imbuement_chamber', [
        'PIP',
        'P P',
        'PIP'
    ], {
        I: 'naturesaura:infused_iron',
        P: 'ars_nouveau:archwood_planks'
    })

    // 抄写台
    event.replaceInput('ars_nouveau:scribes_table', 'minecraft:gold_nugget', 'minecraft:iron_nugget')






})