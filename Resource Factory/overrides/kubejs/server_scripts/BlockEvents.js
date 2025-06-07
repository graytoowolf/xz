BlockEvents.rightClicked('actuallyadditions:empowered_palis_crystal_block', event => {
    const { player, block, level } = event;
    if (player.offHandItem.id == 'naturesaura:token_fear' &&
        player.mainHandItem.id == 'naturesaura:token_joy'
    ) {
        const spawnX = block.pos.x + 0.5
        const spawnY = block.pos.y + 1
        const spawnZ = block.pos.z + 0.5

        level.server.runCommandSilent(
            `summon minecraft:villager ${spawnX} ${spawnY} ${spawnZ}`
        )
        player.tell(Text.translate('kubejs.blockevents.info'))

        player.offHandItem.shrink(1)
        player.mainHandItem.shrink(1)
        block.set('minecraft:lapis_block')
    } else {
        const hasPartialItems = (
            player.offHandItem.id === 'naturesaura:token_fear' ||
            player.mainHandItem.id === 'naturesaura:token_joy'
        )
        if (hasPartialItems) {
            player.tell(Text.red(Text.translate('kubejs.blockevents.info1')))
        }
    }
})
/**
 * 从数组中随机选择一个物品
 * @param {string[]} items 物品列表
 * @return {string} 随机物品的 ID
 */
const getRandomItem = (items) => {
    const randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
};

BlockEvents.rightClicked('minecraft:grass_block', event => {
    const { player } = event
    if (player.offHandItem.id == 'mysticalagriculture:nature_essence' &&
        player.mainHandItem.id == 'mysticalagriculture:dye_essence'
    ) {
        const flower = ['minecraft:poppy', 'minecraft:allium', 'minecraft:cornflower', 'minecraft:red_tulip', 'minecraft:sunflower', 'minecraft:azure_bluet', 'minecraft:white_tulip', 'minecraft:blue_orchid', 'minecraft:pink_tulip', 'minecraft:rose_bush', 'minecraft:oxeye_daisy', 'minecraft:lilac', 'minecraft:lily_of_the_valley', 'minecraft:dandelion', 'minecraft:orange_tulip', 'minecraft:peony']
        player.give(getRandomItem(flower))
        player.offHandItem.shrink(1)
        player.mainHandItem.shrink(1)
    }
})

BlockEvents.rightClicked('naturesaura:moss_generator', event => {

    if (event.player.mainHandItem.id == 'oritech:iron_gem'
    ) {
        AuraChunk.storeAura(event.level, event.block.pos, 200000)
        event.player.mainHandItem.shrink(1)
    }
})

BlockEvents.rightClicked('occultism:iesnium_block', event => {
    const { player } = event;

    if (
        player.offHandItem.id !== 'minecraft:lava_bucket' ||
        player.mainHandItem.id !== 'naturesaura:calling_spirit' ||
        player.level.dimension !== 'minecraft:the_nether'
    ) {
        return;
    }

    player.give('minecraft:blaze_spawn_egg');
    player.give("bucket")
    player.offHandItem.shrink(1);
    player.mainHandItem.shrink(1);
});

BlockEvents.rightClicked('actuallyadditions:empowered_void_crystal_block', event => {
    const { player, block } = event;

    if (player.mainHandItem.id == 'minecraft:netherite_scrap' &&
        player.level.getDimension().toString() == "minecraft:the_nether"
    ) {
        player.give('minecraft:spawner')
        player.mainHandItem.shrink(1)
        block.set("minecraft:air")
    } return

})


BlockEvents.placed('kubejs:structure_generator_advanced_machine_frame', event => {
    const { block, level, player } = event;

    if (!player || !player.isPlayer()) {
        return;
    }

    if (typeof Ku === 'undefined' || typeof Ku.Level === 'undefined') {
        console.error("[KJS KubeUtils] Ku 或 Ku.Level 未定义!");
        player.tell(Text.red("Error: Kube Utils core object not loaded!"));
        return;
    }
    const kuLevel = new Ku.Level(level);
    const placementPosition = block.pos.above(1);

    player.tell(Text.translate("ku.kubejs.tell1").append(` ${placementPosition.toString()}...`).gold());

    try {
        kuLevel.spawnStructure('kubejs:advanced_machine_frame', placementPosition);
        block.set('minecraft:air');
        player.tell(Text.translate("ku.kubejs.tell11").green());

    } catch (e) {
        console.error(`[KJS KubeUtils] Error calling kuLevel.spawnStructure ('kubejs:advanced_machine_frame'):`);
        console.error(e);
        player.tell(Text.red(`KubeUtils: Error placing structure. Message: ${e.message}`));
    }
});

BlockEvents.placed('kubejs:structure_generator_steel_casing', event => {
    const { block, level, player } = event;

    if (!player || !player.isPlayer()) {
        return;
    }

    if (typeof Ku === 'undefined' || typeof Ku.Level === 'undefined') {
        console.error("[KJS KubeUtils] Ku 或 Ku.Level 未定义!");
        player.tell(Text.red("Error: Kube Utils core object not loaded!"));
        return;
    }
    const kuLevel = new Ku.Level(level);
    const placementPosition = block.pos.above(1);

    player.tell(Text.translate("ku.kubejs.tell2").append(` ${placementPosition.toString()}...`).gold());

    try {
        kuLevel.spawnStructure('kubejs:steel_casing', placementPosition);
        block.set('minecraft:air');
        player.tell(Text.translate("ku.kubejs.tell22").green());

    } catch (e) {
        console.error(`[KJS KubeUtils] Error calling kuLevel.spawnStructure ('kubejs:steel_casing'):`);
        console.error(e);
        player.tell(Text.red(`KubeUtils: Error placing structure. Message: ${e.message}`));
    }
});

