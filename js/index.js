// 햄버거 nav
$(document).ready(function(){
    $('.small i:nth-of-type(1)').click(function(){
        $('#myNav').css('width','100%');
    })
    $('.closebtn').click(function(){
        $('#myNav').css('width','0');
    });
});

//slide nav
$(function(){
    $('nav').mouseenter(function(){
        $('.navlist').slideDown();
        $('.navlist > div > ul > li > div > a').css('color','black');
        $('.small > nav > ul > li > a').css('color','black');
        $('.small > i').css('color','black');

    });

     $('nav').mouseleave(function(){
        $('.navlist').slideUp();
        $('.navlist > div > ul > li > div > a').css('color','#fff');
        $('.small > nav > ul > li > a').css('color','#fff');
        $('.small > i').css('color','#fff');
    });
});
//최신음악
$(function(){
    $('.selectsong1').click(function(){
        $('.song1').show();
        $('.song2').hide();
        $('.song3').hide();
    });

    $('.selectsong2').click(function(){
        $('.song1').hide();
        $('.song2').show();
        $('.song3').hide();
    });

    $('.selectsong3').click(function(){
        $('.song1').hide();
        $('.song2').hide();
        $('.song3').show();
    });
});

// 앨범슬라이드

$(function () {
    $('#pre').click(function () {
        $('.slide li:last').prependTo('.slide');
        $('.slide').css({ marginLeft: -400 });
        $('.slide').stop().animate({ marginLeft: 0 }, 800);
    });

    $('#next').click(function () {
        $('.slide').stop().animate({ marginLeft: -400 }, 800, function () {
            $('.slide li:first').appendTo('.slide');
            $('.slide').css({ marginLeft: 0 });
        });
    });

});