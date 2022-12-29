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

//news nav bar
$(function(){

    $(".navbar > ul > li:nth-of-type(1)").click(function(){
        $(".newsOne").show();
        $(".newsTwo").hide();
        $(".navbar > ul > li:nth-of-type(2)").css("background","#C850C0").css("color","#fff")
        $(".navbar > ul > li:nth-of-type(3)").css("background","#f8f9fa").css("color","#8a8a8a")
        $(window).scrollTop(100);
    });
    
    $(".navbar > ul > li:nth-of-type(2)").click(function(){
        $(".newsOne").show();
        $(".newsTwo").hide();
        $(".navbar > ul > li:nth-of-type(2)").css("background","#C850C0").css("color","#fff")
        $(".navbar > ul > li:nth-of-type(3)").css("background","#f8f9fa").css("color","#8a8a8a")
        $(window).scrollTop(100);
    });

    $(".navbar > ul > li:nth-of-type(3)").click(function(){
        $(".newsOne").hide();
        $(".newsTwo").show();
        $(".navbar > ul > li:nth-of-type(3)").css("background","#C850C0").css("color","#fff")
        $(".navbar > ul > li:nth-of-type(2)").css("background","#f8f9fa").css("color","#8a8a8a")
        $(window).scrollTop(100);
    });

    $(".navbar > ul > li:nth-of-type(4)").click(function(){
        $(".newsOne").hide();
        $(".newsTwo").show();
        $(".navbar > ul > li:nth-of-type(3)").css("background","#C850C0").css("color","#fff")
        $(".navbar > ul > li:nth-of-type(2)").css("background","#f8f9fa").css("color","#8a8a8a")
        $(window).scrollTop(100);
    });
});

$(window).scroll(function(){
    if($(this).scrollTop() > 300){
        $("#scrollup").show();
    }else{
        $("#scrollup").hide();
    }
});

$(document).ready(function(){
    $('.fa-chevron-up').on('click',function(event){
        if (this.hash !==""){
            event.preventDefault();
            var hash=this.hash;
            $('html, body').animate({scrollTop:0},400,function(){
                window.location.hash = hash;
            });
        }
    });
    });