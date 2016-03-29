$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var unconverted = "A man, a plan, a canal, Panama";
    var vowels = ["a", "e", "i", "o", "u"];
    var phrase = unconverted.toLowerCase();

    for (var i = 0; i <vowels.length; i += 1) {
      var loops = string.length;
      for (p = 0; p < loops; p++) {
          if (vowel[i] == string.charAt(p)) {
            string = string.slice(0, p).concat(string.slice(p + 1, loops));
            p -= 1;  // accounts for missing letter
            loops -= 1;  // string is now one character shorter
        }
      }
    }

  });
});
