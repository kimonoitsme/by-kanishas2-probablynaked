StartupEvents.registry('potion', event => {
    event.create('levitation_slow_fall')  // ID зелья
        .effect('minecraft:levitation', 400, 0)  // 20 сек = 400 тиков, уровень 1
        .effect('minecraft:slow_falling', 1800, 0)  // 90 сек = 1800 тиков, уровень 1
});

ItemEvents.modification(event => {
    event.modify('kubejs:levitation_slow_fall', item => {
        item.setCreativeTab('minecraft:brewing');
    });
});

MoreJSEvents.registerPotionBrewing(event => {
    event.addPotionBrewing(
        'wan_ancient_beasts:glider_feather',  // Ингредиент
        'minecraft:awkward',  // База
        'kubejs:levitation_slow_fall'  // Результат
    );
});