const foods = ['oceanic_delight:stuffed_pufferfish', 'oceanic_delight:paella_plate'];

BlockEvents.rightClicked(event => {
  if (!event.player.level.isClientSide) return; // Проверка клиента на импостера - точно ли он клиент)
  const blockId = event.block.id;

  if (foods.includes(blockId)) {
    if (event.item.id !== 'minecraft:bowl') {
      event.player.displayClientMessage(Text.white('Вам нужна Миска, чтобы съесть это.'), true);
    }
    return;
  }

  if (blockId === 'call_of_yucutan:kukulkan_idol') {
    const phase = event.block.level.moonPhase;
    if (phase === 4) {
      event.player.displayClientMessage(Text.white('Кукулкан может получать подношения в новолуние'), true);
    } else {
      event.player.displayClientMessage(Text.white('Кукулкан не может получать сейчас подношения'), true);
    }
    return;
  }

  if (blockId === 'call_of_yucutan:ah_puch_idol') {
    const phase = event.block.level.moonPhase;
    if (phase === 0) {
      event.player.displayClientMessage(Text.white('Ах Пач может получать подношения в полнолуние'), true);
    } else {
      event.player.displayClientMessage(Text.white('Ах Пач не может получать сейчас подношения'), true);
    }
    return;
  }


  if (blockId === 'supplementaries:globe' || blockId === 'supplementaries:globe_sepia') {
    const dimension = event.block.level.dimension;
    const blockX = event.block.x;
    const blockZ = event.block.z;
    const realX = blockX < 0 ? blockX + 1 : blockX; // Корректировка отрицательных X и Z из-за "-0"
    const realZ = blockZ < 0 ? blockZ + 1 : blockZ;
    const isNegZeroX = (realX === 0 && blockX === -1); // Переменная для отображения "-0" X и Z
    const isNegZeroZ = (realZ === 0 && blockZ === -1);
    const xStr = isNegZeroX ? '-0' : `${realX}`;
    const zStr = isNegZeroZ ? '-0' : `${realZ}`;
    let message;
    if (dimension === 'minecraft:overworld') {
      if (isNegZeroX && isNegZeroZ) {
        message = `Запад: -0, Север: -0`;
      } else if (realX === 0 && realZ === 0 && !isNegZeroX && !isNegZeroZ) {
        message = `Центр мира: 0, 0`;
      } else {
        const xDir = (realX < 0 || isNegZeroX) ? `Запад: ${xStr}` : `Восток: ${xStr}`;
        const zDir = (realZ < 0 || isNegZeroZ) ? `Север: ${zStr}` : `Юг: ${zStr}`;
        message = `${xDir}, ${zDir}`;
      }
    } else {
      message = `§k???§r: §k???§r, §k???§r: §k???§r`;
    }
    event.player.displayClientMessage(Text.white(message), true);
    event.cancel();
    return;
  }
});

ItemEvents.rightClicked('call_of_yucutan:mayan_calendar', event => {
  if (!event.player.level.isClientSide) return;
  const itemId = event.item.id;
  if (itemId !== 'call_of_yucutan:mayan_calendar') return;

  const phase = event.player.level.moonPhase;
  if (phase === 0) {
    event.player.displayClientMessage(Text.white('Сейчас полнолуние'), true);
  } else if (phase === 4) {
    event.player.displayClientMessage(Text.white('Сейчас новолуние'), true);
  } else {
    event.player.displayClientMessage(Text.white('Пока нет никаких признаков приближающегося новолуния или полнолуния'), true);
  }
});

