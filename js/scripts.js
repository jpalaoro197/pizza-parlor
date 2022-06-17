function Pizza(size, cheese, topping1, topping2, topping3 ) {
  this.size = size;
  this.cheese = cheese
  this.topping1 = topping1
  this.topping2 = topping2
  this.topping3 = topping3
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