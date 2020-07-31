
(function(window){
var speakWord = "Good Bye";
var byeSpeaker ={};
byeSpeaker.speak = function (personname){
	console.log(speakWord+ " "+ personname);
};
window.byeSpeaker= byeSpeaker;

})(window);
