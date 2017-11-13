$(function(){

$('.about-me_btn ,.arrow_down').on('click', function(e){
  $('html,body').stop().animate({ scrollTop: $('#about-me_anc').offset().top }, 1000);
  e.preventDefault();
});

});
$(function(){

$('.skills_btn').on('click', function(e){
  $('html,body').stop().animate({ scrollTop: $('#skills_anc').offset().top }, 1000);
  e.preventDefault();
});

});
$(function(){

$('.works_btn').on('click', function(e){
  $('html,body').stop().animate({ scrollTop: $('#works_anc').offset().top }, 1000);
  e.preventDefault();
});

});
$(function(){

$('.topbnt').on('click', function(e){
  $('html,body').stop().animate({ scrollTop: $('.header__bg').offset().top }, 1000);
  e.preventDefault();
});

});