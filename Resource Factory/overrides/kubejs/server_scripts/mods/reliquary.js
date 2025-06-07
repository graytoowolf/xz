ServerEvents.recipes(event => {
    const { kubejs } = event.recipes

    kubejs.shaped('reliquary:alkahestry_tome', ['aba', 'cdc', 'aca'],
        {
            a: 'mysticalagriculture:dye_agglomeratio',
            b: 'minecraft:nether_star',
            c: 'minecraft:netherite_scrap',
            d: 'occultism:book_of_binding_empty'
        }
    )

    //充能
    event.custom(
        {
            "type": "reliquary:alkahestry_charging",
            "charge": 4,
            "ingredient": {
                "item": 'actuallyadditions:restonia_crystal'
            }
        }
    )
    event.custom(
        {
            "type": "reliquary:alkahestry_charging",
            "charge": 9,
            "ingredient": {
                "item": 'actuallyadditions:empowered_restonia_crystal'
            }
        }
    )
    event.custom(
        {
            "type": "reliquary:alkahestry_charging",
            "charge": 36,
            "ingredient": {
                "item": 'actuallyadditions:restonia_crystal_block'
            }
        }
    )
    event.custom(
        {
            "type": "reliquary:alkahestry_charging",
            "charge": 81,
            "ingredient": {
                "item": 'actuallyadditions:empowered_restonia_crystal_block'
            }
        }
    )
    //合成
    event.custom(
        {
            "type": "reliquary:alkahestry_crafting",
            "charge": 512,
            "ingredient": {
                "item": 'ars_nouveau:wilden_tribute'
            },
            "result_count": 2
        }
    )
    event.custom(
        {
            "type": "reliquary:alkahestry_crafting",
            "charge": 16,
            "ingredient": {
                "item": 'modular_machinery_reborn:modularium'
            },
            "result_count": 2
        }
    )
    event.custom(
        {
            "type": "reliquary:alkahestry_crafting",
            "charge": 1,
            "ingredient": {
                "item": 'ars_nouveau:source_gem_block'
            },
            "result_count": 3
        }
    )
    event.custom(
        {
            "type": "reliquary:alkahestry_crafting",
            "charge": 1,
            "ingredient": {
                "item": 'minecraft:amethyst_block'
            },
            "result_count": 3
        }
    )
    event.custom(
        {
            "type": "reliquary:alkahestry_crafting",
            "charge": 2000,
            "ingredient": {
                "item": 'solarflux:efficiency_upgrade'
            },
            "result_count": 2
        }
    )
    event.custom(
        {
            "type": "reliquary:alkahestry_crafting",
            "charge": 128,
            "ingredient": {
                "item": 'oritech:processing_unit'
            },
            "result_count": 4
        }
    )

})