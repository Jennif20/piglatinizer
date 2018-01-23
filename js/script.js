/*global $*/

// Pig Latin takes the first consonant (or consonant cluster) of an English 
// word, moves it to the end of the word and suffixes an ay, or if a word
// begins with a vowel you just add ay to the end. For example, pig becomes
// igpay, banana becomes ananabay, and aadvark becomes aadvarkay.
// CREATE THE FUNCTIONS BELOW

// Document Ready Function. All of your jQuery should go in here. 
$( document ).ready(function() {
  
  
  function ToPigLatin(word){
	var vowels = ["a","e","i","o","u"];
	var letter = word.slice(0,1);
	var letters = word.slice(0,2);
	var consonant = ["ch","th","sh","st"];
	var sentence2 = word.slice(1,word.length);
	var sentence3 = word.slice(2,word.length);
	
	if(vowels[0] === letter || 
	    vowels[1] === letter|| 
	    vowels[2] === letter|| 
	    vowels[3] === letter||
	    vowels[4] === letter){
            return word + "ay ";

	}
	else if(consonant[0] === letters || 
	        consonant[1] === letters ||
	        consonant[2] === letters ||
	        consonant[3] === letters){
	            return sentence3 + letters + "ay";
	}
	else{
	    
	    return sentence2 + letter + "ay ";   
	}
	
  }
  
  function sentenceToPigLatin(phrase){
     var sentence = phrase.split(' ');
     var newsentence = "";
     for(var a = 0; a < sentence.length; a++){
      newsentence = newsentence + ToPigLatin(sentence[a]);
     }
    return newsentence;
     
  }
  function ToEnglish(input){
      var sentence4 = input.slice(input.length - 2, input.length);
      var sentence5 = input.slice(input.length - 3, input.length);
      
  }
  console.log(ToEnglish("ellohay"));
  
  function backToEnglish(word2){
      var sentences = word2.split(' ');
      var NewSentence = ''
      
      
  }
  
  	$("#submit").click(function(){
  		var message = $("#text").val();
        var words = sentenceToPigLatin(message);
        $("#result").text(words);


  	});
    
    $("#submit2").click(function(){
        var latinMessage =$("#piglatin").val();
        $("#result").text();
    })
  
  
  
  
  	
});


// Create the wordToPigLatin function that takes a word as a parameter and returns a transfromed word. 






// Create the sentenceToPigLatin function that takes a sentence as a parameter
	//Loops through all the words in the sentence and transforms each word
	//It should return a transfromed sentance


