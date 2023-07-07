$(document).ready(() => {
    

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
        margin: 5,
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

    $('.movies-slide').owlCarousel({
        items:2,
        dots:true,
        loop: true,
        autoplay: true,
        autoplayHoverPause: true,
        margin: 15,
        responsive: {
            1320:{
                items: 4
            },
            1144:{
                items: 4
            },
            1074:{
                items: 4
            },
            1000:{
                items: 3
            },
            920:{
                items: 3 
            },
            887 : {
                items: 3
            },
            886:{
                items: 3
            },
            743:{
                items: 2
            }
        }
    })
    
    $('.continue-watching-slide').owlCarousel({
        items:2,
        dots:false,
        loop: true,
        autoplay: false,
        autoplayHoverPause: true,
        margin: 150,
        responsive: {
            1320:{
                items: 5
            },
            1144:{
                items: 4
            },
            1074:{
                items: 4
            },
            1000:{
                items: 3
            },
            920:{
                items: 3 
            },
            887 : {
                items: 3
            },
            886:{
                items: 3
            },
            743:{
                items: 2
            }
        }
    })

    $('.most-popular-slide').owlCarousel({
        items:2,
        dots:false,
        loop: true,
        autoplay: true,
        autoplayHoverPause: true,
        margin: 150,
        responsive: {
            1320:{
                items: 5
            },
            1144:{
                items: 4
            },
            1074:{
                items: 4
            },
            1000:{
                items: 3
            },
            920:{
                items: 3 
            },
            887 : {
                items: 3
            },
            886:{
                items: 3
            },
            743:{
                items: 2
            }
        }
    })

    $('.language-slide').owlCarousel({
        items:2,
        dots:false,
        loop: true,
        autoplay: false,
        autoplayHoverPause: true,
        margin: 15,
        responsive: {
            1320:{
                items: 5
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
                items: 3 
            },
            887 : {
                items: 3
            },
            886:{
                items: 3
            },
            743:{
                items: 2
            }
        }
    })
})
