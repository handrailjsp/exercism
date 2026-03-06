export function cookingStatus(status) {
  if (status === 0) {
    return 'Lasagna is done.';
  } else if (status === '' || status === null || status === undefined) {
    return 'You forgot to set the timer.';
  }
  return 'Not done, please wait.';
}

export function preparationTime(layers, cTime = 2) {
  
  return layers.length * cTime;
}

export function quantities(layers) {
  let noodles = 0;
  let sauce = 0;

  for (const count of layers) {
    if (count === 'noodles') {
      noodles += 50;
    } else if (count === 'sauce') {
      sauce += 0.2; 
    }
  } 

  return {
    noodles: noodles,
    sauce: sauce
  };
} 

export function addSecretIngredient(fList, oList) {
  
  const secretIngredient = fList[fList.length - 1];
  oList.push(secretIngredient);
} 

export function scaleRecipe(recipe, portions) {
  const scaled = { ...recipe };
  const factor = portions / 2;
  for (let ingredient in scaled) {
    scaled[ingredient] *= factor;
  }
  return scaled;
}
