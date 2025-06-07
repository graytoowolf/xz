StartupEvents.registry("block", event => {
    event.create("lens_cube")
        .notSolid()
        .hardness(1)
        .glassSoundType()
        .resistance(10)
        .renderType("translucent")
        .fullBlock(false)
        .opaque(false)
        .mapColor("white")
        .texture("up", "kubejs:block/top_lens_cube")
        .texture("down", "kubejs:block/top_lens_cube")
        .texture("north", "kubejs:block/side_lens_cube")
        .texture("south", "kubejs:block/side_lens_cube")
        .texture("west", "kubejs:block/side_lens_cube")
        .texture("east", "kubejs:block/side_lens_cube")
        .randomTick(rdi => {
            const hasStructure =
                rdi.block.offset(0, 1, 0).id.toString() === "minecraft:air" &&
                rdi.block.offset(0, 2, 0).id.toString() === 'extendedcrafting:nether_star_block';
            const isNight = rdi.level.isNight();
            if (!hasStructure && !isNight) return;

            const conversionMap = {
                'alltheores:iridium_ore': 'alltheores:raw_iridium_block',
                'alltheores:silver_ore': 'alltheores:raw_silver_block',
                'alltheores:uranium_ore': 'alltheores:raw_uranium_block',
                'alltheores:osmium_ore': 'alltheores:raw_osmium_block',
                'alltheores:platinum_ore': 'alltheores:raw_platinum_block'
            };

            [[0, -1, 0], [0, -2, 0]].forEach(offset => {
                const targetBlock = rdi.block.offset(offset[0], offset[1], offset[2]);
                const targetId = targetBlock.id.toString();
                if (conversionMap[targetId]) {
                    targetBlock.set(conversionMap[targetId]);
                }
            });
        });
    event.create('storage_matrix')
        .hardness(5)
        .resistance(10)
        .stoneSoundType()
        .fullBlock(true)
        .renderType('solid')

    event.create('structure_generator_advanced_machine_frame')
        .hardness(5)
        .resistance(10)
        .stoneSoundType()
        .fullBlock(true)
        .renderType('solid')

    event.create('structure_generator_steel_casing')
        .hardness(5)
        .resistance(10)
        .stoneSoundType()
        .fullBlock(true)
        .renderType('solid')
});