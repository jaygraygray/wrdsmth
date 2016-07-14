// API KEY: 7dJlpwmm7Rc0h73Zbmpiwcls9xBoghGv
// Consumer Secret:  sApwRrVIWTtYuPKD



/*
$(function() {

  $("button").click(function() {
  
    $.get("http://api.pearson.com/v2/dictionaries/entries?headword=flood", function(data, status) {
      alert("Data: " + data + "\nStatus: " + status);
    });
  });
});*/



$(document).ready(function(){

  
    $("#button").click(function(){
      
      var word = document.getElementById("word").value;
    console.log(word);
      
      
        $.get("http://api.pearson.com/v2/dictionaries/entries?headword=" + word + "", function(data, status){
          console.log(data);
          
          //console.log(data.results);
         // console.log(data.results[0])
          
          
          
          
        });
    });
});