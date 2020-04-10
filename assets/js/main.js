$(window).ready(function() {

    $('#splash-logo').toggleClass('popanim');

    setTimeout(function(){
        $('#splash').fadeOut();
        setTimeout(function(){ 
            $('html').css('overflow-y','unset');
        },500);
    },1600);
    
    $('#coverpage-list a').click(function(e){     
        e.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
    });
     
});
