$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var inputs = ["item1", "item2", "item3", "item4", "item5"];

    var groceries = inputs.map(function(input) {
    return $("#" + input).val().toUpperCase();
    });

    groceries.sort();
    for (inputs = 0; inputs <= 4; inputs += 1) {
    $("#sorted").append("<li>" + groceries[inputs] + "</li>");
    }
  });
});
