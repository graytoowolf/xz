ServerEvents.recipes(event => {

let bulkcrafting = (output, input) => {
    event.recipes.thermal.pulverizer('9x ' + output, '#forge:storage_blocks/' + input)
    event.recipes.createCrushing('9x ' + output, '#forge:storage_blocks/' + input)
    event.recipes.createMilling('9x ' + output, '#forge:storage_blocks/' + input)
    event.custom({"type":"mekanism:crushing","input":{"ingredient":{"tag":"forge:storage_blocks/" + input}},"output":{"count":9,"item": output }})
    event.custom({"type":"immersiveengineering:crusher","energy":1600,"input":{"tag":"forge:storage_blocks/" + input},"result":{"item": output, "count": 9},"secondaries":[]})
    event.custom({"type": "ftbic:macerating","inputItems": [{"count": 1,"ingredient": {"tag": "forge:storage_blocks/" + input}}],"outputItems": [{"count": 9,"item": output }]})
    event.custom({"type": "integrateddynamics:squeezer","item": {"tag": "forge:storage_blocks/" + input},"result": {"items": [{"item": {"item": output,"count": 9}}]}})
    event.custom({"type": "integrateddynamics:mechanical_squeezer","item": {"tag": "forge:storage_blocks/" + input},"result": {"items": [{"item": {"item": output,"count": 9}}]},"duration": 40})
}

//mek
bulkcrafting('mekanism:dust_coal', 'coal')
bulkcrafting('mekanism:dust_osmium', 'osmium')
bulkcrafting('mekanism:dust_uranium', 'uranium')
bulkcrafting('mekanism:dust_refined_obsidian', 'refined_obsidian')
bulkcrafting('mekanism:dust_fluorite', 'fluorite')
//thermal
bulkcrafting('thermal:iron_dust', 'iron')
bulkcrafting('thermal:gold_dust', 'gold')
bulkcrafting('thermal:copper_dust', 'copper')
bulkcrafting('thermal:netherite_dust', 'netherite')
bulkcrafting('thermal:lapis_dust', 'lapis')
bulkcrafting('thermal:diamond_dust', 'diamond')
bulkcrafting('thermal:emerald_dust', 'emerald')
bulkcrafting('thermal:tin_dust', 'tin')
bulkcrafting('thermal:lead_dust', 'lead')
bulkcrafting('thermal:silver_dust', 'silver')
bulkcrafting('thermal:nickel_dust', 'nickel')
bulkcrafting('thermal:niter_dust', 'niter')
bulkcrafting('thermal:sulfur_dust', 'sulfur')
bulkcrafting('thermal:signalum_dust', 'signalum')
bulkcrafting('thermal:lumium_dust', 'lumium')
bulkcrafting('thermal:enderium_dust', 'enderium')
bulkcrafting('thermal:bronze_dust', 'bronze')
bulkcrafting('thermal:electrum_dust', 'electrum')
bulkcrafting('thermal:invar_dust', 'invar')
bulkcrafting('thermal:constantan_dust', 'constantan')
bulkcrafting('thermal:steel_dust', 'steel')
bulkcrafting('thermal:rose_gold_dust', 'rose_gold')
//thermal endergy
bulkcrafting('thermalendergy:prismalium_dust', 'prismalium')
bulkcrafting('thermalendergy:melodium_dust', 'melodium')
bulkcrafting('thermalendergy:stellarium_dust', 'stellarium')
//thermal extra
bulkcrafting('thermal_extra:soul_sand_dust', 'soul_sand')
bulkcrafting('thermal_extra:soul_infused_dust', 'soul_infused')
bulkcrafting('thermal_extra:shellite_dust', 'shellite')
bulkcrafting('thermal_extra:twinite_dust', 'twinite')
bulkcrafting('thermal_extra:dragonsteel_dust', 'dragonsteel')
//immersive engineering
bulkcrafting('immersiveengineering:dust_coke', 'coal_coke')


//---4 section------

let bulkcrafting4 = (output, input) => {
    event.recipes.thermal.pulverizer('4x ' + output, '#forge:storage_blocks/' + input)
    event.recipes.createCrushing('4x ' + output, '#forge:storage_blocks/' + input)
    event.recipes.createMilling('4x ' + output, '#forge:storage_blocks/' + input)
    event.custom({"type":"mekanism:crushing","input":{"ingredient":{"tag":"forge:storage_blocks/" + input}},"output":{"count":4,"item": output }})
    event.custom({"type":"immersiveengineering:crusher","energy":1600,"input":{"tag":"forge:storage_blocks/" + input},"result":{"item": output, "count": 4},"secondaries":[]})
    event.custom({"type": "ftbic:macerating","inputItems": [{"count": 1,"ingredient": {"tag": "forge:storage_blocks/" + input}}],"outputItems": [{"count": 4,"item": output }]})
    event.custom({"type": "integrateddynamics:squeezer","item": {"tag": "forge:storage_blocks/" + input},"result": {"items": [{"item": {"item": output,"count": 4}}]}})
    event.custom({"type": "integrateddynamics:mechanical_squeezer","item": {"tag": "forge:storage_blocks/" + input},"result": {"items": [{"item": {"item": output,"count": 4}}]},"duration": 40})
}

bulkcrafting4('ae2:fluix_dust', 'fluix')
bulkcrafting4('ae2:certus_quartz_dust', 'certus_quartz')


//-----1
event.recipes.thermal.pulverizer('immersiveengineering:dust_coke', '#forge:coal_coke')
event.recipes.createMilling('immersiveengineering:dust_coke', '#forge:coal_coke')
event.custom({"type":"mekanism:crushing","input":{"ingredient":{"item":"immersiveengineering:coal_coke"}},"output":{"item":"immersiveengineering:dust_coke"}})
event.custom({
	"type": "ftbic:macerating",
	"inputItems": [
	  {
		"count": 1,
		"ingredient": {
		  "tag": "forge:coal_coke"
		}
	  }
	],
	"outputItems": [
	  {
		"count": 1,
		"item": "immersiveengineering:dust_coke"
	  }
	]
  })

  event.custom({
	"type": "integrateddynamics:squeezer",
	"item": {
		"tag": "forge:coal_coke",
	},
	"result": {
	  "items": [
		{
		  "item": "immersiveengineering:dust_coke",
		  "count": 1
		}
	  ]
	}
  })
  
  event.custom({
	"type": "integrateddynamics:mechanical_squeezer",
	"item": {
	  "tag": "forge:coal_coke",
	},
	"result": {
	  "items": [
		{
		  "item": "immersiveengineering:dust_coke",
		  "count": 1
		}
	  ]
	},
	"duration": 40
  })





















//



//


//


})