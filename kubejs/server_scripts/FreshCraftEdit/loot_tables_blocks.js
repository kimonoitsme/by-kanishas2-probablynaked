ServerEvents.blockLootTables(event => {
    event.modifyBlock('immersive_weathering:fulgurite', loot => { // Добавление возможности ломать фулгурит шёлковым касанием
        loot.addPool(pool => {
            pool.rolls = 1;
            pool.addItem('immersive_weathering:fulgurite');
            pool.addCondition({
                condition: 'minecraft:match_tool',
                predicate: {
                    enchantments: [
                        {
                            enchantment: 'minecraft:silk_touch',
                            levels: {min: 1}
                        }
                    ]
                }
            });
        });
    });
});