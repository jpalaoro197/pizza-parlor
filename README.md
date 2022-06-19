
# _pizza-parlor_

#### By _**Jacob Palaoro**_

#### _Description_

This is my Epicodus week 4 project that uses objects and prototypes to create a website that will take your order and present you your choices and the price of the order.

## Technologies Used

* _CSS_
* _Javascript_
* _HTML_
* _jQuery_
* _Bootstrap_
* _Git_
* _Markdown_
* _GitHub_

## Setup/Installation Requirements

1. Clone this repository to your desktop.
2. Navigate to the top level of directory.
3. Open *index.html* in your browser.

## Known Bugs

* doesn't let you order more than one pizza, I have it functioning to properly only let customer order one at a time, but I do have the objects set up for a total order for more pizzas. I just couldn't figure out a prototype to add pizza values to a total in the order object.


## License

_<p><a href="LICENSE.txt">MIT</a></p>_

Copyright (c) 2022 Jacob Palaoro

describe: Order();
test: order doesn't really require a test all it is is an empty object that i will use to pass pizza objects into.

describe: pizza()

test: it should add 3 properties for toppings 1 property for size, and 1 property for cheese.
code: const mypizza = new pizza("large", "chicken","olive", "red pepper", "cheese")
output: Pizza {size: 'large', topping1: 'chicken', topping2: 'olive', topping3: 'red pepper', cheese: 'cheese'}


describe: order.addPizza/asignId();

test: it should add pizza object and asignId in pizzas property within order object.
code:
let order = new Order();
let mypizza = new Pizza("large", "chicken","olive", "red pepper", "cheese");
let mypizza2 = new Pizza("large", "chicken","olive", "red pepper", "cheese");
order.addPizza(mypizza);
order.addPizza(mypizza2);
order.pizzas;
output: {1: Pizza, 2: Pizza}


describe: order.findPizza(id);
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

describe: Pizza.sizePricing();

test: if this.size is equal to the string "kiddo" this.value will equal 5.
code: newPizza = new Pizza("kiddo", "cheese", "topping1", "topping2", "topping3" );
newPizza;
expected output: Pizza {size: 'kiddo', cheese: 'cheese', topping1: 'topping1', topping2: 'topping2', topping3: 'topping3', value: 'kiddo'}


