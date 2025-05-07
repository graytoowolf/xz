LootJS.modifiers(event => {
    // 蜘蛛
    event.addEntityModifier('minecraft:spider')
        .removeLoot(['minecraft:string'])
        .addLoot('minecraft:spider_spawn_egg')

    // 雪傀儡
    event.addEntityModifier('minecraft:snow_golem')
        .removeLoot(['minecraft:snowball'])
        .addLoot('kubejs:snow_spirit')

})