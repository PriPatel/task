$(document).ready(function(){
     $(".button").click(function(){
         $.ajax({url: "https://api.github.com/zen", success: function(result){
             $("#div1").html("Buddy. " + result);
         }});
     });
 });


