function Order() {
  this.pizzas = {};
  this.currentId = 0;
}
Order.prototype.addPizza = function(Pizza) {
  Pizza.id = this.assignId();
  this.pizzas[Pizza.id] = Pizza;
};
Order.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
};
function Pizza(size, cheese, topping1, topping2, topping3 ) {
  this.size = size;
  this.cheese = cheese
  this.topping1 = topping1
  this.topping2 = topping2
  this.topping3 = topping3
}

//user
let addressBook = new AddressBook();

function displayPizzaDetails(pizzaToDisplay) {
  let toppingList = $("#your-pizza");
  let htmlForPizzaInfo = "";
  Object.keys(pizzaToDisplay.pizza).forEach(function(key) {
    const contact = addressBookToDisplay.findContact(key);
    htmlForContactInfo += "<li id=" + contact.id + ">" + contact.firstName + " " + contact.lastName + "</li>";
  });
  contactsList.html(htmlForContactInfo);
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
    $("#your-pizza").html(newPizza);
    console.log(newPizza);
  })
})