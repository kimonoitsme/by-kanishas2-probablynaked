const HEAVY_ITEMS = [
  "create:cardboard_package_12x10",
  "create:cardboard_package_10x8",
  "create:cardboard_package_10x12",
  "create:cardboard_package_12x12"
];

const SACK_ITEM = "supplementaries:sack";

const CHECK_INTERVAL = 20; // В тиках
const EFFECT_DURATION = 30;

const WEIGHT_LEVELS = [
  { count: 3, level: 0 },
  { count: 5, level: 1 },
  { count: 7, level: 2 },
  { count: 9, level: 3 },
  { count: 12, level: 4 },
  { count: 13, level: 5 },
  { count: 15, level: 6 },
  { count: 17, level: 7 },
  { count: 19, level: 8 }
];

ServerEvents.tick(event => {
  if (event.server.getTickCount() % CHECK_INTERVAL !== 0) return;

  for (const player of event.server.players) {
    let hasSack = false;
    let boxCount = 0;

    for (const item of player.inventory.allItems) {
      if (item.id === SACK_ITEM) {
        hasSack = true;
        break;
      }
      if (HEAVY_ITEMS.includes(item.id)) {
        boxCount += item.count;
      }
    }

    if (hasSack) continue;

    let level = -1;
    for (const entry of WEIGHT_LEVELS) {
      if (boxCount >= entry.count) level = entry.level;
    }

    if (level < 0) {
      break;
    }

    player.potionEffects.add('supplementaries:overencumbered', EFFECT_DURATION, level, false, false);
  }
});
