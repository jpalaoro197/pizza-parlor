describe: pizza()

test: it should add 3 properties for toppings 1 property for size, and 1 property for cheese.
code: const mypizza = new pizza("large", "chicken","olive", "red pepper", "cheese")
output: Pizza {size: 'large', topping1: 'chicken', topping2: 'olive', topping3: 'red pepper', cheese: 'cheese'}


describe: addPizza/asignId();

test: it should add pizza object and asignId in order object.
code:
let order = new Order();
let mypizza = new Pizza("large", "chicken","olive", "red pepper", "cheese");
let mypizza2 = new Pizza("large", "chicken","olive", "red pepper", "cheese");
order.addPizza(mypizza);
order.addPizza(mypizza2);
order.pizzas;
output: {1: Pizza, 2: Pizza}


describe: findPizza(id);
test: it should allow us to find pizza by id.

code:
let order = new Order();
let mypizza = new Pizza("large", "chicken","olive", "red pepper", "cheese");
let mypizza2 = new Pizza("large", "chicken","olive", "red pepper", "cheese");
order.addPizza(mypizza);
order.addPizza(mypizza2);
order.findPizza(2);

output:
Pizza {size: 'large', cheese: 'chicken', topping1: 'olive', topping2: 'red pepper', topping3: 'cheese', id: 2)