function quoteGenerate(){
  var quotes = [ "People do not decide their future, they decide their habits and their habits decide their future <span class='quotee'>-F. M.  Alexander</span>" , "We are kept from our goal, not by obstacles but by a clear path to a lesser goal <span class='quotee'>- Robert Brault</span>" , "Succes is simple. Do what's right, the right way, at the right time <span class='quotee'> - Arnold H. Glasow</span>" , "Life isn't about finding yourself, life is about creating yourself. <span class='quotee'> - george barnard shaw</span>" , "Planning is bringing the future to the present so that you do something about it now. <span class='quotee'>- Alan lakein</span>" , "Nobody who ever gave his best regretted it <span class='quotee'>- george halas</span>" , "Focus is a matter of deciding what things you're not going to do. <span class='quotee'>- john carmack</span>"];
  var randomQuote = quotes[
    Math.floor(Math.random() * quotes.length)
    ];
  document.getElementById("quote").innerHTML = randomQuote;
}