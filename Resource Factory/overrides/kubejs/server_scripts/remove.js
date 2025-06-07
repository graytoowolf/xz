ServerEvents.recipes(event => {
    const ID = [
        'occultism:spirit_fire/spirit_attuned_gem',
        'rftoolsutility:syringe',
        'mob_grinding_utils:recipe_saw',
        'ars_nouveau:enchanting_apparatus',
        'ae2:network/blocks/io_condenser',
        'minecraft:iron_ingot_from_smelting_raw_iron',
        'minecraft:iron_ingot_from_blasting_raw_iron',
        'minecraft:gold_ingot_from_smelting_raw_gold',
        'minecraft:gold_ingot_from_blasting_raw_gold',
        'minecraft:copper_ingot_from_smelting_raw_copper',
        'minecraft:copper_ingot_from_blasting_raw_copper',
        'ars_nouveau:apprentice_book_upgrade',
        'productivemetalworks:melting/ores/iron',
        'productivemetalworks:melting/ores/copper',
        'productivemetalworks:melting/ores/gold',
        'ars_nouveau:wilden_summon_alt',
        'productivemetalworks:melting/ores/nickel',
        'productivemetalworks:melting/ores/zinc',
        'productivemetalworks:melting/ores/aluminum',
        'productivemetalworks:melting/ores/nickel',
        'productivemetalworks:melting/ores/tin',
        'actuallyadditions:coal_generator',
        'immersiveengineering:crafting/blastbrick',
        'enderio:primitive_alloy_smelter',
        'extendedcrafting:black_iron_ingot',
        'productivemetalworks:melting/plates/silver',
        'alltheores:arcfurnace/silver/from_plate',
        'immersiveengineering:arc_recycling_list',
        'naturesaura:gold_fiber',
        'naturesaura:gold_powder',
        'productivemetalworks:melting/ancient_debris',
        'immersiveengineering:arcfurnace/netherite_scrap',
        'betterfurnacesreforged:cobblestone_generator',
        'occultism:crafting/netherite_dust',
        'minecraft:netherite_ingot',
        'mekanism:processing/netherite/scrap_to_dust',
        'mekanism:processing/netherite/scrap_to_dust',
        'productivemetalworks:melting/netherite_scrap',
        'mysticalagriculture:essence/minecraft/netherite_ingot',
        'alltheores:arcfurnace/netherite/from_dust',
        'actuallyadditions:lens_of_the_miner',
        'ars_nouveau:ritual_cloudshaping',
        'hostilenetworks:framework',
        'hostilenetworks:prediction_matrix',
        'notenoughwands:acceleration_wand',
        'occultism:ritual/craft_iesnium_sacrificial_bowl',
        'occultism:ritual/misc_eldritch_chalice',
        'productivemetalworks:melting/ores/uranium',
        'productivemetalworks:melting/ores/silver',
        'productivemetalworks:melting/ores/platinum',
        'productivemetalworks:melting/ores/iridium',
        'productivemetalworks:melting/ores/osmium',
        'enderio:void_chassis',
        'industrialforegoing:machine_frame_pity',
        'justdirethings:gooblock_tier1',
        'justdirethings:gooblock_tier4',
        'stellaris:misc/desh_ingot_from_smelting_raw_desh_ingot',
        'industrialforegoing:dissolution_chamber/advanced_machine_frame',
        'industrialforegoing:dissolution_chamber/ultimate_machine_frame',
        'ars_caelum:ritual_conjure_island_end_portal',
        'productivemetalworks:melting/dusts/netherite',
        'mekanism_lasers:ore_generator',
        'mekanism:steel_casing',
        'oritech:atomicforge/compat/mekanism/basic_control_circuit',
        'oritech:atomicforge/compat/mekanism/advanced_control_circuit',
        'oritech:atomicforge/compat/mekanism/elite_control_circuit',
        'oritech:atomicforge/compat/mekanism/ultimate_control_circuit',
        'oritech:foundry/alloy/compat/mekanism/atomic_alloy',
        'oritech:foundry/alloy/compat/mekanism/infused_alloy',
        'oritech:foundry/alloy/compat/mekanism/refined_obsidian_dust',
        'oritech:foundry/alloy/compat/mekanism/reinforced_alloy',
        'mekanism:control_circuit/advanced',
        'mekanism:control_circuit/elite',
        'mekanism:control_circuit/ultimate',
        'pneumaticcraft:pressure_chamber_wall',
        'forbidden_arcanus:mundabitur_dust',
        'extendedcrafting:ultimate_table',
        'irons_spellbooks:ancient_debris_from_pyrium',
        'ae2:network/parts/quartz_fiber_part',
        'minecraft:netherite_ingot_from_netherite_block',
        'productivemetalworks:melting/storage_blocks/netherite',
        'powah:crafting/dielectric_casing',
        'integrateddynamics:crafting/squeezer',
        'integrateddynamics:crafting/mechanical_squeezer',
        'integrateddynamics:crafting/mechanical_drying_basin',
        'integrateddynamics:crafting/variable',
        'mysticalagriculture:prudentium_essence',
        'mysticalagriculture:tertium_essence',
        'mysticalagriculture:imperium_essence',
        'mysticalagriculture:supremium_essence',
        'mysticalagradditions:insanium_essence',
        'mysticalagriculture:prudentium_block_combine',
        'mysticalagriculture:tertium_block_combine',
        'mysticalagriculture:imperium_block_combine',
        'mysticalagriculture:supremium_block_combine',
        'mysticalagradditions:insanium_block_combine',
        "mysticalagriculture:essence/minecraft/blue_dye",
        "mysticalagriculture:essence/minecraft/green_dye",
        "mysticalagriculture:essence/minecraft/pink_dye",
        "mysticalagriculture:essence/minecraft/light_gray_dye",
        "mysticalagriculture:essence/minecraft/magenta_dye",
        "mysticalagriculture:essence/minecraft/purple_dye",
        "mysticalagriculture:essence/minecraft/cyan_dye",
        "mysticalagriculture:essence/minecraft/yellow_dye",
        "mysticalagriculture:essence/minecraft/orange_dye",
        "mysticalagriculture:essence/minecraft/light_blue_dye",
        "mysticalagriculture:essence/minecraft/red_dye",
        "mysticalagriculture:essence/minecraft/brown_dye",
        "mysticalagriculture:essence/minecraft/black_dye",
        "mysticalagriculture:essence/minecraft/lime_dye",
        "mysticalagriculture:essence/minecraft/white_dye",
        "mysticalagriculture:essence/minecraft/gray_dye",
        'apotheosis:salvaging/other/diamond_armor',
        'apotheosis:salvaging/other/diamond_horse_armor',
        'apotheosis:salvaging/other/diamond_tools',
        'apotheosis:salvaging/other/netherite_tools',
        'apotheosis:salvaging/other/netherite_armor',
        'computercraft:computer_command',
        'occultism:smelting/netherite_scrap_from_dust',
        'occultism:blasting/netherite_scrap_from_dust',
        'mekmm:nucleosynthesizing/uu_matter',
        'mekmm:reaction/empty_crystal',
        'mekmm:oxidizing/uu_matter',
        'avaritia:infinity_catalyst',
        'avaritia:infinity_catalyst_eternal',
        'avaritia:infinity_ingot',
        'avaritia:eternal_singularity',
        'avaritia:mek_creative_fluid_tank',
        'avaritia:mek_creative_energy_cube',
        'avaritia:eio_creative_power',
        'avaritia:mek_creative_chemical_tank',
        'avaritia:mek_creative_bin',
        'avaritia:ae2_creative_energy_cell',
        'avaritia:enhancement_core',
        'avaritia:extreme_smithing_table',
        'avaritia:infinity_axe',
        'avaritia:infinity_boots',
        'avaritia:infinity_bow',
        'avaritia:infinity_bucket',
        'avaritia:infinity_chestplate',
        'avaritia:infinity_crossbow',
        'avaritia:infinity_elytra',
        'avaritia:infinity_helmet',
        'avaritia:infinity_hoe',
        'avaritia:infinity_pants',
        'avaritia:infinity_pickaxe',
        'avaritia:infinity_shovel',
        'avaritia:infinity_sword',
        'avaritia:infinity_totem',
        'avaritia:ultimate_stew',
        'avaritia:star_fuel',
        'avaritia:record_fragment',
        'avaritia:neutron_compressor',
        'avaritia:neutron_collector',
        'avaritia:densest_neutron_collector',
        'avaritia:denser_neutron_collector',
        'avaritia:dense_neutron_collector',
        'avaritia:cosmic_meatballs',
        'avaritia:endest_pearl',
        'avaritia:infinity_chest',
        'avaritia:upgrade_smithing_template'
    ]

    const TYPE = [
        "occultism:crushing",
        "ars_nouveau:crush",
        "occultism:miner",
        "betterfurnacesreforged:rock_generating",
        "integrateddynamics:mechanical_squeezer",
        "integrateddynamics:squeezer",
        "actuallyadditions:pressing"
    ]

    const INPUT = [
        '#alltheores:ore_hammers',
        'minecraft:ancient_debris',
    ]

    const OUTPUT = [
        'occultism:spirit_attuned_gem',
        'productivebees:honey_treat',
        'extendedcrafting:singularity[extendedcrafting:singularity_id="extendedcrafting:tets"]'
    ]

    const not_type_input = [
        'alltheores:uranium_ore',
        'alltheores:osmium_ore',
        'alltheores:lead_ore',
        'minecraft:gold_ore',
        'minecraft:copper_ore',
        'alltheores:tin_ore',
        'alltheores:aluminum_ore',
        'alltheores:zinc_ore',
        'minecraft:iron_ore',
        'alltheores:silver_ore',
        'alltheores:platinum_ore',
        'alltheores:nickel_ore',
        'alltheores:iridium_ore'
    ]

    event.remove({ type: "oritech:pulverizer", input: "#oritech:recyclable/diamond" })
    event.remove({ type: "oritech:foundry", input: 'minecraft:netherite_scrap' })
    event.remove({ type: "oritech:pulverizer", input: "minecraft:raw_iron" })
    event.remove({ type: "oritech:pulverizer", input: "minecraft:raw_copper" })
    event.remove({ type: "oritech:pulverizer", input: "minecraft:raw_gold" })
    event.remove({ type: "oritech:centrifuge", input: 'oritech:iron_clump' })
    event.remove({ type: "oritech:centrifuge", input: 'oritech:copper_clump' })
    event.remove({ type: "oritech:centrifuge", input: 'oritech:gold_clump' })


    event.remove({ type: "silentgear:salvaging", output: 'minecraft:diamond' })
    event.remove({ type: "silentgear:salvaging", output: 'minecraft:netherite_ingot' })

    event.remove({ not: { type: "minecraft:crafting_shaped" }, input: 'minecraft:iron_ore' })
    event.remove({ not: { type: "minecraft:crafting_shaped" }, input: 'minecraft:gold_ore' })
    event.remove({ not: { type: "minecraft:crafting_shaped" }, input: 'minecraft:copper_ore' })
    event.remove({ not: { type: "minecraft:crafting_shaped" }, input: 'alltheores:zinc_ore' })
    event.remove({ not: { type: "minecraft:crafting_shaped" }, input: 'alltheores:aluminum_ore' })
    event.remove({ not: { type: "minecraft:crafting_shaped" }, input: 'alltheores:lead_ore' })
    event.remove({ not: { type: "minecraft:crafting_shaped" }, input: 'alltheores:tin_ore' })
    event.remove({ not: { type: "minecraft:crafting_shaped" }, input: 'alltheores:nickel_ore' })

    event.remove({ mod: 'modular_machinery_reborn' })


    ID.forEach(id => {
        event.remove({ id: id })
    });
    TYPE.forEach(type => {
        event.remove({ type: type })
    });
    INPUT.forEach(input => {
        event.remove({ input: input })
    });
    OUTPUT.forEach(output => {
        event.remove({ output: output })
    })
    not_type_input.forEach(ti => {
        event.remove({ not: { type: "minecraft:crafting_shaped" }, input: ti })
    });


})
