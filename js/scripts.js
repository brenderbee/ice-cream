$(document).ready(function(){
  var flavors = ["chocolate", "vanilla", "strawberry", "mint chocolate chip", "lavender", "rocky road", "cookies 'n' cream", "coffee"];
  flavors.forEach(function(flavor){
  $("#output").append("<li>" + flavor + "</li>");
  });
});
