ServerEvents.recipes(event => {
    event.custom({
        type: "lychee:anvil_crafting",
        item_in: [
            { "item": "vc_gliders:paraglider_wood" },  // Объект
            { "item": "wan_ancient_beasts:glider_feather" }  // Объект
        ],
        item_out: { "item": "vc_gliders:paraglider_wood" },  // Объект (тот же ID для ремонта)
        level_cost: 2,  // XP за шаг
        material_cost: 1,  // Перьев за шаг
        assembling: [
            {
                type: "custom",
                id: "repair_item"
            }
        ],
        contextual: {
            type: "custom",
            id: "is_item_damaged",
            data: { target: "/item_in/0" }  // Проверка первого слота
        },
        hide_in_viewer: false
    }).id("kubejs:paraglider_repair");
});