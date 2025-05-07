let $BaseInstanceManager = Java.loadClass("dev.ftb.mods.ftbteambases.data.bases.BaseInstanceManager")
let $FTBTeamsAPI = Java.loadClass("dev.ftb.mods.ftbteams.api.FTBTeamsAPI")

function builderCheck(size, event) {
    // 搭建范围检测
    let blockList = ['minecraft:air', 'torchmaster:invisible_light']
    let player = event.player

    for (let i = size[0]; i >= -size[0]; i--) {
        for (let j = size[1]; j >= -size[1]; j--) {
            for (let n = size[2]; n >= 0; n--) {
                if (i !== 0 || j !== 0 || n !== 0) {
                    let [x, y, z] = [i, n, j]
                    if (!blockList.includes(event.block.offset(x, y, z).getId().toString())) {
                        player.tell([{ translate: "kubejs.tips.machine_fill1", color: "gold" }, `${size[0]}x${size[1]}x${size[2]}`, { translate: "kubejs.tips.machine_fill2", color: "gold" }])
                        event.cancel()
                        return
                    }
                }
            }
        }
    }
}

function isPlayerinLobby(pos, level) {
    // 非创造玩家不可在大厅放置或破坏方块
    let startX = 15, endX = -48
    let startY = -255, endY = 255
    let startZ = 31, endZ = -32
    if (level.dimension == 'minecraft:overworld') {
        let minX = Math.min(startX, endX)
        let maxX = Math.max(startX, endX)
        let minY = Math.min(startY, endY)
        let maxY = Math.max(startY, endY)
        let minZ = Math.min(startZ, endZ)
        let maxZ = Math.max(startZ, endZ)

        return pos.x >= minX && pos.x <= maxX && pos.y >= minY && pos.y <= maxY && pos.z >= minZ && pos.z <= maxZ
    }
    return false
}

function getRandBlockPos(server, teamID) {
    // 获取团队方块刷新中心位置
    let baseManager = $BaseInstanceManager.get(server)
    let base = baseManager.getBaseForTeamId(teamID).orElse(null)
    if (base) {
        let spawnPos = base.spawnPos();
        return spawnPos
    } else {
        return 'fail'
    }
}

function getPlayerTeam(player) {
    // 获取玩家当前的团队teamID
    let team = $FTBTeamsAPI.api().getManager().getTeamForPlayerID(player.uuid).orElse(null)
    if (team) {
        return team.getId()
    } else {
        return 'fail'
    }
}

function setRandTeamList(event, teamId) {
    // 将玩家所对应的团队加入随机列表
    let server = event.server
    let teamID = teamId.toString()
    if (!server.persistentData.blockMap) {
        // 确保 blockMap 存在
        server.persistentData.blockMap = {}
    }
    if (!server.persistentData.maxTime) {
        // 确保 maxTime 存在
        server.persistentData.maxTime = {}
    }
    if (!server.persistentData.minTime) {
        // 确保 minTime 存在
        server.persistentData.minTime = {}
    }
    if (!server.persistentData.masterTime) {
        // 确保 masterTime 存在
        server.persistentData.masterTime = {}
    }

    if (teamId == 'fail' || !(event.server.persistentData.blockMap[teamId])) {
        // teamId未存档
        return
    } else {
        if (parseInt(event.server.persistentData.blockMap[teamId].enable) === 0 || event.server.persistentData.blockMap[teamId].stage === -1) {
            // team随机关闭
            delete server.persistentData.maxTime[teamID]
            delete server.persistentData.minTime[teamID]
            delete server.persistentData.masterTime[teamID]
            return
        }
    }
    let replaceTime = parseInt(event.server.persistentData.blockMap[teamId].replaceTime)

    if (replaceTime == 3600) {
        server.persistentData.maxTime[teamID] = 'place'
        delete server.persistentData.minTime[teamID]
        delete server.persistentData.masterTime[teamID]
    } else if (replaceTime == 600) {
        server.persistentData.minTime[teamID] = 'place'
        delete server.persistentData.maxTime[teamID]
        delete server.persistentData.masterTime[teamID]
    } else if (replaceTime == 40) {
        server.persistentData.masterTime[teamID] = 'place'
        delete server.persistentData.minTime[teamID]
        delete server.persistentData.maxTime[teamID]
    } else {
        server.persistentData.maxTime[teamID] = 'place'
        delete server.persistentData.minTime[teamID]
        delete server.persistentData.masterTime[teamID]
    }
}

function delRandTeamList(player, server, teamId) {
    // 将玩家所对应的团队剔出随机列表
    let playerNa = player.getName().getString()
    let teamID = teamId.toString()
    if (!server.persistentData.blockMap) {
        // 确保 blockMap 存在
        server.persistentData.blockMap = {}
    }
    if (!server.persistentData.maxTime) {
        // 确保 maxTime 存在
        server.persistentData.maxTime = {}
    }
    if (!server.persistentData.minTime) {
        // 确保 minTime 存在
        server.persistentData.minTime = {}
    }
    if (!server.persistentData.masterTime) {
        // 确保 masterTime 存在
        server.persistentData.masterTime = {}
    }

    if (teamId == 'fail' || !(server.persistentData.blockMap[teamId])) {

        // teamId未存档
        return
    } else {
        if (!server.persistentData.blockMap[teamId].enable || server.persistentData.blockMap[teamId].stage == -1) {
            // team随机关闭
            delete server.persistentData.maxTime[teamID]
            delete server.persistentData.minTime[teamID]
            delete server.persistentData.masterTime[teamID]
            return
        }
    }

    let onlinePlayers = server.getPlayerList().getPlayers()
    let onLineList = []
    onlinePlayers.forEach(olplayer => {
        // 获取在线玩家Name
        let onp = olplayer.getName()
        onLineList.push(onp.getString())
    })

    let hasOtherOnlinePlayer = server.persistentData.blockMap[teamId].playerName.some(pl => {
        pl = JSON.parse(pl)
        return onLineList.some(ol => {
            if (ol == pl && pl != playerNa) {
                // 团队仍有其他玩家在线
                return true
            }
            return false
        })
    })

    if (!hasOtherOnlinePlayer) {
        // 无玩家在线，删除随机teamID
        delete server.persistentData.maxTime[teamID]
        delete server.persistentData.minTime[teamID]
        delete server.persistentData.masterTime[teamID]
    }
}

function placeBlocks(event, teamInfo, teamId) {
    // 放置方块
    let stage = teamInfo.stage
    let blockPos = teamInfo.blockPos
    let minPos = [parseInt(blockPos[0]) - 1, parseInt(blockPos[1]), parseInt(blockPos[2]) - 3]
    let maxPos = [parseInt(blockPos[0]) + 1, parseInt(blockPos[1]) + 2, parseInt(blockPos[2]) - 1]

    let flag = Math.floor(Math.random() * 10)
    let stageNow = stageAll[`stage${parseInt(stage)}`]
    let finallBlock = stageNow[Math.floor(Math.random() * stageNow.length)]
    let basicBlockSet = 0
    if (flag >= 2) {
        // 保底方块
        let basic = teamInfo.basicBlock[`stage${parseInt(stage)}`]

        if (basic.length !== 0) {
            // 当前阶段该team存在保底方块
            finallBlock = JSON.parse(basic[Math.floor(Math.random() * basic.length)])
            event.server.persistentData.blockMap[teamId].basicBlock[`stage${parseInt(stage)}`] = basic.filter(item => item !== finallBlock)
            basicBlockSet = 1
        }
    }
    event.server.runCommandSilent(`fill ${minPos[0]} ${minPos[1]} ${minPos[2]} ${maxPos[0]} ${maxPos[1]} ${maxPos[2]} ${finallBlock}`)

    return [finallBlock, basicBlockSet]
}

function placeBlocksFree(server, teamInfo) {
    //放置方块
    let blockPos = teamInfo.blockPos
    let minPos = [parseInt(blockPos[0]) - 1, parseInt(blockPos[1]), parseInt(blockPos[2]) - 3]
    let maxPos = [parseInt(blockPos[0]) + 1, parseInt(blockPos[1]) + 2, parseInt(blockPos[2]) - 1]

    let stageNow = stageAll[`stage${Math.floor(Math.random() * 5)}`]
    let finallBlock = stageNow[Math.floor(Math.random() * stageNow.length)]
    server.runCommandSilent(`fill ${minPos[0]} ${minPos[1]} ${minPos[2]} ${maxPos[0]} ${maxPos[1]} ${maxPos[2]} ${finallBlock}`)
    return finallBlock
}

/**
 * 
 * @param {$ItemClickedKubeEvent} event 
 * @param {Item} handItem 
 * @param {Array} items 
 * @param {number} flag 
 * @param {integer} times 
 */
function prize_draw(event, handItem, items, flag, times) {
    const { player } = event
    let mainHand = player.mainHandItem.getId()
    let offHand = player.offhandItem.getId()
    if (mainHand == handItem) {
        player.mainHandItem.count -= 1
        for (let i = 0; i <= flag + times; i++) {
            let item = items[Math.floor(Math.random() * items.length)]
            player.give(item)
        }
    } else if (offHand == handItem) {
        event.cancel()
    }
}

// function inventoryCheck(itemMap, event) {
// // 背包物品检测
//     let hasAllItems = true
//     for (let item in itemMap) {
//         let requiredAmount = itemMap[item]
//         let playerAmount = event.player.inventory.count(item)

//         if (playerAmount < requiredAmount) {
//             hasAllItems = false;
//             event.player.tell([{ "text": `你的背包中需存在${requiredAmount}个${Item.of(item).displayName.string}，目前只有${playerAmount}个！`, "color": "red" }])
//         }
//     }

//     if (!hasAllItems) {
//         event.cancel()
//         return
//     }
// }

// function itemClear(itemMap, inventory) {
// // 玩家物品删除
//     for (let item in itemMap) {
//         for (let i = 0; i < itemMap[item]; i++) {
//             let stoneSlot = inventory.find(i => i.id === `${item}`)
//             inventory.removeItem(stoneSlot, 1)
//         }
//     }
// }}