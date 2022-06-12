function canMakeRecipe (fridgeItems, recipesMap, recipe) {
  if (fridgeItems.length === 0) return false; 

  if (!recipesMap.has(recipe)) return false; //make sure you wrap it for readability 

  // const items = recipesMap.get(recipe); //[{name: sugar, amount: 2}, {name: banana, amount: 2}, {name: apple, amount: 3}]
  //compare it to itemsList

  const recipeItems = recipesMap.get(recipe); //array  
  const fridgeItemsMap = itemsMap(fridgeItems);

  for (const { name, value } of recipeItems) {
    if (!fridgeItemsMap.has(name) || fridgeItemsMap.get(name) < value) {
      return false;
    }
  }

  return true;

}


const itemsMap = (items) => {
  const itemsMap = new Map();

  items.forEach(item => {
    itemsMap.set(item.name, item.value);
  })
d
  return itemsMap;
}

const recipes = new Map();
recipes.set('chicken noodle soup', [{name: 'peanut', value: 3}, {name: 'butter', value: 4}, {name: 'jelly', value: 1}])
console.log(canMakeRecipe([{name: 'peanut', value: 3}, {name: 'butter', value: 3}, {name: 'jelly', value: 1}],recipes, 'chicken noodle soup')); //t 

console.log(canMakeRecipe([{name: 'peanut', value: 3}, {name: 'butter', value: 4}, {name: 'jelly', value: 1}],recipes, 'chicken noodle soup')); //f
