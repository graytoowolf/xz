// 主城事件
BlockEvents.broken((event) => {
    const { level, player } = event
    if (isPlayerinLobby(event.block.pos, level)) {
      if (!player) event.cancel()
      if (!player.isCreative()) event.cancel()
    }
  })

BlockEvents.placed((event) => {
  const { level, player} = event
  if (isPlayerinLobby(event.block.pos, level)) {
    if (!player) event.cancel()
    if (!player.isCreative()) event.cancel()
  }
})