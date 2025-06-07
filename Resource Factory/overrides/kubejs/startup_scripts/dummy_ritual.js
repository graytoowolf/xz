StartupEvents.registry('item', event => {
    //召唤
    event.create('dummy_ritual_summon1', 'occultism:ritual_dummy')
        .pentacleType('summon')
        .ritualTooltip("召唤硬币交易者")

    //合成
    event.create('dummy_ritual_craft1', 'occultism:ritual_dummy')
        .pentacleType('craft')
        .ritualTooltip("制作附魔装置")

    event.create('dummy_ritual_craft2', 'occultism:ritual_dummy')
        .pentacleType('craft')
        .ritualTooltip("制作资源转换器")

    event.create('dummy_ritual_craft3', 'occultism:ritual_dummy')
        .pentacleType('craft')
        .ritualTooltip("制作污浊铁锭")

    event.create('dummy_ritual_craft4', 'occultism:ritual_dummy')
        .pentacleType('craft')
        .ritualTooltip("制作污浊铜锭")

    event.create('dummy_ritual_craft5', 'occultism:ritual_dummy')
        .pentacleType('craft')
        .ritualTooltip("制作污浊金锭")

    event.create('dummy_ritual_craft6', 'occultism:ritual_dummy')
        .pentacleType('craft')
        .ritualTooltip("制作紫水晶块")
})