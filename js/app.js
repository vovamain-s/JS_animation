$('.spoiler').hide();
$('.spoiler2').hide();

$('.spoilerButton').on('click',function(){
   $('.spoilerButton').hide();
   $('.spoiler').fadeIn(2000);
});

$('.spoiler').on('click',function(){
   $('.spoiler').hide();
   $('.spoiler2').fadeIn(2000);
});