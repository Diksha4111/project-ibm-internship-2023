$(document).ready(() => {
    
    //navbar
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if(scroll > 100){
            $(".nav").css("background", rgb(31, 30, 30));
        }
        else{
            $(".nav").css("background" , transparent);
        }
    })


    //carousel
    let navText = ['<i class="fa-solid fa-arrow-left"></i>' , '<i class="fa-solid fa-arrow-right"></i>']

    $('#hero-carousel').owlCarousel({
        items:1,
        dots: false,
        loop: true,
        nav: true,
        navText: navText,
        autoplay: true,
        autoplayHoverPause: true
    })

    $('#top-movies-slide').owlCarousel({
        items:3,
        dots:false,
        loop: true,
        autoplay: false,
        autoplayHoverPause: true,
        responsive: {
            1320:{
                items: 6
            },
            1144:{
                items: 5
            },
            1074:{
                items: 4
            },
            1000:{
                items: 4
            },
            920:{
                items: 4 
            },
            887 : {
                items: 4
            },
            886:{
                items: 4
            },
            743:{
                items: 3
            }
        }
    })
})