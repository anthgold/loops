$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var unconverted = $("#unconverted").val();
    // todo: write input for var unconverted
    var vowels = ["a", "e", "i", "o", "u"];
    var phrase = unconverted.toLowerCase();

    for (var i = 0; i <vowels.length; i += 1) {
      var loops = phrase.length;
      for (p = 0; p < loops; p++) {
          if (vowels[i] == phrase.charAt(p)) {
            string = phrase.slice(0, p).concat(phrase.slice(p + 1, loops));
            // todo: rewrite this to replace and not just delete vowels
            p -= 1;  // accounts for missing letter
            loops -= 1;  // string is now one character shorter
        }
      }
    }
    alert(phrase);
  });
});
