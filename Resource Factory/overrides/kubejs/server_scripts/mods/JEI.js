RecipeViewerEvents.addInformation("item", event => {
    const log = ['ars_nouveau:blue_archwood_log', 'ars_nouveau:red_archwood_log', 'ars_nouveau:green_archwood_log', 'ars_nouveau:purple_archwood_log']
    event.add(log, [
        Text.gold(Text.translate("jei.lootjs.log_info")),
        Text.translate("jei.lootjs.log_info1"),
        Text.translate("jei.lootjs.log_info2"),
        Text.gray(Text.translate("jei.lootjs.lootjs_info")).italic()
    ])

    const seed = ['minecraft:bamboo', 'minecraft:glow_berries', 'minecraft:pumpkin_seeds', 'minecraft:kelp', 'minecraft:sweet_berries', 'minecraft:melon_seeds', 'minecraft:wheat_seeds', 'minecraft:beetroot_seeds', 'minecraft:sugar_cane', 'minecraft:carrot', 'minecraft:potato']
    event.add(seed,[
        Text.gold(Text.translate("jei.lootjs.seed_info")),
        Text.translate("jei.lootjs.seed_info1"),
        Text.translate("jei.lootjs.seed_info2"),
        Text.gray(Text.translate("jei.lootjs.lootjs_info")).italic()
    ])

    event.add('minecraft:spawner',[
        Text.gold(Text.translate("jei.lootjs.spawner_info")),
        Text.translate("jei.lootjs.spawner_info1"),
        Text.translate("jei.lootjs.spawner_info2"),
        Text.gray(Text.translate("jei.lootjs.lootjs_info")).italic()
    ])
})