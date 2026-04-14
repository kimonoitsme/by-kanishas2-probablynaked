BlockEvents.rightClicked('supplementaries:goblet', event => {
    const { player, item, hand, block } = event;

    // Только основная рука и пустая рука
    if (hand === 'main_hand' && item.isEmpty()) {
        let entityData = block.entityData;

        // Проверяем, что бокал пустой
        // Добавляем защиту от null/undefined
        if (entityData && 
            entityData.FluidHolder && 
            entityData.FluidHolder.id === 'moonlight:empty' && 
            entityData.FluidHolder.count === 0) {

            // Создаём ItemStack с NBT блока-entity
            let stack = Item.of(block.id, entityData || {});

            player.give(stack);                  // Даём в инвентарь (дропнет, если полный)
            block.set('minecraft:air');          // Удаляем блок

            // Звук подбора
            player.playSound('minecraft:entity.item.pickup', 0.8, 1.0 + Math.random() * 0.4);

            event.cancel(); // Отменяем только при подборе пустого бокала
            return;
        }
    }
});