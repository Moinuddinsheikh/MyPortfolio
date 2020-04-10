$(window).ready(function() {

    $('#splash-logo').toggleClass('popanim');

    setTimeout(function(){
        $('#splash').fadeOut();
        setTimeout(function(){ 
            $('html').css('overflow','unset');
            setTimeout(function(){ 
                $('#intro-name').css('animation','name-anim 3s linear forwards');
             
            },200);
        },500);
    },1600);
    
    $('#coverpage-list a').click(function(e){     
        e.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
    });
     
});
