// User Interface

$(document).ready(function() {
    $("#pigLatin").submit(function(event) {
        event.preventDefault();
        // var vowel = ["a","e","i","o","u"];
        var word1 = "way";
        var text = $("input#text").val();
        console.log(1)
        
        if (text.charAt(0) === "a" || "e" || "i" || "o" || "u") {
            console.log(2)
            text= text.concat(word1);
            console.log(3)
            alert(text);
        }
        
        

    });

});