
var coffeeDataDic = { "americano": [5,0,0], "cappuccino": [140,7,7], "coldBrew": [0,0,0], "cortado": [50,3,3],
"espresso": [5,0,0], "flatWhite": [140,7,7], "latte": [160,9,8], "macchiato": [120,6,6], "mocha": [210,9,8]}; 
var ingredientDataDic = {"almondMilk": [40,3.58,1.51], "whippedCream": [25,5,0], "wholeMilk": [146,7.93,7.86], "sugar": [16,0,0],
"ice": [0,0,0], "brownSugarSyrup": [18,4.76,4.76], "sweetFoam": [45,1.5,1.5],"vanillaSyrup": [35,0,0], "caramelSyrup": [50,0,0]}; 


var coffeeChoice = window.localStorage.getItem("coffeeChoice"); 
var ingredientChoice = JSON.parse(window.localStorage.getItem("ingredientsChoice")); 
var sumCoffeeStats = 0;

console.log("coffeeChoice: ", coffeeChoice);
console.log("ingredientsChoice: ", ingredientChoice); 


function calcTotalStats(coffee, ingredient) { 
    let sumCoffeeCalStats = coffeeDataDic[coffee].reduce(function(a, b){
        return a + b;
    }, 0);
    console.log("coffee sum cal stats: ",sumCoffeeCalStats);


    if (ingredient.length == 0) { 
        return sumCoffeeStats;
    }
    let sumIngredientStats = 0;

    for (let i = 0; i < ingredient.length; i++) { 
        let ingredientStats = ingredientDataDic[ingredient[i]];
        let sum = ingredientStats.reduce(function(a, b){
                return a + b;
        }, 0);
        sumIngredientStats += sum;
    }
    console.log("ingredient sum stats: ",sumIngredientStats);

    return sumCoffeeStats + sumIngredientStats;
}

function calcCalStats(coffee, ing) { 
    let coffeeCal = coffeeDataDic[coffee][0];
    let inCal = 0;
    if (ing.length == 0) { 
        return coffeeCal;
    }
    for (let i = 0; i < ing.length; i++) { 
        inCal += ingredientDataDic[ing[i]][0];
    }
    return coffeeCal + inCal;
}

function calcFatStats(coffee, ing) {
    let coffeeFat = coffeeDataDic[coffee][1];
    let inFat = 0;
    if (ing.length == 0) {
        return coffeeFat;
    }
    for (let i = 0; i < ing.length; i++) {
        inFat += ingredientDataDic[ing[i]][1];
    }
    return coffeeFat + inFat;
}

function calcProteinStats(coffee, ing) {
    let coffeeProtein = coffeeDataDic[coffee][2];
    let inProtein = 0;
    if (ing.length == 0) {
        return coffeeProtein;
    }
    for (let i = 0; i < ing.length; i++) {
        inProtein += ingredientDataDic[ing[i]][2];
    }
    return coffeeProtein + inProtein;
}


var displayCoffeeValues = "Coffee: " + coffeeChoice;
var displayIngredientValues = "Ingredient(s): "+ ingredientChoice;
var displayCalStats =  "Calorie: " + calcCalStats(coffeeChoice, ingredientChoice);  
var displayFatStats = "Fat: " + calcFatStats(coffeeChoice, ingredientChoice);
var displayProteinStats = "Protein: " + calcProteinStats(coffeeChoice, ingredientChoice);

           
document.getElementById("outputCoffeeValues").innerHTML = displayCoffeeValues;
document.getElementById("outputIngredientValues").innerHTML = displayIngredientValues;
document.getElementById("outputCalStats").innerHTML = displayCalStats;
document.getElementById("outputFatStats").innerHTML = displayFatStats;
document.getElementById("outputProteinStats").innerHTML = displayProteinStats;
