(function(window) {
 var speakWord = "Good Bye";
 var speakGoodBye = {};


 speakGoodBye.speak = function(name) {
   console.log(speakWord + " " + name);
 };


 window.speakGoodBye = speakGoodBye;


})(window);
