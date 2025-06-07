ServerEvents.recipes(event => {
    const { kubejs, powah } = event.recipes

    const raw_clump = [
        ['stellaris:raw_desh_ingot', 'stellaris:desh_ingot']
    ]

    powah.energizing(
        ['enderio:vibrant_crystal',
            'enderio:ender_crystal',
            'extendedae:entro_crystal',
            'actuallyadditions:empowered_diamatine_crystal',
            'actuallyadditions:empowered_emeradic_crystal',
            'powah:crystal_spirited'],
        '3x justdirethings:time_crystal', 100000000
    )


    raw_clump.forEach(([raw, clump]) => {
        powah.energizing([`6x ${raw}`], `12x ${clump}`, 1000)
    });
})

//注册热源
PowahEvents.registerHeatSource(event => {
    event.addFluid('actuallyadditions:crystallized_oil', 3000)
    event.addFluid('actuallyadditions:empowered_oil', 8000)
    event.addFluid('immersiveengineering:high_power_biodiesel', 16000)
})
//岩浆发电机
PowahEvents.registerMagmaticFluid(event => {
    event.add('actuallyadditions:crystallized_oil', 200000)
    event.add('actuallyadditions:empowered_oil', 1000000)
    event.add('immersiveengineering:high_power_biodiesel', 2000000)
})

PowahEvents.registerCoolants(event => {
    event.addSolid('reliquary:frozen_core', -64)
})

