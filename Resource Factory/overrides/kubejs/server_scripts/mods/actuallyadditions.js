ServerEvents.recipes(event => {
    const { actuallyadditions, kubejs } = event.recipes

    const raw = ['alltheores:raw_aluminum', 'alltheores:raw_nickel', 'alltheores:raw_lead', 'occultism:raw_iesnium', 'alltheores:raw_zinc', 'alltheores:raw_tin']

    event.replaceInput({ id: 'actuallyadditions:drill_light_blue' }, 'minecraft:diamond', 'actuallyadditions:diamatine_crystal')
    event.replaceInput({ id: 'actuallyadditions:drill_upgrade_silk_touch' }, 'actuallyadditions:emeradic_crystal', 'actuallyadditions:empowered_restonia_crystal')

    kubejs.shaped('actuallyadditions:canola_seeds', ['a a', ' a ', 'a a'], { a: 'minecraft:wheat_seeds' })

    actuallyadditions.laser('minecraft:redstone', 'minecraft:gunpowder', 100000)
    actuallyadditions.laser('minecraft:raw_gold', 'oreberriesreplanted:gold_oreberry', 10000)
    actuallyadditions.laser('minecraft:raw_copper', 'oreberriesreplanted:copper_oreberry', 10000)
    actuallyadditions.laser('minecraft:raw_iron', 'oreberriesreplanted:iron_oreberry', 10000)
    actuallyadditions.laser('occultism:datura_seeds', 'minecraft:wheat_seeds', 1000)
    actuallyadditions.laser('ae2:crafting_terminal', 'ae2:terminal')
    actuallyadditions.laser('alltheores:platinum_ingot', raw, 100000)
    actuallyadditions.laser('integrateddynamics:squeezer', 'minecraft:piston', 100000)


    actuallyadditions.empowering(
        '3x minecraft:blackstone', '#c:cobblestones',
        ['actuallyadditions:void_crystal', 'actuallyadditions:void_crystal', 'actuallyadditions:void_crystal', 'actuallyadditions:void_crystal'],
        10000, Color.BLACK.argb, 20
    )
    actuallyadditions.empowering(
        'ae2:molecular_assembler', 'minecraft:crafting_table',
        ['oritech:processing_unit', 'oritech:processing_unit', 'naturesaura:sky_ingot', 'naturesaura:sky_ingot'],
        100000, Color.PINK_DYE.argb, 100
    )

    actuallyadditions.pressing(Fluid.of('actuallyadditions:canola_oil', 120), "#c:crops/canola")
    actuallyadditions.pressing(Fluid.of('oritech:still_biofuel', 120), "#c:fuels/bio")
})