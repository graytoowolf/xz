ServerEvents.recipes(event => {
    const { kubejs } = event.recipes

    event.replaceInput({ id: 'stellaris:misc/rocket_station_block' }, 'minecraft:redstone', 'minecraft:netherite_ingot')
})