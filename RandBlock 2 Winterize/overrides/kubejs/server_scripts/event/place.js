// 崩溃限制
BlockEvents.placed(event => {
    let block = event.block
    let namespace = block.id.namespace
    if (namespace != 'ironfurnaces' && namespace != 'functionalstorage') {
        return
    } else {
        let directions = {
            up: block.up,
            down: block.down,
            north: block.north,
            south: block.south,
            west: block.west,
            east: block.east
        }
        let offhand = event.player.offHandItem.id
        for (let [dir, neighbor] of Object.entries(directions)) {
            if (neighbor.id.namespace == 'oritech') {
                if (offhand != 'occultism:otherworld_ashes') {
                    event.player.tell([{ "text": `${dir}`, "color": "green" }, { "translate": "kubejs.tips.place2", "color": "green" }, { "text": `${Item.of(neighbor.id).getDisplayName().string}`, "color": "green" }])
                    event.player.tell(Text.translate('kubejs.tips.place').color('gold'))
                    event.cancel()
                    return
                }
            }
        }
    }
})

BlockEvents.placed(event => {
    let block = event.block
    let namespace_ = block.id.namespace
    if (namespace_ != 'oritech') {
        return
    } else {
        let directions = {
            up: block.up,
            down: block.down,
            north: block.north,
            south: block.south,
            west: block.west,
            east: block.east
        }
        let offhand = event.player.offHandItem.id
        for (let [dir, neighbor] of Object.entries(directions)) {
            let namespace = neighbor.id.namespace
            if (namespace == 'ironfurnaces' || namespace == 'functionalstorage') {
                if (offhand != 'occultism:otherworld_ashes') {
                    event.player.tell([{ "text": `${dir}`, "color": "green" }, { "translate": "kubejs.tips.place2", "color": "green" }, { "text": `${Item.of(neighbor.id).getDisplayName().string}`, "color": "green" }])
                    event.player.tell(Text.translate('kubejs.tips.place').color('gold'))
                    event.cancel()
                    return
                }
            }
        }
    }

})