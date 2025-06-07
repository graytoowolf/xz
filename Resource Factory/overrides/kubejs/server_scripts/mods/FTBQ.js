FTBQuestsEvents.customReward('2A6FDBB30D17CDAE', event => {
    event.player.potionEffects.add('farmersdelight:nourishment', 12000, 0)
})

FTBQuestsEvents.customReward('3CE93347FF047384', event => {
    event.server.runCommandSilent("/weather clear 10d")
    event.player.tell(Text.translate("kubejs.ftbq.info"))

})
FTBQuestsEvents.customReward('63B2E201F7108FC0', event => {
    event.server.runCommandSilent('/gag give_time @p[limit=1] 10000000')
})
FTBQuestsEvents.customReward('7019CFCE98C0C753', event => {
    event.server.runCommandSilent('/gamemode creative @p')
})
FTBQuestsEvents.customReward('679A24D21DBAB469', event => {
    event.server.runCommandSilent('/gamemode survival @p')
})
FTBQuestsEvents.customReward('67469440031FF2EC', event => [
    event.server.runCommandSilent('/time set night')
])
FTBQuestsEvents.customReward('5604EAFD41F1CA35', event => {
    event.server.runCommand('/ae2 channelmode x2');
    event.player.tell(Text.of(Text.translate("kubejs.ftbq.info1")).aqua());
});
FTBQuestsEvents.customReward('51E60CE7768F7F4C', event => {
    event.server.runCommand('/ae2 channelmode default');
    event.player.tell(Text.of(Text.translate("kubejs.ftbq.info2")).green());
});
FTBQuestsEvents.customReward('5BE2F679ED2C2698', event => {
    event.server.runCommand('/ae2 channelmode x4');
    event.player.tell(Text.of(Text.translate("kubejs.ftbq.info3")).red());
});
