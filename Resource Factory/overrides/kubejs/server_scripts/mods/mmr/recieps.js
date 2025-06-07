ServerEvents.recipes(event => {
    const { kubejs } = event.recipes

    kubejs.shaped('modular_machinery_reborn:dimensional_detector', ['aba', 'bcb', 'aba'],
        {
            a: 'modular_machinery_reborn:casing_plain',
            b: 'oritech:flux_gate',
            c: 'dimstorage:dimensional_tablet'
        }
    )
    kubejs.shaped('modular_machinery_reborn:controller[modular_machinery_reborn:machine="mmr:large_imprinter"]', ['aba', 'aca', 'ada'],
        {
            a: 'extendedae:entro_ingot',
            b: 'minecraft:piston',
            c: 'extendedae:machine_frame',
            d: 'ae2:inscriber'
        }
    )
    kubejs.shaped('modular_machinery_reborn:controller[modular_machinery_reborn:machine="mmr:nether_fluid_pump"]', ['aba', 'aca', 'ddd'],
        {
            a: 'oritech:duratium_ingot',
            b: 'oritech:heisenberg_compensator',
            c: 'extendedae:machine_frame',
            d: 'justdirethings:eclipsealloy_ingot'
        }
    )
    kubejs.shaped('modular_machinery_reborn:controller[modular_machinery_reborn:machine="mmr:creeper_ore_replicator"]', ['aaa', 'aba', 'ccc'], { a: 'replication:replica_block', b: 'oritech:promethium_pickaxe', c: 'actuallyadditions:empowered_emeradic_crystal_block' })
    kubejs.shaped('modular_machinery_reborn:controller[modular_machinery_reborn:machine="mmr:quantum_color_encoder"]', ['aba', 'bcb', 'ada'],
        {
            a: 'kubejs:data_storage_core',
            b: 'ae2:singularity',
            c: 'mekanism:steel_casing',
            d: 'mysticalagriculture:dye_essence'
        }
    )


    //基础合成
    kubejs.shapeless('modular_machinery_reborn:blueprint', 'modular_machinery_reborn:modularium')
    kubejs.shaped('4x modular_machinery_reborn:casing_plain', ['aaa', 'a a', 'aaa'], { a: 'modular_machinery_reborn:modularium' })
    kubejs.shaped('modular_machinery_reborn:casing_reinforced', ['aaa', 'aba', 'aaa'], { a: 'modular_machinery_reborn:modularium', b: 'enderio:reinforced_obsidian_block' })
    kubejs.shaped('modular_machinery_reborn:casing_circuitry', ['aaa', 'aba', 'aaa'], { a: 'modular_machinery_reborn:modularium', b: 'extendedae:concurrent_processor_print' })
    kubejs.shaped('modular_machinery_reborn:casing_gearbox', ['aaa', 'aba', 'aaa'], { a: 'modular_machinery_reborn:modularium', b: 'alltheores:iron_gear' })
    kubejs.shaped('modular_machinery_reborn:casing_firebox', ['aaa', 'aba', 'aaa'], { a: 'modular_machinery_reborn:modularium', b: 'ars_nouveau:fire_essence' })
    kubejs.shaped('modular_machinery_reborn:casing_vent', ['aaa', 'aba', 'aaa'], { a: 'modular_machinery_reborn:modularium', b: 'mysticalagriculture:air_agglomeratio' })

    //能量仓
    kubejs.shapeless('modular_machinery_reborn:energyinputhatch_tiny', ['modular_machinery_reborn:casing_plain', 'rftoolspower:power_core1'])
    kubejs.shapeless('modular_machinery_reborn:energyinputhatch_small', ['modular_machinery_reborn:energyinputhatch_tiny', 'rftoolspower:power_core1'])
    kubejs.shapeless('modular_machinery_reborn:energyinputhatch_normal', ['modular_machinery_reborn:energyinputhatch_small', 'rftoolspower:power_core1'])
    kubejs.shapeless('modular_machinery_reborn:energyinputhatch_reinforced', ['modular_machinery_reborn:casing_reinforced', 'rftoolspower:power_core3'])
    kubejs.shapeless('modular_machinery_reborn:energyinputhatch_reinforced', ['modular_machinery_reborn:energyinputhatch_big', 'rftoolspower:power_core3'])
    kubejs.shapeless('modular_machinery_reborn:energyinputhatch_huge', ['modular_machinery_reborn:casing_reinforced', 'mekanism:advanced_energy_cube'])
    kubejs.shapeless('modular_machinery_reborn:energyinputhatch_ultimate', ['modular_machinery_reborn:casing_reinforced', 'mekanism:elite_energy_cube'])
    kubejs.shapeless('modular_machinery_reborn:energyinputhatch_ludicrous', ['modular_machinery_reborn:casing_reinforced', 'mekanism:ultimate_energy_cube'])
    //输出
    kubejs.shapeless('modular_machinery_reborn:energyoutputhatch_tiny', 'modular_machinery_reborn:energyinputhatch_tiny')
    kubejs.shapeless('modular_machinery_reborn:energyoutputhatch_small', 'modular_machinery_reborn:energyinputhatch_normal')
    kubejs.shapeless('modular_machinery_reborn:energyoutputhatch_normal', 'modular_machinery_reborn:energyinputhatch_small')
    kubejs.shapeless('modular_machinery_reborn:energyoutputhatch_reinforced', 'modular_machinery_reborn:energyinputhatch_reinforced')
    kubejs.shapeless('modular_machinery_reborn:energyoutputhatch_big', 'modular_machinery_reborn:energyinputhatch_big')
    kubejs.shapeless('modular_machinery_reborn:energyoutputhatch_huge', 'modular_machinery_reborn:energyinputhatch_huge')
    kubejs.shapeless('modular_machinery_reborn:energyoutputhatch_ludicrous', 'modular_machinery_reborn:energyinputhatch_ludicrous')
    kubejs.shapeless('modular_machinery_reborn:energyoutputhatch_ultimate', 'modular_machinery_reborn:energyinputhatch_ultimate')

    //物品仓
    kubejs.shapeless('modular_machinery_reborn:inputbus_tiny', ['modular_machinery_reborn:casing_plain', 'minecraft:chest'])
    kubejs.shapeless('modular_machinery_reborn:inputbus_small', ['modular_machinery_reborn:inputbus_tiny', 'minecraft:chest'])
    kubejs.shapeless('modular_machinery_reborn:inputbus_normal', ['modular_machinery_reborn:inputbus_small', 'minecraft:chest'])
    kubejs.shapeless('modular_machinery_reborn:inputbus_reinforced', ['modular_machinery_reborn:casing_reinforced', 'minecraft:chest'])
    kubejs.shapeless('modular_machinery_reborn:inputbus_big', ['modular_machinery_reborn:inputbus_reinforced', 'minecraft:chest'])
    kubejs.shapeless('modular_machinery_reborn:inputbus_huge', ['modular_machinery_reborn:casing_reinforced', 'pneumaticcraft:reinforced_chest'])
    kubejs.shapeless('modular_machinery_reborn:inputbus_ludicrous', ['modular_machinery_reborn:inputbus_huge', 'pneumaticcraft:reinforced_chest'])
    //输出
    kubejs.shapeless('modular_machinery_reborn:outputbus_tiny', 'modular_machinery_reborn:inputbus_tiny')
    kubejs.shapeless('modular_machinery_reborn:outputbus_small', 'modular_machinery_reborn:inputbus_small')
    kubejs.shapeless('modular_machinery_reborn:outputbus_normal', 'modular_machinery_reborn:inputbus_normal')
    kubejs.shapeless('modular_machinery_reborn:outputbus_reinforced', 'modular_machinery_reborn:inputbus_reinforced')
    kubejs.shapeless('modular_machinery_reborn:outputbus_big', 'modular_machinery_reborn:inputbus_big')
    kubejs.shapeless('modular_machinery_reborn:outputbus_huge', 'modular_machinery_reborn:inputbus_huge')
    kubejs.shapeless('modular_machinery_reborn:outputbus_ludicrous', 'modular_machinery_reborn:inputbus_ludicrous')

    //流体仓
    kubejs.shapeless('modular_machinery_reborn:fluidinputhatch_tiny', ['modular_machinery_reborn:casing_plain', 'minecraft:bucket'])
    kubejs.shapeless('modular_machinery_reborn:fluidinputhatch_small', ['modular_machinery_reborn:fluidinputhatch_tiny', 'minecraft:bucket'])
    kubejs.shapeless('modular_machinery_reborn:fluidinputhatch_normal', ['modular_machinery_reborn:fluidinputhatch_small', 'minecraft:bucket'])
    kubejs.shapeless('modular_machinery_reborn:fluidinputhatch_reinforced', ['modular_machinery_reborn:casing_reinforced', 'minecraft:bucket'])
    kubejs.shapeless('modular_machinery_reborn:fluidinputhatch_big', ['modular_machinery_reborn:fluidinputhatch_reinforced', 'minecraft:bucket'])
    kubejs.shapeless('modular_machinery_reborn:fluidinputhatch_huge', ['modular_machinery_reborn:casing_reinforced', 'mekanism:basic_fluid_tank'])
    kubejs.shapeless('modular_machinery_reborn:fluidinputhatch_ludicrous', ['modular_machinery_reborn:fluidinputhatch_huge', 'mekanism:basic_fluid_tank'])
    kubejs.shapeless('modular_machinery_reborn:fluidinputhatch_vacuum', ['modular_machinery_reborn:fluidinputhatch_ludicrous', 'mekanism:basic_fluid_tank'])
    //输出
    kubejs.shapeless('modular_machinery_reborn:fluidoutputhatch_tiny', 'modular_machinery_reborn:fluidinputhatch_tiny')
    kubejs.shapeless('modular_machinery_reborn:fluidoutputhatch_small', 'modular_machinery_reborn:fluidinputhatch_small')
    kubejs.shapeless('modular_machinery_reborn:fluidoutputhatch_normal', 'modular_machinery_reborn:fluidinputhatch_normal')
    kubejs.shapeless('modular_machinery_reborn:fluidoutputhatch_reinforced', 'modular_machinery_reborn:fluidinputhatch_reinforced')
    kubejs.shapeless('modular_machinery_reborn:fluidoutputhatch_big', 'modular_machinery_reborn:fluidinputhatch_big')
    kubejs.shapeless('modular_machinery_reborn:fluidoutputhatch_huge', 'modular_machinery_reborn:fluidinputhatch_huge')
    kubejs.shapeless('modular_machinery_reborn:fluidoutputhatch_ludicrous', 'modular_machinery_reborn:fluidinputhatch_ludicrous')
    kubejs.shapeless('modular_machinery_reborn:fluidoutputhatch_vacuum', 'modular_machinery_reborn:fluidinputhatch_vacuum')

    //经验
    kubejs.shapeless('modular_machinery_reborn:experienceinputhatch_tiny', ['modular_machinery_reborn:casing_plain', 'minecraft:experience_bottle'])
    kubejs.shapeless('modular_machinery_reborn:experienceinputhatch_small', ['modular_machinery_reborn:experienceinputhatch_tiny', 'minecraft:experience_bottle'])
    kubejs.shapeless('modular_machinery_reborn:experienceinputhatch_normal', ['modular_machinery_reborn:experienceinputhatch_small', 'minecraft:experience_bottle'])
    kubejs.shapeless('modular_machinery_reborn:experienceinputhatch_reinforced', ['modular_machinery_reborn:casing_reinforced', 'minecraft:experience_bottle'])
    kubejs.shapeless('modular_machinery_reborn:experienceinputhatch_big', ['modular_machinery_reborn:experienceinputhatch_reinforced', 'minecraft:experience_bottle'])
    kubejs.shapeless('modular_machinery_reborn:experienceinputhatch_huge', ['modular_machinery_reborn:casing_reinforced', 'mob_grinding_utils:solid_xp_baby'])
    kubejs.shapeless('modular_machinery_reborn:experienceinputhatch_ludicrous', ['modular_machinery_reborn:experienceinputhatch_huge', 'mob_grinding_utils:solid_xp_baby'])
    kubejs.shapeless('modular_machinery_reborn:experienceinputhatch_vacuum', ['modular_machinery_reborn:experienceinputhatch_ludicrous', 'mob_grinding_utils:solid_xp_baby'])
    //输出
    kubejs.shapeless('modular_machinery_reborn:experienceoutputhatch_tiny', 'modular_machinery_reborn:experienceinputhatch_tiny')
    kubejs.shapeless('modular_machinery_reborn:experienceoutputhatch_small', 'modular_machinery_reborn:experienceinputhatch_small')
    kubejs.shapeless('modular_machinery_reborn:experienceoutputhatch_normal', 'modular_machinery_reborn:experienceinputhatch_normal')
    kubejs.shapeless('modular_machinery_reborn:experienceoutputhatch_reinforced', 'modular_machinery_reborn:experienceinputhatch_reinforced')
    kubejs.shapeless('modular_machinery_reborn:experienceoutputhatch_big', 'modular_machinery_reborn:experienceinputhatch_big')
    kubejs.shapeless('modular_machinery_reborn:experienceoutputhatch_huge', 'modular_machinery_reborn:experienceinputhatch_huge')
    kubejs.shapeless('modular_machinery_reborn:experienceoutputhatch_ludicrous', 'modular_machinery_reborn:experienceinputhatch_ludicrous')
    kubejs.shapeless('modular_machinery_reborn:experienceoutputhatch_vacuum', 'modular_machinery_reborn:experienceinputhatch_vacuum')

    //化学品
    kubejs.shapeless('modular_machinery_reborn_mekanism:chemicalinputhatch_tiny', ['modular_machinery_reborn:casing_plain', 'mekanism:basic_chemical_tank'])
    kubejs.shapeless('modular_machinery_reborn_mekanism:chemicalinputhatch_small', ['modular_machinery_reborn_mekanism:chemicalinputhatch_tiny', 'mekanism:basic_chemical_tank'])
    kubejs.shapeless('modular_machinery_reborn_mekanism:chemicalinputhatch_normal', ['modular_machinery_reborn_mekanism:chemicalinputhatch_small', 'mekanism:basic_chemical_tank'])
    kubejs.shapeless('modular_machinery_reborn_mekanism:chemicalinputhatch_reinforced', ['modular_machinery_reborn:casing_reinforced', 'mekanism:basic_chemical_tank'])
    kubejs.shapeless('modular_machinery_reborn_mekanism:chemicalinputhatch_big', ['modular_machinery_reborn_mekanism:chemicalinputhatch_reinforced', 'mekanism:basic_chemical_tank'])
    kubejs.shapeless('modular_machinery_reborn_mekanism:chemicalinputhatch_huge', ['modular_machinery_reborn:casing_reinforced', 'mekanism:ultimate_chemical_tank'])
    kubejs.shapeless('modular_machinery_reborn_mekanism:chemicalinputhatch_ludicrous', ['modular_machinery_reborn_mekanism:chemicalinputhatch_huge', 'mekanism:ultimate_chemical_tank'])
    kubejs.shapeless('modular_machinery_reborn_mekanism:chemicalinputhatch_vacuum', ['modular_machinery_reborn_mekanism:chemicalinputhatch_ludicrous', 'mekanism:ultimate_chemical_tank'])
    //输出
    kubejs.shapeless('modular_machinery_reborn_mekanism:chemicaloutputhatch_tiny', 'modular_machinery_reborn_mekanism:chemicalinputhatch_tiny')
    kubejs.shapeless('modular_machinery_reborn_mekanism:chemicaloutputhatch_small', 'modular_machinery_reborn_mekanism:chemicalinputhatch_small')
    kubejs.shapeless('modular_machinery_reborn_mekanism:chemicaloutputhatch_normal', 'modular_machinery_reborn_mekanism:chemicalinputhatch_normal')
    kubejs.shapeless('modular_machinery_reborn_mekanism:chemicaloutputhatch_reinforced', 'modular_machinery_reborn_mekanism:chemicalinputhatch_reinforced')
    kubejs.shapeless('modular_machinery_reborn_mekanism:chemicaloutputhatch_big', 'modular_machinery_reborn_mekanism:chemicalinputhatch_big')
    kubejs.shapeless('modular_machinery_reborn_mekanism:chemicaloutputhatch_huge', 'modular_machinery_reborn_mekanism:chemicalinputhatch_huge')
    kubejs.shapeless('modular_machinery_reborn_mekanism:chemicaloutputhatch_ludicrous', 'modular_machinery_reborn_mekanism:chemicalinputhatch_ludicrous')
    kubejs.shapeless('modular_machinery_reborn_mekanism:chemicaloutputhatch_vacuum', 'modular_machinery_reborn_mekanism:chemicalinputhatch_vacuum')

    //并行
    kubejs.shaped('modular_machinery_reborn:parallel_hatch_advanced', ['aaa', 'aba', 'aaa'], { a: 'kubejs:synergy_core_upgrade', b: 'oritech:machine_core_7' })
    kubejs.shaped('modular_machinery_reborn:parallel_hatch_ultimate', ['aba', 'bcb', 'aba'], { a: 'kubejs:overload_core_upgrade', b: 'mekanism_extras:absolute_tier_installer', c: 'ifeu:ultimate_machine_frame' })
    kubejs.shaped('modular_machinery_reborn:parallel_hatch_max', ['abc', 'bdb', 'ebf'],
        {
            a: 'naturesaura:token_euphoria',
            b: 'mekanism_extras:cosmic_tier_installer',
            c: 'naturesaura:token_grief',
            d: 'occultism:trinity_gem',
            e: 'naturesaura:token_rage',
            f: 'naturesaura:token_terror'
        }
    )
})