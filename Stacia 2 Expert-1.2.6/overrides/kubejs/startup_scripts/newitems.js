// priority: 0


Platform.getInfo('kubejs').name = 'Stacia 2: Expert'
Platform.getInfo('custommachinery').name = 'From the heart of Zulu'

StartupEvents.registry('item', e => {

	e.create('stone_mechanism').displayName('Stone Mechanism')
	e.create('glowing_mechanism').displayName('Glowing Mechanism')
	e.create('allay_fertilizer').displayName('Allay Fertilizer')
	e.create('madeline_strawberry').displayName('Madeline\'s Strawberry')
	e.create('aquamarine').displayName('Aquamarine')
	e.create('resonating_gem').displayName('Resonating Gem')
	e.create('uwuterium_pearl').displayName('§dUwuterium Pearl')
	e.create('bloody_mechanism').displayName('Bloody Mechanism')
	e.create('endsteel_bars').displayName('Endsteel Bars')
	e.create('darksteel_bars').displayName('Darksteel Bars')
	e.create('charged_enriched_iron').displayName('Charged Quartz Enriched Iron')
	e.create('devilish_horn').displayName('Devilish Horn')
	e.create('blue_plastic').displayName('Blue Plastic Sheet')
	e.create('netherrack_piece').displayName('Crushed Netherrack Pieces')
	e.create('flint_handle').displayName('Flint Handle')
	e.create('raw_arcane').displayName('Raw Arcane')
	e.create('illumination_powder').displayName('Illumination Powder')
	e.create('hdpe_rod_hori').displayName('§eHDPE Rod (Horizontal)')

	//Infused Crystals
	e.create('goldium').displayName('Goldium Crystal')
	e.create('infused_goldium').displayName('Infused Goldium Crystal').glow(true)

	//EnderIO
	e.create('basic_capacitor').displayName('Basic Capacitor')
	e.create('advanced_capacitor').displayName('Advanced Capacitor')
	e.create('ultimate_capacitor').displayName('Ultimate Capacitor')

	//Electron Tubes
	e.create('golden_electron_tube').displayName('Golden Electron Tube').texture("kubejs:item/tubes/golden")
	e.create('aquamarine_electron_tube').displayName('Aquamarine Electron Tube').texture("kubejs:item/tubes/aquamarine")
	e.create('enriched_aquamarine').displayName('Enriched Aquamarine').texture("kubejs:item/tubes/enriched_aquamarine")

	//Plates
	e.create('plate_endsteel').displayName('Endsteel Plate').texture("kubejs:item/plates/plate_endsteel")
	e.create('plate_darksteel').displayName('Darksteel Plate').texture("kubejs:item/plates/plate_darksteel")
	e.create('plate_diamond').displayName('Diamond Plate').texture("kubejs:item/plates/plate_diamond")
	e.create('plate_emerald').displayName('Emerald Plate').texture("kubejs:item/plates/plate_emerald")
	e.create('plate_lapis').displayName('Lapis Plate').texture("kubejs:item/plates/plate_lapis")
	e.create('plate_quartz').displayName('Quartz Plate').texture("kubejs:item/plates/plate_quartz")
	e.create('osmium_plate').displayName('Osmium Plate').texture("kubejs:item/plates/osmium_plate")
	e.create('dense_lead_plate').displayName('Dense Lead Plate').texture("kubejs:item/plates/dense_lead_plate")
	e.create('dense_iron_plate').displayName('Dense Iron Plate').texture("kubejs:item/plates/dense_iron_plate")

	//Nuggets
	e.create('stone_nugget').displayName('Stone Nugget').texture("kubejs:item/nuggets/stone_nugget")
	e.create('endsteel_nugget').displayName('Endsteel Nugget').texture("kubejs:item/nuggets/endsteel_nugget")
	e.create('darksteel_nugget').displayName('Darksteel Nugget').texture("kubejs:item/nuggets/darksteel_nugget")
	e.create('soulsteel_nugget').displayName('Soulsteel Nugget').texture("kubejs:item/nuggets/soulsteel_nugget")
	e.create('nugget_lapis').displayName('Lapis Nugget').texture("kubejs:item/nuggets/nugget_lapis")
	e.create('nugget_quartz').displayName('Quartz Nugget').texture("kubejs:item/nuggets/nugget_quartz")
	e.create('uwuterium_nugget').displayName('§dUwuterium Nugget').texture("kubejs:item/nuggets/uwuterium_nugget")


	//Large Plates
	e.create('lp_aquamarine').displayName('Aquamarine Large Plate').texture("kubejs:item/largeplates/lp_aquamarine")
	e.create('lp_redstone').displayName('Redstone Large Plate').texture("kubejs:item/largeplates/lp_redstone")
	e.create('lp_tin').displayName('Tin Large Plate').texture("kubejs:item/largeplates/lp_tin")
	e.create('lp_refined_glowstone').displayName('Refined Glowstone Large Plate').texture("kubejs:item/largeplates/lp_refined_glowstone")

	//DE
	e.create('de_draconic_core').displayName('Draconic Core')
	e.create('de_wyvern_core').displayName('Wyvern Core')
	e.create('de_awakened_core').displayName('Awakened Core')

	//Incomplete
	e.create('in_rf_coil').displayName('Incomplete Redstone Flux Coil')
	e.create('in_bloody_mechanism').displayName('Incomplete Bloody Mechanism')
	e.create('in_creative_blaze_cake').displayName('Incomplete Creative Blaze Cake')
	e.create('in_starmetal_ingot').displayName('Incomplete Starmetal Ingot').texture("kubejs:item/ingots/in_starmetal_ingot")
	e.create('in_enriched_iron').displayName('Incomplete Quartz Enriched Iron').texture("kubejs:item/ingots/in_enriched_iron")
	e.create('in_cake').displayName('Incomplete Cake')
	e.create('in_chocolate_cake').displayName('Incomplete Chocolate Cake')
	e.create('in_honey_cake').displayName('Incomplete Honey Cake')
	
	//RS Processors
	e.create('manasteel_processor').displayName('Manasteel Processor')
	e.create('terrasteel_processor').displayName('Terrasteel Processor')
	e.create('elementium_processor').displayName('Elementium Processor')
	e.create('uwuterium_processor').displayName('§dUwuterium Processor')

	//RS Raw Processors
	e.create('raw_manasteel_processor').displayName('Raw Manasteel Processor').texture("kubejs:item/rsprocessors/raw_manasteel_processor")
	e.create('raw_terrasteel_processor').displayName('Raw Terrasteel Processor').texture("kubejs:item/rsprocessors/raw_terrasteel_processor")
	e.create('raw_elementium_processor').displayName('Raw Elementium Processor').texture("kubejs:item/rsprocessors/raw_elementium_processor")
	e.create('raw_uwuterium_processor').displayName('§dRaw Uwuterium Processor').texture("kubejs:item/rsprocessors/raw_uwuterium_processor")



	//Blood Magic Slates
	e.create('slate_1').displayName('Basic Slate').texture("kubejs:item/slates/slate_1")
	e.create('slate_2').displayName('Reinforced Slate').texture("kubejs:item/slates/slate_2")
	e.create('slate_3').displayName('Ultimate Slate').texture("kubejs:item/slates/slate_3")
	e.create('slate_fluix').displayName('Fluix Slate').texture("kubejs:item/slates/slate_fluix")
	e.create('slate_uwuterium').displayName('§dUwuterium Slate').texture("kubejs:item/slates/slate_uwuterium")

	//Dusts
	e.create('diamond_dust_pile').displayName('Diamond Dust Pile').texture("kubejs:item/piles/diamond_dust_pile")
	e.create('emerald_dust_pile').displayName('Emerald Dust Pile').texture("kubejs:item/piles/emerald_dust_pile")
	e.create('gold_dust_pile').displayName('Gold Dust Pile').texture("kubejs:item/piles/gold_dust_pile")
	
	e.create('draconium_dust').displayName('§5Draconium Dust')
	e.create('stardust').displayName('Stardust')

	//Rods
	e.create('diamond_rod').displayName('Diamond Rod').texture("kubejs:item/rods/diamond_rod")
	e.create('emerald_rod').displayName('Emerald Rod').texture("kubejs:item/rods/emerald_rod")
	e.create('antimatter_rod').displayName('Antimatter Rod').texture("kubejs:item/rods/antimatter_rod")

	//Gears
	e.create('osmium_gear').displayName('Osmium Gear')
	e.create('endsteel_gear').displayName('Endsteel Gear')
	e.create('darksteel_gear').displayName('Darksteel Gear')

	//Ingots
	e.create('osgloglas_ingot').displayName('Osgloglas Ingot').texture("kubejs:item/ingots/osgloglas_ingot")
	e.create('awakened_draconium_ingot').displayName('§6Awakened Draconium Ingot').texture("kubejs:item/ingots/awakened_draconium_ingot")
	e.create('draconium_ingot').displayName('§5Draconium Ingot').texture("kubejs:item/ingots/draconium_ingot")
	e.create('stacium_ingot').displayName('Goddess of Creation: Stacia Ingot').texture("kubejs:item/ingots/stacium_ingot")
	e.create('solus_ingot').displayName('Goddess of Sun: Solus Ingot').texture("kubejs:item/ingots/solus_ingot")
	e.create('terrarium_ingot').displayName('Goddess of Earth: Terraria Ingot').texture("kubejs:item/ingots/terrarium_ingot")
	e.create('lunaria_ingot').displayName('Goddess of Darkness: Lunaria Ingot').texture("kubejs:item/ingots/lunaria_ingot")
	e.create('starmetal_ingot').displayName('Starmetal Ingot').texture("kubejs:item/ingots/starmetal_ingot")
	e.create('osmiridium_ingot').displayName('Osmiridium Ingot').texture("kubejs:item/ingots/osmiridium_ingot")
	e.create('endsteel_ingot').displayName('Endsteel Ingot').texture("kubejs:item/ingots/endsteel_ingot")
	e.create('darksteel_ingot').displayName('Darksteel Ingot').texture("kubejs:item/ingots/darksteel_ingot")
	e.create('iron_aluminum_ingot').displayName('Iron - Aluminum Alloy Ingot').texture("kubejs:item/ingots/iron_aluminum_ingot")
	e.create('uwuterium_ingot').displayName('§dUwuterium Ingot').texture("kubejs:item/ingots/uwuterium_ingot")
	e.create('soulsteel_ingot').displayName('Soulsteel Ingot').texture("kubejs:item/ingots/soulsteel_ingot")

	//Catalyst
	e.create('catal_ender').displayName('Ender Catalyst').texture("kubejs:item/catals/catal_ender")
	e.create('catal_glowstone').displayName('Glowstone Catalyst').texture("kubejs:item/catals/catal_glowstone")
	e.create('catal_blood').displayName('Blood Catalyst').texture("kubejs:item/catals/catal_blood")

	//Chipsets
	e.create('chipset_emerald').displayName('Emerald Chipset').texture("kubejs:item/chipsets/chipset_emerald")
	e.create('chipset_iron').displayName('Iron Chipset').texture("kubejs:item/chipsets/chipset_iron")
	e.create('chipset_diamond').displayName('Diamond Chipset').texture("kubejs:item/chipsets/chipset_diamond")
	e.create('chipset_gold').displayName('Gold Chipset').texture("kubejs:item/chipsets/chipset_gold")
	e.create('chipset_quartz').displayName('Quartz Chipset').texture("kubejs:item/chipsets/chipset_quartz")
	e.create('chipset_redstone').displayName('Redstone Chipset').texture("kubejs:item/chipsets/chipset_redstone")
	
	//Thermal Dusts
	e.create('aerotheum_dust').displayName('Aerotheum Dust').texture("kubejs:item/thermaldusts/aerotheum_dust")
	e.create('pyrotheum_dust').displayName('Pyrotheum Dust').texture("kubejs:item/thermaldusts/pyrotheum_dust")
	e.create('cryotheum_dust').displayName('Cryotheum Dust').texture("kubejs:item/thermaldusts/cryotheum_dust")
	e.create('petrotheum_dust').displayName('Petrotheum Dust').texture("kubejs:item/thermaldusts/petrotheum_dust")

	//OC
	e.create('alu').displayName('Arithmetic Logic Unit').texture("kubejs:item/oc/alu")
	e.create('angelupgrade').displayName('Angel Upgrade').texture("kubejs:item/oc/angelupgrade")
	e.create('apu1').displayName('Accelerated Processing Unit').texture("kubejs:item/oc/apu1")
	e.create('apu2').displayName('Accelerated Processing Unit Tier 2').texture("kubejs:item/oc/apu2")
	e.create('card').displayName('Card Base').texture("kubejs:item/oc/card")
	e.create('chamelium').displayName('Chamelium').texture("kubejs:item/oc/chamelium")
	e.create('chip1').displayName('Microchip Tier 1').texture("kubejs:item/oc/chip1")
	e.create('chip2').displayName('Microchip Tier 2').texture("kubejs:item/oc/chip2")
	e.create('chip3').displayName('Microchip Tier 3').texture("kubejs:item/oc/chip3")
	e.create('componentbus1').displayName('Component Bus Tier 1').texture("kubejs:item/oc/componentbus1")
	e.create('componentbus2').displayName('Component Bus Tier 2').texture("kubejs:item/oc/componentbus2")
	e.create('componentbus3').displayName('Component Bus Tier 3').texture("kubejs:item/oc/componentbus3")
	e.create('craftingupgrade').displayName('Crafting Upgrade').texture("kubejs:item/oc/craftingupgrade")
	e.create('cu').displayName('Control Unit').texture("kubejs:item/oc/cu")
	e.create('datacard1').displayName('Data Card Tier 1').texture("kubejs:item/oc/datacard1")
	e.create('datacard2').displayName('Data Card Tier 2').texture("kubejs:item/oc/datacard2")
	e.create('datacard3').displayName('Data Card Tier 3').texture("kubejs:item/oc/datacard3")
	e.create('diskdrivemountable').displayName('Disk Drive').texture("kubejs:item/oc/diskdrivemountable")
	e.create('dronecase1').displayName('Drone Case Tier 1').texture("kubejs:item/oc/dronecase1")
	e.create('dronecase2').displayName('Drone Case Tier 2').texture("kubejs:item/oc/dronecase2")
	e.create('graphicscard1').displayName('Graphics Card Tier 1').texture("kubejs:item/oc/graphicscard1")
	e.create('graphicscard2').displayName('Graphics Card Tier 2').texture("kubejs:item/oc/graphicscard2")
	e.create('graphicscard3').displayName('Graphics Card Tier 3').texture("kubejs:item/oc/graphicscard3")
	e.create('hdd1').displayName('Hard Disk Drive Tier 1').texture("kubejs:item/oc/hdd1")
	e.create('hdd2').displayName('Hard Disk Drive Tier 2').texture("kubejs:item/oc/hdd2")
	e.create('hdd3').displayName('Hard Disk Drive Tier 3').texture("kubejs:item/oc/hdd3")
	e.create('printedcircuitboard').displayName('Printed Circuit Board').texture("kubejs:item/oc/printedcircuitboard")
	e.create('ram1').displayName('Memory Tier 1').texture("kubejs:item/oc/ram1")
	e.create('ram2').displayName('Memory Tier 2').texture("kubejs:item/oc/ram2")
	e.create('ram3').displayName('Memory Tier 3').texture("kubejs:item/oc/ram3")
	e.create('server1').displayName('Server Tier 1').texture("kubejs:item/oc/server1")
	e.create('server2').displayName('Server Tier 2').texture("kubejs:item/oc/server2")
	e.create('server3').displayName('Server Tier 3').texture("kubejs:item/oc/server3")
	e.create('wlancard1').displayName('Wireless Network Card Tier 1').texture("kubejs:item/oc/wlancard1")
	e.create('wlancard2').displayName('Wireless Network Card Tier 2').texture("kubejs:item/oc/wlancard2")

	//Units
	e.create('unit_empty').displayName('Empty Elevation Unit').texture("kubejs:item/units/unit_empty")
	e.create('unit_glowstone').displayName('Energized Glowstone Unit').texture("kubejs:item/units/unit_glowstone")
	e.create('unit_cryotheum').displayName('Cryotheum Elevation Unit').texture("kubejs:item/units/unit_cryotheum")

	//Stabilized
	e.create('stabilized_jar_of_light').displayName('Stabilized Jar Of Light').glow(true)
	e.create('stabilized_belt_of_unstable_gifts').displayName('Stabilized Belt of Unstable Gifts').glow(true)
	e.create('stabilized_shapers_focus').displayName('Stabilized Shapers Focus').glow(true)
	e.create('stabilized_thread_warding').displayName('Stabilized Thread Of Warding').glow(true)


//Crafting Seeds
e.create('tier2_crafting_seed').displayName('Tier 2 Crafting Seed').texture("kubejs:item/craftingseeds/tier2_crafting_seed")
e.create('tier3_crafting_seed').displayName('Tier 3 Crafting Seed').texture("kubejs:item/craftingseeds/tier3_crafting_seed")
e.create('tier4_crafting_seed').displayName('Tier 4 Crafting Seed').texture("kubejs:item/craftingseeds/tier4_crafting_seed")
e.create('tier5_crafting_seed').displayName('Tier 5 Crafting Seed').texture("kubejs:item/craftingseeds/tier5_crafting_seed")
e.create('tier6_crafting_seed').displayName('Tier 6 Crafting Seed').texture("kubejs:item/craftingseeds/tier6_crafting_seed")



})

StartupEvents.registry('block', e => {

	e.create('charged_certus_quartz_block').displayName('Charged Certus Quartz Block').soundType('metal').hardness(2.0).tagBlock("mineable/pickaxe").tagBlock('minecraft:needs_iron_tool')
	e.create("reinforced_obsidian").soundType('metal').resistance(1200).hardness(50).tagBlock("minecraft:wither_immune").tagBlock("minecraft:dragon_immune").tagBlock("mineable/pickaxe").tagBlock('minecraft:needs_iron_tool')
	e.create('arcane_ore').soundType('stone').hardness(2.0).displayName('Arcane Ore').tagBlock("mineable/pickaxe").tagBlock('minecraft:needs_iron_tool')
	e.create('deepslate_arcane_ore').soundType('stone').hardness(2.0).displayName('Deepslate Arcane Ore').tagBlock("mineable/pickaxe").tagBlock('minecraft:needs_iron_tool')
	e.create('magical_casing').soundType('stone').hardness(2.0).displayName('Ancient Stone Bricks').tagBlock("mineable/pickaxe").tagBlock('minecraft:needs_iron_tool')
	e.create('glimmering_livingrock').soundType('stone').hardness(2.0).displayName('Glimmering Livingrock').tagBlock("mineable/pickaxe").tagBlock('minecraft:needs_iron_tool')
	e.create('aquamarine_block').soundType('stone').hardness(2.0).displayName('Block of Aquamarine').tagBlock("mineable/pickaxe").tagBlock('minecraft:needs_iron_tool')
	e.create('draconium_block').soundType('metal').displayName('§5Draconium Block').tagBlock("mineable/pickaxe").tagBlock('minecraft:needs_iron_tool')
	e.create('charged_draconium_block').displayName('§5Charged Draconium Block').tagBlock("mineable/pickaxe").tagBlock('minecraft:needs_iron_tool').soundType('metal')
	e.create('awakened_draconium_block').displayName('§6Awakened Draconium Block').tagBlock("mineable/pickaxe").tagBlock('minecraft:needs_iron_tool').soundType('metal')
	e.create('goldium_block').displayName('Block of Goldium Crystal').tagBlock("mineable/pickaxe").tagBlock('minecraft:needs_iron_tool').soundType('metal')
	e.create('infused_goldium_block').displayName('Block of Infused Goldium Crystal').tagBlock("mineable/pickaxe").tagBlock('minecraft:needs_iron_tool').soundType('metal')
	e.create('soulsteel_block').displayName('Block of Soulsteel').tagBlock("mineable/pickaxe").tagBlock('minecraft:needs_iron_tool').soundType('metal')
	e.create('starmetal_ore').soundType('stone').hardness(2.0).displayName('Starmetal Ore').tagBlock("mineable/pickaxe").tagBlock('minecraft:needs_iron_tool')
	e.create('mana_sand').displayName('Aquamarine Shale').soundType('sand').tagBlock("mineable/shovel").tagBlock('minecraft:needs_stone_tool')
	e.create('uwuterium_block').displayName('§dBlock Of Uwuterium').soundType('metal').tagBlock("mineable/pickaxe").tagBlock('minecraft:needs_diamond_tool')
	e.create('osgloglas_block').displayName('Block Of Osgloglas').soundType('metal').tagBlock("mineable/pickaxe").tagBlock('minecraft:needs_diamond_tool')
	e.create('darksteel_block').displayName('Block Of Darksteel').soundType('metal').tagBlock("mineable/pickaxe").tagBlock('minecraft:needs_diamond_tool')
	e.create('endsteel_block').displayName('Block Of Endsteel').soundType('metal').tagBlock("mineable/pickaxe").tagBlock('minecraft:needs_diamond_tool')
	e.create('raw_arcane_block').displayName('Block Of Raw Arcane').soundType('metal').tagBlock("mineable/pickaxe").tagBlock('minecraft:needs_iron_tool')
	e.create('end_iridium').displayName('End Iridium Ore').soundType('metal').tagBlock("mineable/pickaxe").tagBlock('minecraft:needs_netherite_tool')
	e.create('iron_aluminum_alloy_block').displayName('Block Of Iron - Aluminum Alloy').tagBlock("mineable/pickaxe").tagBlock('minecraft:needs_iron_tool').soundType('metal')


  //Compressed Blocks
  e.create('c_oak').displayName('Compressed Oak Log').texture('up', 'kubejs:block/c_oak_topbottom').texture('down', 'kubejs:block/c_oak_topbottom').soundType('wood')
  e.create('c_dark_oak').displayName('Compressed Dark Oak Log').texture('up', 'kubejs:block/c_dark_oak_topbottom').texture('down', 'kubejs:block/dark_oak_topbottom').soundType('wood')
  e.create('c_birch').displayName('Compressed Birch Log').texture('up', 'kubejs:block/c_birch_topbottom').texture('down', 'kubejs:block/c_birch_topbottom').soundType('wood')
  e.create('c_acacia').displayName('Compressed Acacia Log').texture('up', 'kubejs:block/c_acacia_topbottom').texture('down', 'kubejs:block/acacia_topbottom').soundType('wood')
  e.create('c_jungle').displayName('Compressed Jungle Log').texture('up', 'kubejs:block/c_jungle_topbottom').texture('down', 'kubejs:block/jungle_topbottom').soundType('wood')
  e.create('c_mangrove').displayName('Compressed Mangrove Log').texture('up', 'kubejs:block/c_mangrove_topbottom').texture('down', 'kubejs:block/mangrove_topbottom').soundType('wood')
  e.create('c_spruce').displayName('Compressed Spruce Log').texture('up', 'kubejs:block/c_spruce_topbottom').texture('down', 'kubejs:block/spruce_topbottom').soundType('wood')

  e.create('c1_glass').displayName('Compressed Glass (1x)').defaultTranslucent().soundType('glass')
  e.create('c2_glass').displayName('Compressed Glass (2x)').defaultTranslucent().soundType('glass')
  e.create('c3_glass').displayName('Compressed Glass (3x)').defaultTranslucent().soundType('glass')
  e.create('c4_glass').displayName('Compressed Glass (4x)').defaultTranslucent().soundType('glass')
  e.create('c5_glass').displayName('Compressed Glass (5x)').defaultTranslucent().soundType('glass')
  e.create('c6_glass').displayName('Compressed Glass (6x)').defaultTranslucent().soundType('glass')
  e.create('c7_glass').displayName('Compressed Glass (7x)').defaultTranslucent().soundType('glass')
  e.create('c8_glass').displayName('Compressed Glass (8x)').defaultTranslucent().soundType('glass')
  e.create('c9_glass').displayName('Compressed Glass (9x)').defaultTranslucent().soundType('glass')

  e.create('c1_cobbled_deepslate').displayName('Compressed Cobbled Deepslate (1x)').soundType('deepslate').tagBlock("mineable/pickaxe").tagBlock('minecraft:needs_iron_tool')
  e.create('c2_cobbled_deepslate').displayName('Compressed Cobbled Deepslate (2x)').soundType('deepslate').tagBlock("mineable/pickaxe").tagBlock('minecraft:needs_iron_tool')
  e.create('c3_cobbled_deepslate').displayName('Compressed Cobbled Deepslate (3x)').soundType('deepslate').tagBlock("mineable/pickaxe").tagBlock('minecraft:needs_iron_tool')
  e.create('c4_cobbled_deepslate').displayName('Compressed Cobbled Deepslate (4x)').soundType('deepslate').tagBlock("mineable/pickaxe").tagBlock('minecraft:needs_iron_tool')
  e.create('c5_cobbled_deepslate').displayName('Compressed Cobbled Deepslate (5x)').soundType('deepslate').tagBlock("mineable/pickaxe").tagBlock('minecraft:needs_iron_tool')

  e.create('compressed_infused_emeraldium_block').displayName('Compressed Block Of Infused Emeraldium')


})

StartupEvents.registry('fluid', e => {


	e.create('mana').displayName('Mana')
	.thickTexture(0x37fcf7).bucketColor(0x37fcf7)
	.flowingTexture('minecraft:block/water_flow').stillTexture('minecraft:block/water_still')

	e.create('starlight').displayName('Liquid Starlight')
	.thickTexture(0xd8d7d7).bucketColor(0xd8d7d7)
	.flowingTexture('kubejs:item/liquid_starlight_still').stillTexture('kubejs:item/liquid_starlight_still')

	e.create('molten_uwuterium').displayName('Molten Uwuterium')
	.thickTexture(0xff66b2).bucketColor(0xff66b2)
	.flowingTexture('kubejs:item/lava_flow').stillTexture('kubejs:item/lava_still')

	e.create('stacia_essence').displayName('Essence Of Lambent Light')
	.thickTexture(0x0ee0cea).bucketColor(0xee0cea)
	.flowingTexture('kubejs:item/lava_flow').stillTexture('kubejs:item/lava_still')

	e.create('solus_essence').displayName('Essence Of Hecate II')
	.thickTexture(0x13eaee).bucketColor(0x13eaee)
	.flowingTexture('kubejs:item/lava_flow').stillTexture('kubejs:item/lava_still')

	e.create('terraria_essence').displayName('Essence Of Joyeuse')
	.thickTexture(0x0ced1b).bucketColor(0x0ced1b)
	.flowingTexture('kubejs:item/lava_flow').stillTexture('kubejs:item/lava_still')

	e.create('lunaria_essence').displayName('Essence Of Mother\'s Rosario')
	.thickTexture(0x561bf1).bucketColor(0x561bf1)
	.flowingTexture('kubejs:item/lava_flow').stillTexture('kubejs:item/lava_still')

	e.create('molten_lapis').displayName('Molten Lapis Lazuli')
	.thickTexture(0x1c52a6).bucketColor(0x1c52a6)
	.flowingTexture('kubejs:item/lava_flow').stillTexture('kubejs:item/lava_still')

	e.create('blazing_pyro').displayName('Blazing Pyrotheum')
	.bucketColor(0xffc325)
	.flowingTexture('kubejs:block/fluids/pyrotheum_flow').stillTexture('kubejs:block/fluids/pyrotheum_still')

	e.create('molten_enriched_quartz').displayName('Molten Enriched Quartz')
	.thickTexture(0xf3f3f4).bucketColor(0xf3f3f4)
	.flowingTexture('kubejs:item/en_quartz_flow').stillTexture('kubejs:item/en_quartz_still')

	e.create('blazing_cryo').displayName('Gelid Cryotheum')
	.bucketColor(0x4bf1f5)
	.flowingTexture('kubejs:item/cryotheum_flow').stillTexture('kubejs:item/cryotheum_still')

	e.create('ender_juice').displayName('Ender Juice')
	.thickTexture(0x0a2f56).bucketColor(0x0a2f56)
	.flowingTexture('kubejs:item/lava_flow').stillTexture('kubejs:item/lava_still')

	
})


ItemEvents.modification(e => {
    e.modify("kubejs:uwuterium_slate", item => {
		item.rarity = 'epic'
    })
})
  
