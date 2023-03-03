$(function(){
  // $('.bg1').on('click', function(){
  //   $('.bg1').slideUp(1000);
  // });

  // $('.bg2').on('click', function(){
  //   $('.bg2').slideUp(1000);
  // });

  // $('.bg3').on('click', function(){
  //   $('.bg3').slideUp(1000);
  // });

  // $('.bg4').on('click', function(){
  //   $('.bg4').slideUp(1000);
  // });

// ↑↑↑こんなに書かなくてもよくなる↓
  $('.box1').on('click', function(){
    $(this).slideUp(1000);
  });

});