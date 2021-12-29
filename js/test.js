$(document).ready(function(){
    $("#output-button").on({
        mouseover: function(){
            $(this).html("GWA88S9WW14");  
        },
        mouseout: function(){
            $(this).html("Hover over this to reveal the code")
        }
    })

    $(".button-thing").click(function(){
        var chatInput = $(".chat").val();
        console.log(chatInput);
        var newChat = $("<p style='color: black'></p>").text(chatInput);
        $(".chat").before(newChat);
        $(".chat").val("");
    })
})