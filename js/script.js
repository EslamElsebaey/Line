

$(window).load(function () {
  $(".preloader").fadeOut();
}) 


$(document).ready(function () { 
       

/***************************************************************************************** */



    // SWIPERS 

// main Swiper 
const mainSwiper = new Swiper('.mainBanner .swiper', {
  loop: true,
  // autoplay: true,
  draggable: true,
  navigation: {
    nextEl: ' .mainBanner .swiper-button-next',
    prevEl: '.mainBanner .swiper-button-prev',
  },

  pagination: {
    el: '.mainBanner .swiper-pagination',
    clickable: true,
  },
  
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 0
    },
  }
});


//  new arrivals swiper

const newArrivalSwiper = new Swiper(' .newArrivals .swiper', {
  loop: true,
  // autoplay : true , 
  draggable: true,
  
  pagination: {
    el: '.newArrivals .swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.newArrivals .swiper-button-next ',
    prevEl: '.newArrivals .swiper-button-prev',
  },
  breakpoints: {
  
    350: {
      slidesPerView: 2,
      spaceBetween: 15
    },
    770: {
      slidesPerView: 3,
      spaceBetween: 20
    } , 
    1199: {
      slidesPerView: 4,
      spaceBetween: 30
    }
  }
});



//  most-viewed swiper

const mostViewed = new Swiper(' .most-viewed .swiper', {
  loop: true,
  // autoplay : true , 
  draggable: true,
  
  pagination: {
    el: '.most-viewed .swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.most-viewed .swiper-button-next ',
    prevEl: '.most-viewed .swiper-button-prev',
  },
  breakpoints: {
  
    350: {
      slidesPerView: 2,
      spaceBetween: 15
    },
    770: {
      slidesPerView: 3,
      spaceBetween: 20
    } , 
    1199: {
      slidesPerView: 4,
      spaceBetween: 30
    }
  }
});


// special offers swiper

const specialOffers = new Swiper(' .special-offers .swiper', {
  loop: true,
  // autoplay : true , 
  draggable: true,
  
  pagination: {
    el: '.special-offers .swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.special-offers .swiper-button-next ',
    prevEl: '.special-offers .swiper-button-prev',
  },
  breakpoints: {
  
    350: {
      slidesPerView: 2,
      spaceBetween: 15
    },
    770: {
      slidesPerView: 3,
      spaceBetween: 20
    } , 
    1199: {
      slidesPerView: 4,
      spaceBetween: 30
    }
  }
});


// bestseller swiper

const bestseller = new Swiper(' .bestseller .swiper', {
  loop: true,
  // autoplay : true , 
  draggable: true,
  
  pagination: {
    el: '.bestseller .swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.bestseller .swiper-button-next ',
    prevEl: '.bestseller .swiper-button-prev',
  },
  breakpoints: {
  
    350: {
      slidesPerView: 2,
      spaceBetween: 15
    },
    770: {
      slidesPerView: 3,
      spaceBetween: 20
    } , 
    1199: {
      slidesPerView: 4,
      spaceBetween: 30
    }
  }
});



//  clientsReview swiper

const  clientsReview = new Swiper(' .clients-reviews  .swiper', {
  loop: true,
  // autoplay: true,
  draggable: true,
 
  pagination: {
    el: '.clients-reviews .swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.clients-reviews .swiper-button-next ',
    prevEl: '.clients-reviews .swiper-button-prev',
  },
  breakpoints: {
  
    350: {
      slidesPerView: 1,
      spaceBetween: 15
    },
    650: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 30
    } 
  }
});











/********************************************************************************* */

// show user account in Mobile
if($(window).width() < 992 ){
  $(".account-text").click(function(){
    $(" .account-text .header-dropdown").toggleClass("show-user-account")
  })
}

/********************************************************************************* */


// open and close nav



$(".closeBtn").click(function(){
  $("nav").removeClass("open-nav");
  $("body").css("overflow" , "visible") ;
})


$(".bars").click(function(){
  $("nav").addClass("open-nav");  
  $("body").css("overflow" , "hidden") ;
  $(".account-details").removeClass("show-account-details");
  $(".account-btn").children(".la-user").removeClass("user-color");
})




/********************************************************************************* */

// to top button

$(window).scroll(function(){
  if($(window).scrollTop() > 150){
    $(".toTop").addClass("showToTop")
  }else{
    $(".toTop").removeClass("showToTop")
  }
})

$(".toTop").click(function(){
  $('html, body').animate({scrollTop:0}, 500);
}) 


/********************************************************************************* */

//  nested menus in footer


if($(window).width() < 768){
  $(".footer-title").click(function(e){
    e.preventDefault() ;
    $(this).next().slideToggle(300) ; 
    $(this).toggleClass("arrow-rotate");
    $(".footer-title").not($(this)).next().slideUp(300);
    $(".footer-title").not($(this)).removeClass("arrow-rotate");
  })
  }



/********************************************************************************* */


    
//fixed nav

$(window).on("scroll", function () {
  if ($(window).scrollTop() > 150) {
      $("header").addClass("fixed");
      if($(window).width() > 992){
        $("header").addClass("fixed-header");
      }
      if($(window).width() < 992){
        $(".search").addClass("d-none").hide();
        $(".open-search-btn").addClass("d-block") ;
        $(".open-search-btn i").removeClass("la-times") ;
      } 
      $(".account-details").removeClass("show-account-details");
      $(".account-btn").children(".la-user").removeClass("user-color");
      
  } else {
    $("header").removeClass("fixed fixed-header");
      $(".search").removeClass("d-none");
      $(".open-search-btn").removeClass("d-block") ;
      if($(window).scrollTop() == 0 ){
        $(".search").show();
      }
  }
});
var fixedBar = document.querySelector("header"),
prevScrollposition = $(window).scrollTop();
  
(window.onscroll = function () {
  var o = $(window).scrollTop();
  prevScrollposition < o && prevScrollposition > 0 ? fixedBar.classList.add("fixedset") : fixedBar.classList.remove("fixedset"), (prevScrollposition = o);
})   
  

  







/********************************************************************************* */

// open search 


$(".open-search-btn").click(function(){
    $(".search").slideToggle(300);
    $(this).children().toggleClass("la-times");
  $(".account-details").removeClass("show-account-details");
  $(".account-btn").children(".la-user").removeClass("user-color");
  
})


$(".cart").click(function(){
  $(".account-details").removeClass("show-account-details");
  $(".account-btn").children(".la-user").removeClass("user-color");
})


/********************************************************************************* */

// nested menus


if($(window).width() <= 992) {  
  $(".li-drop > a").click(function (e) {
    e.preventDefault() ;
    $(this).siblings(".mega-menu").children(".container").children(".mega-items-parent").slideToggle(300) ;
    $(this).toggleClass("nav-arrow-rotate");
    $(".li-drop > a ").not(this).siblings(".mega-menu").children(".container").children(".mega-items-parent").slideUp(400) ;
    $(".li-drop > a ").not(this).removeClass("nav-arrow-rotate");
    })
    $(".li-drop > a").removeAttr("href");
    $(".mega-item h3").click(function(){
     $(this).siblings(".ul-es").slideToggle(300);
     $(".mega-item h3").not(this).siblings(".ul-es").slideUp(300)
     $(".mega-item h3").not(this).removeClass("nav-arrow-rotate");
     $(this).toggleClass("nav-arrow-rotate");
    })
  }
  






 })


 
/********************************************************************************* */






