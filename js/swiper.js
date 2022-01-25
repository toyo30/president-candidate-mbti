window.swiper == null;

function startSwiper() {
    if(window.swiper != null){
        window.swiper.destroy();
    }
   
    window.swiper = new Swiper(".mySwiper", {
        pagination: {
        loop: true,
        el: ".swiper-pagination",
        clickable: true,
        }
    });
}


$(document).on('click', '.btn-more', function() {
    let target = $(this).data('target');
    console.log(target);

    $('.' + target).css({'display':'block'});

    // if(target == "con-test"){ currentClick = 0}
    // else if(target == "con-book"){ currentClick = 1}
    // else if(target == "con-digital"){ currentClick = 2}
    // else if(target == "con-lms"){ currentClick = 3}
    // else if(target == "good-hyunpan"){ currentClick = 4}
    // else if(target == "good-ai"){ currentClick = 5}
    // else if(target == "good-test"){ currentClick = 6}
    // else if(target == "good-lms"){ currentClick = 7}


    startSwiper();
    

});

startSwiper();


$(document).on('click', '.close-btn', function() {
    
    $('.popup').css({'display':'none'});

    // if(target == "con-test"){ currentClick = 0}
    // else if(target == "con-book"){ currentClick = 1}
    // else if(target == "con-digital"){ currentClick = 2}
    // else if(target == "con-lms"){ currentClick = 3}
    // else if(target == "good-hyunpan"){ currentClick = 4}
    // else if(target == "good-ai"){ currentClick = 5}
    // else if(target == "good-test"){ currentClick = 6}
    // else if(target == "good-lms"){ currentClick = 7}


    startSwiper();
    

});


$(document).on('click', '.reload', function() {
    location.reload();
});