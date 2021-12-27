$('.open-popup').click(function(e){
    e.preventDefault();
    document.getElementById('popup-text').innerHTML = "С наступающим ! Поднимаю бокал за вас !";
    document.getElementById('popup-img').src = 'celebrate.jpg';
    $('.popup-bg').fadeIn(600);
});
$('.close-popup').click(function(){
    $('.popup-bg').fadeOut(600);
});
