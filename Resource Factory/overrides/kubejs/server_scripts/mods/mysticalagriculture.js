ServerEvents.recipes(event => {
  const { kubejs } = event.recipes

  event.replaceInput({ id: 'mysticalagriculture:infusion_altar' }, 'minecraft:stone', 'industrialforegoing:machine_frame_advanced')

  kubejs.shaped('2x mysticalagriculture:wood_essence', ['aaa', ' a ', 'aaa'], { a: 'oritech:biomass' })
  kubejs.shapeless('avaritia:neutron_nugget', [Item.of('mysticalagriculture:neutronium_essence', 9)])


  const essence = 'mysticalagradditions:insanium_essence';
  const seedBase = 'mysticalagriculture:soulium_seed_base';

  kubejs.shaped('mysticalagriculture:slime_seeds', [' E ', ' S ', '   '], { S: seedBase, E: essence });
  kubejs.shaped('mysticalagriculture:squid_seeds', ['E  ', ' S ', '   '], { S: seedBase, E: essence });
  kubejs.shaped('mysticalagriculture:fish_seeds', ['  E', ' S ', '   '], { S: seedBase, E: essence });
  kubejs.shaped('mysticalagriculture:rabbit_seeds', ['   ', 'ES ', '   '], { S: seedBase, E: essence });
  kubejs.shaped('mysticalagriculture:skeleton_seeds', ['   ', 'S E', '   '], { S: seedBase, E: essence });
  kubejs.shaped('mysticalagriculture:ghast_seeds', ['   ', ' S ', ' E '], { S: seedBase, E: essence });
  kubejs.shaped('mysticalagriculture:creeper_seeds', ['   ', ' S ', 'E  '], { S: seedBase, E: essence });
  kubejs.shaped('mysticalagriculture:wither_skeleton_seeds', ['   ', ' S ', '  E'], { S: seedBase, E: essence });
  kubejs.shaped('mysticalagriculture:spider_seeds', ['SE ', '   ', '   '], { S: seedBase, E: essence });
  kubejs.shaped('mysticalagriculture:cow_seeds', ['S  ', 'E  ', '   '], { S: seedBase, E: essence });
  kubejs.shaped('mysticalagriculture:chicken_seeds', ['S  ', ' E ', '   '], { S: seedBase, E: essence });
  kubejs.shaped('mysticalagriculture:turtle_seeds', [' ES', '   ', '   '], { S: seedBase, E: essence });
  kubejs.shaped('mysticalagriculture:sheep_seeds', ['E  ', 'S  ', ' E '], { S: seedBase, E: essence });
  kubejs.shaped('mysticalagriculture:blaze_seeds', ['  E', '  S', ' E '], { S: seedBase, E: essence });
  kubejs.shaped('mysticalagriculture:pig_seeds', ['E S', '   ', '  E'], { S: seedBase, E: essence });
  kubejs.shaped('mysticalagriculture:armadillo_seeds', ['S E', '   ', 'E  '], { S: seedBase, E: essence });
  kubejs.shaped('mysticalagriculture:zombie_seeds', ['E E', ' S ', '   '], { S: seedBase, E: essence });
  kubejs.shaped('mysticalagriculture:enderman_seeds', ['E S', ' E ', '   '], { S: seedBase, E: essence });

  const dye_essence = 'mysticalagriculture:dye_essence';

  event.shaped('64x minecraft:blue_dye', ['   ', ' E ', 'E E'], { E: dye_essence });
  event.shaped('64x minecraft:green_dye', ['  E', 'EE ', '   '], { E: dye_essence });
  event.shaped('64x minecraft:pink_dye', ['E  ', '   ', 'E E'], { E: dye_essence });
  event.shaped('64x minecraft:light_gray_dye', [' E ', ' E ', '  E'], { E: dye_essence });
  event.shaped('64x minecraft:magenta_dye', [' E ', '  E', 'E  '], { E: dye_essence });
  event.shaped('64x minecraft:purple_dye', ['   ', '  E', 'E E'], { E: dye_essence });
  event.shaped('64x minecraft:cyan_dye', ['E E', ' E ', '   '], { E: dye_essence });
  event.shaped('64x minecraft:yellow_dye', ['  E', 'E  ', ' E '], { E: dye_essence });
  event.shaped('64x minecraft:orange_dye', ['  E', '   ', 'EE '], { E: dye_essence });
  event.shaped('64x minecraft:light_blue_dye', ['EE ', '   ', '  E'], { E: dye_essence });
  event.shaped('64x minecraft:red_dye', ['  E', ' E ', ' E '], { E: dye_essence });
  event.shaped('64x minecraft:brown_dye', ['  E', ' E ', '  E'], { E: dye_essence });
  event.shaped('64x minecraft:black_dye', ['   ', 'EE ', '  E'], { E: dye_essence });
  event.shaped('64x minecraft:lime_dye', ['  E', '  E', 'E  '], { E: dye_essence });
  event.shaped('64x minecraft:white_dye', ['EEE', '   ', '   '], { E: dye_essence });
  event.shaped('64x minecraft:gray_dye', ['  E', ' E ', 'E  '], { E: dye_essence });


  event.custom(
    {
      "type": "mysticalagriculture:infusion",
      "input": {
        "item": 'mysticalagriculture:prosperity_seed_base'
      },
      "ingredients": [
        {
          "item": 'mysticalagradditions:insanium_essence'
        },
        {
          "item": 'avaritia:neutron_ingot'
        },
        {
          "item": 'mysticalagradditions:insanium_essence'
        },
        {
          "item": 'avaritia:neutron_ingot'
        },
        {
          "item": 'mysticalagradditions:insanium_essence'
        },
        {
          "item": 'avaritia:neutron_ingot'
        },
        {
          "item": 'mysticalagradditions:insanium_essence'
        },
        {
          "item": 'avaritia:neutron_ingot'
        },
      ],
      "result": {
        "id": 'mysticalagriculture:neutronium_seeds'
      }
    }
  )
})