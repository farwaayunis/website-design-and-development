$(document).ready(function(){
 
    $('.fa-bars').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle')
    });

    $(window).on('load scroll',function(){

        $('.fa-bars').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');
    });

   $(' .accordion-header ').click(function(){
$('.accordion .accordion-body').slideUp();
$(this).next('.accordion-body').slideDown();
    $('.accordion .accordion-header span').text('+');
    $(this).children('span').text('-');
   }); 
});