EntityEvents.spawned(event => {
    const entity = event.entity;
    // 删除"twilightforest"模组的所有实体
    if (entity.type.startsWith('ore_creeper:')) {
        event.cancel();
        // console.log(`已阻止 ${entity.type} 生成`); // 调试用
    }
});