StartupEvents.registry("fluid", (event) => {
    // 冰晶寒流
    event.create('kubejs:cold_crystal', 'thin')
        .stillTexture('kubejs:block/cold_crystal_still')
        .flowingTexture('kubejs:block/cold_crystal_flow')
        .type(ty => {
            ty.temperature(-1000)
        })
        .tint(Color.of(0x00F5FF))
        .renderType('solid')
        .levelDecreasePerBlock(2)

    // 兑水咖啡
    event.create('kubejs:black_coffee_diluted_with_water', 'thin')
        .stillTexture('kubejs:block/cold_crystal_still')
        .flowingTexture('kubejs:block/cold_crystal_flow')
        .type(ty => {
            ty.temperature(300)
        })
        .tint(Color.of(0x8B4C39))
        .renderType('solid')
        .levelDecreasePerBlock(4)

    // 不稳定红石
    event.create('kubejs:unstable_red', 'thin')
        .stillTexture('kubejs:block/cold_crystal_still')
        .flowingTexture('kubejs:block/cold_crystal_flow')
        .type(ty => {
            ty.temperature(300)
        })
        .tint(Color.of(0xEE2C2C))
        .renderType('solid')
        .levelDecreasePerBlock(2)



})