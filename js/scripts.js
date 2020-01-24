// User Interface

$(document).ready(function() {

    $("#pigLatin").submit(function(event) {
        event.preventDefault();
        //Take input string from user and convert it to string
        var text =  $("input#text").val().toString();
        //Convert stirng to array
        var array = text.split(" ");
        
        for (var i =0; i<array.length;i++) {
            array[i] = pigLatin(array[i]);
        }
        var finalResult = array.toString();
        //Remove "," form the new string
        finalResult = finalResult.replace(/,/g , ' ');
        //Show user the result
        $("#result").text(finalResult);
        
        $("#findout").show();

    });
    
    // Converting text as per Pig Latin Requirement
    function pigLatin(text) {
        //Calling vowelCheck function to see if 0th letter is a vowel
        if (vowelCheck(text.charAt(0))===true) {
            text = text.concat("way");      
        } //Check if word starts with 'qu'
        else if (text.length>=2 && text.charAt(0) ==="q" && text.charAt(1)==="u") {
            var text1 = text.substring(0,2);
            var text2 = text.substring(2,text.length);
            text = text2.concat(text1);
        } //Check if word is a constant
        else {
            for(var i=1; i<text.length; i++) {
                if (vowelCheck(text.charAt(i))===true || text.charAt(i)=== "y") {
                    var text1 = text.substring(0,i);
                    var text2 = text.substring(i,text.length);
                    text = text2.concat(text1).concat("ay");
                    break;
                }
            }
        }
        return text;
    }

    // Function to check if a characeter is a vowel or not.
    function vowelCheck(character) {
        if (character.toLowerCase() === "a" 
        || character.toLowerCase() === "e" 
        || character.toLowerCase() === "i" 
        || character.toLowerCase() === "o" 
        || character.toLowerCase() ==="u" ) {
            return true;
        } else {
            return false;
        }
    }
  });



