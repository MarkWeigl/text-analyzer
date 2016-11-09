$(document).ready(function(){
	$("#myform").submit(function(event){
		event.preventDefault();
		var words;
		words=$("#user-text").val().toLowerCase().split(" ");
		console.log(words);
		$("#wordCount").text(words.length);
		uniqueWordCount(words);
		$("dl").removeClass("hidden");
	});
});

function uniqueWordCount(words) {
  	var uniqueWords = {};
  	var totalCharacters = 0;
  	for (var i = 0; i < words.length; i++) {
    	if (words[i] in uniqueWords) {
       		uniqueWords[words[i]]++;
    	}
    	else {
      		uniqueWords[words[i]]=1;
    	}
 		totalCharacters += words[i].length;
 	}
 	$("#avgWordLength").text(totalCharacters / words.length);
 	$("#uniqueWordCount").text(parseInt(Object.keys(uniqueWords).length));
 	
}
