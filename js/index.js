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

// $(function () {
//     $('#pre').click(function () {
//         $('.slide li:last').prependTo('.slide');
//         $('.slide').css({ marginLeft: -400 });
//         $('.slide').stop().animate({ marginLeft: 0 }, 800);
//     });

//     $('#next').click(function () {
//         $('.slide').stop().animate({ marginLeft: -400 }, 800, function () {
//             $('.slide li:first').appendTo('.slide');
//             $('.slide').css({ marginLeft: 0 });
//         });
//     });

// });
function detectMediaSize(){
if(window.matchMedia('(max-width: 599px)').matches){
    $(function () {
        $('#pre').click(function () {
            $('.slide li:last').prependTo('.slide');
            $('.slide').css({ marginLeft: '-95vw' });
            $('.slide').stop().animate({ marginLeft: 0 }, 800);
        });
        $('#next').click(function () {
            $('.slide').stop().animate({ marginLeft: '-95vw' }, 800, function () {
                $('.slide li:first').appendTo('.slide');
                $('.slide').css({ marginLeft: 0 });
            });
        });
    });
}else if(window.matchMedia('(min-width: 600px) and (max-width: 1099px)').matches){
    $(function () {
        $('#pre').click(function () {
            $('.slide li:last').prependTo('.slide');
            $('.slide').css({ marginLeft: '-50vw' });
            $('.slide').stop().animate({ marginLeft: 0 }, 800);
        });
        $('#next').click(function () {
            $('.slide').stop().animate({ marginLeft: '-50vw' }, 800, function () {
                $('.slide li:first').appendTo('.slide');
                $('.slide').css({ marginLeft: 0 });
            });
        });
    });
}else if(window.matchMedia('(min-width: 1100px) and (max-width: 1599px)').matches){
    $(function () {
        $('#pre').click(function () {
            $('.slide li:last').prependTo('.slide');
            $('.slide').css({ marginLeft: '-33vw' });
            $('.slide').stop().animate({ marginLeft: 0 }, 800);
        });
        $('#next').click(function () {
            $('.slide').stop().animate({ marginLeft: '-33vw' }, 800, function () {
                $('.slide li:first').appendTo('.slide');
                $('.slide').css({ marginLeft: 0 });
            });
        });
    });
}else{
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
}
}
window.addEventListener('resize',detectMediaSize,false);
detectMediaSize();