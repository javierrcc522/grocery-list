$(document).ready(function() {
  $("#groceryForm").submit(function(event) {
    event.preventDefault();

    var groceries = ["groceryList1", "groceryList2", "groceryList3", "groceryList4"]

    var capitalGroceries = groceries.map(function(grocery) {
      var userGrocery = ($("#" + grocery).val()).toUpperCase();

      return userGrocery;
    });

    capitalGroceries.sort();

    capitalGroceries.forEach(function(grocery) {
    $("#results").append("<li>" + grocery + "</li>");
    });

    $("#results").show(800);
    $("#groceryForm").hide(800);
  });
});
