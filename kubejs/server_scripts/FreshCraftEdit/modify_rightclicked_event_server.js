const foods = ['oceanic_delight:stuffed_pufferfish', 'oceanic_delight:paella_plate'];

foods.forEach(foodId => {
  BlockEvents.rightClicked(foodId, event => {
    if (event.item.id !== 'minecraft:bowl') {
      event.cancel();
    }
  });
});

BlockEvents.rightClicked('call_of_yucutan:kukulkan_idol', event => {
  event.cancel();
});

BlockEvents.rightClicked('call_of_yucutan:ah_puch_idol', event => {
  event.cancel();
});

ItemEvents.rightClicked('call_of_yucutan:mayan_calendar', event => {
  event.cancel();
});