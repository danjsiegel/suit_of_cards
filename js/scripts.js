var ranks = ["ace of ", "2 of ", "3 of ", "4 of ", "5 of ", "6 of ", "7 of ", "8 of ", "9 of ", "10 of ", "jack of ", "queen of ", "king of "];
var suits = ["Hearts", "Spades", "Clubs", "Diamonds"];
$(document).ready(function() {
  $("button").click(function() {
    var suit = $(this).attr('id');
    for (var i=0; i < ranks.length; i +=1) {
        for (var j=0; j < suit.length; j +=1) {
            var display = (ranks[i] + suit); };
    }
    $("#suit" + "1")document.write(display)
  });
});
