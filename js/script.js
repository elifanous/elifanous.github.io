$(document).ready(function(){
    $(".dropbtn, .dropdown-content").mouseenter(function(){
        $(".dropdown-content").slideDown();
    })
    $(".dropdown").mouseleave(function(){
        $(".dropdown-content").slideUp();
    })

    $('.main-footer').load("presets/footer.html")
    $(".main-header").load("presets/header.html")
})