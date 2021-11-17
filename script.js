$(document).ready(function() {
    
    var blocks = $('.block').length;
    console.log(blocks);
    var altura = $('.block').height();
    console.log(altura);
    altura *= blocks;
    $('.mockup').css('height', altura); 
    
    var altura2 = $('.block2').height();
    $('.mockup2').css('height', altura2);
    // $('.mockup2').addClass('fundo-transparente');
    // console.log($('.mockup2'))
})
    

