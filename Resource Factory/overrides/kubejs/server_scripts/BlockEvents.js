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
