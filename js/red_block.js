$(document).ready(function(){
    var winHeight = $(window).height();
    var winWidth = $(window).width();

    $(".body").css("height", winHeight);

    $(".difficulty").click(function(){
        $(".game-menu").fadeOut(1000, ()=>{
            $(".block-game").fadeIn();
        });
    })

    $(".dif1").click(function(){
        $("#red-block").width("100px").height("100px");
    })
    $(".dif2").click(function(){
        $("#red-block").width("80px").height("80px");
    })
    $(".dif3").click(function(){
        $("#red-block").width("60px").height("60px");
    })
    $(".dif4").click(function(){
        $("#red-block").width("40px").height("40px");
    })    

    $("#red-block").on({
        mouseover: function(){
            var blockSize = $("#red-block").width();
            $("#red-block-container p").hide();
            let locationX = String(getRandomInt(1,winWidth - blockSize)) + "px"
            let locationY = String(getRandomInt(1,winHeight - blockSize)) + "px"
            $(".red-block-container2").animate({left: locationX,top: locationY});
        },
        click: function(){
            $(".block-game").hide();
            $(".game-win").fadeIn(1000, function(){
                setTimeout(() => {$("#btn-start-over, #btn-exit").fadeIn(1000)}, 1000)
            })
        }
    })

    $("#btn-start-over").click(function(){
        location.reload();
    })
})

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}