(function(window) {
 var speakWord = "Hello";
 var speakHello = {};


 speakHello.speak = function(name) {
   console.log(speakWord + " " + name);
 };


 window.speakHello = speakHello;


})(window);
