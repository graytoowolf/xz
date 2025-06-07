ServerEvents.recipes(event => {
    const { kubejs } = event.recipes

    kubejs.shaped('custommachinery:custom_machine_item[custommachinery:machine="minecraft:compressor"]', ['aba', 'cdc', 'aea'],
        {
            a: 'ae2:silicon',
            b: 'oritech:biomass',
            c: 'minecraft:gunpowder',
            d: 'oritech:machine_core_1',
            e: 'mysticalagriculture:inferium_essence'
        }
    )
    kubejs.shaped('custommachinery:custom_machine_item[custommachinery:machine="minecraft:structural_casting_machine"]', ['aba', 'fcf', 'ded'],
        {
            a: 'stellaris:desh_ingot',
            b: 'megacells:accumulation_processor_press',
            c: 'industrialforegoing:machine_frame_simple',
            d: 'oritech:laser_arm_block',
            e: 'advanced_ae:quantum_processor_press',
            f: 'justdirethings:time_crystal'
        }
    )
    kubejs.shaped('custommachinery:custom_machine_item[custommachinery:machine="minecraft:essence_processor"]', ['aba', 'cdc', 'aea'],
        {
            a: 'advanced_ae:quantum_alloy_plate',
            b: 'mysticalagriculture:dye_essence',
            c: 'mysticalagriculture:inferium_essence',
            d: 'oritech:machine_core_7',
            e: 'oritech:heisenberg_compensator'
        }
    )
    kubejs.shaped('custommachinery:custom_machine_item[custommachinery:machine="minecraft:planting_station"]', ['aba', 'cdc', 'efe'],
        {
            a: 'farmingforblockheads:red_fertilizer',
            b: 'immersiveengineering:cloche',
            c: 'oritech:flux_gate',
            d: 'oritech:machine_core_6',
            e: 'kubejs:synergy_core_upgrade',
            f: 'farmingforblockheads:green_fertilizer'
        }
    )

    //升级
    kubejs.shaped('kubejs:overload_core_upgrade', ['bab', 'aba', 'bab'], { a: 'mekanism:alloy_atomic', b: 'oritech:prometheum_ingot' })
    kubejs.shaped('kubejs:swift_shard_upgrade', ['aba', 'aca', 'aba'], { a: 'mysticalagriculture:dye_essence', b: 'mysticalagriculture:dye_essence', c: 'minecraft:iron_block' })
    kubejs.shaped('kubejs:swift_core_upgrade', ['aaa', 'bcb', 'aaa'], { a: 'naturesaura:gold_leaf', b: 'enderio:vibrant_alloy_ingot', c: 'oritech:motor' })
    kubejs.shaped('kubejs:synergy_core_upgrade', ['aba', 'cdc', 'aea'],
        {
            a: 'oritech:motor',
            b: 'oritech:enderic_lens',
            c: 'naturesaura:sky_ingot',
            d: 'minecraft:netherite_ingot',
            e: 'oritech:flux_gate'
        }
    )
})