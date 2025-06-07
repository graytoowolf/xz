ServerEvents.recipes(event => {
    const { custommachinery } = event.recipes;

    const structure1Pattern = [
        ["abbba", "bcccb", "bdddb", "bcccb", "abbba"],
        ["bghgb", "gooog", "hoooh", "gooog", "bghgb"],
        ["bhghb", "hoooh", "gooog", "hoooh", "bhghb"],
        ["bghgb", "gooog", "hoooh", "gooog", "bghgb"],
        ["abbba", "bcccb", "bdddb", "bcccb", "abbba"],
        ["     ", "     ", "  m  ", "     ", "     "]
    ];
    const structure1Keys = {
        "a": "extendedcrafting:black_iron_block",
        "b": "enderio:dark_steel_block",
        "c": "oritech:plastic_block",
        "d": "pneumaticcraft:smooth_plastic_brick_white",
        "g": "alltheores:steel_block",
        "h": "alltheores:tin_block",
        "o": "alltheores:osmium_block",
    };

    const structure2Pattern = [
        ["abbba", "bcdcb", "bdcdb", "bcdcb", "abbba"],
        ["bcdcb", "ceeec", "deeed", "ceeec", "bcdcb"],
        ["bdcdb", "deeed", "ceeec", "deeed", "bdcdb"],
        ["bcdcb", "ceeec", "deeed", "ceeec", "bcdcb"],
        ["abbba", "bcdcb", "bdcdb", "bcdcb", "abbba"],
        ["     ", "     ", "  m  ", "     ", "     "]
    ];
    const structure2Keys = {
        "a": "actuallyadditions:empowered_void_crystal_block",
        "b": "extendedcrafting:black_iron_block",
        "c": "alltheores:steel_block",
        "d": "stellaris:heavy_metal_plate",
        "e": "alltheores:osmium_block"
    };
    Recipe(structure1Pattern, structure1Keys, '64x stellaris:desh_ingot', "32x #c:plastics", '8x alltheores:diamond_gear', '8x silentgear:tyrian_steel_ingot', '4x industrialforegoing:pink_slime_ingot', 'industrialforegoing:machine_frame_advanced');
    Recipe(structure2Pattern, structure2Keys, '64x alltheores:steel_ingot', '32x alltheores:osmium_ingot', '4x kubejs:synergy_core_upgrade', '8x kubejs:alloy_ingots', 'occultism:mining_dim_core', 'mekanism:steel_casing')


    function Recipe(pattern, keys, input1, input2, input3, input4, input5, outputItem) {
        custommachinery.custom_machine('minecraft:structural_casting_machine', 600)
            .requireFluid("64000x #c:experience")
            .requireEnergyPerTick(10000)
            .requireItem(input1)
            .requireItem(input2)
            .requireItem(input3)
            .requireItem(input4)
            .requireItem(input5)
            .produceItem(outputItem)
            .requireStructure(pattern, keys);
    }

});