// User Interface

$(document).ready(function() {
    $("#pigLatin").submit(function(event) {
        event.preventDefault();
        var vowel = "a";
        var word1 = "way";
        var text = $("input#text").val();
        
        if (text.charAt(0) === vowel) {
            
            text= text.concat(word1);
            alert(text);
        }
        
        

    });

});