$(document).ready(function(){
    $('.small i:nth-of-type(1)').click(function(){
        $('#myNav').css('width','100%');
    })
    $('.closebtn').click(function(){
        $('#myNav').css('width','0');
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