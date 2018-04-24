function calculateDrinks() {
  // 1. Store inputs as variables here:
  var currentAge = document.querySelector('#current-age').value;
  var maxAge = document.querySelector('#max-age').value;
  var favDrink = document.querySelector('#fav-drink').value;
  var numPerDay = document.querySelector('#num-per-day').value;

  // 2. Calculate drinksLeft
  // var drinksLeft = document.querySelector('#drinksleft').value;
  var drinksleft = calculateDrinksLeft(maxAge, currentAge, numPerDay);


  // 3. Output result for user to see:
  document.querySelector('#total-num-of-drinks-output').innerHTML = drinksLeft;
  document.querySelector('#drink-output').innerHTML = favDrink;
}

function calcualteDrinksLeft(maxAge, currentAge, numPerDay){
  return (maxAge - currentAge) * 365 * numPerDay;
}

document.querySelector('#click-me').onclick = calculateDrinks;