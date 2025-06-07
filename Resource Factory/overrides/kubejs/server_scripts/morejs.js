MoreJS.villagerTrades(event => {
    event.removeVanillaTypedTrades("ae2:fluix_researcher")

    event.removeTrades({
        professions: "productivebees:beekeeper",
        level: 2
    })
})