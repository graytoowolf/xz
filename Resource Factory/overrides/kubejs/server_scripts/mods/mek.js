ServerEvents.recipes(event => {
    const { kubejs, mekanism } = event.recipes

    event.replaceInput({ id: 'mekanism:metallurgic_infuser' }, 'alltheores:osmium_ingot', 'mekanism:steel_casing')
    event.replaceInput({ id: 'mekanism:control_circuit/basic' }, 'alltheores:osmium_ingot', 'pneumaticcraft:unassembled_pcb')
    event.replaceInput({ id: 'mekanism:control_circuit/infused_advanced' }, 'mekanism:basic_control_circuit', 'pneumaticcraft:printed_circuit_board')
    event.replaceInput({ id: 'mekanism:control_circuit/infused_elite' }, 'mekanism:advanced_control_circuit', 'powah:crystal_nitro')
    event.replaceInput({ id: 'mekanism:control_circuit/infused_ultimate' }, 'mekanism:elite_control_circuit', 'kubejs:alloy_ingots')
    event.replaceInput({ id: 'mekanism:metallurgic_infusing/alloy/infused' }, 'minecraft:copper_ingot', 'enderio:copper_alloy_ingot')
    event.replaceInput({ id: 'mekanism:metallurgic_infusing/alloy/reinforced' }, 'mekanism:alloy_infused', 'naturesaura:sky_ingot')
    event.replaceInput({ id: 'mekanism:metallurgic_infusing/alloy/atomic' }, 'mekanism:alloy_reinforced', 'oritech:duratium_ingot')
    event.replaceInput({ id: 'mekanism:laser' }, 'mekanism:steel_casing', 'oritech:prometheum_ingot')
    event.replaceInput({ id: 'mekanism:antiprotonic_nucleosynthesizer' }, 'mekanism:pellet_antimatter', 'occultism:dragonyst_dust')


    mekanism.nucleosynthesizing('64x forbidden_arcanus:runic_stone', '16x actuallyadditions:empowered_enori_crystal', "mekanism:antimatter", 200, false)
    mekanism.nucleosynthesizing('64x forbidden_arcanus:arcane_crystal_ore', '16x actuallyadditions:empowered_palis_crystal', "mekanism:antimatter", 200, false)
    mekanism.nucleosynthesizing('64x forbidden_arcanus:stella_arcanum', '16x actuallyadditions:empowered_void_crystal', "mekanism:antimatter", 200, false)
    mekanism.nucleosynthesizing('mekmm:uu_matter', '16x mekmm:empty_crystal', "50x mekanism:antimatter", 5000, false)
    mekanism.nucleosynthesizing('mekmm:uu_matter', '64x mekmm:empty_crystal', "8000x mekanism:chlorine", 8000, false)


    mekanism.oxidizing("100x mekmm:uu_matter", 'mekmm:uu_matter')

    //融合
    event.custom(
        {
            "type": "mekanism:combining",
            "extra_input": {
                "count": 1,
                "item": 'ifeu:dragon_star_block'
            },
            "main_input": {
                "count": 1,
                "item": 'actuallyadditions:ender_casing'
            },
            "output": {
                "count": 1,
                "id": 'ifeu:ultimate_machine_frame'
            }
        }
    )
    //反质子合成器

    ReactionRecipes(80, 1024, 'mekmm:scrap_box', 32, 'mekmm:empty_crystal', 1, 'mekanismgenerators:fusion_fuel', 1000, "mekmm:unstable_dimensional_gas", 4000, "mekanism:nuclear_waste", 1000)

    /**
     * mek反质子核合成器cusotm方法配方
     * @param {number} time 配方制作时间ticks
     * @param {number} energy 能量需求/t
     * @param {string} input_item 输入物品
     * @param {number} count 输入物品数量
     * @param {string} output_item 输出物品
     * @param {number} count2 输出物品数量
     * @param {string} input_fluid 输入流体
     * @param {number} amount2 输入流体数量
     * @param {string} input_chemical 输入化学品
     * @param {number} amount 输入化学品数量
     * @param {string} output_chemical 输出化学品
     * @param {number} amount1 输出化学品数量
     */
    function ReactionRecipes(time, energy, input_item, count, output_item, count2, input_fluid, amount2, input_chemical, amount, output_chemical, amount1) {
        event.custom(
            {
                "type": "mekanism:reaction",
                "chemical_input": {
                    "amount": amount,
                    "chemical": input_chemical
                },
                "chemical_output": {
                    "amount": amount1,
                    "id": output_chemical
                },
                "duration": time,
                "energy_required": energy,
                "fluid_input": {
                    "amount": amount2,
                    "fluid": input_fluid
                },
                "item_input": {
                    "count": count,
                    "item": input_item
                },
                "item_output": {
                    "count": count2,
                    "id": output_item
                }
            }
        )
    }



    //MEKE


    event.replaceInput({ id: 'mekanism_extras:control_circuit/absolute' }, 'mekanism:ultimate_control_circuit', 'oritech:heisenberg_compensator')
    event.replaceInput({ id: 'mekanism_extras:metallurgic_infusing/alloy/radiance' }, 'mekanism:alloy_atomic', 'advanced_ae:quantum_alloy')
    event.replaceInput({ id: 'mekanism_extras:metallurgic_infusing/alloy/thermonuclear' }, 'mekanism_extras:alloy_radiance', 'extendedcrafting:enhanced_redstone_ingot')
    event.replaceInput({ id: 'mekanism_extras:metallurgic_infusing/alloy/shining' }, 'mekanism_extras:alloy_thermonuclear', 'oritech:prometheum_ingot')
    event.replaceInput({ id: 'mekanism_extras:metallurgic_infusing/alloy/spectrum' }, 'mekanism_extras:alloy_shining', 'avaritia:neutron_ingot')
    event.replaceInput({ id: 'mekanism_extras:control_circuit/supreme' }, 'mekanism_extras:absolute_control_circuit', 'advanced_ae:quantum_alloy_plate')
    event.replaceInput({ id: 'mekanism_extras:control_circuit/cosmic' }, 'mekanism_extras:supreme_control_circuit', 'ifeu:dragon_star')
    event.replaceInput({ id: 'mekanism_extras:control_circuit/infinite' }, 'mekanism_extras:cosmic_control_circuit', 'mekanism:pellet_antimatter')
})