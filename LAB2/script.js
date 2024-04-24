(function() {
  var names = ["John", "Jane", "Jack", "Jill", "James", "Alice", "Bob"];

  console.log("Перший варіант");
  for (var i = 0; i < names.length; i++) {
      var name = names[i];
      var firstLetter = name.charAt(0).toLowerCase();

      if (firstLetter === "j") {
          speakHello.speak(name);
      } else {
          speakGoodBye.speak(name);
      }
  }
  console.log("мій варінт")
  for(var j=0; j<names.length; j++){
    var name=names[j];
    var lastLetter =name.charAt(name.length - 1);
    if(lastLetter==="e"){
        speakHello.speak(name);
    }
    else{
        speakGoodBye.speak(name)
    }
  }
})();


