LootJS.modifiers(event => {
    event.addEntityModifier('minecraft:creeper')
        .addLoot('3x occultism:tallow')
        .matchMainHand('occultism:butcher_knife')

    event.addEntityModifier("minecraft:creeper")
        .addLoot('minecraft:creeper_spawn_egg')
        .matchOffHand('rftoolsutility:syringe')
        .randomChance(0.5)

    event.addEntityModifier("minecraft:skeleton")
        .addLoot("minecraft:skeleton_spawn_egg")
        .matchOffHand('rftoolsutility:syringe')
        .randomChance(0.5)

    event.addEntityModifier("minecraft:spider")
        .addLoot("minecraft:spider_spawn_egg")
        .matchOffHand('rftoolsutility:syringe')
        .randomChance(0.5)

    event.addEntityModifier("minecraft:zombie")
        .addLoot("minecraft:zombie_spawn_egg")
        .matchOffHand('rftoolsutility:syringe')
        .randomChance(0.5)

    event.addBlockModifier('minecraft:dark_oak_log')
        .addLoot(LootEntry.of('ars_nouveau:red_archwood_log').randomChance(0.5))
        .addLoot(LootEntry.of('ars_nouveau:blue_archwood_log').randomChance(0.5))
        .addLoot(LootEntry.of('ars_nouveau:green_archwood_log').randomChance(0.5))
        .addLoot(LootEntry.of('ars_nouveau:purple_archwood_log').randomChance(0.5))
        .matchPlayerCustom(player => {
            return player.hasEffect("occultism:third_eye")
        })
        .removeLoot('minecraft:dark_oak_log')

    const seedloots = ['minecraft:bamboo', 'minecraft:kelp', 'minecraft:pumpkin_seeds', 'minecraft:sweet_berries', 'minecraft:melon_seeds', 'minecraft:potato', 'minecraft:beetroot_seeds', 'minecraft:glow_berries', 'minecraft:carrot', 'minecraft:sugar_cane', 'minecraft:wheat_seeds']

    seedloots.forEach(seed => {
        event.addBlockModifier('ars_nouveau:magebloom_crop')
            .addLoot(LootEntry.of(seed).randomChance(0.5))
            .matchOffHand('minecraft:wheat_seeds')

    });

    const oreblockConfig = [
        ['minecraft:iron_ore', 'minecraft:raw_iron'],
        ['alltheores:lead_ore', 'alltheores:raw_lead'],
        ['alltheores:tin_ore', 'alltheores:raw_tin'],
        ['alltheores:nickel_ore', 'alltheores:raw_nickel'],
        ['alltheores:aluminum_ore', 'alltheores:raw_aluminum'],
        ['alltheores:zinc_ore', 'alltheores:raw_zinc'],
        ['minecraft:copper_ore', 'minecraft:raw_copper'],
        ['minecraft:gold_ore', 'minecraft:raw_gold']
    ];

    oreblockConfig.forEach(([ore, raw]) => {
        event.addBlockModifier(ore)
            .customAction((context, loot) => {
                const tool = context.getTool();
                if (!tool) {
                    loot.addItem(ore);
                    return;
                }

                const toolId = tool.id.toString();
                loot.remove(raw);

                const toolDrops = {
                    'minecraft:iron_pickaxe': '1x ' + raw,
                    'minecraft:diamond_pickaxe': '3x ' + raw,
                    'minecraft:netherite_pickaxe': '8x ' + raw,
                    'justdirethings:eclipsealloy_pickaxe': '12x ' + raw
                };

                const drop = toolDrops[toolId];
                if (drop) {
                    loot.addItem(drop);
                } else {
                    loot.addItem(ore);
                }
            });
    });

    const oreblock = [
        ['alltheores:osmium_ore', 'alltheores:raw_osmium'],
        ['alltheores:silver_ore', 'alltheores:raw_silver'],
        ['alltheores:uranium_ore', 'alltheores:raw_uranium'],
        ['alltheores:iridium_ore', 'alltheores:raw_iridium'],
        ['alltheores:platinum_ore', 'alltheores:raw_platinum']
    ]
    oreblock.forEach(([ore, raw]) => {
        event.addBlockModifier(ore)
            .addLoot(ore)
            .removeLoot(raw)
    });

})

