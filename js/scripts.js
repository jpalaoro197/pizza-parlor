function Order() {
  this.pizzas = {};
  this.currentId = 0;
  this.total = 0;
}
Order.prototype.addPizza = function(Pizza) {
  Pizza.id = this.assignId();
  this.pizzas[Pizza.id] = Pizza;
};
Order.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
};

Order.prototype.findPizza = function(id) {
  if(this.pizzas[id] !== undefined) {
    return this.pizzas[id];
  }
  return false
};

function Pizza(size, cheese, topping1, topping2, topping3 ) {
  this.size = size;
  this.cheese = cheese
  this.topping1 = topping1
  this.topping2 = topping2
  this.topping3 = topping3
  this.value = 0;
}

Pizza.prototype.topPricing = function() {
  if(this.size === "kiddo" ) {
    this.value += 5;
  } else if(this.size === "small" ) {
    this.value += 7;
  } else if(this.size === "medium" ) {
    this.value += 9;
  } else if(this.size === "large" ) {
    this.value += 11;
  } else if(this.size === "family") {
    this.value += 13;
  }
}



//user
let order = new Order();

function displayPizzaDetails(pizzaToDisplay) {
  let toppingList = $("ul#your-order");
  let htmlForPizzaInfo = "";
  Object.keys(pizzaToDisplay.pizzas).forEach(function(key) {
    const pizza = pizzaToDisplay.findPizza(key);
    htmlForPizzaInfo += "<li id=" + pizza.id + ">" + pizza.size + " " + pizza.cheese + " " + pizza.topping1 + " " + pizza.topping2 + " " + pizza.topping2 + " " + pizza.topping3 + "</li>";
  });
  toppingList.html(htmlForPizzaInfo);
}

$(document).ready(function() {
  $("form#build-pizza").submit(function(event) {
    event.preventDefault();
    const selectedSize = $("select#size-select").val();
    const selectedCheese = $("select#cheese-select").val();
    const selectedTop1 = $("select#topping1-select").val();
    const selectedTop2 = $("select#topping2-select").val();
    const selectedTop3 = $("select#topping3-select").val();
    let newPizza = new Pizza(selectedSize, selectedCheese, selectedTop1, selectedTop2, selectedTop3);
    order.addPizza(newPizza);
    newPizza.topPricing();
    displayPizzaDetails(order);

    $("#ordertotal").html(" $" + newPizza.value + ".99 ");
  });
});