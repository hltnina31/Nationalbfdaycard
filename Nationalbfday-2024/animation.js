$(document).ready(function(){
    $(".nationalbfday").mouseenter(function(){
        $(".card").stop().animate({
            top:"-120px"
        }, "slow");
        }).mouseleave(function(){
            $(".card").stop().animate({
                top:"5px"
        }, "slow");
    });
});