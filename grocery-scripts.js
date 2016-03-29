$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

  var inputs = ["item1", "item2", "item3", "item4", "item5"];

  var groceries = inputs.map(function(input) {
    return $("#" + input).val().toUpperCase();
  });

  groceries.sort();
  groceries.forEach(function(grocery) {
    if (grocery) {
      $("#sorted").append("<li>" + grocery + "</li>")
    }
    });
  });
});
