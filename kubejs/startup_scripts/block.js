const dye = [
    'pink',
    'light_gray',
    'orange',
    'brown',
    'magenta',
    'cyan',
    'lime',
    'yellow',
    'black',
    'light_blue',
    'gray',
    'white',
    'blue',
    'green',
    'red',
    'purple'
]
const randUsefulItem = [
    'minecraft:emerald',
    'minecraft:diamond',
    'minecraft:bamboo',
    'minecraft:sugar_cane',
    'minecraft:cactus',
    'minecraft:sculk',
    'minecraft:enchanting_table',
    'minecraft:beacon',
    'minecraft:brewing_stand',
    'minecraft:bookshelf',
    'minecraft:ender_chest',
    'kubejs:coin',
    'minecraft:oak_log',
    'minecraft:birch_log',
    'minecraft:jungle_log',
    'minecraft:acacia_log',
    'minecraft:dark_oak_log',
    'minecraft:mangrove_log',
    'minecraft:cherry_log',
    'minecraft:stone',
    'minecraft:cobblestone',
    'minecraft:smooth_stone',
    'minecraft:end_stone',
    'minecraft:amethyst_block',
    'minecraft:quartz_block',
    'minecraft:white_wool',
    'minecraft:glass',
    'minecraft:cyan_shulker_box',
    'minecraft:cyan_bed',
    'minecraft:grass_block',
    'minecraft:ice',
    'minecraft:clay',
    'minecraft:snow_block',
    'minecraft:pointed_dripstone',
    'minecraft:obsidian',
    'minecraft:bone_block',
    'minecraft:brown_mushroom',
    'minecraft:red_mushroom',
    'minecraft:potato',
    'minecraft:baked_potato',
    'minecraft:poisonous_potato',
    'minecraft:beetroot',
    'minecraft:dried_kelp',
    'minecraft:beef',
    'minecraft:cooked_beef',
    'minecraft:porkchop',
    'minecraft:cooked_porkchop',
    'minecraft:ender_eye',
    'minecraft:redstone',
    'minecraft:repeater',
    'minecraft:comparator',
    'minecraft:piston',
    'minecraft:sticky_piston',
    'minecraft:hopper',
    'minecraft:bucket',
    'minecraft:water_bucket',
    'minecraft:lava_bucket',
    'minecraft:powder_snow_bucket',
    'minecraft:flint_and_steel',
    'minecraft:bone_meal',
    'minecraft:name_tag',
    'minecraft:lead',
    'minecraft:clock',
    'minecraft:ender_pearl',
    'minecraft:elytra',
    'minecraft:firework_rocket',
    'minecraft:totem_of_undying',
    'minecraft:apple',
    'minecraft:golden_apple',
    'minecraft:enchanted_golden_apple',
    'minecraft:melon_slice',
    'minecraft:chorus_fruit',
    'minecraft:carrot',
    'minecraft:golden_carrot',
    'minecraft:netherite_ingot',
    'minecraft:wheat',
    'minecraft:bone',
    'minecraft:feather',
    'minecraft:leather',
    'minecraft:slime_ball',
    'minecraft:clay_ball',
    'minecraft:prismarine_shard',
    'minecraft:prismarine_crystals',
    'minecraft:mutton',
    'minecraft:cooked_mutton',
    'minecraft:chicken',
    'minecraft:cooked_chicken',
    'minecraft:rabbit',
    'minecraft:cooked_rabbit',
    'minecraft:cod',
    'minecraft:cooked_cod',
    'minecraft:salmon',
    'minecraft:cooked_salmon',
    'minecraft:tropical_fish',
    'minecraft:pufferfish',
    'minecraft:bread',
    'minecraft:cookie',
    'minecraft:cake',
    'minecraft:pumpkin_pie',
    'minecraft:mushroom_stew',
    'minecraft:honey_bottle',
    'minecraft:coal',
    'minecraft:charcoal',
    'minecraft:lapis_lazuli',
    'minecraft:quartz',
    'minecraft:amethyst_shard',
    'minecraft:iron_ingot',
    'minecraft:copper_ingot',
    'minecraft:gold_ingot',
    'minecraft:netherite_scrap',
    'mekanism:elite_chemical_tank',
    'mekanism:ultimate_chemical_tank',
    'mekanism:alloy_infused',
    'mekanism:alloy_reinforced',
    'mekanism:alloy_atomic',
    'mekanism:basic_control_circuit',
    'mekanism:advanced_control_circuit',
    'mekanism:elite_control_circuit',
    'mekanism:ultimate_control_circuit',
    'minecraft:nautilus_shell',
    'minecraft:heart_of_the_sea',
    'minecraft:blaze_rod',
    'minecraft:nether_star',
    'minecraft:shulker_shell',
    'minecraft:echo_shard',
    'minecraft:book',
    'minecraft:glowstone_dust',
    'minecraft:gunpowder',
    'minecraft:dragon_breath',
    'mekanism:basic_fluid_tank',
    'mekanism:ultimate_fluid_tank',
    'mekanism:elite_fluid_tank',
    'mekanism:advanced_fluid_tank',
    'mekanism:basic_universal_cable',
    'mekanism:advanced_universal_cable',
    'mekanism:elite_universal_cable',
    'mekanism:ultimate_universal_cable',
    'mekanism:advanced_pressurized_tube',
    'mekanism:elite_pressurized_tube',
    'mekanism:ultimate_pressurized_tube',
    'mekanism:basic_logistical_transporter',
    'mekanism:advanced_logistical_transporter',
    'mekanism:elite_logistical_transporter',
    'mekanism:ultimate_logistical_transporter',
    'mekanism:basic_chemical_tank',
    'mekanism:advanced_chemical_tank',
    'elevatorid:elevator_black',
    'dimensionalpocketsii:dimensional_shard',
    'pneumaticcraft:pressure_tube',
    'mob_grinding_utils:ender_inhibitor_on',
    'mob_grinding_utils:solid_xp_baby',
    'pneumaticcraft:advanced_pressure_tube',
    'pneumaticcraft:spawner_agitator',
    'pneumaticcraft:pressure_gauge_module',
    'pneumaticcraft:ingot_iron_compressed',
    'mekanism:pellet_antimatter',
    'mekanism:pellet_plutonium',
    'mekanism:pellet_polonium',
    'mekanism:electrolytic_core',
    'mekanism:teleportation_core',
    'industrialforegoing:plastic',
    'industrialforegoing:pink_slime',
    'industrialforegoing:pink_slime_ingot',
    'pipez:basic_upgrade',
    'pipez:improved_upgrade',
    'pipez:advanced_upgrade',
    'pipez:ultimate_upgrade',
    'elevatorid:elevator_cyan',
    'elevatorid:elevator_white',
    'elevatorid:elevator_orange',
    'elevatorid:elevator_magenta',
    'elevatorid:elevator_light_blue',
    'elevatorid:elevator_yellow',
    'elevatorid:elevator_lime',
    'elevatorid:elevator_pink',
    'elevatorid:elevator_gray',
    'elevatorid:elevator_light_gray',
    'elevatorid:elevator_purple',
    'elevatorid:elevator_blue',
    'elevatorid:elevator_brown',
    'elevatorid:elevator_green',
    'elevatorid:elevator_red',
    'arseng:me_source_jar',
    'dimstorage:dim_core',
    'dimstorage:dim_wall',
    'dimstorage:solid_dim_core',
    'fluxnetworks:flux_plug',
    'fluxnetworks:flux_point',
    'pneumaticcraft:unassembled_pcb',
    'pneumaticcraft:module_expansion_card',
    'pneumaticcraft:glycerol',
    'pneumaticcraft:capacitor',
    'pneumaticcraft:transistor',
    'pneumaticcraft:printed_circuit_board',
    'kubejs:frozen_iron_ingot',
    'kubejs:snow_spirit',
    'kubejs:upgrade_smithing_raffle_box',
    'kubejs:upgrade_raffle_box',
    'kubejs:tools_raffle_box',
    'ae2:logic_processor',
    'ae2:calculation_processor',
    'ae2:engineering_processor',
    'ae2:fluix_smart_cable',
    'ae2:purple_glass_cable',
    'ae2:fluix_smart_dense_cable',
    'ae2:quartz_fiber',
    'ae2:cable_anchor',
    'ae2:cell_component_1k',
    'ae2:cell_component_4k',
    'ae2:cell_component_16k',
    'ae2:cell_component_64k',
    'ae2:cell_component_256k',
    'ae2:item_cell_housing',
    'ae2:fluid_cell_housing',
    'ars_nouveau:greater_experience_gem'
]

StartupEvents.registry("block", (event) => {
    event.create('frostvein_log')
        .tagBlock(['minecraft:logs', 'minecraft:mineable/axe'])
        .noItem()
        .noDrops()
        .hardness(3)
        .noValidSpawns(false)
        .resistance(5000)
        .woodSoundType()

    event.create('snowcrystal_leaves')
        .tagBlock(['minecraft:leaves'])
        .noItem()
        .noDrops()
        .hardness(2.5)
        .noValidSpawns(false)
        .resistance(5000)
        .grassSoundType()
        .waterlogged()
        .transparent(true)
        .defaultCutout()
        .renderType('cutout_mipped')

    event.create('snowcrystal_leaves_useful')
        .tagBlock(['minecraft:leaves'])
        .noItem()
        .noDrops()
        .hardness(2.5)
        .noValidSpawns(false)
        .resistance(5000)
        .grassSoundType()
        .waterlogged()
        .transparent(true)
        .defaultCutout()
        .renderType('cutout_mipped')
        .texture('kubejs:block/snowcrystal_leaves')
        .randomTick(rdi => {
            const randNum = Math.floor(Math.random() * 100)
            if (randNum < 1) {
                rdi.server.runCommandSilent(`summon item ${rdi.block.x} ${rdi.block.y - 0.7} ${rdi.block.z} {Item:{id:"${randUsefulItem[Math.floor(Math.random() * randUsefulItem.length)]}"}}`)
            }
        })

    //极光尘块
    event.create('polar_lights_dust_block')
        .hardness(1)
        .stoneSoundType()
        .tagBlock(["minecraft:needs_iron_tool", 'minecraft:mineable/pickaxe'])
        .resistance(5000)
        .requiresTool()

    // 极光棱镜
    event.create('polar_lights_prism')
        .notSolid()
        .hardness(1)
        .glassSoundType()
        .resistance(5000)
        .tagBlock(["minecraft:needs_iron_tool", "minecraft:mineable/pickaxe"])
        .requiresTool()
        .renderType('translucent')
        .fullBlock(false)
        .opaque(true)
        .randomTick(rdi => {
            const blockList = [[-1, -1, -1], [0, -1, -1], [1, -1, -1], [-1, -1, 0], [0, -1, 0], [1, -1, 0], [-1, -1, 1], [0, -1, 1], [1, -1, 1]]
            for (const bl of blockList) {
                if (rdi.block.offset(bl[0], bl[1], bl[2]).id.toString() == 'kubejs:polar_lights_glass') {
                    if (rdi.block.offset(0, 1, 0).id.toString() == 'minecraft:air' && rdi.block.offset(0, 2, 0).id.toString() == 'solarcooker:shining_diamond_block') {
                        rdi.block.offset(bl[0], bl[1], bl[2]).set('kubejs:polar_lights_dust_block')
                    } else if (rdi.level.isNight()) {
                        rdi.block.offset(bl[0], bl[1], bl[2]).set('kubejs:polar_lights_dust_block')
                    }
                    return
                }
            }
        })

    // 极光玻璃
    event.create('polar_lights_glass')
        .notSolid()
        .tagBlock(["minecraft:needs_diamond_tool", "minecraft:mineable/hoe"])
        .hardness(0.3)
        .glassSoundType()
        .resistance(5000)
        .requiresTool()
        .opaque(true)
        .renderType('translucent')

    event.create('random_crop', 'crop')
        .age(7, cbb => {
            cbb.shape(0, 0, 0, 0, 16, 2, 16)
            cbb.shape(1, 0, 0, 0, 16, 4, 16)
            cbb.shape(2, 0, 0, 0, 16, 6, 16)
            cbb.shape(3, 0, 0, 0, 16, 8, 16)
            cbb.shape(4, 0, 0, 0, 16, 10, 16)
            cbb.shape(5, 0, 0, 0, 16, 12, 16)
            cbb.shape(6, 0, 0, 0, 16, 14, 16)
            cbb.shape(7, 0, 0, 0, 16, 16, 16)
        })
        .bonemeal(rtc => {
            return 1
        })
        .noSeeds()
        .texture("0", "kubejs:block/random_crop_stage0")
        .texture("1", "kubejs:block/random_crop_stage1")
        .texture("2", "kubejs:block/random_crop_stage2")
        .texture("3", "kubejs:block/random_crop_stage3")
        .texture("4", "kubejs:block/random_crop_stage4")
        .texture("5", "kubejs:block/random_crop_stage5")
        .texture("6", "kubejs:block/random_crop_stage6")
        .texture("7", "kubejs:block/random_crop_stage7")
        .item(seed => { seed.texture("kubejs:item/random_crop_seeds") })

    event.create('frosting_ore')
        .hardness(1)
        .stoneSoundType()
        .tagBlock(["minecraft:needs_iron_tool", 'minecraft:mineable/pickaxe'])
        .requiresTool()

    event.create('frozen_iron_ore')
        .hardness(1)
        .stoneSoundType()
        .tagBlock(["minecraft:needs_iron_tool", 'minecraft:mineable/pickaxe'])
        .requiresTool()

    event.create('frozen_iron_block')
        .hardness(1)
        .stoneSoundType()
        .tagBlock(["minecraft:needs_iron_tool", 'minecraft:mineable/pickaxe'])
        .requiresTool()

    event.create('cracked_gold_ore')
        .hardness(1)
        .stoneSoundType()
        .tagBlock(["minecraft:needs_iron_tool", 'minecraft:mineable/pickaxe'])
        .requiresTool()

    event.create('ethereal_gold_ore')
        .hardness(1)
        .stoneSoundType()
        .tagBlock(["minecraft:needs_iron_tool", 'minecraft:mineable/pickaxe'])
        .requiresTool()
    event.create('quantum_flux_compressor')
        .hardness(1)
        .stoneSoundType()
        .tagBlock(["minecraft:needs_iron_tool", 'minecraft:mineable/pickaxe'])
        .requiresTool()

    dye.forEach(dy => {
        event.create(`${dy}_fire`)
            .hardness(0.5)
            .tagBlock(["minecraft:mineable/hoe", "minecraft:needs_woodenn_tool"])
            .tag(["kubejs:fire"])
            .noSoundType()
            .lightLevel(15)
            .transparent(true)
            .noCollision()
            .fullBlock(false)
            .opaque(true)
            .redstoneConductor(false)
            .suffocating(false)
            .renderType('cutout')
            .modelGenerator(mod => {
                mod.parent('minecraft:block/cross')
                mod.texture(['cross'], `kubejs:block/${dy}_fire`)
            })

    })

    // 光明催化剂
    event.create('catalyze_block')
        .hardness(1)
        .stoneSoundType()
        .tagBlock(["minecraft:needs_wooden_tool", 'minecraft:mineable/pickaxe'])
        .requiresTool()

    // 彩虹营火
    event.create(`rainbow_fire`)
    .hardness(0.5)
    .tagBlock(["minecraft:mineable/hoe", "minecraft:needs_woodenn_tool"])
    .tag(["kubejs:fire"])
    .noSoundType()
    .lightLevel(15)
    .transparent(true)
    .noCollision()
    .fullBlock(false)
    .opaque(true)
    .redstoneConductor(false)
    .suffocating(false)
    .renderType('cutout')
    .modelGenerator(mod => {
        mod.parent('minecraft:block/cross')
        mod.texture(['cross'], `kubejs:block/rainbow_fire`)
    })
    event.create('rainbow_campfire')
        .hardness(1)
        .woodSoundType()
        .tagBlock(["minecraft:needs_wooden_tool", 'minecraft:mineable/axe'])
        .redstoneConductor(false)
        .suffocating(false)
        .noCollision()
        .fullBlock(false)
        .opaque(true)
        .lightLevel(15)
        .transparent(true)
        .renderType('cutout')
        .modelGenerator(mod => {
            mod.parent('minecraft:block/template_campfire')
        })

    // CM 机器
    event.create("custommachinery:fire_generator", "custommachinery")
    event.create("custommachinery:dye_generator", "custommachinery")
    event.create("custommachinery:fire_smelter", "custommachinery")
    event.create("custommachinery:stress_generator", "custommachinery")
    event.create("custommachinery:sequenced_assembly", "custommachinery")
    event.create("custommachinery:batch_inscriber", "custommachinery")
    event.create("custommachinery:animal_press", "custommachinery")
    event.create("custommachinery:token_fabricate", "custommachinery")

    // 多方块搭建器
    event.create('fire_generator').texture("kubejs:block/mmcreate")
    event.create('dye_generator').texture("kubejs:block/mmcreate")

    custom_ingot.forEach(ci => {
        if (['iesnium', 'refined_obsidian', 'refined_glowstone'].includes(ci)) {
            return
        } else {
            event.create(`${ci}_block`).tagItem([`c:storage_blocks/${ci}`, 'c:storage_blocks'])
        }
    })
})

