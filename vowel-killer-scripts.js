$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    $("#userSentence").hide();
    var converted = $("#unconverted").val().toLowerCase().split("");
    var vowels = ["a", "e", "i", "o", "u"];
    var phrase = []
      for (var letter = 0; letter < converted.length; letter +=1) {
        for (var i = 0; i <vowels.length; i ++) {
          if (vowels[i] === converted[letter]) {
            phrase.push("-");
            letter ++
            index = 0;
          }
        }
        phrase.push(converted[letter]);
      }
      phrase.join("");
      $("#output").append(phrase);
      console.log(phrase);
  });
});
