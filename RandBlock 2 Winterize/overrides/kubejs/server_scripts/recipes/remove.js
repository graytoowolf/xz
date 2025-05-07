const remove = [
    'winterly:icicle',
    'occultism:spirit_attuned_gem',
    'occultism:chalk_white_impure',
    'occultism:otherstone',
    'occultism:ritual_dummy/summon_foliot_otherstone_trader',
    'occultism:ritual_dummy/summon_foliot_sapling_trader',
    'occultism:chalk_light_gray_impure',
    'occultism:golden_sacrificial_bowl',
    'occultism:chalk_lime_impure',
    'minecraft:cauldron',
    'naturesaura:gold_fiber',
    'occultism:satchel',
    'occultism:ritual_satchel_t1',
    'buildinggadgets2:template_manager',
    'buildinggadgets2:gadget_copy_paste',
    'buildinggadgets2:gadget_building',
    'buildinggadgets2:gadget_exchanging',
    'buildinggadgets2:gadget_cut_paste',
    'buildinggadgets2:gadget_destruction',
    'occultism:chalk_orange_impure',
    'occultism:chalk_gray_impure',
    'minecraft:snow_block',
    'ars_nouveau:agronomic_sourcelink',
    'ars_nouveau:alchemical_sourcelink',
    'ars_nouveau:vitalic_sourcelink',
    'ars_nouveau:mycelial_sourcelink',
    'brickfurnace:brick_blast_furnace',
    'brickfurnace:brick_smoker',
    'solarcooker:reflector',
    'solarcooker:solar_cooker',
    'ars_nouveau:volcanic_sourcelink',
    'ars_nouveau:enchanting_apparatus',
    'naturesaura:token_joy',
    'naturesaura:token_sorrow',
    'integrateddynamics:part_audio_reader',
    'integrateddynamics:part_block_reader',
    'integrateddynamics:part_entity_reader',
    'integrateddynamics:part_extradimensional_reader',
    'integrateddynamics:part_fluid_reader',
    'integrateddynamics:part_inventory_reader',
    'integrateddynamics:part_machine_reader',
    'integrateddynamics:part_network_reader',
    'integrateddynamics:part_redstone_reader',
    'integrateddynamics:part_world_reader',
    'integrateddynamics:part_audio_writer',
    'integrateddynamics:part_effect_writer',
    'integrateddynamics:part_entity_writer',
    'integrateddynamics:part_machine_writer',
    'integrateddynamics:part_inventory_writer',
    'integrateddynamics:part_redstone_writer',
    'integrateddynamics:part_connector_mono_directional',
    'integrateddynamics:part_connector_omni_directional',
    'integratedtunnels:part_importer_world_energy',
    'integratedtunnels:part_exporter_world_energy',
    'integratedtunnels:part_importer_world_item',
    'integratedtunnels:part_exporter_world_item',
    'integratedtunnels:part_importer_world_fluid',
    'integratedtunnels:part_exporter_world_fluid',
    'integratedtunnels:part_importer_world_block',
    'integratedtunnels:part_exporter_world_block',
    'integratedtunnels:part_player_simulator',
    'naturesaura:nature_altar',
    'naturesaura:bottle_two_the_rebottling',
    'enigmaticunity:dim_source_generator',
    'oritech:basic_generator_block',
    'oritech:fuel_generator_block',
    'oritech:lava_generator_block',
    'oritech:bio_generator_block',
    'oritech:big_solar_panel_block',
    'oritech:biosteel_dust',
    'oritech:biosteel_block',
    'industrialforegoing:machine_frame_pity',
    'minecraft:furnace',
    'oritech:pulverizer_block',
    'oritech:steam_engine_block',
    'actuallyadditions:lens_of_the_miner',
    'actuallyadditions:coffee_cup',
    'actuallyadditions:coffee_machine',
    'functionalstorage:obsidian_upgrade',
    'occultism:ritual_dummy/summon_foliot_crusher',
    'occultism:ritual_dummy/summon_djinni_crusher',
    'occultism:ritual_dummy/summon_afrit_crusher',
    'occultism:ritual_dummy/summon_marid_crusher',
    'starbunclemania:star_miner',
    'starbunclemania:star_build',
    'naturesaura:offering_table',
    'occultism:iesnium_sacrificial_bowl',
    'minecraft:raw_copper_block',

    'minecraft:white_dye',
    'minecraft:light_gray_dye',
    'minecraft:gray_dye',
    'minecraft:black_dye',
    'minecraft:brown_dye',
    'minecraft:red_dye',
    'minecraft:orange_dye',
    'minecraft:yellow_dye',
    'minecraft:lime_dye',
    'minecraft:green_dye',
    'minecraft:cyan_dye',
    'minecraft:light_blue_dye',
    'minecraft:blue_dye',
    'minecraft:purple_dye',
    'minecraft:magenta_dye',
    'minecraft:pink_dye',
    'minecraft:flint_and_steel',
    'occultism:ritual_satchel_t2',
    'occultism:chalk_void',
    'occultism:chalk_magenta',
    'occultism:chalk_pink',
    'occultism:chalk_black_impure',
    'occultism:chalk_brown_impure',
    'occultism:chalk_red_impure',
    'occultism:chalk_yellow_impure',
    'occultism:chalk_green_impure',
    'occultism:chalk_cyan_impure',
    'occultism:chalk_light_blue_impure',
    'occultism:chalk_blue_impure',
    'occultism:chalk_purple_impure',
    'occultism:chalk_black',
    'occultism:chalk_brown',
    'occultism:chalk_red',
    'occultism:chalk_gold',
    'occultism:chalk_green',
    'occultism:chalk_cyan',
    'occultism:chalk_light_blue',
    'occultism:chalk_blue',
    'occultism:chalk_purple',
    'occultism:chalk_magenta_impure',
    'occultism:chalk_pink_impure',
    'occultism:chalk_rainbow',
    'enigmaticunity:bright_source_generator',
    'enigmaticunity:bright_source_producer',
    'ars_nouveau:imbuement_chamber',
    'naturesaura:animal_spawner',
    'naturesaura:eye',
    'occultism:butcher_knife',
    'industrialforegoing:fluid_extractor',
    'minecraft:blast_furnace',
    'industrialforegoing:latex_processing_unit',
    'industrialforegoing:dissolution_chamber',
    'actuallyadditions:atomic_reconstructor',

    'actuallyadditions:lens',
    'actuallyadditions:lens_of_color',
    'actuallyadditions:lens_of_detonation',
    'actuallyadditions:lens_of_certain_death',
    'actuallyadditions:lens_of_the_killer',
    'actuallyadditions:lens_of_disenchanting',
    'oritech:raw_silicon',
    'cobblegengalore:block_gen_stone',
    'cobblegengalore:block_gen_copper',
    'immersiveengineering:blastbrick',
    'minecraft:raw_iron_block',
    'minecraft:raw_iron',
    'ars_nouveau:belt_of_unstable_gifts',
    'plushies:snow_golem_plushie',
    'industrialforegoing:dye_mixer',
    'ae2:damaged_budding_quartz',
    'ae2:chipped_budding_quartz',
    'ae2:flawed_budding_quartz',
    'ae2:flawless_budding_quartz',
    'ae2:small_quartz_bud',
    'ae2:medium_quartz_bud',
    'ae2:large_quartz_bud',
    'ae2:quartz_cluster',
    'winterly:snowguy',
    'minecraft:nether_quartz_ore',

    'oritech:small_nickel_clump',
    'oritech:small_iron_clump',
    'oritech:small_platinum_clump',
    'oritech:small_copper_clump',
    'oritech:small_gold_clump',
    'oritech:nickel_clump',
    'oritech:platinum_clump',
    'oritech:iron_clump',
    'oritech:copper_clump',
    'oritech:gold_clump',
    'oritech:nickel_gem',
    'oritech:platinum_gem',
    'oritech:iron_gem',
    'oritech:copper_gem',
    'oritech:gold_gem',

    'actuallyadditions:lava_factory_controller',
    'actuallyadditions:lava_factory_casing',

    'create:crushed_raw_iron',
    'create:crushed_raw_gold',
    'create:crushed_raw_copper',
    'create:crushed_raw_zinc',
    'create:crushed_raw_osmium',
    'create:crushed_raw_platinum',
    'create:crushed_raw_silver',
    'create:crushed_raw_tin',
    'create:crushed_raw_lead',
    'create:crushed_raw_aluminum',
    'create:crushed_raw_uranium',
    'create:crushed_raw_nickel',
    'industrialforegoing:washing_factory',
    'minecraft:ender_pearl',
    'create:water_wheel',
    'create:large_water_wheel',
    'create:steam_engine',
    'create:stock_ticker',
    'minecraft:gold_ore',
    'minecraft:deepslate_gold_ore',
    'minecraft:lapis_ore',
    'minecraft:deepslate_lapis_ore',
    'minecraft:raw_gold',
    'ae2:advanced_card',
    'kubejs:nickel_ingot',
    'immersiveengineering:raw_nickel',
    'immersiveengineering:ore_nickel',
    'immersiveengineering:deepslate_ore_nickel',
    'mekanism:osmium_ore',
    'mekanism:deepslate_osmium_ore',
    'mekanism:tin_ore',
    'mekanism:deepslate_tin_ore',
    'immersiveengineering:ore_silver',
    'immersiveengineering:deepslate_ore_silver',
    'mekanism:lead_ore',
    'mekanism:deepslate_lead_ore',
    'mekanism:raw_osmium',
    'mekanism:raw_tin',
    'immersiveengineering:raw_silver',
    'mekanism:raw_lead',
    'mekanism:steel_casing',
    'mekanism:alloy_infused',
    'enderite:enderite_ore',
    'enderite:enderite_scrap',
    'occultism:purified_ink',
    'occultism:awakened_feather',
    'create:blaze_cake',
    'create_deep_dark:echo_cake',
    'mob_grinding_utils:mob_swab',
    'mob_grinding_utils:nutritious_chicken_feed',
    'mob_grinding_utils:gm_chicken_feed',
    'mob_grinding_utils:gm_chicken_feed_cursed',
    'functionalstorage:dripping_upgrade',
    'morefunctionalstorage:refill_upgrade',
    'morefunctionalstorage:dimensional_refill_upgrade',
    'morefunctionalstorage:stonecutting_upgrade',
    'functionalstorage:water_generator_upgrade',

    'minecraft:netherite_upgrade_smithing_template',
    'modular_angelring:angel_ring_upgrade_smithing_template',
    'minecraft:sentry_armor_trim_smithing_template',
    'minecraft:vex_armor_trim_smithing_template',
    'minecraft:wild_armor_trim_smithing_template',
    'minecraft:coast_armor_trim_smithing_template',
    'minecraft:dune_armor_trim_smithing_template',
    'minecraft:wayfinder_armor_trim_smithing_template',
    'minecraft:raiser_armor_trim_smithing_template',
    'minecraft:shaper_armor_trim_smithing_template',
    'minecraft:host_armor_trim_smithing_template',
    'minecraft:ward_armor_trim_smithing_template',
    'minecraft:silence_armor_trim_smithing_template',
    'minecraft:tide_armor_trim_smithing_template',
    'minecraft:snout_armor_trim_smithing_template',
    'minecraft:rib_armor_trim_smithing_template',
    'minecraft:eye_armor_trim_smithing_template',
    'minecraft:spire_armor_trim_smithing_template',
    'minecraft:flow_armor_trim_smithing_template',
    'minecraft:bolt_armor_trim_smithing_template',
    'enderite:enderite_upgrade_smithing_template',
    'ae2:fluix_upgrade_smithing_template',
    'dimensionalpocketsii:dimensional_upgrade_template',

    'mekanism:basic_tier_installer',
    'mekanism:advanced_tier_installer',
    'mekanism:elite_tier_installer',
    'mekanism:ultimate_tier_installer',
    'mekanism:upgrade_speed',
    'mekanism:upgrade_energy',
    'mekanism:upgrade_muffling',
    'mekanism:upgrade_chemical',
    'oritech:machine_ultimate_addon',
    'oritech:machine_speed_addon',
    'oritech:machine_processing_addon',
    'oritech:machine_yield_addon', 'oritech:crop_filter_addon',
    'oritech:machine_efficiency_addon',
    'oritech:machine_capacitor_addon',
    'oritech:machine_acceptor_addon',
    'oritech:machine_redstone_addon',

    'mob_grinding_utils:spawner_upgrade_width',
    'mob_grinding_utils:spawner_upgrade_height',
    'mob_grinding_utils:xp_solidifier_upgrade',
    'mob_grinding_utils:absorption_upgrade',
    'mob_grinding_utils:saw_upgrade_sharpness',
    'mekanism:upgrade_anchor',
    'mekanism:upgrade_stone_generator',
    'mob_grinding_utils:saw_upgrade_beheading',
    'mob_grinding_utils:saw_upgrade_arthropod',
    'mob_grinding_utils:saw_upgrade_smite',
    'mob_grinding_utils:saw_upgrade_fire',
    'mob_grinding_utils:fan_upgrade_speed',
    'mob_grinding_utils:fan_upgrade_width',
    'mob_grinding_utils:fan_upgrade_height',
    'pipez:basic_upgrade',
    'pipez:improved_upgrade',
    'pipez:advanced_upgrade',
    'pipez:ultimate_upgrade',
    'mob_grinding_utils:saw_upgrade_looting',
    'ironfurnaces:upgrade_silver2',
    'ironfurnaces:upgrade_gold2',
    'ironfurnaces:upgrade_iron2',
    'ironfurnaces:upgrade_obsidian2',
    'ironfurnaces:upgrade_iron',
    'ironfurnaces:upgrade_gold',
    'ironfurnaces:upgrade_diamond',
    'ironfurnaces:upgrade_emerald',
    'ironfurnaces:upgrade_obsidian',
    'ironfurnaces:upgrade_crystal',
    'ironfurnaces:upgrade_netherite',
    'ironfurnaces:upgrade_copper',
    'ironfurnaces:upgrade_silver',

    'functionalstorage:netherite_upgrade',
    'morefunctionalstorage:breaker_upgrade',
    'morefunctionalstorage:placer_upgrade',
    'morefunctionalstorage:speed_upgrade_augment',
    'advanced_ae:quantum_upgrade_base',
    'advanced_ae:walk_speed_card',
    'advanced_ae:sprint_speed_card',
    'advanced_ae:step_assist_card',
    'advanced_ae:jump_height_card',
    'advanced_ae:lava_immunity_card',
    'advanced_ae:flight_card',
    'advanced_ae:water_breathing_card',
    'advanced_ae:auto_feeding_card',
    'advanced_ae:auto_stock_card',
    'advanced_ae:magnet_card',
    'advanced_ae:hp_buffer_card',
    'advanced_ae:evasion_card',
    'advanced_ae:regeneration_card',
    'advanced_ae:strength_card',
    'advanced_ae:attack_speed_card',
    'advanced_ae:luck_card',
    'advanced_ae:reach_card',
    'advanced_ae:swim_speed_card',
    'advanced_ae:night_vision_card',
    'advanced_ae:flight_drift_card',
    'advanced_ae:recharging_card',
    'advanced_ae:portable_workbench_card',
    'advanced_ae:pick_craft_card',
    'functionalstorage:copper_upgrade',
    'functionalstorage:gold_upgrade',
    'functionalstorage:diamond_upgrade',

    'sophisticatedbackpacks:stonecutter_upgrade',
    'sophisticatedbackpacks:stack_upgrade_starter_tier',
    'sophisticatedbackpacks:stack_upgrade_tier_1',
    'sophisticatedbackpacks:stack_upgrade_tier_2',
    'sophisticatedbackpacks:stack_upgrade_tier_3',
    'sophisticatedbackpacks:stack_upgrade_tier_4',
    'sophisticatedbackpacks:stack_upgrade_omega_tier',
    'sophisticatedbackpacks:jukebox_upgrade',
    'sophisticatedbackpacks:advanced_jukebox_upgrade',
    'sophisticatedbackpacks:pickup_upgrade',
    'sophisticatedbackpacks:advanced_pickup_upgrade',
    'sophisticatedbackpacks:filter_upgrade',
    'sophisticatedbackpacks:advanced_filter_upgrade',
    'sophisticatedbackpacks:magnet_upgrade',
    'sophisticatedbackpacks:advanced_magnet_upgrade',
    'sophisticatedbackpacks:feeding_upgrade',
    'sophisticatedbackpacks:advanced_feeding_upgrade',
    'sophisticatedbackpacks:compacting_upgrade',
    'sophisticatedbackpacks:advanced_compacting_upgrade',
    'sophisticatedbackpacks:void_upgrade',
    'sophisticatedbackpacks:advanced_void_upgrade',
    'sophisticatedbackpacks:restock_upgrade',
    'sophisticatedbackpacks:advanced_restock_upgrade',
    'sophisticatedbackpacks:deposit_upgrade',
    'sophisticatedbackpacks:advanced_deposit_upgrade',
    'sophisticatedbackpacks:refill_upgrade',
    'sophisticatedbackpacks:advanced_refill_upgrade',
    'sophisticatedbackpacks:inception_upgrade',
    'sophisticatedbackpacks:everlasting_upgrade',
    'sophisticatedbackpacks:smelting_upgrade',
    'sophisticatedbackpacks:auto_smelting_upgrade',
    'sophisticatedbackpacks:smoking_upgrade',
    'sophisticatedbackpacks:auto_smoking_upgrade',
    'sophisticatedbackpacks:blasting_upgrade',
    'sophisticatedbackpacks:auto_blasting_upgrade',
    'sophisticatedbackpacks:crafting_upgrade',
    'sophisticatedstorage:blasting_upgrade',
    'sophisticatedstorage:auto_blasting_upgrade',
    'sophisticatedstorage:crafting_upgrade',
    'sophisticatedstorage:stonecutter_upgrade',
    'sophisticatedstorage:stack_upgrade_tier_1',
    'sophisticatedstorage:stack_upgrade_tier_1_plus',
    'sophisticatedstorage:stack_upgrade_tier_2',
    'sophisticatedstorage:stack_upgrade_tier_3',
    'sophisticatedstorage:stack_upgrade_tier_4',
    'sophisticatedbackpacks:tool_swapper_upgrade',
    'sophisticatedbackpacks:advanced_tool_swapper_upgrade',
    'sophisticatedbackpacks:tank_upgrade',
    'sophisticatedbackpacks:battery_upgrade',
    'sophisticatedbackpacks:pump_upgrade',
    'sophisticatedbackpacks:advanced_pump_upgrade',
    'sophisticatedbackpacks:xp_pump_upgrade',
    'sophisticatedbackpacks:anvil_upgrade',
    'sophisticatedbackpacks:smithing_upgrade',
    'sophisticatedstorage:pickup_upgrade',
    'sophisticatedstorage:advanced_pickup_upgrade',
    'sophisticatedstorage:filter_upgrade',
    'sophisticatedstorage:advanced_filter_upgrade',
    'sophisticatedstorage:magnet_upgrade',
    'sophisticatedstorage:advanced_magnet_upgrade',
    'sophisticatedstorage:feeding_upgrade',
    'sophisticatedstorage:advanced_feeding_upgrade',
    'sophisticatedstorage:compacting_upgrade',
    'sophisticatedstorage:advanced_compacting_upgrade',
    'sophisticatedstorage:void_upgrade',
    'sophisticatedstorage:advanced_void_upgrade',
    'sophisticatedstorage:smelting_upgrade',
    'sophisticatedstorage:auto_smelting_upgrade',
    'sophisticatedstorage:smoking_upgrade',
    'sophisticatedstorage:auto_smoking_upgrade',
    'sophisticatedstorage:stack_upgrade_tier_5',
    'sophisticatedstorage:stack_upgrade_omega_tier',
    'sophisticatedstorage:jukebox_upgrade',
    'sophisticatedstorage:advanced_jukebox_upgrade',
    'sophisticatedstorage:pump_upgrade',
    'sophisticatedstorage:advanced_pump_upgrade',
    'sophisticatedstorage:xp_pump_upgrade',
    'sophisticatedstorage:compression_upgrade',
    'sophisticatedstorage:hopper_upgrade',
    'sophisticatedstorage:advanced_hopper_upgrade',
    'sophisticatedstorage:basic_tier_upgrade',
    'sophisticatedstorage:basic_to_copper_tier_upgrade',
    'sophisticatedstorage:basic_to_iron_tier_upgrade',
    'sophisticatedstorage:basic_to_gold_tier_upgrade',
    'sophisticatedstorage:basic_to_diamond_tier_upgrade',
    'sophisticatedstorage:basic_to_netherite_tier_upgrade',
    'sophisticatedstorage:copper_to_iron_tier_upgrade',
    'sophisticatedstorage:copper_to_gold_tier_upgrade',
    'sophisticatedstorage:copper_to_diamond_tier_upgrade',
    'sophisticatedstorage:copper_to_netherite_tier_upgrade',
    'sophisticatedstorage:iron_to_gold_tier_upgrade',
    'sophisticatedstorage:iron_to_diamond_tier_upgrade',
    'sophisticatedstorage:iron_to_netherite_tier_upgrade',
    'sophisticatedstorage:gold_to_diamond_tier_upgrade',
    'sophisticatedstorage:gold_to_netherite_tier_upgrade',
    'sophisticatedstorage:diamond_to_netherite_tier_upgrade',

    'mekanism:module_hydraulic_propulsion_unit',
    'mekanism:module_frost_walker_unit',
    'mekanism:module_soul_surfer_unit',
    'mekanismgenerators:module_solar_recharging_unit',
    'mekanismgenerators:module_geothermal_generator_unit',
    'gmut:module_gravitational_modulating_additional_unit',
    'mekanism:module_energy_unit',
    'mekanism:module_color_modulation_unit',
    'mekanism:module_laser_dissipation_unit',
    'mekanism:module_radiation_shielding_unit',
    'mekanism:module_excavation_escalation_unit',
    'mekanism:module_attack_amplification_unit',
    'mekanism:module_farming_unit',
    'mekanism:module_shearing_unit',
    'mekanism:module_silk_touch_unit',
    'mekanism:module_fortune_unit',
    'mekanism:module_blasting_unit',
    'mekanism:module_vein_mining_unit',
    'mekanism:module_teleportation_unit',
    'mekanism:module_inhalation_purification_unit',
    'mekanism:module_vision_enhancement_unit',
    'mekanism:module_nutritional_injection_unit',
    'mekanism:module_dosimeter_unit',
    'mekanism:module_geiger_unit',
    'mekanism:module_jetpack_unit',
    'mekanism:module_charge_distribution_unit',
    'mekanism:module_gravitational_modulating_unit',
    'mekanism:module_elytra_unit',
    'mekanism:module_locomotive_boosting_unit',
    'mekanism:module_gyroscopic_stabilization_unit',
    'mekanism:module_hydrostatic_repulsor_unit',
    'mekanism:module_motorized_servo_unit',

    'laserio:filter_count',
    'constructionstick:template_angel',
    'constructionstick:template_destruction',
    'constructionstick:template_replacement',
    'constructionstick:template_unbreakable',
    'constructionstick:template_battery',
    'torchmaster:feral_flare_lantern',
    'mekanism:configurator',
    'naturesaura:calling_spirit',

    'ironfurnaces:augment_blasting',
    'ironfurnaces:augment_smoking',
    'ironfurnaces:augment_factory',
    'ironfurnaces:augment_generator',
    'ironfurnaces:augment_speed',
    'ironfurnaces:augment_fuel',
    'ironfurnaces:heater',
    'ironfurnaces:item_heater',
    'utilitarian:angel_block',
    'create:factory_gauge',
    'industrialforegoing:diamond_gear',

    'ifeu:dragon_star_generator',
    'ifeu:arcane_dragon_egg_forging',
    'ifeu:time_controller',
    'ifeu:weather_controller',
    'ifeu:rule_controller',
    'actuallyadditions:empty_cup',
    'oritech:accelerator_controller',
    'minecraft:echo_shard',
    'minecraft:netherite_scrap',
    'extendedae:infinity_water_cell',
    'extendedae:infinity_cobblestone_cell'
]


const remove_input = [
    'minecraft:raw_copper',
    'minecraft:deepslate_copper_ore',
    'minecraft:copper_ore',
    'oritech:biosteel_dust',
    'oritech:biosteel_block',
    'minecraft:iron_ore',
    'minecraft:deepslate_iron_ore',
    'minecraft:raw_copper_block',
    'actuallyadditions:lens',
    'actuallyadditions:lens_of_color',
    'actuallyadditions:lens_of_detonation',
    'actuallyadditions:lens_of_certain_death',
    'actuallyadditions:lens_of_the_killer',
    'actuallyadditions:lens_of_disenchanting',
    'minecraft:redstone_ore',
    'minecraft:deepslate_redstone_ore',
    'minecraft:raw_iron_block',
    'minecraft:raw_iron',
    'minecraft:nether_quartz_ore',

    'oritech:small_nickel_clump',
    'oritech:small_iron_clump',
    'oritech:small_platinum_clump',
    'oritech:small_copper_clump',
    'oritech:small_gold_clump',
    'oritech:nickel_clump',
    'oritech:platinum_clump',
    'oritech:iron_clump',
    'oritech:copper_clump',
    'oritech:gold_clump',
    'oritech:nickel_gem',
    'oritech:platinum_gem',
    'oritech:iron_gem',
    'oritech:copper_gem',
    'oritech:gold_gem',

    'create:crushed_raw_iron',
    'create:crushed_raw_gold',
    'create:crushed_raw_copper',
    'create:crushed_raw_zinc',
    'create:crushed_raw_osmium',
    'create:crushed_raw_platinum',
    'create:crushed_raw_silver',
    'create:crushed_raw_tin',
    'create:crushed_raw_lead',
    'create:crushed_raw_aluminum',
    'create:crushed_raw_uranium',
    'create:crushed_raw_nickel',
    'actuallyadditions:black_quartz_ore',
    'minecraft:gold_ore',
    'minecraft:deepslate_gold_ore',
    'minecraft:lapis_ore',
    'minecraft:deepslate_lapis_ore',
    'minecraft:raw_gold',
    'immersiveengineering:raw_nickel',
    'immersiveengineering:ore_nickel',
    'immersiveengineering:deepslate_ore_nickel',
    'mekanism:osmium_ore',
    'mekanism:deepslate_osmium_ore',
    'mekanism:tin_ore',
    'mekanism:deepslate_tin_ore',
    'immersiveengineering:ore_silver',
    'immersiveengineering:deepslate_ore_silver',
    'mekanism:lead_ore',
    'mekanism:deepslate_lead_ore',
    'mekanism:raw_osmium',
    'mekanism:raw_tin',
    'immersiveengineering:raw_silver',
    'mekanism:raw_lead',
    'enderite:enderite_ore'

]

ServerEvents.recipes(event => {
    remove.forEach(re => {
        event.remove({ output: re })
    })

    remove_input.forEach(ri => {
        event.remove({ input: ri })
    })

    event.remove({ mod: 'lychee' })
    event.remove({ mod: 'gateways' })

    event.remove({ type: 'naturesaura:animal_spawner' })
    event.remove({ type: 'industrialforegoing:fluid_extractor' })
    event.remove({ type: 'immersiveengineering:blast_furnace_fuel' })
    event.remove({ type: 'immersiveengineering:blast_furnace' })
    event.remove({ type: 'immersiveengineering:arc_furnace' })
    event.remove({ type: 'immersiveengineering:generated_list' })
    event.remove({ type: 'industrialforegoing:laser_drill_ore' })
    event.remove({ type: 'occultism:miner' })

    event.remove({ id: 'starbunclemania:fluid/create_choco_to_source' })
    event.remove({ id: 'starbunclemania:fluid/create_honey_to_source' })
    event.remove({ id: 'starbunclemania:fluid/lava_to_source' })
    event.remove({ id: 'starbunclemania:fluid/milk_to_source' })
    event.remove({ id: 'starbunclemania:fluid/pnc_ethanol_to_source' })
    event.remove({ id: 'ars_nouveau:sourcestone' })
    event.remove({ id: "ars_nouveau:arcane_pedestal" })
    event.remove({ id: 'ars_nouveau:starbuncle_charm' })
    event.remove({ id: 'industrialforegoing:laser_drill_fluid/lava' })
    event.remove({ id: 'integrateddynamics:squeezer/convenience/minecraft_lava' })
    event.remove({ id: 'integrateddynamics:mechanical_squeezer/convenience/minecraft_lava' })
    event.remove({ id: 'integrateddynamics:mechanical_squeezer/convenience/minecraft_lava_magma_cream' })
    event.remove({ id: 'integrateddynamics:mechanical_squeezer/convenience/minecraft_lava_netherrack' })
    event.remove({ id: 'ars_nouveau:sourcestone_sconce' })
    event.remove({ id: 'oritech:crafting/alloy/steel' })
    event.remove({ id: 'ars_nouveau:imbuement_amethyst_block' })
    event.remove({ id: 'winterly:cryomarble_block' })
    event.remove({ id: 'winterly:cryomarble_from_cryomarble_block' })
    event.remove({ id: 'oritech:crafting/alloy/electrum' })
    event.remove({ id: 'coffeespawner:coffee_machine_01' })
    event.remove({ id: 'immersiveengineering:arcfurnace/raw_ore_copper' })
    event.remove({ id: 'immersiveengineering:arcfurnace/ore_copper' })
    event.remove({ id: 'integrateddynamics:mechanical_squeezer/ore/raw_copper' })
    event.remove({ id: 'integrateddynamics:squeezer/ore/raw_copper' })
    event.remove({ id: 'naturesaura:altar/infused_iron' })
    event.remove({ id: 'naturesaura:altar/infused_iron_block' })
    event.remove({ id: 'immersiveengineering:arcfurnace/ore_iron' })
    event.remove({ id: 'integrateddynamics:mechanical_squeezer/ore/raw_iron' })
    event.remove({ id: 'integrateddynamics:squeezer/ore/raw_iron' })
    event.remove({ id: 'immersiveengineering:crusher/ore_copper' })
    event.remove({ id: 'immersiveengineering:crusher/raw_block_copper' })
    event.remove({ id: 'immersiveengineering:crusher/raw_ore_copper' })
    event.remove({ id: 'immersiveengineering:crusher/raw_block_iron' })
    event.remove({ id: 'immersiveengineering:crusher/ore_iron' })
    event.remove({ id: 'immersiveengineering:crusher/raw_ore_iron' })
    event.remove({ id: 'immersiveengineering:crusher/raw_block_uranium' })
    event.remove({ id: 'immersiveengineering:crusher/raw_ore_uranium' })
    event.remove({ id: 'immersiveengineering:crusher/ore_uranium' })
    event.remove({ id: 'immersiveengineering:crusher/ore_gold' })
    event.remove({ id: 'immersiveengineering:crusher/raw_block_gold' })
    event.remove({ id: 'immersiveengineering:crusher/raw_ore_gold' })
    event.remove({ id: 'immersiveengineering:crusher/ore_osmium' })
    event.remove({ id: 'immersiveengineering:crusher/raw_block_osmium' })
    event.remove({ id: 'immersiveengineering:crusher/raw_ore_osmium' })
    event.remove({ id: 'immersiveengineering:crusher/raw_block_lead' })
    event.remove({ id: 'immersiveengineering:crusher/ore_lead' })
    event.remove({ id: 'immersiveengineering:crusher/raw_ore_lead' })
    event.remove({ id: 'immersiveengineering:crusher/raw_ore_silver' })
    event.remove({ id: 'immersiveengineering:crusher/ore_silver' })
    event.remove({ id: 'immersiveengineering:crusher/raw_block_silver' })
    event.remove({ id: 'immersiveengineering:crusher/ore_tin' })
    event.remove({ id: 'immersiveengineering:crusher/raw_ore_tin' })
    event.remove({ id: 'immersiveengineering:crusher/raw_block_tin' })
    event.remove({ id: 'immersiveengineering:crusher/ore_aluminum' })
    event.remove({ id: 'immersiveengineering:crusher/raw_ore_aluminum' })
    event.remove({ id: 'immersiveengineering:crusher/raw_block_aluminum' })
    event.remove({ id: 'immersiveengineering:crusher/raw_block_nickel' })
    event.remove({ id: 'immersiveengineering:crusher/raw_ore_nickel' })
    event.remove({ id: 'immersiveengineering:crusher/ore_nickel' })
    event.remove({ id: 'mekanism:enriching/string' })
    event.remove({ id: 'apothic_enchanting:cobweb' })
    event.remove({ id: 'industrialforegoing:dissolution_chamber/fluid_crafting_table' })
    event.remove({ id: 'immersiveengineering:crusher/ore_redstone' })
    event.remove({ id: 'integrateddynamics:squeezer/ore/redstone' })
    event.remove({ id: 'integrateddynamics:mechanical_squeezer/ore/redstone' })
    event.remove({ id: 'oritech:assembler/blazerod' })
    event.remove({ id: 'oritech:cooler/snow' })
    event.remove({ id: 'extendedae:fixer/certus_flawed' })
    event.remove({ id: 'advanced_ae:quartzcrystal' })
    event.remove({ id: 'ars_nouveau:air_essence_to_snow_bucket' })
    event.remove({ id: 'oritech:grinder/raw/platinum' })
    event.remove({ id: 'oritech:grinder/raw/nickel' })
    event.remove({ id: 'oritech:grinder/raw/iron' })
    event.remove({ id: 'oritech:grinder/raw/gold' })
    event.remove({ id: 'oritech:grinder/raw/copper' })
    event.remove({ id: 'create:splashing/gravel' })
    event.remove({ id: 'create:splashing/red_sand' })
    event.remove({ id: 'create:splashing/soul_sand' })
    event.remove({ id: 'immersiveengineering:alloysmelter/brass' })
    event.remove({ id: 'immersiveengineering:alloysmelter/bronze' })
    event.remove({ id: 'immersiveengineering:alloysmelter/constantan' })
    event.remove({ id: 'immersiveengineering:alloysmelter/electrum' })
    event.remove({ id: 'immersiveengineering:crafting/plate_aluminum_hammering' })
    event.remove({ id: 'immersiveengineering:crafting/plate_constantan_hammering' })
    event.remove({ id: 'immersiveengineering:crafting/plate_copper_hammering' })
    event.remove({ id: 'immersiveengineering:crafting/plate_electrum_hammering' })
    event.remove({ id: 'immersiveengineering:crafting/plate_gold_hammering' })
    event.remove({ id: 'immersiveengineering:crafting/plate_iron_hammering' })
    event.remove({ id: 'immersiveengineering:crafting/plate_lead_hammering' })
    event.remove({ id: 'immersiveengineering:crafting/plate_nickel_hammering' })
    event.remove({ id: 'immersiveengineering:crafting/plate_silver_hammering' })
    event.remove({ id: 'immersiveengineering:crafting/plate_steel_hammering' })
    event.remove({ id: 'immersiveengineering:crafting/plate_uranium_hammering' })
    event.remove({ id: 'immersiveengineering:crafting/hammercrushing_aluminum' })
    event.remove({ id: 'immersiveengineering:crafting/hammercrushing_ardite' })
    event.remove({ id: 'immersiveengineering:crafting/hammercrushing_cobalt' })
    event.remove({ id: 'immersiveengineering:crafting/hammercrushing_copper' })
    event.remove({ id: 'immersiveengineering:crafting/hammercrushing_gold' })
    event.remove({ id: 'immersiveengineering:crafting/hammercrushing_iron' })
    event.remove({ id: 'immersiveengineering:crafting/hammercrushing_lead' })
    event.remove({ id: 'immersiveengineering:crafting/hammercrushing_nickel' })
    event.remove({ id: 'immersiveengineering:crafting/hammercrushing_osmium' })
    event.remove({ id: 'immersiveengineering:crafting/hammercrushing_platinum' })
    event.remove({ id: 'immersiveengineering:crafting/hammercrushing_silver' })
    event.remove({ id: 'immersiveengineering:crafting/hammercrushing_tin' })
    event.remove({ id: 'immersiveengineering:crafting/hammercrushing_tungsten' })
    event.remove({ id: 'immersiveengineering:crafting/hammercrushing_uranium' })
    event.remove({ id: 'immersiveengineering:crafting/hammercrushing_zinc' })
    event.remove({ id: 'immersiveengineering:crafting/wire_aluminum' })
    event.remove({ id: 'immersiveengineering:crafting/wire_copper' })
    event.remove({ id: 'immersiveengineering:crafting/wire_electrum' })
    event.remove({ id: 'immersiveengineering:crafting/wire_lead' })
    event.remove({ id: 'immersiveengineering:crafting/wire_steel' })
    event.remove({ id: 'immersiveengineering:metalpress/rod_steel' })
    event.remove({ id: 'immersiveengineering:metalpress/rod_aluminum' })
    event.remove({ id: 'immersiveengineering:crafting/stick_steel' })
    event.remove({ id: 'immersiveengineering:crafting/stick_aluminum' })
    event.remove({ id: 'immersiveengineering:crafting/raw_hammercrushing_platinum' })
    event.remove({ id: 'immersiveengineering:crafting/raw_hammercrushing_ardite' })
    event.remove({ id: 'immersiveengineering:crafting/raw_hammercrushing_aluminum' })
    event.remove({ id: 'immersiveengineering:crafting/raw_hammercrushing_cobalt' })
    event.remove({ id: 'immersiveengineering:crafting/raw_hammercrushing_iron' })
    event.remove({ id: 'immersiveengineering:crafting/raw_hammercrushing_lead' })
    event.remove({ id: 'immersiveengineering:crafting/raw_hammercrushing_nickel' })
    event.remove({ id: 'immersiveengineering:crafting/raw_hammercrushing_lead' })
    event.remove({ id: 'immersiveengineering:crafting/raw_hammercrushing_osmium' })
    event.remove({ id: 'immersiveengineering:crafting/raw_hammercrushing_silver' })
    event.remove({ id: 'immersiveengineering:crafting/raw_hammercrushing_tin' })
    event.remove({ id: 'immersiveengineering:crafting/raw_hammercrushing_tungsten' })
    event.remove({ id: 'immersiveengineering:crafting/raw_hammercrushing_uranium' })
    event.remove({ id: 'immersiveengineering:crafting/raw_hammercrushing_zinc' })
    event.remove({ id: "immersiveengineering:crafting/raw_hammercrushing_gold" })
    event.remove({ id: 'industrialforegoing:iron_gear' })
    event.remove({ id: 'industrialforegoing:gold_gear' })
    event.remove({ id: 'ifeu:netherite_gear' })
    event.remove({ id: 'industrialforegoing:laser_drill_fluid/lava' })
    event.remove({ id: 'create:mixing/andesite_alloy' })
    event.remove({ id: 'create:mixing/andesite_alloy_from_zinc' })
    event.remove({ id: 'extendedae:assembler/circuit_cutter' })
    event.remove({ id: 'ae2:inscriber/logic_processor_print' })
    event.remove({ id: 'ae2:inscriber/engineering_processor_print' })
    event.remove({ id: 'integrateddynamics:squeezer/ore/raw_gold' })
    event.remove({ id: 'integrateddynamics:mechanical_squeezer/ore/raw_gold' })
    event.remove({ id: 'immersiveengineering:crusher/ore_lapis' })
    event.remove({ id: 'integrateddynamics:squeezer/ore/gem_lapis' })
    event.remove({ id: 'integrateddynamics:mechanical_squeezer/ore/gem_lapis' })
    event.remove({ id: 'pneumaticcraft:thermo_plant/vegetable_oil_from_crops' })
    event.remove({ id: 'pneumaticcraft:thermo_plant/vegetable_oil_from_seeds' })
    event.remove({ id: 'oritech:crafting/alloy/adamant' })
    event.remove({ id: 'oritech:foundry/alloy/adamant' })
    event.remove({ id: 'oritech:foundry/alloy/inverse/adamant' })
    event.remove({ id: 'oritech:foundry/alloy/electrum' })
    event.remove({ id: 'oritech:foundry/alloy/inverse/electrum' })
    event.remove({ id: 'integrateddynamics:squeezer/ore/raw_lead' })
    event.remove({ id: 'integrateddynamics:mechanical_squeezer/ore/raw_lead' })
    event.remove({ id: 'integrateddynamics:squeezer/ore/raw_silver' })
    event.remove({ id: 'integrateddynamics:mechanical_squeezer/ore/raw_silver' })
    event.remove({ id: 'integrateddynamics:squeezer/ore/raw_nickel' })
    event.remove({ id: 'integrateddynamics:mechanical_squeezer/ore/raw_nickel' })
    event.remove({ id: 'integrateddynamics:mechanical_drying_basin/convenience/minecraft_netherrack' })
    event.remove({ id: 'minecraft:netherite_ingot' })
    event.remove({ id: 'create_deep_dark:mixing_molten_echo' })
    event.remove({ id: 'create_deep_dark:mixing_molten_echo_compat' })
    event.remove({ id: 'mekanismgenerators:chemical_infusing/fusion_fuel' })
    event.remove({ id: 'mekanismgenerators:separator/heavy_water' })
    event.remove({ id: 'mekanismgenerators:activating/tritium' })
    event.remove({ id: 'occultism:ritual/possess_warden' })
    event.remove({ id: 'industrialforegoing:dissolution_chamber/processing_addon_tier_1' })
    event.remove({ id: 'industrialforegoing:dissolution_chamber/processing_addon_tier_2' })
    event.remove({ id: 'industrialforegoing:dissolution_chamber/efficiency_addon_tier_1' })
    event.remove({ id: 'industrialforegoing:dissolution_chamber/efficiency_addon_tier_2' })
    event.remove({ id: 'industrialforegoing:dissolution_chamber/speed_addon_tier_1' })
    event.remove({ id: 'industrialforegoing:dissolution_chamber/speed_addon_tier_2' })
    event.remove({ id: 'industrialforegoing:dissolution_chamber/speed_addon_3' })
    event.remove({ id: 'industrialforegoing:dissolution_chamber/speed_addon_4' })
    event.remove({ id: 'industrialforegoing:dissolution_chamber/speed_addon_5' })
    event.remove({ id: 'industrialforegoing:dissolution_chamber/speed_addon_6' })
    event.remove({ id: 'industrialforegoing:dissolution_chamber/efficiency_addon_3' })
    event.remove({ id: 'industrialforegoing:dissolution_chamber/efficiency_addon_4' })
    event.remove({ id: 'industrialforegoing:dissolution_chamber/efficiency_addon_5' })
    event.remove({ id: 'industrialforegoing:dissolution_chamber/efficiency_addon_6' })
    event.remove({ id: 'industrialforegoing:dissolution_chamber/processing_addon_3' })
    event.remove({ id: 'industrialforegoing:dissolution_chamber/processing_addon_4' })
    event.remove({ id: 'industrialforegoing:dissolution_chamber/processing_addon_5' })
    event.remove({ id: 'industrialforegoing:dissolution_chamber/processing_addon_6' })
    event.remove({ id: 'oritech:grinder/dust/sand_from_gravel' })
    event.remove({ id: 'oritech:pulverizer/dust/sand_from_gravel' })
    event.remove({ id: 'oritech:grinder/dust/sand_from_sandstone' })
    event.remove({ id: 'oritech:pulverizer/dust/sand_from_sandstone' })
    event.remove({ id: 'oritech:grinder/dust/gravel' })
    event.remove({ id: 'oritech:pulverizer/dust/gravel' })
    event.remove({ id: 'pneumaticcraft:pressure_chamber/etching_acid' })
    event.remove({ id: 'create_deep_dark:6.0.0/compacting_echo_ingot' })
    event.remove({ id: 'create_deep_dark:6.0.1/compacting_echo_ingot' })
    event.remove({ id: 'mekanism:processing/uranium/sulfuric_acid' })
    event.remove({ id: 'mekanism:processing/uranium/fissile_fuel' })
    event.remove({ id: 'mekanism:processing/lategame/plutonium' })
    event.remove({ id: 'ifeu:infuser/sculk' })
    event.remove({ id: 'oritech:grinder/dust/netheritescrap' })
    event.remove({ id: 'solarcooker:diamond_block' })
})






