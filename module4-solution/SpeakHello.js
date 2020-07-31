
(function(window){var speakWord = "Hello";
var helloSpeaker ={};
helloSpeaker.speak = function (personname){
	console.log(speakWord+ " "+ personname);
};
window.helloSpeaker= helloSpeaker;

})(window);