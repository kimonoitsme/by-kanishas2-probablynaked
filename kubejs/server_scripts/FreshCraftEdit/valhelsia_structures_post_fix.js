ServerEvents.recipes(event => {

  event.shapeless(
    Item.of(`valhelsia_structures:crimson_post`, 2), [
  'minecraft:crimson_stem',
  '#minecraft:axes'
    ])
    .damageIngredient('#minecraft:axes', 1)
    .id(`kubejs:crimson_post_with_axe`)

  event.shapeless(
    Item.of(`valhelsia_structures:warped_post`, 2), [
  'minecraft:warped_stem',
  '#minecraft:axes'
    ])
    .damageIngredient('#minecraft:axes', 1)
    .id(`kubejs:warped_post_with_axe`)

  event.shapeless(
    Item.of(`valhelsia_structures:lapidified_jungle_post`, 2), [
  'valhelsia_structures:lapidified_jungle_log',
  '#minecraft:axes'
    ])
    .damageIngredient('#minecraft:axes', 1)
    .id(`kubejs:lapidified_jungle_post_with_axe`)



  event.shapeless(
    Item.of(`valhelsia_structures:stripped_crimson_post`, 2), [
  'minecraft:stripped_crimson_stem',
  '#minecraft:axes'
    ])
    .damageIngredient('#minecraft:axes', 1)
    .id(`kubejs:stripped_crimson_post_with_axe`)

  event.shapeless(
    Item.of(`valhelsia_structures:stripped_warped_post`, 2), [
  'minecraft:stripped_warped_stem',
  '#minecraft:axes'
    ])
    .damageIngredient('#minecraft:axes', 1)
    .id(`kubejs:stripped_warped_post_with_axe`)

  

  event.shapeless(
    Item.of(`valhelsia_structures:cut_crimson_post`, 4), [
  'valhelsia_structures:crimson_post',
  '#minecraft:axes'
    ])
    .damageIngredient('#minecraft:axes', 1)
    .id(`kubejs:cut_crimson_post_with_axe`)

  event.shapeless(
    Item.of(`valhelsia_structures:cut_warped_post`, 4), [
  'valhelsia_structures:warped_post',
  '#minecraft:axes'
    ])
    .damageIngredient('#minecraft:axes', 1)
    .id(`kubejs:cut_warped_post_with_axe`)

  event.shapeless(
    Item.of(`valhelsia_structures:cut_lapidified_jungle_post`, 4), [
  'valhelsia_structures:lapidified_jungle_post',
  '#minecraft:axes'
    ])
    .damageIngredient('#minecraft:axes', 1)
    .id(`kubejs:cut_lapidified_jungle_with_axe`)



  event.shapeless(
    Item.of(`valhelsia_structures:cut_stripped_crimson_post`, 4), [
  'valhelsia_structures:stripped_crimson_post',
  '#minecraft:axes'
    ])
    .damageIngredient('#minecraft:axes', 1)
    .id(`kubejs:cut_stripped_crimson_post_with_axe`)

  event.shapeless(
    Item.of(`valhelsia_structures:cut_stripped_warped_post`, 4), [
  'valhelsia_structures:stripped_warped_post',
  '#minecraft:axes'
    ])
    .damageIngredient('#minecraft:axes', 1)
    .id(`kubejs:cut_stripped_warped_post_with_axe`)


  const cut_stripped_woods = [
    'oak',
    'spruce',
    'birch',
    'jungle',
    'acacia',
    'dark_oak',
    'mangrove'
  ]

  cut_stripped_woods.forEach(cut_stripped_wood => {
    event.shapeless(
        Item.of(`valhelsia_structures:cut_stripped_${cut_stripped_wood}_post`, 4), [
  `valhelsia_structures:stripped_${cut_stripped_wood}_post`,
  '#minecraft:axes'
    ])
    .damageIngredient('#minecraft:axes', 1)
    .id(`kubejs:cut_stripped_${cut_stripped_wood}_post_with_axes`)
  });



  const cut_woods = [
    'oak',
    'spruce',
    'birch',
    'jungle',
    'acacia',
    'dark_oak',
    'mangrove'
  ]

  cut_woods.forEach(cut_wood => {
    event.shapeless(
        Item.of(`valhelsia_structures:cut_${cut_wood}_post`, 4), [
  `valhelsia_structures:${cut_wood}_post`,
  '#minecraft:axes'
    ])
    .damageIngredient('#minecraft:axes', 1)
    .id(`kubejs:cut_${cut_wood}_post_with_axes`)
  });



  const stripped_woods = [
    'oak',
    'spruce',
    'birch',
    'jungle',
    'acacia',
    'dark_oak',
    'mangrove'
  ]

  stripped_woods.forEach(stripped_wood => {
    event.shapeless(
        Item.of(`valhelsia_structures:stripped_${stripped_wood}_post`, 2), [
  `minecraft:stripped_${stripped_wood}_log`,
  '#minecraft:axes'
    ])
    .damageIngredient('#minecraft:axes', 1)
    .id(`kubejs:stripped_${stripped_wood}_post_with_axes`)
  });



  const woods = [
    'oak',
    'spruce',
    'birch',
    'jungle',
    'acacia',
    'dark_oak',
    'mangrove'
  ]

  woods.forEach(wood => {
    event.shapeless(
        Item.of(`valhelsia_structures:${wood}_post`, 2), [
  `minecraft:${wood}_log`,
  '#minecraft:axes'
    ])
    .damageIngredient('#minecraft:axes', 1)
    .id(`kubejs:${wood}_post_with_axe`)
  });
});