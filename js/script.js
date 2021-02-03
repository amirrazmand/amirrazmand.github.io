$(document).ready(function() {

    //   فیکس تاپ کردن سایت بار صفحه سرچ
    // function sidebarScroll() {
    //     let sidebar = $('.content-search #parent .sidebar');
    //     if($(window).scrollTop() > 20) {
    //         sidebar.addClass('fixTop-sidebar');
    //     } else {
    //         sidebar.removeClass('fixTop-sidebar');
    //     }
    //
    // }
    // sidebarScroll();
    // $(window).on('scroll' , sidebarScroll);


    // انیمیشن منو فروشگاه
    // $('#category .item p a').on('click' , function(e) {
    //     let target = $(this.hash);
    //     if(target.length) {
    //         e.preventDefault();
    //         $('html,body').animate({
    //             scrollTop : target.offset().top
    //         },1000)
    //     }
    // })


// نمایش آیتم های منو فروشگاه
    $('#category').owlCarousel({
        rtl:true,
        loop:false,
        margin: 10,
        // nav:true,
        autoWidth:true,
        dots:false,
        responsive:{
            0:{
                items:1
            },
            500:{
                items:6
            },
            600:{
                items:6
            },
            700:{
                items:7
            },
            1000:{
                items:7
            },
            1200:{
                items:7
            }
        }
    })


    $('#new').owlCarousel({
        rtl:true,
        loop:false,
        margin: 10,
        dots:false,
        autoWidth:true,
        autoPlay:false,
        responsive:{
            0:{
                items:0
            },
            400:{
                items:3
            },
            700:{
                items:5
            },
            1200:{
                items:6
            }
        }
    })
    $('#new2').owlCarousel({
        rtl:true,
        loop:false,
        margin: 10,
        dots:false,
        autoWidth:true,
        autoPlay:false,
        responsive:{
            0:{
                items:0
            },
            400:{
                items:3
            },
            700:{
                items:5
            },
            1200:{
                items:6
            }
        }
    })

    $('#new3').owlCarousel({
        rtl:true,
        loop:false,
        margin: 10,
        dots:false,
        autoWidth:true,
        autoPlay:false,
        responsive:{
            0:{
                items:0
            },
            400:{
                items:3
            },
            700:{
                items:5
            },
            1200:{
                items:6
            }
        }
    })


    $('#persons').owlCarousel({
        rtl:true,
        loop:false,
        margin: 10,
        autoWidth:true,
        dots:false,
        responsive:{
            600:{
                items:4
            }
        }
    })



    $(".footer div a span").click(function() {
        $(".footer div a span").removeClass("active");
        $(this).addClass("active");
    });

    $(".category-section__nav-btn .owl-carousel .item").click(function() {
        $(".category-section__nav-btn .owl-carousel .item").removeClass("active");
        $(this).addClass("active");
    });
    $(".like button").click(function() {
        $(".like").removeClass("like2");
        $(this).addClass("like2");
    });


    // $("#like").click(function (){
    //         $("#liked").show();
    //         $("#no-like").hide();
    // });


    // off-code
    // $(".btn-off-code").click(function (){
    //     $(".off-code").fadeToggle();
    // })

    $(".btn-outline-primary.gr ").click(function(){
        $(".btn-outline-primary.gr").html("دنبال می کنید");
    });

    $(".mySidenav ").click(function(){
        $(".mySidenav").style.width = "250px";
    });


    // for slid menu
    // $(".openNav ").click(function(){
    //     $(".mySidenav").style.width = "250px";
    // });
    //
    // $(".closeNav ").click(function(){
    //     $(".mySidenav").style.width = "0";
    // });


    // function openNav() {
    //     document.getElementById("mySidenav").style.width = "250px";
    // }
    //
    // function closeNav() {
    //     document.getElementById("mySidenav").style.width = "0";
    // }





    // input add adderss
    // $("#btn-add-new-address").click(function (){
    //     $("#add-new-address").fadeToggle();
    // })
    //
    // // cart page
    // $("#delivery").click(function (){
    //     $("#select-address").show();
    //     $("#restaurant-address").hide();
    // })
    //
    // // cart page
    // $("#in-person").click(function (){
    //     $("#select-address").hide();
    //     $("#restaurant-address").show();
    //
    // })


    $(".slider-area").slick({
        dots: true,
        infinite:true,
        slidesToShow: 3,
        slideToScroll: 1
    });







})