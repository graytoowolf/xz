LootJS.modifiers((event) => {
    /**
     * First loot entry with a condition. Will drop if the player has fortune.
     */
    const stickWhenFortune = LootEntry.of("kubejs:raw_arcane")
        .applyOreBonus("minecraft:fortune")
        .when((c) => c.matchMainHand(ItemFilter.hasEnchantment("minecraft:fortune")));

    /**
     * Second loot entry with a condition. Will drop if the player has silk touch and the first entry doesn't match.
     */
    const appleWhenSilkTouch = LootEntry.of("kubejs:arcane_ore").when((c) =>
        c.matchMainHand(ItemFilter.hasEnchantment("minecraft:silk_touch"))
    );

    /**
     * No conditions just an item, so this will always drop if the other two don't.
     */
    const ironIngot = "kubejs:raw_arcane";

    event
        .addBlockLootModifier("kubejs:arcane_ore")
        .removeLoot(Ingredient.all)
        .addAlternativesLoot(stickWhenFortune, appleWhenSilkTouch, ironIngot);
});



LootJS.modifiers((event) => {
    /**
     * First loot entry with a condition. Will drop if the player has fortune.
     */
    const stick2WhenFortune = LootEntry.of("kubejs:raw_arcane")
        .applyOreBonus("minecraft:fortune")
        .when((c) => c.matchMainHand(ItemFilter.hasEnchantment("minecraft:fortune")));

    /**
     * Second loot entry with a condition. Will drop if the player has silk touch and the first entry doesn't match.
     */
    const apple2WhenSilkTouch = LootEntry.of("kubejs:deepslate_arcane_ore").when((c) =>
        c.matchMainHand(ItemFilter.hasEnchantment("minecraft:silk_touch"))
    );

    /**
     * No conditions just an item, so this will always drop if the other two don't.
     */
    const iron2Ingot = "kubejs:raw_arcane";

    event
        .addBlockLootModifier("kubejs:deepslate_arcane_ore")
        .removeLoot(Ingredient.all)
        .addAlternativesLoot(stick2WhenFortune, apple2WhenSilkTouch, iron2Ingot);
});

















LootJS.modifiers((event) => {
    /**
     * First loot entry with a condition. Will drop if the player has fortune.
     */
    const sticka = LootEntry.of("kubejs:aquamarine")
        .applyOreBonus("minecraft:fortune")
        .when((c) => c.matchMainHand(ItemFilter.hasEnchantment("minecraft:fortune")));

    /**
     * Second loot entry with a condition. Will drop if the player has silk touch and the first entry doesn't match.
     */
    const applea = LootEntry.of("kubejs:mana_sand").when((c) =>
        c.matchMainHand(ItemFilter.hasEnchantment("minecraft:silk_touch"))
    );

    /**
     * No conditions just an item, so this will always drop if the other two don't.
     */
    const irona = "kubejs:aquamarine";

    event
        .addBlockLootModifier("kubejs:mana_sand")
        .removeLoot(Ingredient.all)
        .addAlternativesLoot(sticka, applea, irona);
});



LootJS.modifiers((event) => {
    /**
     * First loot entry with a condition. Will drop if the player has fortune.
     */
    const stickb = LootEntry.of("ftbic:iridium_chunk")
        .applyOreBonus("minecraft:fortune")
        .when((c) => c.matchMainHand(ItemFilter.hasEnchantment("minecraft:fortune")));

    /**
     * Second loot entry with a condition. Will drop if the player has silk touch and the first entry doesn't match.
     */
    const appleb = LootEntry.of("kubejs:end_iridium").when((c) =>
        c.matchMainHand(ItemFilter.hasEnchantment("minecraft:silk_touch"))
    );

    /**
     * No conditions just an item, so this will always drop if the other two don't.
     */
    const ironb = "ftbic:iridium_chunk";

    event
        .addBlockLootModifier("kubejs:end_iridium")
        .removeLoot(Ingredient.all)
        .addAlternativesLoot(stickb, appleb, ironb);
});