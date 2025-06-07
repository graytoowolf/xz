StartupEvents.registry('item', event => {
    event.create("infinity_lava_cell", "custom_infinity_cell")
        .texture("kubejs:item/cell/infinity_cell_lava")
        .fluidType("lava")
        .cellModel("kubejs:block/drive/lava_cell")

    event.create("infinity_gray_concrete_cell", "custom_infinity_cell")
        .texture("kubejs:item/cell/infinity_cell_gray_concrete")
        .itemType("minecraft:gray_concrete")
        .cellModel("kubejs:block/drive/gray_concrete_cell")

    event.create("infinity_orange_concrete_cell", "custom_infinity_cell")
        .texture("kubejs:item/cell/infinity_cell_orange_concrete")
        .itemType("minecraft:orange_concrete")
        .cellModel("kubejs:block/drive/orange_concrete_cell")

    event.create("infinity_white_concrete_cell", "custom_infinity_cell")
        .texture("kubejs:item/cell/infinity_cell_white_concrete")
        .itemType("minecraft:white_concrete")
        .cellModel("kubejs:block/drive/white_concrete")

    event.create("infinity_yellow_concrete_cell", "custom_infinity_cell")
        .texture("kubejs:item/cell/infinity_cell_yellow_concrete")
        .itemType("minecraft:yellow_concrete")
        .cellModel("kubejs:block/drive/yellow_concrete")
})