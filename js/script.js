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
	var sentence2 = word.slice(1,word.length);
	if(vowels[0] === letter || 
	    vowels[1] === letter|| 
	    vowels[2] === letter|| 
	    vowels[3] === letter||
	    vowels[4] === letter){
	        
	    	    return word + "ay ";

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
//  console.log(sentenceToPigLatin("Have a wonderful day human"));
  
  
  	$("#submit").click(function(){
  		 var message = $("#text").val();
        var words = sentenceToPigLatin(message);
        
	 $("#result").text(words);

  	 

  	});
  
  
  
  
  
  	
});


// Create the wordToPigLatin function that takes a word as a parameter and returns a transfromed word. 






// Create the sentenceToPigLatin function that takes a sentence as a parameter
	//Loops through all the words in the sentence and transforms each word
	//It should return a transfromed sentance


