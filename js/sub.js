// 햄버거 nav
$(document).ready(function(){
    $('.small i:nth-of-type(1)').click(function(){
        $('#myNav').css('width','100%');
        $('.overlayalbum').css('transform','matrix(1,0,0,1,-355,0)');
        $('.overlayalbum').css('transition-delay','0.4s')
    })
    $('.closebtn').click(function(){
        $('#myNav').css('width','0');
        $('.overlayalbum').css('transform','matrix(1,0,0,1,0,0)');
        $('.overlayalbum').css('transition-delay','0s')
    });
});

//slide nav
$(function(){
    $('nav').mouseenter(function(){
        $('nav > ul > li > div').stop().slideDown();
        $('.small > nav > ul > li > a').css('color','black');
        $('.small > i').css('color','black');
        $('.navdown').css('height','300px');
    });

     $('nav').mouseleave(function(){
        $('.navlist > div > ul > li > div > a').css('color','#fff');
        $('.small > nav > ul > li > a').css('color','#fff');
        $('.small > i').css('color','#fff');
        $('.navdown').css('height','0');
        $('nav > ul > li > div').stop().slideUp("fast");
    });
});