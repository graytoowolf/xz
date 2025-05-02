PlayerEvents.loggedIn(event => {
    // 玩家首次登陆生成小黑屋&&reload
    if (event.server.persistentData.startLand) {
        return
    } else {
        event.server.persistentData.startLand = true
        event.server.runCommandSilent(`tp ${event.player.username} -21 2 30`)
        event.server.runCommandSilent('setworldspawn -21 2 30')
        event.server.runCommandSilent(`ftbteambases setlobbypos -21 2 30`)

        // 小黑屋生成
        event.server.runCommandSilent('fill -25 -60 1 -17 -54 9 minecraft:bedrock')
        event.server.runCommandSilent('fill -24 -59 2 -18 -55 8 minecraft:air')
        event.server.runCommandSilent('setblock -21 -59 5 minecraft:torch')

        event.server.runCommandSilent('reload')
    }

})

PlayerEvents.loggedIn(event => {
    // 将玩家所对应的团队加入随机列表
    let player = event.player
    let teamId = getPlayerTeam(player)
    setRandTeamList(event, teamId)
})

PlayerEvents.loggedOut(event => {
    // 将玩家所对应的团队剔出随机列表
    let player = event.player
    let server = event.server
    let teamId = getPlayerTeam(player)
    delRandTeamList(player,server, teamId)
})