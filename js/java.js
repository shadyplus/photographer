$(document).ready(function(){
    // $(".pho ").find("img").on("mouseenter",function(){
    //     $(".poiu").show();
    // });
    // $(".pho ").find("img").on("mouseleave",function(){
    //     $(".poiu").hide();
    // });
    // $(".poiu").on("mouseenter",function(){
    //     $(".poiu").show();
    // });
    // $(".container").find(".btn4").on('click',function(){
    //     $("i").css({Transform : 'rotate (60deg)'});
    //   }); 
    
        var navbar = $('.main').find('.bar');
        
        $(window).scroll(function(){
            if($(window).scrollTop() >= 40){
                navbar.addClass('fix');
            } else {
                navbar.removeClass('fix');
            }
        });

       
    

  
}); 