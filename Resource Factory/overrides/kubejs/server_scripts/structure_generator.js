const requiredItemInOffHand = 'mekanism:configurator';
const checkAreaSize = [2, 5, 2];

BlockEvents.placed('kubejs:structure_generator_advanced_machine_frame', event => {
    const { block, level, player } = event;


    if (!player || !player.isPlayer()) {
        return;
    }

    const placementPosition = block.pos.above(1);

    if (player.getOffHandItem().isEmpty()) {
        player.tell(Text.translate('structure.generator.tell0').append(Text.aqua(Item.of(requiredItemInOffHand).displayName)).append(Text.red(Text.translate('structure.generator.tell00'))));
        player.tell(Text.gold(Text.translate('structure.generator.tell_info')));

        event.cancel();
        return;
    } else if (player.getOffHandItem().id !== requiredItemInOffHand) {
        player.tell(Text.red(Text.translate('structure.generator.tell000')).append(Text.aqua(Item.of(requiredItemInOffHand).displayName)).append(Text.red(Text.translate('structure.generator.tell0000'))).append(Text.yellow(player.getOffHandItem().displayName)));
        player.tell(Text.gold(Text.translate('structure.generator.tell_info')));

        event.cancel();
        return;
    }

    player.tell(Text.translate("structure.generator.tell1").append(` ${placementPosition.toString()}...`).gold());

    if (!builderCheckForBelow(checkAreaSize, event)) {
        return;
    }
    player.tell(Text.translate("structure.generator.tell11").green());
    player.tell(Text.translate("structure.generator.tell111").aqua());
    player.tell(Text.translate("structure.generator.tell1111").gold());
    player.tell(Text.translate("structure.generator.tell11111").aqua());
    block.set('minecraft:air')

    const bx = block.x
    const by = block.y
    const bz = block.z

    function runCmd(command) {
        event.server.runCommandSilent(command)
    }

    function build_1_5(layerY) {
        runCmd(`fill ${bx + 1} ${layerY} ${bz} ${bx - 1} ${layerY} ${bz} pneumaticcraft:smooth_plastic_brick_white`)
        runCmd(`fill ${bx + 1} ${layerY} ${bz - 1} ${bx - 1} ${layerY} ${bz - 1} oritech:plastic_block`)
        runCmd(`fill ${bx + 1} ${layerY} ${bz + 1} ${bx - 1} ${layerY} ${bz + 1} oritech:plastic_block`)

        runCmd(`fill ${bx + 2} ${layerY} ${bz + 1} ${bx + 2} ${layerY} ${bz - 1} enderio:dark_steel_block`)
        runCmd(`fill ${bx - 2} ${layerY} ${bz + 1} ${bx - 2} ${layerY} ${bz - 1} enderio:dark_steel_block`)
        runCmd(`fill ${bx + 1} ${layerY} ${bz - 2} ${bx - 1} ${layerY} ${bz - 2} enderio:dark_steel_block`)
        runCmd(`fill ${bx + 1} ${layerY} ${bz + 2} ${bx - 1} ${layerY} ${bz + 2} enderio:dark_steel_block`)
        runCmd(`setblock ${bx + 2} ${layerY} ${bz + 2} extendedcrafting:black_iron_block`)
        runCmd(`setblock ${bx + 2} ${layerY} ${bz - 2} extendedcrafting:black_iron_block`)
        runCmd(`setblock ${bx - 2} ${layerY} ${bz - 2} extendedcrafting:black_iron_block`)
        runCmd(`setblock ${bx - 2} ${layerY} ${bz + 2} extendedcrafting:black_iron_block`)
    }

    function build_2_4(layerY) {
        runCmd(`fill ${bx + 1} ${layerY} ${bz + 1} ${bx - 1} ${layerY} ${bz - 1} alltheores:osmium_block`)
        runCmd(`setblock ${bx + 2} ${layerY} ${bz + 2} enderio:dark_steel_block`)
        runCmd(`setblock ${bx + 2} ${layerY} ${bz - 2} enderio:dark_steel_block`)
        runCmd(`setblock ${bx - 2} ${layerY} ${bz - 2} enderio:dark_steel_block`)
        runCmd(`setblock ${bx - 2} ${layerY} ${bz + 2} enderio:dark_steel_block`)

        runCmd(`setblock ${bx + 2} ${layerY} ${bz} alltheores:tin_block`)
        runCmd(`setblock ${bx - 2} ${layerY} ${bz} alltheores:tin_block`)
        runCmd(`setblock ${bx} ${layerY} ${bz + 2} alltheores:tin_block`)
        runCmd(`setblock ${bx} ${layerY} ${bz - 2} alltheores:tin_block`)


        runCmd(`setblock ${bx + 2} ${layerY} ${bz + 1} alltheores:steel_block`)
        runCmd(`setblock ${bx + 2} ${layerY} ${bz - 1} alltheores:steel_block`)
        runCmd(`setblock ${bx - 2} ${layerY} ${bz + 1} alltheores:steel_block`)
        runCmd(`setblock ${bx - 2} ${layerY} ${bz - 1} alltheores:steel_block`)
        runCmd(`setblock ${bx + 1} ${layerY} ${bz + 2} alltheores:steel_block`)
        runCmd(`setblock ${bx - 1} ${layerY} ${bz + 2} alltheores:steel_block`)
        runCmd(`setblock ${bx + 1} ${layerY} ${bz - 2} alltheores:steel_block`)
        runCmd(`setblock ${bx - 1} ${layerY} ${bz - 2} alltheores:steel_block`)

    }
    function build_3_3(layerY) {
        runCmd(`fill ${bx + 1} ${layerY} ${bz + 1} ${bx - 1} ${layerY} ${bz - 1} alltheores:osmium_block`)
        runCmd(`setblock ${bx + 2} ${layerY} ${bz + 2} enderio:dark_steel_block`)
        runCmd(`setblock ${bx + 2} ${layerY} ${bz - 2} enderio:dark_steel_block`)
        runCmd(`setblock ${bx - 2} ${layerY} ${bz - 2} enderio:dark_steel_block`)
        runCmd(`setblock ${bx - 2} ${layerY} ${bz + 2} enderio:dark_steel_block`)

        runCmd(`setblock ${bx + 2} ${layerY} ${bz} alltheores:steel_block`)
        runCmd(`setblock ${bx - 2} ${layerY} ${bz} alltheores:steel_block`)
        runCmd(`setblock ${bx} ${layerY} ${bz + 2} alltheores:steel_block`)
        runCmd(`setblock ${bx} ${layerY} ${bz - 2} alltheores:steel_block`)


        runCmd(`setblock ${bx + 2} ${layerY} ${bz + 1} alltheores:tin_block`)
        runCmd(`setblock ${bx + 2} ${layerY} ${bz - 1} alltheores:tin_block`)
        runCmd(`setblock ${bx - 2} ${layerY} ${bz + 1} alltheores:tin_block`)
        runCmd(`setblock ${bx - 2} ${layerY} ${bz - 1} alltheores:tin_block`)
        runCmd(`setblock ${bx + 1} ${layerY} ${bz + 2} alltheores:tin_block`)
        runCmd(`setblock ${bx - 1} ${layerY} ${bz + 2} alltheores:tin_block`)
        runCmd(`setblock ${bx + 1} ${layerY} ${bz - 2} alltheores:tin_block`)
        runCmd(`setblock ${bx - 1} ${layerY} ${bz - 2} alltheores:tin_block`)

    }
    build_1_5(by - 1)
    build_2_4(by - 2)
    build_3_3(by - 3)
    build_2_4(by - 4)
    build_1_5(by - 5)
});

BlockEvents.placed('kubejs:structure_generator_steel_casing', event => {
    const { block, level, player } = event;

    if (!player || !player.isPlayer()) {
        return;
    }

    const placementPosition = block.pos.above(1);

    if (player.getOffHandItem().isEmpty()) {
        player.tell(Text.translate('structure.generator.tell0').append(Text.aqua(Item.of(requiredItemInOffHand).displayName)).append(Text.red(Text.translate('structure.generator.tell00'))));
        player.tell(Text.gold(Text.translate('structure.generator.tell_info')));

        event.cancel();
        return;
    } else if (player.getOffHandItem().id !== requiredItemInOffHand) {
        player.tell(Text.red(Text.translate('structure.generator.tell000')).append(Text.aqua(Item.of(requiredItemInOffHand).displayName)).append(Text.red(Text.translate('structure.generator.tell0000'))).append(Text.yellow(player.getOffHandItem().displayName)));
        player.tell(Text.gold(Text.translate('structure.generator.tell_info')));

        event.cancel();
        return;
    }

    player.tell(Text.translate("structure.generator.tell2").append(` ${placementPosition.toString()}...`).gold());


    if (!builderCheckForBelow(checkAreaSize, event)) {
        return;
    }
    player.tell(Text.translate("structure.generator.tell22").green());
    player.tell(Text.translate("structure.generator.tell111").aqua());
    block.set('minecraft:air');

    const bx = block.x
    const by = block.y
    const bz = block.z

    function runCmd(command) {
        event.server.runCommandSilent(command)
    }

    function build_1_5(layerY) {
        runCmd(`setblock ${bx} ${layerY} ${bz} alltheores:steel_block`)
        runCmd(`setblock ${bx + 1} ${layerY} ${bz + 1} alltheores:steel_block`)
        runCmd(`setblock ${bx + 1} ${layerY} ${bz - 1} alltheores:steel_block`)
        runCmd(`setblock ${bx - 1} ${layerY} ${bz + 1} alltheores:steel_block`)
        runCmd(`setblock ${bx - 1} ${layerY} ${bz - 1} alltheores:steel_block`)

        runCmd(`setblock ${bx + 1} ${layerY} ${bz} stellaris:heavy_metal_plate`)
        runCmd(`setblock ${bx - 1} ${layerY} ${bz} stellaris:heavy_metal_plate`)
        runCmd(`setblock ${bx} ${layerY} ${bz + 1} stellaris:heavy_metal_plate`)
        runCmd(`setblock ${bx} ${layerY} ${bz - 1} stellaris:heavy_metal_plate`)

        runCmd(`fill ${bx + 2} ${layerY} ${bz + 1} ${bx + 2} ${layerY} ${bz - 1} extendedcrafting:black_iron_block`)
        runCmd(`fill ${bx - 2} ${layerY} ${bz + 1} ${bx - 2} ${layerY} ${bz - 1} extendedcrafting:black_iron_block`)
        runCmd(`fill ${bx + 1} ${layerY} ${bz - 2} ${bx - 1} ${layerY} ${bz - 2} extendedcrafting:black_iron_block`)
        runCmd(`fill ${bx + 1} ${layerY} ${bz + 2} ${bx - 1} ${layerY} ${bz + 2} extendedcrafting:black_iron_block`)
        runCmd(`setblock ${bx + 2} ${layerY} ${bz + 2} actuallyadditions:empowered_void_crystal_block`)
        runCmd(`setblock ${bx + 2} ${layerY} ${bz - 2} actuallyadditions:empowered_void_crystal_block`)
        runCmd(`setblock ${bx - 2} ${layerY} ${bz - 2} actuallyadditions:empowered_void_crystal_block`)
        runCmd(`setblock ${bx - 2} ${layerY} ${bz + 2} actuallyadditions:empowered_void_crystal_block`)
    }

    function build_2_4(layerY) {
        runCmd(`fill ${bx + 1} ${layerY} ${bz + 1} ${bx - 1} ${layerY} ${bz - 1} alltheores:osmium_block`)
        runCmd(`setblock ${bx + 2} ${layerY} ${bz + 2} extendedcrafting:black_iron_block`)
        runCmd(`setblock ${bx + 2} ${layerY} ${bz - 2} extendedcrafting:black_iron_block`)
        runCmd(`setblock ${bx - 2} ${layerY} ${bz - 2} extendedcrafting:black_iron_block`)
        runCmd(`setblock ${bx - 2} ${layerY} ${bz + 2} extendedcrafting:black_iron_block`)

        runCmd(`setblock ${bx + 2} ${layerY} ${bz} stellaris:heavy_metal_plate`)
        runCmd(`setblock ${bx - 2} ${layerY} ${bz} stellaris:heavy_metal_plate`)
        runCmd(`setblock ${bx} ${layerY} ${bz + 2} stellaris:heavy_metal_plate`)
        runCmd(`setblock ${bx} ${layerY} ${bz - 2} stellaris:heavy_metal_plate`)


        runCmd(`setblock ${bx + 2} ${layerY} ${bz + 1} alltheores:steel_block`)
        runCmd(`setblock ${bx + 2} ${layerY} ${bz - 1} alltheores:steel_block`)
        runCmd(`setblock ${bx - 2} ${layerY} ${bz + 1} alltheores:steel_block`)
        runCmd(`setblock ${bx - 2} ${layerY} ${bz - 1} alltheores:steel_block`)
        runCmd(`setblock ${bx + 1} ${layerY} ${bz + 2} alltheores:steel_block`)
        runCmd(`setblock ${bx - 1} ${layerY} ${bz + 2} alltheores:steel_block`)
        runCmd(`setblock ${bx + 1} ${layerY} ${bz - 2} alltheores:steel_block`)
        runCmd(`setblock ${bx - 1} ${layerY} ${bz - 2} alltheores:steel_block`)

    }
    function build_3_3(layerY) {
        runCmd(`fill ${bx + 1} ${layerY} ${bz + 1} ${bx - 1} ${layerY} ${bz - 1} alltheores:osmium_block`)
        runCmd(`setblock ${bx + 2} ${layerY} ${bz + 2} extendedcrafting:black_iron_block`)
        runCmd(`setblock ${bx + 2} ${layerY} ${bz - 2} extendedcrafting:black_iron_block`)
        runCmd(`setblock ${bx - 2} ${layerY} ${bz - 2} extendedcrafting:black_iron_block`)
        runCmd(`setblock ${bx - 2} ${layerY} ${bz + 2} extendedcrafting:black_iron_block`)

        runCmd(`setblock ${bx + 2} ${layerY} ${bz} alltheores:steel_block`)
        runCmd(`setblock ${bx - 2} ${layerY} ${bz} alltheores:steel_block`)
        runCmd(`setblock ${bx} ${layerY} ${bz + 2} alltheores:steel_block`)
        runCmd(`setblock ${bx} ${layerY} ${bz - 2} alltheores:steel_block`)


        runCmd(`setblock ${bx + 2} ${layerY} ${bz + 1} stellaris:heavy_metal_plate`)
        runCmd(`setblock ${bx + 2} ${layerY} ${bz - 1} stellaris:heavy_metal_plate`)
        runCmd(`setblock ${bx - 2} ${layerY} ${bz + 1} stellaris:heavy_metal_plate`)
        runCmd(`setblock ${bx - 2} ${layerY} ${bz - 1} stellaris:heavy_metal_plate`)
        runCmd(`setblock ${bx + 1} ${layerY} ${bz + 2} stellaris:heavy_metal_plate`)
        runCmd(`setblock ${bx - 1} ${layerY} ${bz + 2} stellaris:heavy_metal_plate`)
        runCmd(`setblock ${bx + 1} ${layerY} ${bz - 2} stellaris:heavy_metal_plate`)
        runCmd(`setblock ${bx - 1} ${layerY} ${bz - 2} stellaris:heavy_metal_plate`)

    }
    build_1_5(by - 1)
    build_2_4(by - 2)
    build_3_3(by - 3)
    build_2_4(by - 4)
    build_1_5(by - 5)
});
function builderCheckForBelow(areaSize, event) {
    let blockList = ['minecraft:air'];
    let player = event.player;
    let block = event.block;

    let extentX = areaSize[0];
    let depthY = areaSize[1];
    let extentZ = areaSize[2];

    for (let dx = -extentX; dx <= extentX; dx++) {
        for (let dz = -extentZ; dz <= extentZ; dz++) {
            for (let dy = -1; dy >= -depthY; dy--) {
                let currentBlockToCheck = block.offset(dx, dy, dz);
                let currentBlockId = currentBlockToCheck.id.toString();

                if (!blockList.includes(currentBlockId)) {
                    let sizeDisplayX = 2 * extentX + 1;
                    let sizeDisplayZ = 2 * extentZ + 1;

                    let posString = `(${currentBlockToCheck.x}, ${currentBlockToCheck.y}, ${currentBlockToCheck.z})`;
                    let positionText = Text.literal(posString);

                    player.tell(
                        Text.translate("structure.generator.info").gold()
                            .append(Text.literal(` ${sizeDisplayX}x${depthY}x${sizeDisplayZ} `).white())
                            .append(Text.translate("structure.generator.info1").gold())
                            .append(Text.literal(` ${currentBlockId} `).yellow())
                            .append(Text.translate("structure.generator.info2").aqua())
                            .append(positionText.aqua())
                    );

                    event.cancel();
                    return false;
                }
            }
        }
    }
    return true;
}