(function() {
 var names = ["John", "Jane", "Jack", "Jill", "James", "Alice", "Bob"];


 for (var i = 0; i < names.length; i++) {
     var name = names[i];
     var firstLetter = name.charAt(0).toLowerCase();


     if (firstLetter === "j") {
         speakHello.speak(name);
     } else {
         speakGoodBye.speak(name);
     }
 }
})();
