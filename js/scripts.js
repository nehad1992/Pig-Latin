// User Interface

$(document).ready(function() {

    $("#pigLatin").submit(function(event) {
        event.preventDefault();
        // var vowel = ["a","e","i","o","u"];
        // var word1 = "way";
        var text =  $("input#text").val().toString();
        var array = text.split(" ");
        

        for (var i =0; i<array.length;i++) {
            array[i] = pigLatin(array[i]);
        }
        var finalResult = array.toString();
        finalResult = finalResult.replace(/,/g , ' ');
        $("#result").text(finalResult);
        
        $("#findout").show();

        });
    

        function pigLatin(text) {
            if (vowelCheck(text.charAt(0))===true) {
                text = text.concat("way");      
            } else {
                for(var i=1; i<text.length; i++) {
                    if (vowelCheck(text.charAt(i))===true) {
                        var text1 = text.substring(0,i);
                        var text2 = text.substring(i,text.length);
                        var newtext = text2.concat(text1).concat("ay");
                        text = newtext;
                        break;
                    }
                }
            }
            return text;
        }

    function vowelCheck(character) {
        if (character.toLowerCase() === "a" 
        || character.toLowerCase() === "e" 
        || character.toLowerCase() === "i" 
        || character.toLowerCase() === "o" 
        || character.toLowerCase() ==="u" 
        ) {
            return true;
        } else {
            return false;
        }
    }

    
        
    
    
    
});



