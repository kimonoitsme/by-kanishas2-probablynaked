// Функция копирования компонентов (enchantments, tags, NBT, damage и т.д.)
function copyComponents(input, output) {
    let components = input.getComponentsPatch();
    if (typeof components === "function") {
        components = components();
    }
    for (let entry of components.entrySet()) {
        let type = entry.getKey();
        let value = entry.getValue();
        if (type == null) continue;
        if (!value.isPresent()) continue;
        output.set(type, value.get());
    }
}

// Custom action для ремонта
LycheeEvents.customAction('repair_item', event => {
    event.action.applyFunc = (recipe, ctx, times) => {  // Через event.action!
        let input = ctx.getItem(0);  // paraglider_wood
        let material = ctx.getItem(1);  // glider_feather
        let output = ctx.getItem(2);  // Результат
        copyComponents(input, output);  // Копируем всё
        let maxDamage = input.maxDamage;  // Max прочность
        let repairAmount = Math.floor(maxDamage * 0.3);  // 30% за 1 перо
        let cost = 0;
        for (; cost < material.count && output.damageValue > 0; cost++) {  // Ремонт по шагам
            output.setDamageValue(Math.max(0, output.damageValue - repairAmount));
        }
        ctx.get(LycheeContextKey.ANVIL).materialCost = cost;  // Расход перьев
    };
    event.cancel();  // Завершаем
});

// Custom condition: проверка на damageValue > 0
LycheeEvents.customCondition('is_item_damaged', event => {
    let target = LycheeReference.fromJson(event.data, "target");
    event.condition.testFunc = (recipe, ctx, times) => {  // Через event.condition!
        let indexes = recipe.getItemIndexes(target);
        let item = ctx.getItem(0);
        return item.damageValue > 0 ? times : 0;  // Проверка на damage >0
    };
    event.cancel();  // Завершаем
});