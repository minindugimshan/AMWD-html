$('#home-btn').click(function(){
    $('.home').show();
    $('.about').hide();
    $('.details').hide();
})

$('#about-btn').click(function(){
    $('.home').hide();
    $('.about').show();
    $('.details').hide();
})

$('#details-btn').click(function(){
    $('.home').hide();
    $('.about').hide();
    $('.details').show();
})


$(document).ready(function(){
    $('.home').show();
    $('.about').hide();
    $('.details').hide();
})    