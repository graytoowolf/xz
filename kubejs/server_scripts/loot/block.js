LootJS.modifiers(event => {
    // 铜矿
    event.addBlockModifier('minecraft:copper_ore')
        .removeLoot(['minecraft:raw_copper', 'minecraft:copper_ore'])
        .addLoot('minecraft:copper_ore')
    event.addBlockModifier('minecraft:deepslate_copper_ore')
        .removeLoot(['minecraft:raw_copper', 'minecraft:deepslate_copper_ore'])
        .addLoot('minecraft:deepslate_copper_ore')

    // 铁矿
    event.addBlockModifier('minecraft:iron_ore')
        .removeLoot(['minecraft:raw_iron', 'minecraft:iron_ore'])
        .addLoot('minecraft:iron_ore')
    event.addBlockModifier('minecraft:deepslate_iron_ore')
        .removeLoot(['minecraft:raw_iron', 'minecraft:deepslate_iron_ore'])
        .addLoot('minecraft:deepslate_iron_ore')

    // 随机作物
    event.addBlockModifier('kubejs:random_crop')
        .addLoot('kubejs:random_crop_seeds')
    event.addBlockModifier('kubejs:random_crop[age=7]')
        .pool(pool => {
            pool.name('random_crop')
            pool.rolls([5, 10])
            pool.bonusRolls(2)
            pool.addEntry(LootEntry.of('immersiveengineering:raw_nickel'))
            pool.addEntry(LootEntry.of('mekanism:raw_osmium'))
            pool.addEntry(LootEntry.of('mekanism:raw_tin'))
            pool.addEntry(LootEntry.of('immersiveengineering:raw_silver'))
            pool.addEntry(LootEntry.of('mekanism:raw_lead'))
        })

    // 红石矿
    event.addBlockModifier('minecraft:redstone_ore')
        .removeLoot(['minecraft:redstone', 'minecraft:redstone_ore'])
        .addLoot('minecraft:redstone_ore')
    event.addBlockModifier('minecraft:deepslate_redstone_ore')
        .removeLoot(['minecraft:redstone', 'minecraft:deepslate_redstone_ore'])
        .addLoot('minecraft:deepslate_redstone_ore')

    // 金矿
    event.addBlockModifier('minecraft:gold_ore')
        .removeLoot(['minecraft:raw_gold', 'minecraft:gold_ore'])
        .addLoot('minecraft:gold_ore')
    event.addBlockModifier('minecraft:deepslate_gold_ore')
        .removeLoot(['minecraft:raw_gold', 'minecraft:deepslate_gold_ore'])
        .addLoot('minecraft:deepslate_gold_ore')

    // 青金石矿
    event.addBlockModifier('minecraft:lapis_ore')
        .removeLoot(['minecraft:lapis_lazuli', 'minecraft:lapis_ore'])
        .addLoot('minecraft:lapis_ore')
    event.addBlockModifier('minecraft:deepslate_lapis_ore')
        .removeLoot(['minecraft:lapis_lazuli', 'minecraft:deepslate_lapis_ore'])
        .addLoot('minecraft:deepslate_lapis_ore')

    // 铅矿
    event.addBlockModifier('mekanism:lead_ore')
        .removeLoot(['mekanism:raw_lead', 'mekanism:lead_ore'])
        .addLoot('mekanism:lead_ore')
    event.addBlockModifier('mekanism:deepslate_lead_ore')
        .removeLoot(['mekanism:raw_lead', 'mekanism:deepslate_lead_ore'])
        .addLoot('mekanism:deepslate_lead_ore')

    // 锇矿
    event.addBlockModifier('mekanism:osmium_ore')
        .removeLoot(['mekanism:raw_osmium', 'mekanism:osmium_ore'])
        .addLoot('mekanism:osmium_ore')
    event.addBlockModifier('mekanism:deepslate_osmium_ore')
        .removeLoot(['mekanism:raw_osmium', 'mekanism:deepslate_osmium_ore'])
        .addLoot('mekanism:deepslate_osmium_ore')

    // 锡矿
    event.addBlockModifier('mekanism:tin_ore')
        .removeLoot(['mekanism:raw_tin', 'mekanism:tin_ore'])
        .addLoot('mekanism:tin_ore')
    event.addBlockModifier('mekanism:deepslate_tin_ore')
        .removeLoot(['mekanism:raw_tin', 'mekanism:deepslate_tin_ore'])
        .addLoot('mekanism:deepslate_tin_ore')

    // 银矿
    event.addBlockModifier('immersiveengineering:ore_silver')
        .removeLoot(['immersiveengineering:raw_silver', 'immersiveengineering:ore_silver'])
        .addLoot('immersiveengineering:ore_silver')
    event.addBlockModifier('immersiveengineering:deepslate_ore_silver')
        .removeLoot(['immersiveengineering:raw_silver', 'immersiveengineering:deepslate_ore_silver'])
        .addLoot('immersiveengineering:deepslate_ore_silver')

    // 镍矿
    event.addBlockModifier('immersiveengineering:ore_nickel')
        .removeLoot(['immersiveengineering:raw_nickel', 'immersiveengineering:ore_nickel'])
        .addLoot('immersiveengineering:ore_nickel')
    event.addBlockModifier('immersiveengineering:deepslate_ore_nickel')
        .removeLoot(['immersiveengineering:raw_nickel', 'immersiveengineering:deepslate_ore_nickel'])
        .addLoot('immersiveengineering:deepslate_ore_nickel')

    // 末影合金矿
    event.addBlockModifier('enderite:enderite_ore')
        .removeLoot(['enderite:raw_enderite', 'enderite:enderite_ore'])
        .addLoot('enderite:enderite_ore')

    // 光明催化剂
    event.addBlockModifier('kubejs:catalyze_block')
        .removeLoot(['kubejs:catalyze_block'])

    // 草
    event.addBlockModifier('minecraft:short_grass')
        .removeLoot(['immersiveengineering:seed'])
    event.addBlockModifier('minecraft:tall_grass')
        .removeLoot(['immersiveengineering:seed'])
})
