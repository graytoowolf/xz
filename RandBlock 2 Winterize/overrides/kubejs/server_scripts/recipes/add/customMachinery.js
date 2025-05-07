ServerEvents.recipes(event => {
    // 异火提取器
    event.recipes.custommachinery.custom_machine('custommachinery:fire_generator', 20)
        .requireStructure([
            ["a   a", " bab ", " aba ", " bab ", "a   a"],
            ["     ", " aca ", " cbc ", " aca ", "     "],
            ["     ", "     ", "  m  ", "     ", "     "]
        ], {
            "a": "minecraft:glass",
            "b": "minecraft:stripped_cherry_wood",
            "c": "kubejs:pink_fire"
        })
        .produceItem('4x kubejs:lotus_fire')
        .requireFluid(Fluid.of('kubejs:cold_crystal', 40))
        .requireItem('4x kubejs:pink_fire')
        .requireItem('4x kubejs:light_gray_fire')
        .requireItem('4x kubejs:orange_fire')
        .requireItem('4x kubejs:brown_fire')
        .requireItem('4x kubejs:magenta_fire')
        .requireItem('4x kubejs:cyan_fire')
        .requireItem('4x kubejs:lime_fire')
        .requireItem('4x kubejs:yellow_fire')
        .requireItem('4x kubejs:black_fire')
        .requireItem('4x kubejs:light_blue_fire')
        .requireItem('4x kubejs:gray_fire')
        .requireItem('4x kubejs:white_fire')
        .requireItem('4x kubejs:blue_fire')
        .requireItem('4x kubejs:green_fire')
        .requireItem('4x kubejs:red_fire')
        .requireItem('4x kubejs:purple_fire')
        .requireSourcePerTick(10)

    // 异火提取器
    event.recipes.custommachinery.custom_machine('custommachinery:fire_generator', 20)
        .requireStructure([
            ["a   a", " bab ", " aba ", " bab ", "a   a"],
            ["     ", " aca ", " cbc ", " aca ", "     "],
            ["     ", "     ", "  m  ", "     ", "     "]
        ], {
            "a": "minecraft:glass",
            "b": "minecraft:stripped_cherry_wood",
            "c": "kubejs:pink_fire"
        })
        .produceItem(Item.of('kubejs:lotus_fire', 4))
        .requireFluid(Fluid.of('kubejs:cold_crystal', 40))
        .requireItem(Item.of('kubejs:rainbow_fire', 4))
        .requireSourcePerTick(10)

    // 染料生成器
    event.recipes.custommachinery.custom_machine('custommachinery:dye_generator', 40)
        .requireStructure([
            ["       ", "       ", "       ", "   m   ", "       ", "       ", "       "],
            ["       ", "       ", "       ", "   a   ", "       ", "       ", "       "],
            ["       ", "       ", "       ", "   a   ", "       ", "       ", "       "],
            ["       ", "       ", "   b   ", "  bcb  ", "   b   ", "       ", "       "],
            ["       ", "  bbb  ", " bbbbb ", " bbebb ", " bbbbb ", "  bbb  ", "       "],
            [" bbbbb ", "bbbbbbb", "bbbbbbb", "bbbdbbb", "bbbbbbb", "bbbbbbb", " bbbbb "],
            ["       ", "  bbb  ", " bbbbb ", " bbcbb ", " bbbbb ", "  bbb  ", "       "],
            ["       ", "       ", "   b   ", "  bbb  ", "   b   ", "       ", "       "]
        ],
            {
                "a": "minecraft:cherry_log[axis=y]",
                "b": "minecraft:cherry_leaves[distance=7,persistent=true,waterlogged=false]",
                "c": "oritech:small_tank_block",
                "d": "industrialforegoing:machine_frame_pity",
                "e": "kubejs:cold_crystal"
            })
        .requireFluid(Fluid.of('kubejs:black_coffee_diluted_with_water', 40), 'input')
        .requireEnergyPerTick(200)
        .produceItem('minecraft:pink_dye', 'output1')
        .produceItem('minecraft:light_gray_dye', 'output2')
        .produceItem('minecraft:orange_dye', 'output3')
        .produceItem('minecraft:brown_dye', 'output4')
        .produceItem('minecraft:magenta_dye', 'output5')
        .produceItem('minecraft:cyan_dye', 'output6')
        .produceItem('minecraft:lime_dye', 'output7')
        .produceItem('minecraft:yellow_dye', 'output8')
        .produceItem('minecraft:black_dye', 'output9')
        .produceItem('minecraft:light_blue_dye', 'output10')
        .produceItem('minecraft:gray_dye', 'output11')
        .produceItem('minecraft:white_dye', 'output12')
        .produceItem('minecraft:blue_dye', 'output13')
        .produceItem('minecraft:green_dye', 'output14')
        .produceItem('minecraft:red_dye', 'output15')
        .produceItem('minecraft:purple_dye', 'output16')

    // 染料生成器
    event.recipes.custommachinery.custom_machine('custommachinery:dye_generator', 40)
        .requireStructure([
            ["       ", "       ", "       ", "   m   ", "       ", "       ", "       "],
            ["       ", "       ", "       ", "   a   ", "       ", "       ", "       "],
            ["       ", "       ", "       ", "   a   ", "       ", "       ", "       "],
            ["       ", "       ", "   b   ", "  bcb  ", "   b   ", "       ", "       "],
            ["       ", "  bbb  ", " bbbbb ", " bbebb ", " bbbbb ", "  bbb  ", "       "],
            [" bbbbb ", "bbbbbbb", "bbbbbbb", "bbbdbbb", "bbbbbbb", "bbbbbbb", " bbbbb "],
            ["       ", "  bbb  ", " bbbbb ", " bbcbb ", " bbbbb ", "  bbb  ", "       "],
            ["       ", "       ", "   b   ", "  bbb  ", "   b   ", "       ", "       "]
        ],
            {
                "a": "minecraft:cherry_log[axis=y]",
                "b": "minecraft:cherry_leaves[distance=7,persistent=true,waterlogged=false]",
                "c": "oritech:small_tank_block",
                "d": "industrialforegoing:machine_frame_pity",
                "e": "kubejs:cold_crystal"
            })
        .requireFluid(Fluid.of('kubejs:black_coffee_diluted_with_water', 40), 'input')
        .requireFluid(Fluid.of('kubejs:unstable_red', 40), 'input2')
        .requireEnergyPerTick(200)
        .produceItem('kubejs:rainbow_dye', 'output17')

    // 异火冶炼厂
    event.recipes.custommachinery.custom_machine('custommachinery:fire_smelter', 20)
        .produceHeatPerTick(1000)
        .produceItem(Item.of('kubejs:half_frozen_iron_ingot', 4), 'output')
        .requireItem('kubejs:lotus_fire', 'input1')
        .requireItem('kubejs:frozen_iron_ore', 'input2')
        .requireEnergyPerTick(200)
        .requireSourcePerTick(10)

    // 赛特斯石英
    event.recipes.custommachinery.custom_machine('custommachinery:fire_smelter', 200)
        .produceHeatPerTick(200)
        .produceItem(Item.of('ae2:quartz_block', 4), 'output')
        .requireItem('ars_nouveau:magebloom', 'input1')
        .requireItem(Item.of('minecraft:quartz', 4), 'input2')
        .requireEnergyPerTick(200)
        .requireSourcePerTick(20)

    // 焦黑石英
    event.recipes.custommachinery.custom_machine('custommachinery:fire_smelter', 20)
        .produceHeatPerTick(10)
        .produceItem(Item.of('actuallyadditions:black_quartz'), 'output')
        .requireItem('minecraft:charcoal', 'input1')
        .requireItem('minecraft:quartz', 'input2')
        .requireEnergyPerTick(200)
        .requireSourcePerTick(20)

    // 应力
    event.recipes.custommachinery.custom_machine('custommachinery:stress_generator', 20)
        .requireSourcePerTick(20)
        .produceSU(256, 96)

    // 末影珍珠
    event.recipes.custommachinery.custom_machine('custommachinery:sequenced_assembly', 20)
        .requireFluidPerTick(Fluid.of('minecraft:lava', 15), 'input1')
        .requireFluidPerTick(Fluid.of('minecraft:water', 15), 'input2')
        .requireSU(64, 64)
        .produceItem(Item.of('minecraft:ender_pearl', 8), 'output')
        .requireItem(Item.of('minecraft:cyan_concrete', 8), 'input1')
        .requireItem('create:mechanical_press', 'input2').chance(0)
        .requireItem('create:deployer', 'input3').chance(0)
        .requireItem('create:spout', 'input4').chance(0)

    // 粗铂
    event.recipes.custommachinery.custom_machine('custommachinery:sequenced_assembly', 80)
        .requireFluid(Fluid.of('kubejs:unstable_red', 500), 'input1')
        .requireFluid(Fluid.of('kubejs:cold_crystal', 500), 'input2')
        .requireSU(64, 64)
        .produceItem(Item.of('oritech:raw_platinum', 4), 'output')
        .requireItem([
            Item.of('create:cardboard_package_12x10[create:package_contents=[{item:{count:16,id:"minecraft:ender_pearl"},slot:0},{item:{count:16,id:"minecraft:ender_pearl"},slot:1}]]'),
            Item.of('create:cardboard_package_10x8[create:package_contents=[{item:{count:16,id:"minecraft:ender_pearl"},slot:0},{item:{count:16,id:"minecraft:ender_pearl"},slot:1}]]'),
            Item.of('create:cardboard_package_10x12[create:package_contents=[{item:{count:16,id:"minecraft:ender_pearl"},slot:0},{item:{count:16,id:"minecraft:ender_pearl"},slot:1}]]'),
            Item.of('create:cardboard_package_12x12[create:package_contents=[{item:{count:16,id:"minecraft:ender_pearl"},slot:0},{item:{count:16,id:"minecraft:ender_pearl"},slot:1}]]'),
            Item.of('create:rare_creeper_package[create:package_contents=[{item:{count:16,id:"minecraft:ender_pearl"},slot:0},{item:{count:16,id:"minecraft:ender_pearl"},slot:1}]]'),
            Item.of('create:rare_darcy_package[create:package_contents=[{item:{count:16,id:"minecraft:ender_pearl"},slot:0},{item:{count:16,id:"minecraft:ender_pearl"},slot:1}]]'),
            Item.of('create:rare_evan_package[create:package_contents=[{item:{count:16,id:"minecraft:ender_pearl"},slot:0},{item:{count:16,id:"minecraft:ender_pearl"},slot:1}]]'),
            Item.of('create:rare_jinx_package[create:package_contents=[{item:{count:16,id:"minecraft:ender_pearl"},slot:0},{item:{count:16,id:"minecraft:ender_pearl"},slot:1}]]'),
            Item.of('create:rare_kryppers_package[create:package_contents=[{item:{count:16,id:"minecraft:ender_pearl"},slot:0},{item:{count:16,id:"minecraft:ender_pearl"},slot:1}]]'),
            Item.of('create:rare_simi_package[create:package_contents=[{item:{count:16,id:"minecraft:ender_pearl"},slot:0},{item:{count:16,id:"minecraft:ender_pearl"},slot:1}]]'),
            Item.of('create:rare_starlotte_package[create:package_contents=[{item:{count:16,id:"minecraft:ender_pearl"},slot:0},{item:{count:16,id:"minecraft:ender_pearl"},slot:1}]]'),
            Item.of('create:rare_thunder_package[create:package_contents=[{item:{count:16,id:"minecraft:ender_pearl"},slot:0},{item:{count:16,id:"minecraft:ender_pearl"},slot:1}]]'),
            Item.of('create:rare_up_package[create:package_contents=[{item:{count:16,id:"minecraft:ender_pearl"},slot:0},{item:{count:16,id:"minecraft:ender_pearl"},slot:1}]]'),
            Item.of('create:rare_vector_package[create:package_contents=[{item:{count:16,id:"minecraft:ender_pearl"},slot:0},{item:{count:16,id:"minecraft:ender_pearl"},slot:1}]]')
        ], 'input1')
        .requireItem('create:mechanical_press', 'input2').chance(0)
        .requireItem('create:deployer', 'input3').chance(0)
        .requireItem('create:spout', 'input4').chance(0)

    'create:rare_up_package[create:package_contents=[{item:{count:16,id:"minecraft:ender_pearl"},slot:0},{item:{count:16,id:"minecraft:ender_pearl"},slot:1}]]'


    // 青金石
    event.recipes.custommachinery.custom_machine('custommachinery:sequenced_assembly', 20)
        .requireFluidPerTick(Fluid.of('starbunclemania:source_fluid', 15))
        .requireSU(64, 64)
        .produceItem(Item.of('minecraft:lapis_lazuli', 16), 'output')
        .requireItem(Item.of('actuallyadditions:palis_crystal', 16), 'input1')
        .requireItem('create:mechanical_press', 'input2').chance(0)
        .requireItem('create:deployer', 'input3').chance(0)
        .requireItem('create:spout', 'input4').chance(0)

    // 下界之星
    event.recipes.custommachinery.custom_machine('custommachinery:sequenced_assembly', 80)
        .requireFluidPerTick(Fluid.of('industrialforegoing:latex', 15))
        .requireSU(64, 64)
        .produceItem(Item.of('minecraft:nether_star', 11), 'output')
        .requireItem([
            Item.of('create:cardboard_package_12x10[create:package_contents=[{item:{count:33,id:"minecraft:wither_skeleton_skull"},slot:0}]]'),
            Item.of('create:cardboard_package_10x8[create:package_contents=[{item:{count:33,id:"minecraft:wither_skeleton_skull"},slot:0}]]'),
            Item.of('create:cardboard_package_10x12[create:package_contents=[{item:{count:33,id:"minecraft:wither_skeleton_skull"},slot:0}]]'),
            Item.of('create:cardboard_package_12x12[create:package_contents=[{item:{count:33,id:"minecraft:wither_skeleton_skull"},slot:0}]]'),
            Item.of('create:rare_creeper_package[create:package_contents=[{item:{count:33,id:"minecraft:wither_skeleton_skull"},slot:0}]]'),
            Item.of('create:rare_darcy_package[create:package_contents=[{item:{count:33,id:"minecraft:wither_skeleton_skull"},slot:0}]]'),
            Item.of('create:rare_evan_package[create:package_contents=[{item:{count:33,id:"minecraft:wither_skeleton_skull"},slot:0}]]'),
            Item.of('create:rare_jinx_package[create:package_contents=[{item:{count:33,id:"minecraft:wither_skeleton_skull"},slot:0}]]'),
            Item.of('create:rare_kryppers_package[create:package_contents=[{item:{count:33,id:"minecraft:wither_skeleton_skull"},slot:0}]]'),
            Item.of('create:rare_simi_package[create:package_contents=[{item:{count:33,id:"minecraft:wither_skeleton_skull"},slot:0}]]'),
            Item.of('create:rare_starlotte_package[create:package_contents=[{item:{count:33,id:"minecraft:wither_skeleton_skull"},slot:0}]]'),
            Item.of('create:rare_thunder_package[create:package_contents=[{item:{count:33,id:"minecraft:wither_skeleton_skull"},slot:0}]]'),
            Item.of('create:rare_up_package[create:package_contents=[{item:{count:33,id:"minecraft:wither_skeleton_skull"},slot:0}]]'),
            Item.of('create:rare_vector_package[create:package_contents=[{item:{count:33,id:"minecraft:wither_skeleton_skull"},slot:0}]]')
        ], 'input1')
        .requireItem('create:mechanical_press', 'input2').chance(0)
        .requireItem('create:deployer', 'input3').chance(0)
        .requireItem('create:spout', 'input4').chance(0)

    // 铜锭
    event.recipes.custommachinery.custom_machine('custommachinery:sequenced_assembly', 40)
        .requireFluidPerTick(Fluid.of('starbunclemania:source_fluid', 15))
        .requireSU(64, 64)
        .produceItem(Item.of('minecraft:copper_ingot', 6), 'output')
        .requireItem(Item.of('minecraft:raw_copper'), 'input1')
        .requireItem('minecraft:raw_copper', 'input2').chance(0)
        .requireItem('minecraft:raw_copper', 'input3').chance(0)
        .requireItem('minecraft:raw_copper', 'input4').chance(0)

    // 运算处理器
    event.recipes.custommachinery.custom_machine('custommachinery:batch_inscriber', 40)
        .produceItem(Item.of('ae2:calculation_processor', 32))
        .requireItem([
            Item.of('create:cardboard_package_12x10[create:package_contents=[{item:{count:32,id:"ae2:silicon"},slot:0}]]'),
            Item.of('create:cardboard_package_10x8[create:package_contents=[{item:{count:32,id:"ae2:silicon"},slot:0}]]'),
            Item.of('create:cardboard_package_10x12[create:package_contents=[{item:{count:32,id:"ae2:silicon"},slot:0}]]'),
            Item.of('create:cardboard_package_12x12[create:package_contents=[{item:{count:32,id:"ae2:silicon"},slot:0}]]'),
            Item.of('create:rare_creeper_package[create:package_contents=[{item:{count:32,id:"ae2:silicon"},slot:0}]]'),
            Item.of('create:rare_darcy_package[create:package_contents=[{item:{count:32,id:"ae2:silicon"},slot:0}]]'),
            Item.of('create:rare_evan_package[create:package_contents=[{item:{count:32,id:"ae2:silicon"},slot:0}]]'),
            Item.of('create:rare_jinx_package[create:package_contents=[{item:{count:32,id:"ae2:silicon"},slot:0}]]'),
            Item.of('create:rare_kryppers_package[create:package_contents=[{item:{count:32,id:"ae2:silicon"},slot:0}]]'),
            Item.of('create:rare_simi_package[create:package_contents=[{item:{count:32,id:"ae2:silicon"},slot:0}]]'),
            Item.of('create:rare_starlotte_package[create:package_contents=[{item:{count:32,id:"ae2:silicon"},slot:0}]]'),
            Item.of('create:rare_thunder_package[create:package_contents=[{item:{count:32,id:"ae2:silicon"},slot:0}]]'),
            Item.of('create:rare_up_package[create:package_contents=[{item:{count:32,id:"ae2:silicon"},slot:0}]]'),
            Item.of('create:rare_vector_package[create:package_contents=[{item:{count:32,id:"ae2:silicon"},slot:0}]]')
        ])
        .requireItem([
            Item.of('create:cardboard_package_12x10[create:package_contents=[{item:{count:32,id:"minecraft:redstone"},slot:0}]]'),
            Item.of('create:cardboard_package_10x8[create:package_contents=[{item:{count:32,id:"minecraft:redstone"},slot:0}]]'),
            Item.of('create:cardboard_package_10x12[create:package_contents=[{item:{count:32,id:"minecraft:redstone"},slot:0}]]'),
            Item.of('create:cardboard_package_12x12[create:package_contents=[{item:{count:32,id:"minecraft:redstone"},slot:0}]]'),
            Item.of('create:rare_creeper_package[create:package_contents=[{item:{count:32,id:"minecraft:redstone"},slot:0}]]'),
            Item.of('create:rare_darcy_package[create:package_contents=[{item:{count:32,id:"minecraft:redstone"},slot:0}]]'),
            Item.of('create:rare_evan_package[create:package_contents=[{item:{count:32,id:"minecraft:redstone"},slot:0}]]'),
            Item.of('create:rare_jinx_package[create:package_contents=[{item:{count:32,id:"minecraft:redstone"},slot:0}]]'),
            Item.of('create:rare_kryppers_package[create:package_contents=[{item:{count:32,id:"minecraft:redstone"},slot:0}]]'),
            Item.of('create:rare_simi_package[create:package_contents=[{item:{count:32,id:"minecraft:redstone"},slot:0}]]'),
            Item.of('create:rare_starlotte_package[create:package_contents=[{item:{count:32,id:"minecraft:redstone"},slot:0}]]'),
            Item.of('create:rare_thunder_package[create:package_contents=[{item:{count:32,id:"minecraft:redstone"},slot:0}]]'),
            Item.of('create:rare_up_package[create:package_contents=[{item:{count:32,id:"minecraft:redstone"},slot:0}]]'),
            Item.of('create:rare_vector_package[create:package_contents=[{item:{count:32,id:"minecraft:redstone"},slot:0}]]')
        ])
        .requireItem([
            Item.of('create:cardboard_package_12x10[create:package_contents=[{item:{count:32,id:"ae2:certus_quartz_crystal"},slot:0}]]'),
            Item.of('create:cardboard_package_10x8[create:package_contents=[{item:{count:32,id:"ae2:certus_quartz_crystal"},slot:0}]]'),
            Item.of('create:cardboard_package_10x12[create:package_contents=[{item:{count:32,id:"ae2:certus_quartz_crystal"},slot:0}]]'),
            Item.of('create:cardboard_package_12x12[create:package_contents=[{item:{count:32,id:"ae2:certus_quartz_crystal"},slot:0}]]'),
            Item.of('create:rare_creeper_package[create:package_contents=[{item:{count:32,id:"ae2:certus_quartz_crystal"},slot:0}]]'),
            Item.of('create:rare_darcy_package[create:package_contents=[{item:{count:32,id:"ae2:certus_quartz_crystal"},slot:0}]]'),
            Item.of('create:rare_evan_package[create:package_contents=[{item:{count:32,id:"ae2:certus_quartz_crystal"},slot:0}]]'),
            Item.of('create:rare_jinx_package[create:package_contents=[{item:{count:32,id:"ae2:certus_quartz_crystal"},slot:0}]]'),
            Item.of('create:rare_kryppers_package[create:package_contents=[{item:{count:32,id:"ae2:certus_quartz_crystal"},slot:0}]]'),
            Item.of('create:rare_simi_package[create:package_contents=[{item:{count:32,id:"ae2:certus_quartz_crystal"},slot:0}]]'),
            Item.of('create:rare_starlotte_package[create:package_contents=[{item:{count:32,id:"ae2:certus_quartz_crystal"},slot:0}]]'),
            Item.of('create:rare_thunder_package[create:package_contents=[{item:{count:32,id:"ae2:certus_quartz_crystal"},slot:0}]]'),
            Item.of('create:rare_up_package[create:package_contents=[{item:{count:32,id:"ae2:certus_quartz_crystal"},slot:0}]]'),
            Item.of('create:rare_vector_package[create:package_contents=[{item:{count:32,id:"ae2:certus_quartz_crystal"},slot:0}]]')
        ])
        .requireEnergyPerTick(20)

    // 逻辑处理器
    event.recipes.custommachinery.custom_machine('custommachinery:batch_inscriber', 40)
        .produceItem(Item.of('ae2:logic_processor', 32))
        .requireItem([
            Item.of('create:cardboard_package_12x10[create:package_contents=[{item:{count:32,id:"ae2:silicon"},slot:0}]]'),
            Item.of('create:cardboard_package_10x8[create:package_contents=[{item:{count:32,id:"ae2:silicon"},slot:0}]]'),
            Item.of('create:cardboard_package_10x12[create:package_contents=[{item:{count:32,id:"ae2:silicon"},slot:0}]]'),
            Item.of('create:cardboard_package_12x12[create:package_contents=[{item:{count:32,id:"ae2:silicon"},slot:0}]]'),
            Item.of('create:rare_creeper_package[create:package_contents=[{item:{count:32,id:"ae2:silicon"},slot:0}]]'),
            Item.of('create:rare_darcy_package[create:package_contents=[{item:{count:32,id:"ae2:silicon"},slot:0}]]'),
            Item.of('create:rare_evan_package[create:package_contents=[{item:{count:32,id:"ae2:silicon"},slot:0}]]'),
            Item.of('create:rare_jinx_package[create:package_contents=[{item:{count:32,id:"ae2:silicon"},slot:0}]]'),
            Item.of('create:rare_kryppers_package[create:package_contents=[{item:{count:32,id:"ae2:silicon"},slot:0}]]'),
            Item.of('create:rare_simi_package[create:package_contents=[{item:{count:32,id:"ae2:silicon"},slot:0}]]'),
            Item.of('create:rare_starlotte_package[create:package_contents=[{item:{count:32,id:"ae2:silicon"},slot:0}]]'),
            Item.of('create:rare_thunder_package[create:package_contents=[{item:{count:32,id:"ae2:silicon"},slot:0}]]'),
            Item.of('create:rare_up_package[create:package_contents=[{item:{count:32,id:"ae2:silicon"},slot:0}]]'),
            Item.of('create:rare_vector_package[create:package_contents=[{item:{count:32,id:"ae2:silicon"},slot:0}]]')
        ])
        .requireItem([
            Item.of('create:cardboard_package_12x10[create:package_contents=[{item:{count:32,id:"minecraft:redstone"},slot:0}]]'),
            Item.of('create:cardboard_package_10x8[create:package_contents=[{item:{count:32,id:"minecraft:redstone"},slot:0}]]'),
            Item.of('create:cardboard_package_10x12[create:package_contents=[{item:{count:32,id:"minecraft:redstone"},slot:0}]]'),
            Item.of('create:cardboard_package_12x12[create:package_contents=[{item:{count:32,id:"minecraft:redstone"},slot:0}]]'),
            Item.of('create:rare_creeper_package[create:package_contents=[{item:{count:32,id:"minecraft:redstone"},slot:0}]]'),
            Item.of('create:rare_darcy_package[create:package_contents=[{item:{count:32,id:"minecraft:redstone"},slot:0}]]'),
            Item.of('create:rare_evan_package[create:package_contents=[{item:{count:32,id:"minecraft:redstone"},slot:0}]]'),
            Item.of('create:rare_jinx_package[create:package_contents=[{item:{count:32,id:"minecraft:redstone"},slot:0}]]'),
            Item.of('create:rare_kryppers_package[create:package_contents=[{item:{count:32,id:"minecraft:redstone"},slot:0}]]'),
            Item.of('create:rare_simi_package[create:package_contents=[{item:{count:32,id:"minecraft:redstone"},slot:0}]]'),
            Item.of('create:rare_starlotte_package[create:package_contents=[{item:{count:32,id:"minecraft:redstone"},slot:0}]]'),
            Item.of('create:rare_thunder_package[create:package_contents=[{item:{count:32,id:"minecraft:redstone"},slot:0}]]'),
            Item.of('create:rare_up_package[create:package_contents=[{item:{count:32,id:"minecraft:redstone"},slot:0}]]'),
            Item.of('create:rare_vector_package[create:package_contents=[{item:{count:32,id:"minecraft:redstone"},slot:0}]]')
        ])
        .requireItem([
            Item.of('create:cardboard_package_12x10[create:package_contents=[{item:{count:32,id:"kubejs:brass_ingot"},slot:0}]]'),
            Item.of('create:cardboard_package_10x8[create:package_contents=[{item:{count:32,id:"kubejs:brass_ingot"},slot:0}]]'),
            Item.of('create:cardboard_package_10x12[create:package_contents=[{item:{count:32,id:"kubejs:brass_ingot"},slot:0}]]'),
            Item.of('create:cardboard_package_12x12[create:package_contents=[{item:{count:32,id:"kubejs:brass_ingot"},slot:0}]]'),
            Item.of('create:rare_creeper_package[create:package_contents=[{item:{count:32,id:"kubejs:brass_ingot"},slot:0}]]'),
            Item.of('create:rare_darcy_package[create:package_contents=[{item:{count:32,id:"kubejs:brass_ingot"},slot:0}]]'),
            Item.of('create:rare_evan_package[create:package_contents=[{item:{count:32,id:"kubejs:brass_ingot"},slot:0}]]'),
            Item.of('create:rare_jinx_package[create:package_contents=[{item:{count:32,id:"kubejs:brass_ingot"},slot:0}]]'),
            Item.of('create:rare_kryppers_package[create:package_contents=[{item:{count:32,id:"kubejs:brass_ingot"},slot:0}]]'),
            Item.of('create:rare_simi_package[create:package_contents=[{item:{count:32,id:"kubejs:brass_ingot"},slot:0}]]'),
            Item.of('create:rare_starlotte_package[create:package_contents=[{item:{count:32,id:"kubejs:brass_ingot"},slot:0}]]'),
            Item.of('create:rare_thunder_package[create:package_contents=[{item:{count:32,id:"kubejs:brass_ingot"},slot:0}]]'),
            Item.of('create:rare_up_package[create:package_contents=[{item:{count:32,id:"kubejs:brass_ingot"},slot:0}]]'),
            Item.of('create:rare_vector_package[create:package_contents=[{item:{count:32,id:"kubejs:brass_ingot"},slot:0}]]')
        ])
        .requireEnergyPerTick(20)

    // 工程处理器
    event.recipes.custommachinery.custom_machine('custommachinery:batch_inscriber', 40)
        .produceItem(Item.of('ae2:engineering_processor', 32))
        .requireItem([
            Item.of('create:cardboard_package_12x10[create:package_contents=[{item:{count:32,id:"ae2:silicon"},slot:0}]]'),
            Item.of('create:cardboard_package_10x8[create:package_contents=[{item:{count:32,id:"ae2:silicon"},slot:0}]]'),
            Item.of('create:cardboard_package_10x12[create:package_contents=[{item:{count:32,id:"ae2:silicon"},slot:0}]]'),
            Item.of('create:cardboard_package_12x12[create:package_contents=[{item:{count:32,id:"ae2:silicon"},slot:0}]]'),
            Item.of('create:rare_creeper_package[create:package_contents=[{item:{count:32,id:"ae2:silicon"},slot:0}]]'),
            Item.of('create:rare_darcy_package[create:package_contents=[{item:{count:32,id:"ae2:silicon"},slot:0}]]'),
            Item.of('create:rare_evan_package[create:package_contents=[{item:{count:32,id:"ae2:silicon"},slot:0}]]'),
            Item.of('create:rare_jinx_package[create:package_contents=[{item:{count:32,id:"ae2:silicon"},slot:0}]]'),
            Item.of('create:rare_kryppers_package[create:package_contents=[{item:{count:32,id:"ae2:silicon"},slot:0}]]'),
            Item.of('create:rare_simi_package[create:package_contents=[{item:{count:32,id:"ae2:silicon"},slot:0}]]'),
            Item.of('create:rare_starlotte_package[create:package_contents=[{item:{count:32,id:"ae2:silicon"},slot:0}]]'),
            Item.of('create:rare_thunder_package[create:package_contents=[{item:{count:32,id:"ae2:silicon"},slot:0}]]'),
            Item.of('create:rare_up_package[create:package_contents=[{item:{count:32,id:"ae2:silicon"},slot:0}]]'),
            Item.of('create:rare_vector_package[create:package_contents=[{item:{count:32,id:"ae2:silicon"},slot:0}]]')
        ])
        .requireItem([
            Item.of('create:cardboard_package_12x10[create:package_contents=[{item:{count:32,id:"minecraft:redstone"},slot:0}]]'),
            Item.of('create:cardboard_package_10x8[create:package_contents=[{item:{count:32,id:"minecraft:redstone"},slot:0}]]'),
            Item.of('create:cardboard_package_10x12[create:package_contents=[{item:{count:32,id:"minecraft:redstone"},slot:0}]]'),
            Item.of('create:cardboard_package_12x12[create:package_contents=[{item:{count:32,id:"minecraft:redstone"},slot:0}]]'),
            Item.of('create:rare_creeper_package[create:package_contents=[{item:{count:32,id:"minecraft:redstone"},slot:0}]]'),
            Item.of('create:rare_darcy_package[create:package_contents=[{item:{count:32,id:"minecraft:redstone"},slot:0}]]'),
            Item.of('create:rare_evan_package[create:package_contents=[{item:{count:32,id:"minecraft:redstone"},slot:0}]]'),
            Item.of('create:rare_jinx_package[create:package_contents=[{item:{count:32,id:"minecraft:redstone"},slot:0}]]'),
            Item.of('create:rare_kryppers_package[create:package_contents=[{item:{count:32,id:"minecraft:redstone"},slot:0}]]'),
            Item.of('create:rare_simi_package[create:package_contents=[{item:{count:32,id:"minecraft:redstone"},slot:0}]]'),
            Item.of('create:rare_starlotte_package[create:package_contents=[{item:{count:32,id:"minecraft:redstone"},slot:0}]]'),
            Item.of('create:rare_thunder_package[create:package_contents=[{item:{count:32,id:"minecraft:redstone"},slot:0}]]'),
            Item.of('create:rare_up_package[create:package_contents=[{item:{count:32,id:"minecraft:redstone"},slot:0}]]'),
            Item.of('create:rare_vector_package[create:package_contents=[{item:{count:32,id:"minecraft:redstone"},slot:0}]]')
        ])
        .requireItem([
            Item.of('create:cardboard_package_12x10[create:package_contents=[{item:{count:16,id:"minecraft:ender_pearl"},slot:0},{item:{count:16,id:"minecraft:ender_pearl"},slot:1}]]'),
            Item.of('create:cardboard_package_10x8[create:package_contents=[{item:{count:16,id:"minecraft:ender_pearl"},slot:0},{item:{count:16,id:"minecraft:ender_pearl"},slot:1}]]'),
            Item.of('create:cardboard_package_10x12[create:package_contents=[{item:{count:16,id:"minecraft:ender_pearl"},slot:0},{item:{count:16,id:"minecraft:ender_pearl"},slot:1}]]'),
            Item.of('create:cardboard_package_12x12[create:package_contents=[{item:{count:16,id:"minecraft:ender_pearl"},slot:0},{item:{count:16,id:"minecraft:ender_pearl"},slot:1}]]'),
            Item.of('create:rare_creeper_package[create:package_contents=[{item:{count:16,id:"minecraft:ender_pearl"},slot:0},{item:{count:16,id:"minecraft:ender_pearl"},slot:1}]]'),
            Item.of('create:rare_darcy_package[create:package_contents=[{item:{count:16,id:"minecraft:ender_pearl"},slot:0},{item:{count:16,id:"minecraft:ender_pearl"},slot:1}]]'),
            Item.of('create:rare_evan_package[create:package_contents=[{item:{count:16,id:"minecraft:ender_pearl"},slot:0},{item:{count:16,id:"minecraft:ender_pearl"},slot:1}]]'),
            Item.of('create:rare_jinx_package[create:package_contents=[{item:{count:16,id:"minecraft:ender_pearl"},slot:0},{item:{count:16,id:"minecraft:ender_pearl"},slot:1}]]'),
            Item.of('create:rare_kryppers_package[create:package_contents=[{item:{count:16,id:"minecraft:ender_pearl"},slot:0},{item:{count:16,id:"minecraft:ender_pearl"},slot:1}]]'),
            Item.of('create:rare_simi_package[create:package_contents=[{item:{count:16,id:"minecraft:ender_pearl"},slot:0},{item:{count:16,id:"minecraft:ender_pearl"},slot:1}]]'),
            Item.of('create:rare_starlotte_package[create:package_contents=[{item:{count:16,id:"minecraft:ender_pearl"},slot:0},{item:{count:16,id:"minecraft:ender_pearl"},slot:1}]]'),
            Item.of('create:rare_thunder_package[create:package_contents=[{item:{count:16,id:"minecraft:ender_pearl"},slot:0},{item:{count:16,id:"minecraft:ender_pearl"},slot:1}]]'),
            Item.of('create:rare_up_package[create:package_contents=[{item:{count:16,id:"minecraft:ender_pearl"},slot:0},{item:{count:16,id:"minecraft:ender_pearl"},slot:1}]]'),
            Item.of('create:rare_vector_package[create:package_contents=[{item:{count:16,id:"minecraft:ender_pearl"},slot:0},{item:{count:16,id:"minecraft:ender_pearl"},slot:1}]]')
        ])
        .requireEnergyPerTick(20)

    // 并发处理器
    event.recipes.custommachinery.custom_machine('custommachinery:batch_inscriber', 40)
        .produceItem(Item.of('extendedae:concurrent_processor', 32))
        .requireItem([
            Item.of('create:cardboard_package_12x10[create:package_contents=[{item:{count:32,id:"ae2:silicon"},slot:0}]]'),
            Item.of('create:cardboard_package_10x8[create:package_contents=[{item:{count:32,id:"ae2:silicon"},slot:0}]]'),
            Item.of('create:cardboard_package_10x12[create:package_contents=[{item:{count:32,id:"ae2:silicon"},slot:0}]]'),
            Item.of('create:cardboard_package_12x12[create:package_contents=[{item:{count:32,id:"ae2:silicon"},slot:0}]]'),
            Item.of('create:rare_creeper_package[create:package_contents=[{item:{count:32,id:"ae2:silicon"},slot:0}]]'),
            Item.of('create:rare_darcy_package[create:package_contents=[{item:{count:32,id:"ae2:silicon"},slot:0}]]'),
            Item.of('create:rare_evan_package[create:package_contents=[{item:{count:32,id:"ae2:silicon"},slot:0}]]'),
            Item.of('create:rare_jinx_package[create:package_contents=[{item:{count:32,id:"ae2:silicon"},slot:0}]]'),
            Item.of('create:rare_kryppers_package[create:package_contents=[{item:{count:32,id:"ae2:silicon"},slot:0}]]'),
            Item.of('create:rare_simi_package[create:package_contents=[{item:{count:32,id:"ae2:silicon"},slot:0}]]'),
            Item.of('create:rare_starlotte_package[create:package_contents=[{item:{count:32,id:"ae2:silicon"},slot:0}]]'),
            Item.of('create:rare_thunder_package[create:package_contents=[{item:{count:32,id:"ae2:silicon"},slot:0}]]'),
            Item.of('create:rare_up_package[create:package_contents=[{item:{count:32,id:"ae2:silicon"},slot:0}]]'),
            Item.of('create:rare_vector_package[create:package_contents=[{item:{count:32,id:"ae2:silicon"},slot:0}]]')
        ])
        .requireItem([
            Item.of('create:cardboard_package_12x10[create:package_contents=[{item:{count:32,id:"minecraft:redstone"},slot:0}]]'),
            Item.of('create:cardboard_package_10x8[create:package_contents=[{item:{count:32,id:"minecraft:redstone"},slot:0}]]'),
            Item.of('create:cardboard_package_10x12[create:package_contents=[{item:{count:32,id:"minecraft:redstone"},slot:0}]]'),
            Item.of('create:cardboard_package_12x12[create:package_contents=[{item:{count:32,id:"minecraft:redstone"},slot:0}]]'),
            Item.of('create:rare_creeper_package[create:package_contents=[{item:{count:32,id:"minecraft:redstone"},slot:0}]]'),
            Item.of('create:rare_darcy_package[create:package_contents=[{item:{count:32,id:"minecraft:redstone"},slot:0}]]'),
            Item.of('create:rare_evan_package[create:package_contents=[{item:{count:32,id:"minecraft:redstone"},slot:0}]]'),
            Item.of('create:rare_jinx_package[create:package_contents=[{item:{count:32,id:"minecraft:redstone"},slot:0}]]'),
            Item.of('create:rare_kryppers_package[create:package_contents=[{item:{count:32,id:"minecraft:redstone"},slot:0}]]'),
            Item.of('create:rare_simi_package[create:package_contents=[{item:{count:32,id:"minecraft:redstone"},slot:0}]]'),
            Item.of('create:rare_starlotte_package[create:package_contents=[{item:{count:32,id:"minecraft:redstone"},slot:0}]]'),
            Item.of('create:rare_thunder_package[create:package_contents=[{item:{count:32,id:"minecraft:redstone"},slot:0}]]'),
            Item.of('create:rare_up_package[create:package_contents=[{item:{count:32,id:"minecraft:redstone"},slot:0}]]'),
            Item.of('create:rare_vector_package[create:package_contents=[{item:{count:32,id:"minecraft:redstone"},slot:0}]]')
        ])
        .requireItem([
            Item.of('create:cardboard_package_12x10[create:package_contents=[{item:{count:32,id:"extendedae:entro_crystal"},slot:0}]]'),
            Item.of('create:cardboard_package_10x8[create:package_contents=[{item:{count:32,id:"extendedae:entro_crystal"},slot:0}]]'),
            Item.of('create:cardboard_package_10x12[create:package_contents=[{item:{count:32,id:"extendedae:entro_crystal"},slot:0}]]'),
            Item.of('create:cardboard_package_12x12[create:package_contents=[{item:{count:32,id:"extendedae:entro_crystal"},slot:0}]]'),
            Item.of('create:rare_creeper_package[create:package_contents=[{item:{count:32,id:"extendedae:entro_crystal"},slot:0}]]'),
            Item.of('create:rare_darcy_package[create:package_contents=[{item:{count:32,id:"extendedae:entro_crystal"},slot:0}]]'),
            Item.of('create:rare_evan_package[create:package_contents=[{item:{count:32,id:"extendedae:entro_crystal"},slot:0}]]'),
            Item.of('create:rare_jinx_package[create:package_contents=[{item:{count:32,id:"extendedae:entro_crystal"},slot:0}]]'),
            Item.of('create:rare_kryppers_package[create:package_contents=[{item:{count:32,id:"extendedae:entro_crystal"},slot:0}]]'),
            Item.of('create:rare_simi_package[create:package_contents=[{item:{count:32,id:"extendedae:entro_crystal"},slot:0}]]'),
            Item.of('create:rare_starlotte_package[create:package_contents=[{item:{count:32,id:"extendedae:entro_crystal"},slot:0}]]'),
            Item.of('create:rare_thunder_package[create:package_contents=[{item:{count:32,id:"extendedae:entro_crystal"},slot:0}]]'),
            Item.of('create:rare_up_package[create:package_contents=[{item:{count:32,id:"extendedae:entro_crystal"},slot:0}]]'),
            Item.of('create:rare_vector_package[create:package_contents=[{item:{count:32,id:"extendedae:entro_crystal"},slot:0}]]')
        ])
        .requireEnergyPerTick(40)

    // 累积处理器
    event.recipes.custommachinery.custom_machine('custommachinery:batch_inscriber', 40)
        .produceItem(Item.of('megacells:accumulation_processor', 32))
        .requireItem([
            Item.of('create:cardboard_package_12x10[create:package_contents=[{item:{count:32,id:"ae2:silicon"},slot:0}]]'),
            Item.of('create:cardboard_package_10x8[create:package_contents=[{item:{count:32,id:"ae2:silicon"},slot:0}]]'),
            Item.of('create:cardboard_package_10x12[create:package_contents=[{item:{count:32,id:"ae2:silicon"},slot:0}]]'),
            Item.of('create:cardboard_package_12x12[create:package_contents=[{item:{count:32,id:"ae2:silicon"},slot:0}]]'),
            Item.of('create:rare_creeper_package[create:package_contents=[{item:{count:32,id:"ae2:silicon"},slot:0}]]'),
            Item.of('create:rare_darcy_package[create:package_contents=[{item:{count:32,id:"ae2:silicon"},slot:0}]]'),
            Item.of('create:rare_evan_package[create:package_contents=[{item:{count:32,id:"ae2:silicon"},slot:0}]]'),
            Item.of('create:rare_jinx_package[create:package_contents=[{item:{count:32,id:"ae2:silicon"},slot:0}]]'),
            Item.of('create:rare_kryppers_package[create:package_contents=[{item:{count:32,id:"ae2:silicon"},slot:0}]]'),
            Item.of('create:rare_simi_package[create:package_contents=[{item:{count:32,id:"ae2:silicon"},slot:0}]]'),
            Item.of('create:rare_starlotte_package[create:package_contents=[{item:{count:32,id:"ae2:silicon"},slot:0}]]'),
            Item.of('create:rare_thunder_package[create:package_contents=[{item:{count:32,id:"ae2:silicon"},slot:0}]]'),
            Item.of('create:rare_up_package[create:package_contents=[{item:{count:32,id:"ae2:silicon"},slot:0}]]'),
            Item.of('create:rare_vector_package[create:package_contents=[{item:{count:32,id:"ae2:silicon"},slot:0}]]')
        ])
        .requireItem([
            Item.of('create:cardboard_package_12x10[create:package_contents=[{item:{count:4,id:"ae2:singularity"},slot:0}]]'),
            Item.of('create:cardboard_package_10x8[create:package_contents=[{item:{count:4,id:"ae2:singularity"},slot:0}]]'),
            Item.of('create:cardboard_package_10x12[create:package_contents=[{item:{count:4,id:"ae2:singularity"},slot:0}]]'),
            Item.of('create:cardboard_package_12x12[create:package_contents=[{item:{count:4,id:"ae2:singularity"},slot:0}]]'),
            Item.of('create:rare_creeper_package[create:package_contents=[{item:{count:4,id:"ae2:singularity"},slot:0}]]'),
            Item.of('create:rare_darcy_package[create:package_contents=[{item:{count:4,id:"ae2:singularity"},slot:0}]]'),
            Item.of('create:rare_evan_package[create:package_contents=[{item:{count:4,id:"ae2:singularity"},slot:0}]]'),
            Item.of('create:rare_jinx_package[create:package_contents=[{item:{count:4,id:"ae2:singularity"},slot:0}]]'),
            Item.of('create:rare_kryppers_package[create:package_contents=[{item:{count:4,id:"ae2:singularity"},slot:0}]]'),
            Item.of('create:rare_simi_package[create:package_contents=[{item:{count:4,id:"ae2:singularity"},slot:0}]]'),
            Item.of('create:rare_starlotte_package[create:package_contents=[{item:{count:4,id:"ae2:singularity"},slot:0}]]'),
            Item.of('create:rare_thunder_package[create:package_contents=[{item:{count:4,id:"ae2:singularity"},slot:0}]]'),
            Item.of('create:rare_up_package[create:package_contents=[{item:{count:4,id:"ae2:singularity"},slot:0}]]'),
            Item.of('create:rare_vector_package[create:package_contents=[{item:{count:4,id:"ae2:singularity"},slot:0}]]')
        ])
        .requireItem([
            Item.of('create:cardboard_package_12x10[create:package_contents=[{item:{count:32,id:"megacells:sky_steel_ingot"},slot:0}]]'),
            Item.of('create:cardboard_package_10x8[create:package_contents=[{item:{count:32,id:"megacells:sky_steel_ingot"},slot:0}]]'),
            Item.of('create:cardboard_package_10x12[create:package_contents=[{item:{count:32,id:"megacells:sky_steel_ingot"},slot:0}]]'),
            Item.of('create:cardboard_package_12x12[create:package_contents=[{item:{count:32,id:"megacells:sky_steel_ingot"},slot:0}]]'),
            Item.of('create:rare_creeper_package[create:package_contents=[{item:{count:32,id:"megacells:sky_steel_ingot"},slot:0}]]'),
            Item.of('create:rare_darcy_package[create:package_contents=[{item:{count:32,id:"megacells:sky_steel_ingot"},slot:0}]]'),
            Item.of('create:rare_evan_package[create:package_contents=[{item:{count:32,id:"megacells:sky_steel_ingot"},slot:0}]]'),
            Item.of('create:rare_jinx_package[create:package_contents=[{item:{count:32,id:"megacells:sky_steel_ingot"},slot:0}]]'),
            Item.of('create:rare_kryppers_package[create:package_contents=[{item:{count:32,id:"megacells:sky_steel_ingot"},slot:0}]]'),
            Item.of('create:rare_simi_package[create:package_contents=[{item:{count:32,id:"megacells:sky_steel_ingot"},slot:0}]]'),
            Item.of('create:rare_starlotte_package[create:package_contents=[{item:{count:32,id:"megacells:sky_steel_ingot"},slot:0}]]'),
            Item.of('create:rare_thunder_package[create:package_contents=[{item:{count:32,id:"megacells:sky_steel_ingot"},slot:0}]]'),
            Item.of('create:rare_up_package[create:package_contents=[{item:{count:32,id:"megacells:sky_steel_ingot"},slot:0}]]'),
            Item.of('create:rare_vector_package[create:package_contents=[{item:{count:32,id:"megacells:sky_steel_ingot"},slot:0}]]')
        ])
        .requireEnergyPerTick(40)

    // 能量处理器
    event.recipes.custommachinery.custom_machine('custommachinery:batch_inscriber', 40)
        .produceItem(Item.of('appflux:energy_processor', 32))
        .requireItem([
            Item.of('create:cardboard_package_12x10[create:package_contents=[{item:{count:32,id:"ae2:silicon"},slot:0}]]'),
            Item.of('create:cardboard_package_10x8[create:package_contents=[{item:{count:32,id:"ae2:silicon"},slot:0}]]'),
            Item.of('create:cardboard_package_10x12[create:package_contents=[{item:{count:32,id:"ae2:silicon"},slot:0}]]'),
            Item.of('create:cardboard_package_12x12[create:package_contents=[{item:{count:32,id:"ae2:silicon"},slot:0}]]'),
            Item.of('create:rare_creeper_package[create:package_contents=[{item:{count:32,id:"ae2:silicon"},slot:0}]]'),
            Item.of('create:rare_darcy_package[create:package_contents=[{item:{count:32,id:"ae2:silicon"},slot:0}]]'),
            Item.of('create:rare_evan_package[create:package_contents=[{item:{count:32,id:"ae2:silicon"},slot:0}]]'),
            Item.of('create:rare_jinx_package[create:package_contents=[{item:{count:32,id:"ae2:silicon"},slot:0}]]'),
            Item.of('create:rare_kryppers_package[create:package_contents=[{item:{count:32,id:"ae2:silicon"},slot:0}]]'),
            Item.of('create:rare_simi_package[create:package_contents=[{item:{count:32,id:"ae2:silicon"},slot:0}]]'),
            Item.of('create:rare_starlotte_package[create:package_contents=[{item:{count:32,id:"ae2:silicon"},slot:0}]]'),
            Item.of('create:rare_thunder_package[create:package_contents=[{item:{count:32,id:"ae2:silicon"},slot:0}]]'),
            Item.of('create:rare_up_package[create:package_contents=[{item:{count:32,id:"ae2:silicon"},slot:0}]]'),
            Item.of('create:rare_vector_package[create:package_contents=[{item:{count:32,id:"ae2:silicon"},slot:0}]]')
        ])
        .requireItem([
            Item.of('create:cardboard_package_12x10[create:package_contents=[{item:{count:32,id:"minecraft:redstone"},slot:0}]]'),
            Item.of('create:cardboard_package_10x8[create:package_contents=[{item:{count:32,id:"minecraft:redstone"},slot:0}]]'),
            Item.of('create:cardboard_package_10x12[create:package_contents=[{item:{count:32,id:"minecraft:redstone"},slot:0}]]'),
            Item.of('create:cardboard_package_12x12[create:package_contents=[{item:{count:32,id:"minecraft:redstone"},slot:0}]]'),
            Item.of('create:rare_creeper_package[create:package_contents=[{item:{count:32,id:"minecraft:redstone"},slot:0}]]'),
            Item.of('create:rare_darcy_package[create:package_contents=[{item:{count:32,id:"minecraft:redstone"},slot:0}]]'),
            Item.of('create:rare_evan_package[create:package_contents=[{item:{count:32,id:"minecraft:redstone"},slot:0}]]'),
            Item.of('create:rare_jinx_package[create:package_contents=[{item:{count:32,id:"minecraft:redstone"},slot:0}]]'),
            Item.of('create:rare_kryppers_package[create:package_contents=[{item:{count:32,id:"minecraft:redstone"},slot:0}]]'),
            Item.of('create:rare_simi_package[create:package_contents=[{item:{count:32,id:"minecraft:redstone"},slot:0}]]'),
            Item.of('create:rare_starlotte_package[create:package_contents=[{item:{count:32,id:"minecraft:redstone"},slot:0}]]'),
            Item.of('create:rare_thunder_package[create:package_contents=[{item:{count:32,id:"minecraft:redstone"},slot:0}]]'),
            Item.of('create:rare_up_package[create:package_contents=[{item:{count:32,id:"minecraft:redstone"},slot:0}]]'),
            Item.of('create:rare_vector_package[create:package_contents=[{item:{count:32,id:"minecraft:redstone"},slot:0}]]')
        ])
        .requireItem([
            Item.of('create:cardboard_package_12x10[create:package_contents=[{item:{count:32,id:"appflux:charged_redstone"},slot:0}]]'),
            Item.of('create:cardboard_package_10x8[create:package_contents=[{item:{count:32,id:"appflux:charged_redstone"},slot:0}]]'),
            Item.of('create:cardboard_package_10x12[create:package_contents=[{item:{count:32,id:"appflux:charged_redstone"},slot:0}]]'),
            Item.of('create:cardboard_package_12x12[create:package_contents=[{item:{count:32,id:"appflux:charged_redstone"},slot:0}]]'),
            Item.of('create:rare_creeper_package[create:package_contents=[{item:{count:32,id:"appflux:charged_redstone"},slot:0}]]'),
            Item.of('create:rare_darcy_package[create:package_contents=[{item:{count:32,id:"appflux:charged_redstone"},slot:0}]]'),
            Item.of('create:rare_evan_package[create:package_contents=[{item:{count:32,id:"appflux:charged_redstone"},slot:0}]]'),
            Item.of('create:rare_jinx_package[create:package_contents=[{item:{count:32,id:"appflux:charged_redstone"},slot:0}]]'),
            Item.of('create:rare_kryppers_package[create:package_contents=[{item:{count:32,id:"appflux:charged_redstone"},slot:0}]]'),
            Item.of('create:rare_simi_package[create:package_contents=[{item:{count:32,id:"appflux:charged_redstone"},slot:0}]]'),
            Item.of('create:rare_starlotte_package[create:package_contents=[{item:{count:32,id:"appflux:charged_redstone"},slot:0}]]'),
            Item.of('create:rare_thunder_package[create:package_contents=[{item:{count:32,id:"appflux:charged_redstone"},slot:0}]]'),
            Item.of('create:rare_up_package[create:package_contents=[{item:{count:32,id:"appflux:charged_redstone"},slot:0}]]'),
            Item.of('create:rare_vector_package[create:package_contents=[{item:{count:32,id:"appflux:charged_redstone"},slot:0}]]')
        ])
        .requireEnergyPerTick(40)

    // 粘液球
    event.recipes.custommachinery.custom_machine('custommachinery:animal_press', 80)
        .requireEnergyPerTick(40)
        .requireItem('minecraft:slime_spawn_egg').chance(0)
        .produceItem(Item.of('minecraft:slime_ball'))

    // 线
    event.recipes.custommachinery.custom_machine('custommachinery:animal_press', 80)
        .requireEnergyPerTick(40)
        .requireItem('minecraft:spider_spawn_egg').chance(0)
        .produceItem(Item.of('minecraft:cobweb', 4))

    // 皮革
    event.recipes.custommachinery.custom_machine('custommachinery:animal_press', 80)
        .requireEnergyPerTick(40)
        .requireItem('minecraft:cow_spawn_egg').chance(0)
        .produceItem(Item.of('minecraft:leather', 2))
})
