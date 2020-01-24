// User Interface

$(document).ready(function() {

    $("#pigLatin").submit(function(event) {
        event.preventDefault();
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
            } else if (text.length>=2 && text.charAt(0) ==="q" && text.charAt(1)==="u") {
                var text1 = text.substring(0,2);
                var text2 = text.substring(2,text.length);
                text = text2.concat(text1);
            }
             else {
                for(var i=1; i<text.length; i++) {
                    if (vowelCheck(text.charAt(i))===true || text.charAt(i)=== "y") {
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



