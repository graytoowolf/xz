// 末地传送门合成
ServerEvents.tick(event => {
    event.server.getAllLevels().forEach(level => {

        level.entities.forEach(entity => {

            if (entity.type != 'minecraft:item') return

            const blockBelow = entity.level.getBlock(entity.blockX, entity.blockY - 1, entity.blockZ)
            if (blockBelow.id.toString() !== 'minecraft:end_portal') return

            const itemStack = entity.item
            const itemCount = itemStack.count

            const conversionMap = {
                'kubejs:frost_core': 'minecraft:diamond'
            }

            const newItemId = conversionMap[itemStack.id];
            if (!newItemId) return

            entity.kill()
            const newItemEntity = level.createEntity('minecraft:item');
            if (!newItemEntity) return; // 确保实体成功创建

            newItemEntity.item = Item.of(newItemId, itemCount); // 设置掉落物为新物品
            newItemEntity.setPosition(entity.x, entity.y - 1, entity.z); // 设置生成位置
            newItemEntity.spawn();
        })
    })

})