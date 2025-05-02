ServerEvents.recipes(event => {
    // 充能棒
    event.replaceInput('powah:crafting/energizing_rod_nitro', 'powah:energizing_rod_spirited', 'powah:energizing_rod_starter')
    event.replaceInput('powah:crafting/energizing_rod_spirited', 'powah:energizing_rod_niotic', 'powah:energizing_rod_starter')
    event.replaceInput('powah:crafting/energizing_rod_niotic', 'powah:energizing_rod_blazing', 'powah:energizing_rod_starter')
    event.replaceInput('powah:crafting/energizing_rod_blazing', 'powah:energizing_rod_hardened', 'powah:energizing_rod_starter')
    event.replaceInput('powah:crafting/energizing_rod_hardened', 'powah:energizing_rod_basic', 'powah:energizing_rod_starter')

    // 晶质铀
    event.recipes.powah.energizing(Item.of('powah:uraninite', 1), ['minecraft:gunpowder'], 1000)
    event.recipes.powah.energizing(Item.of('powah:uraninite', 2), ['minecraft:gunpowder', 'minecraft:gunpowder'], 2000)
    event.recipes.powah.energizing(Item.of('powah:uraninite', 3), ['minecraft:gunpowder', 'minecraft:gunpowder', 'minecraft:gunpowder'], 3000)
    event.recipes.powah.energizing(Item.of('powah:uraninite', 4), ['minecraft:gunpowder', 'minecraft:gunpowder', 'minecraft:gunpowder', 'minecraft:gunpowder'], 4000)
    event.recipes.powah.energizing(Item.of('powah:uraninite', 5), ['minecraft:gunpowder', 'minecraft:gunpowder', 'minecraft:gunpowder', 'minecraft:gunpowder', 'minecraft:gunpowder'], 5000)
    event.recipes.powah.energizing(Item.of('powah:uraninite', 6), ['minecraft:gunpowder', 'minecraft:gunpowder', 'minecraft:gunpowder', 'minecraft:gunpowder', 'minecraft:gunpowder', 'minecraft:gunpowder'], 6000)
})