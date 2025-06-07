ServerEvents.recipes(event => {
    const { occultism } = event.recipes
    const { kubejs } = event.recipes
    const crushRecipes = [
        ['alltheores:raw_lead', 'alltheores:lead_dust'],
        ['alltheores:raw_tin', 'alltheores:tin_dust'],
        ['alltheores:raw_zinc', 'alltheores:zinc_dust'],
        ['occultism:raw_iesnium', 'occultism:iesnium_dust'],
        ['alltheores:raw_nickel', 'alltheores:nickel_dust'],
        ['alltheores:raw_aluminum', 'alltheores:aluminum_dust'],
        ['minecraft:raw_iron', 'alltheores:iron_dust'],
        ['minecraft:raw_gold', 'alltheores:gold_dust'],
        ['minecraft:raw_copper', 'alltheores:copper_dust']
    ]
    const crushRawRecipes = [
        ['alltheores:raw_lead_block', 'alltheores:lead_dust'],
        ['alltheores:raw_tin_block', 'alltheores:tin_dust'],
        ['alltheores:raw_zinc_block', 'alltheores:zinc_dust'],
        ['occultism:raw_iesnium_block', 'occultism:iesnium_dust'],
        ['alltheores:raw_nickel_block', 'alltheores:nickel_dust'],
        ['alltheores:raw_aluminum_block', 'alltheores:aluminum_dust'],
        ['minecraft:raw_iron_block', 'alltheores:iron_dust'],
        ['minecraft:raw_gold_block', 'alltheores:gold_dust'],
        ['minecraft:raw_copper_block', 'alltheores:copper_dust']
    ]
    const ore = ['alltheores:lead_ore', 'alltheores:zinc_ore', 'alltheores:tin_ore', 'alltheores:aluminum_ore', 'alltheores:nickel_ore', 'occultism:raw_iesnium']
    const ore_t2 = ['alltheores:platinum_ore', 'alltheores:iridium_ore', 'alltheores:silver_ore', 'alltheores:osmium_ore', 'alltheores:uranium_ore']
    const dim_core = [
        'mysticalagradditions:end_prosperity_ore',
        'mysticalagradditions:end_inferium_ore',
        'mysticalagriculture:soulium_ore',
        'mysticalagriculture:soulstone'
    ]

    const ancinet_miner = [
        'justdirethings:raw_ferricore', 'justdirethings:raw_blazegold', 'justdirethings:celestigem', 'justdirethings:raw_eclipsealloy'
    ]
    const ore_afrit_miner = [
        'minecraft:copper_ore', 'minecraft:gold_ore', 'minecraft:iron_ore', 'minecraft:coal_ore', 'minecraft:nether_quartz_ore', 'stellaris:steel_ore'
    ]

    event.replaceInput({ id: 'occultism:ritual/craft_dimensional_mineshaft' }, 'occultism:iesnium_block', 'ars_nouveau:source_gem_block')
    event.replaceInput({ id: 'occultism:ritual/summon_afrit_crusher' }, 'mekanism:dust_emerald', 'occultism:crushed_end_stone')
    event.replaceInput({ id: 'occultism:ritual/summon_afrit_crusher' }, 'mekanism:dust_obsidian', 'ae2:ender_dust')
    event.replaceInput({ id: 'occultism:ritual/summon_afrit_crusher' }, 'mekanism:dust_lapis_lazuli', 'ae2:ender_dust')




    kubejs.shapeless('4x minecraft:amethyst_shard', 'minecraft:amethyst_block')
    kubejs.shapeless('occultism:chalk_rainbow', 'minecraft:snowball')
    kubejs.shapeless('occultism:chalk_void', 'minecraft:snowball')
    kubejs.shapeless('2x occultism:dimensional_mineshaft', ['occultism:dimensional_mineshaft', '4x minecraft:nether_star'])

    kubejs.shaped('occultism:miner_ancient_eldritch', [' a ', 'bcb', ' d '],
        {
            a: 'minecraft:dragon_breath',
            b: 'minecraft:totem_of_undying',
            c: 'occultism:magic_lamp_empty',
            d: 'industrialforegoing:ore_laser_base'
        }
    )
    event.shaped('occultism:miner_marid_master', [' A ', 'BCB', ' D '],
        {
            A: 'oritech:super_ai_chip',
            D: 'minecraft:netherite_pickaxe',
            C: 'occultism:magic_lamp_empty',
            B: 'enderio:vibrant_alloy_ingot'
        }
    )


    occultism.spirit_fire('occultism:spirit_attuned_gem', 'ars_nouveau:source_gem')
    occultism.spirit_fire('occultism:otherworld_log', '#minecraft:logs')
    occultism.spirit_fire('mysticalagriculture:slime_essence', 'mysticalagriculture:dye_essence')


    occultism.spirit_trade('3x kubejs:coin', 'occultism:iesnium_block')



    occultism.crushing(RecipeResult.of('occultism:crushed_end_stone'), 'minecraft:end_stone', 40)
    occultism.crushing(RecipeResult.of('occultism:echo_dust'), 'minecraft:echo_shard', 40)
    occultism.crushing(RecipeResult.of('kubejs:mixed_dust', 2), 'ae2:matter_ball', 40)
    occultism.crushing(RecipeResult.of('occultism:crushed_blackstone'), 'minecraft:blackstone', 40)
    occultism.crushing(RecipeResult.of('occultism:amethyst_dust'), 'minecraft:amethyst_shard', 40)
    occultism.crushing(RecipeResult.of('occultism:crushed_blue_ice'), 'minecraft:blue_ice', 40)
    occultism.crushing(RecipeResult.of('occultism:crushed_packed_ice'), 'minecraft:packed_ice', 40)
    occultism.crushing(RecipeResult.of('occultism:crushed_ice'), 'minecraft:ice', 40)
    occultism.crushing(RecipeResult.of('occultism:crushed_calcite'), 'minecraft:calcite', 40)
    occultism.crushing(RecipeResult.of('occultism:iesnium_dust'), 'occultism:iesnium_ingot', 40)
    occultism.crushing(RecipeResult.of('ae2:ender_dust'), 'minecraft:ender_pearl', 40)
    occultism.crushing(RecipeResult.of('minecraft:gravel'), 'minecraft:cobblestone', 40)
    occultism.crushing(RecipeResult.of('minecraft:sand'), 'minecraft:gravel', 40)
    occultism.crushing(RecipeResult.of('naturesaura:gold_powder'), 'naturesaura:gold_leaf', 15, 3, 4)



    occultism.miner(WeightedRecipeResult.of('silentgear:azure_silver_ore', 8, 500), 'occultism:miner_marid_master')
    occultism.miner(WeightedRecipeResult.of('silentgear:crimson_iron_ore', 8, 500), 'occultism:miner_marid_master')
    occultism.miner(WeightedRecipeResult.of('replication:deepslate_replica_ore', 16, 100), 'occultism:miner_marid_master')
    occultism.miner(WeightedRecipeResult.of('occultism:mining_dim_core', 1, 10), 'occultism:miner_ancient_eldritch')
    occultism.miner(WeightedRecipeResult.of('forbidden_arcanus:stellarite_piece', 1, 100), 'occultism:miner_ancient_eldritch')
    occultism.miner(WeightedRecipeResult.of('mysticalagradditions:insanium_essence', 8, 100), 'occultism:miner_ancient_eldritch')

    //仪式
    occultism.ritual(Item.of('minecraft:amethyst_block', 3),
        [
            'occultism:otherworld_essence',
            'occultism:otherworld_essence',
            'occultism:burnt_otherstone',
            'occultism:burnt_otherstone'
        ],
        'minecraft:quartz_block',
        'occultism:summon_djinni',
    ).dummy("kubejs:dummy_ritual_craft1").id("dummy_ritual_craft1")
    occultism.ritual('ars_nouveau:enchanting_apparatus',
        [
            'ars_nouveau:source_gem',
            'minecraft:gold_ingot',
            'minecraft:gold_ingot',
            'ars_nouveau:source_gem',
            'ars_nouveau:sourcestone',
            'ars_nouveau:sourcestone'
        ],
        'occultism:spirit_attuned_gem',
        'occultism:summon_djinni', 40
    ).dummy("kubejs:dummy_ritual_craft2").id("dummy_ritual_craft2")
    occultism.ritual('custommachinery:custom_machine_item[custommachinery:machine="minecraft:resource_converter"]',
        [
            'actuallyadditions:lava_factory_casing',
            'actuallyadditions:advanced_coil',
            'actuallyadditions:lava_factory_casing',
            'actuallyadditions:advanced_coil',
            'actuallyadditions:lava_factory_casing',
            'actuallyadditions:lava_factory_casing'
        ],
        'actuallyadditions:iron_casing',
        "occultism:craft_marid"
    ).dummy("kubejs:dummy_ritual_craft3").id("dummy_ritual_craft3")

    dim_core.forEach(ore => {
        occultism.miner(WeightedRecipeResult.of(ore, 64, 1000), 'mysticalagriculture:wand')
    });

    ore.forEach(ore => {
        occultism.miner(WeightedRecipeResult.of(ore, 12, 1000), 'ars_nouveau:summon_focus')
    });
    ore.forEach(ore => {
        occultism.miner(WeightedRecipeResult.of(ore, 48, 1000), 'occultism:miner_marid_master')
    });
    ore.forEach(ore => {
        occultism.miner(WeightedRecipeResult.of(ore, 64, 1000), 'oritech:prometheum_ingot')
    });
    ore_afrit_miner.forEach(ore => {
        occultism.miner(WeightedRecipeResult.of(ore, 16, 1000), 'occultism:miner_afrit_deeps')
    });

    ore_t2.forEach(ore => {
        occultism.miner(WeightedRecipeResult.of(ore, 12, 1000), 'oritech:promethium_pickaxe')
    });
    
    ancinet_miner.forEach(ore => {
        occultism.miner(WeightedRecipeResult.of(ore, 8, 1000), 'occultism:miner_ancient_eldritch')
    });
    crushRecipes.forEach(([input, results]) => {
        occultism.crushing(RecipeResult.of(results, 2), input, 10, 3)
    });
    crushRawRecipes.forEach(([input, results]) => {
        occultism.crushing(RecipeResult.of(results, 18), input, 20, 3)
    });

})