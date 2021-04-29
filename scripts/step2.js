
var coffeeChoice = window.localStorage.getItem("coffeeChoice");
console.log(coffeeChoice);


var i;
var checkboxes = document.querySelectorAll('input[type = checkbox]');
var ingredientsArray = [];


function ingredientsSelected(inID) {
  var selectedIngredient = document.getElementById(inID);
  if (selectedIngredient.checked) {
    console.log("checked in: " + inID);
    ingredientsArray.push(inID);
    console.log("(checked)in array: ", ingredientsArray);
  }
  else {
    let indexOfUncheckedIngredient = ingredientsArray.indexOf(inID);
    ingredientsArray.splice(indexOfUncheckedIngredient, 1); 
    console.log("(unchecked)in array: ", ingredientsArray);
  }
  window.localStorage.setItem("ingredientsChoice", JSON.stringify(ingredientsArray));
}
