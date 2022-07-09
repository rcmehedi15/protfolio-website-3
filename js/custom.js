// Back To top here
$(function(){


$('.back-to-top').click(function(){
    $('html,body').animate({scrolllTop:0},1500);
    });

$(window).scroll(function(){
        var scrolling = $(this).scrollTop();
        if(scrolling > 150){
            $('.back-to-top').fadeIn(500);
        }
        else{
            $('.back-to-top').fadeOut(500);
        }
    });

});

