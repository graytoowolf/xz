ServerEvents.recipes(event => {
    const { modular_machinery_reborn } = event.recipes

    //大型压印结构
    const silicon = 'ae2:silicon'
    const redstone = 'minecraft:redstone'

    const laser = [
        ["actuallyadditions:diamatine_crystal", "#c:gems/diamond"],
        ["actuallyadditions:diamatine_crystal_block", "#c:storage_blocks/diamond"],
        ["actuallyadditions:emeradic_crystal", "#c:gems/emerald"],
        ["actuallyadditions:emeradic_crystal_block", "#c:storage_blocks/emerald"],
        ["actuallyadditions:enori_crystal", "#c:ingots/iron"],
        ["actuallyadditions:enori_crystal_block", "#c:storage_blocks/iron"],
        ["actuallyadditions:palis_crystal", "#c:gems/lapis"],
        ["actuallyadditions:palis_crystal_block", "#c:storage_blocks/lapis"],
        ["actuallyadditions:restonia_crystal", "#c:dusts/redstone"],
        ["actuallyadditions:restonia_crystal_block", "#c:storage_blocks/redstone"],
        ["actuallyadditions:void_crystal", "#minecraft:coals"],
        ["actuallyadditions:void_crystal_block", "#c:storage_blocks/coal"],
        ["actuallyadditions:crystallized_canola_seed", "actuallyadditions:canola_seeds"],
        ["actuallyadditions:ethetic_green_block", "minecraft:chiseled_quartz_block"],
        ["actuallyadditions:ethetic_white_block", "minecraft:quartz_block"],
        ["actuallyadditions:laser_relay", "actuallyadditions:laser_relay_item"],
        ["actuallyadditions:laser_relay_fluids", "actuallyadditions:laser_relay"],
        ["actuallyadditions:laser_relay_item", "actuallyadditions:laser_relay_fluids"],
        ["minecraft:leather", "minecraft:rotten_flesh"],
        ["minecraft:nether_wart", "minecraft:red_mushroom"],
        ["minecraft:prismarine_shard", "minecraft:quartz"],
        ["minecraft:soul_sand", "#c:sands"],
        ['minecraft:redstone', 'minecraft:gunpowder'],
        ['minecraft:raw_gold', 'oreberriesreplanted:gold_oreberry'],
        ['minecraft:raw_copper', 'oreberriesreplanted:copper_oreberry'],
        ['minecraft:raw_iron', 'oreberriesreplanted:iron_oreberry'],
        ['occultism:datura_seeds', 'minecraft:wheat_seeds'],
    ]

    const laser_essence = [
        ['2x mysticalagriculture:dirt_essence', 'minecraft:dirt'],
        ['2x mysticalagriculture:stone_essence', 'minecraft:stone'],
        ['2x mysticalagriculture:deepslate_essence', 'minecraft:deepslate'],
        ['2x mysticalagriculture:water_essence', '1000x minecraft:water'],
        ['2x mysticalagriculture:fire_essence', '1000x minecraft:lava']
    ]
    const creeper_ore = [
        ['minecraft:quartz_block', 'ore_creeper:nether_quartz_creeper_spawn_egg'],
        ['minecraft:gold_ingot', 'ore_creeper:nether_gold_creeper_spawn_egg'],
        ['minecraft:gold_block', 'ore_creeper:gold_creeper_spawn_egg'],
        ['minecraft:iron_block', 'ore_creeper:iron_creeper_spawn_egg'],
        ['minecraft:lapis_block', 'ore_creeper:lapis_lazuli_creeper_spawn_egg'],
        ['minecraft:emerald_block', 'ore_creeper:emerald_creeper_spawn_egg'],
        ['minecraft:copper_block', 'ore_creeper:copper_creeper_spawn_egg'],
        ['minecraft:coal_block', 'ore_creeper:coal_creeper_spawn_egg'],
        ['minecraft:diamond_block', 'ore_creeper:diamond_creeper_spawn_egg'],
        ['minecraft:netherite_ingot', 'ore_creeper:ancient_debris_creeper_spawn_egg'],
        ['minecraft:redstone_block', 'ore_creeper:redstone_creeper_spawn_egg']
    ]
    const fluidpump = [
        ['1000x stellaris:oil', 'minecraft:redstone'],
        ['1000x pneumaticcraft:oil', 'minecraft:glowstone_dust'],
        ['1000x oritech:still_oil', 'oritech:fluxite'],
        ['8000x minecraft:lava', 'minecraft:magma_cream']
    ]

    large_imprinterRecipe('ae2:logic_processor', 'minecraft:gold_ingot', silicon, redstone)
    large_imprinterRecipe('ae2:calculation_processor', 'ae2:certus_quartz_crystal', silicon, redstone)
    large_imprinterRecipe('ae2:engineering_processor', 'minecraft:diamond', silicon, redstone)
    large_imprinterRecipe('appflux:energy_processor', 'appflux:charged_redstone', silicon, redstone)
    large_imprinterRecipe('extendedae:concurrent_processor', 'extendedae:entro_crystal', silicon, redstone)
    large_imprinterRecipe('advanced_ae:quantum_processor', 'advanced_ae:quantum_alloy', silicon, redstone)
    large_imprinterRecipe('megacells:accumulation_processor', 'megacells:sky_steel_ingot', 'ae2:fluix_dust', redstone)



    //苦力怕矿石复制器
    modular_machinery_reborn.machine_recipe("mmr:creeper_ore_replicator", 20)
        .progressX(55)
        .progressY(30)
        .width(180)
        .height(90)
        .requireEnergy(4000, 10, 10)
        .requireItem('16x mysticalagriculture:creeper_essence', 30, 30)
        .produceItem('16x minecraft:diamond_block', 0.5, 90, 10)
        .produceItem('16x minecraft:emerald_block', 0.5, 90, 30)
        .produceItem('16x minecraft:gold_block', 0.5, 90, 50)
        .produceItem('16x minecraft:iron_block', 0.5, 110, 10)
        .produceItem('16x minecraft:redstone_block', 0.5, 110, 30)
        .produceItem('16x minecraft:lapis_block', 0.5, 110, 50)
        .produceItem('16x minecraft:copper_block', 0.5, 130, 10)
        .produceItem('16x minecraft:quartz_block', 0.5, 130, 30)
        .produceItem('16x minecraft:coal_block', 0.5, 130, 50)
        .produceItem('16x minecraft:gold_ingot', 0.5, 150, 10)
        .produceItem('16x minecraft:netherite_ingot', 0.5, 150, 30)

    //原子再构室
    modular_machinery_reborn.machine_recipe("mmr:atomic_reconstruction_chamber", 10)
        .progressX(75)
        .progressY(30)
        .width(180)
        .height(90)
        .requireEnergy(3600, 10, 10)
        .requireItem('3x oritech:plastic_sheet', 30, 10)
        .requireItem('mysticalagriculture:coal_essence', 30, 30)
        .requireItem('mysticalagriculture:skeleton_essence', 30, 50)
        .produceItem('minecraft:wither_skeleton_skull', 110, 30)
    modular_machinery_reborn.machine_recipe("mmr:atomic_reconstruction_chamber", 10)
        .progressX(75)
        .progressY(30)
        .width(180)
        .height(90)
        .requireEnergy(6000, 10, 10)
        .requireFluid('1000x kubejs:ore_catalytic_liquid', 10, 70)
        .requireItem("#c:dyes", 30, 30)
        .produceItem('48x mysticalagriculture:dye_essence', 110, 30)
    modular_machinery_reborn.machine_recipe("mmr:atomic_reconstruction_chamber", 10)
        .progressX(75)
        .progressY(30)
        .width(180)
        .height(90)
        .requireEnergy(256, 10, 10)
        .requireFluid('50x kubejs:ore_catalytic_liquid', 10, 70)
        .requireItem('2x kubejs:mixed_dust', 30, 30)
        .produceItem('24x minecraft:redstone', 110, 20)
        .produceItem('12x minecraft:glowstone_dust', 110, 40)
    modular_machinery_reborn.machine_recipe("mmr:atomic_reconstruction_chamber", 10)
        .progressX(75)
        .progressY(30)
        .width(180)
        .height(90)
        .requireEnergy(256, 10, 10)
        .requireFluid('2000x kubejs:ore_catalytic_liquid', 10, 70)
        .requireItem('minecraft:prismarine_shard', 30, 30)
        .produceItem('minecraft:nautilus_shell', 110, 30)

    //原子再构室
    laser.forEach(([output, input]) => {
        modular_machinery_reborn.machine_recipe("mmr:atomic_reconstruction_chamber", 5)
            .progressX(75)
            .progressY(30)
            .width(180)
            .height(90)
            .requireEnergy(128, 10, 10)
            .requireItem(`4x ${input}`, 30, 30)
            .produceItem(`4x ${output}`, 110, 30)
    });
    laser_essence.forEach(([outputString, inputString]) => {

        let recipe =
            modular_machinery_reborn.machine_recipe("mmr:atomic_reconstruction_chamber", 5)
                .progressX(75)
                .progressY(30)
                .width(180)
                .height(90)
                .requireEnergy(128, 10, 10)

        recipe.produceItem(outputString, 110, 30)
        const fluidMatch = inputString.match(/^(\d+)x\s*(minecraft:water|minecraft:lava)$/)

        if (fluidMatch) {
            const amount = parseInt(fluidMatch[1]);
            const fluidId = fluidMatch[2];

            recipe.requireFluid(Fluid.of(fluidId, amount), 10, 70)
        } else {
            recipe.requireItem(inputString, 30, 30)
        }

    });
    //下界流体钻井
    fluidpump.forEach(([fluid, inputitem]) => {
        modular_machinery_reborn.machine_recipe("mmr:nether_fluid_pump", 10)
            .progressX(75)
            .progressY(30)
            .width(180)
            .height(90)
            .requireEnergy(4000, 10, 10)
            .requireItem('4x hostilenetworks:nether_prediction', 0.05, 30, 20)
            .requireItem(inputitem, 0, 30, 40)
            .produceFluid(fluid, 110, 30)
            .dimensions(['minecraft:the_nether'], 10, 70)
    });

    //苦力怕矿石复制器
    creeper_ore.forEach(([output, spawn]) => {
        modular_machinery_reborn.machine_recipe("mmr:creeper_ore_replicator", 10)
            .progressX(75)
            .progressY(30)
            .width(180)
            .height(90)
            .requireEnergy(20000, 10, 10)
            .requireItem(spawn, 30, 10)
            .requireItem('hostilenetworks:overworld_prediction', 0.15, 30, 30)
            .requireItem('hostilenetworks:prediction[hostilenetworks:data_model="hostilenetworks:creeper"]', 0.05, 30, 50)
            .produceItem(`64x ${output}`, 110, 10)
            .produceItem(`64x ${output}`, 0.5, 130, 10)
            .produceItem(`32x ${output}`, 0.5, 110, 30)
            .produceItem(`32x ${output}`, 0.5, 130, 30)
            .produceItem(`32x ${output}`, 0.5, 110, 50)
            .produceItem(`32x ${output}`, 0.5, 130, 50)
    });
    //大型压印器
    function large_imprinterRecipe(output, input1, input2, input3) {
        modular_machinery_reborn.machine_recipe("mmr:large_imprinter", 5)
            .progressX(75)
            .progressY(30)
            .width(180)
            .height(90)
            .requireEnergy(2000, 10, 10)
            .requireItem(`64x ${input1}`, 30, 10)
            .requireItem(`64x ${input2}`, 30, 30)
            .requireItem(`64x ${input3}`, 30, 50)
            .produceItem(`64x ${output}`, 110, 30)
            .dimensions(['minecraft:the_nether'], 10, 70)
    }

})