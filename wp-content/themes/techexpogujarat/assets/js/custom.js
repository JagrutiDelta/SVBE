(function ($) {
    "use strict";
    $(document).ready(function () {
        $('.text-slider').slick({
            vertical: true,
            autoplay: true,
            autoplaySpeed: 1500,
            speed: 300,
            arrows : false,
            pauseOnHover : false,
            dots: false
        });

        $('.countdown').downCount({
            date: '12/20/2025 07:30:00'
        });

      $('.slick.exhibitorsLists1').slick({
        speed: 2500,
        autoplay: true,
        autoplaySpeed: 0,
        centerMode: false,
        cssEase: 'linear',
        slidesToShow: 1,
        draggable:false,
        focusOnSelect:false,
        pauseOnFocus:false,
        pauseOnHover:false,
        slidesToScroll: 1,
        variableWidth: true,
        infinite: true,
        initialSlide: 1,
        arrows: false,
        buttons: false
      });

      $('.slick.exhibitorsLists2').slick({
        speed: 2500,
        autoplay: true,
        autoplaySpeed: 0,
        centerMode: false,
        cssEase: 'linear',
        draggable:false,
        focusOnSelect:false,
        pauseOnFocus:false,
        pauseOnHover:false,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        infinite: true,
        initialSlide: 1,
        arrows: false,
        buttons: false,
        rtl:true
      });
      $('.slick.supporting-partners').slick({
        speed: 2500,
        autoplay: true,
        autoplaySpeed: 0,
        centerMode: false,
        cssEase: 'linear',
        draggable:false,
        focusOnSelect:false,
        pauseOnFocus:false,
        pauseOnHover:false,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        infinite: true,
        initialSlide: 1,
        arrows: false,
        buttons: false,
      });
      $('.slick.homeexclusive-partners').slick({
        speed: 2500,
        autoplay: true,
        autoplaySpeed: 0,
        centerMode: false,
        cssEase: 'linear',
        draggable:false,
        focusOnSelect:false,
        pauseOnFocus:false,
        pauseOnHover:false,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        infinite: true,
        initialSlide: 1,
        arrows: false,
        buttons: false,
      });

     $(".schedule-day-1").slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        centerMode: false,
        /*centerPadding: '50px',*/
        arrows: false,
        infinite: true,
        autoplay: true,
        responsive: [
             {
                  breakpoint: 1400,
                  settings: {
                    slidesToShow: 3,    
                    slidesToScroll: 1,
                  },

                },
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 2,    
                slidesToScroll: 1,
              },

            },
             {
              breakpoint: 991,
              settings: {
                slidesToShow: 3,    
                slidesToScroll: 1,
              },

            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,    
                slidesToScroll: 1,
              },

            },
            {
              breakpoint: 560,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 450,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
            ],
        });

        $(".schedule-day-2").slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            centerMode: false,
            /*centerPadding: '50px',*/
            arrows: false,
            infinite: true,
            autoplay: true,
            responsive: [
                 {
                  breakpoint: 1400,
                  settings: {
                    slidesToShow: 3,    
                    slidesToScroll: 1,
                  },

                },
                {
                  breakpoint: 1200,
                  settings: {
                    slidesToShow: 2,    
                    slidesToScroll: 1,
                  },

                },
                 {
                  breakpoint: 991,
                  settings: {
                    slidesToShow: 3,    
                    slidesToScroll: 1,
                  },

                },
                {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 2,    
                    slidesToScroll: 1,
                  },

                },
                {
                  breakpoint: 560,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                  },
                },
                {
                  breakpoint: 450,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                  },
                },
                ],
            });

        $(".retreat-schedule-day-1").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: false,
        /*centerPadding: '50px',*/
        arrows: false,
        infinite: true,
        autoplay: true,
        responsive: [
             {
                  breakpoint: 1400,
                  settings: {
                    slidesToShow: 3,    
                    slidesToScroll: 1,
                  },

                },
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 2,    
                slidesToScroll: 1,
              },

            },
             {
              breakpoint: 991,
              settings: {
                slidesToShow: 3,    
                slidesToScroll: 1,
              },

            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,    
                slidesToScroll: 1,
              },

            },
            {
              breakpoint: 560,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 450,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
            ],
        });

        $(".retreat-schedule-day-2").slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            centerMode: false,
            /*centerPadding: '50px',*/
            arrows: false,
            infinite: true,
            autoplay: true,
            responsive: [
                 {
                  breakpoint: 1400,
                  settings: {
                    slidesToShow: 3,    
                    slidesToScroll: 1,
                  },

                },
                {
                  breakpoint: 1200,
                  settings: {
                    slidesToShow: 2,    
                    slidesToScroll: 1,
                  },

                },
                 {
                  breakpoint: 991,
                  settings: {
                    slidesToShow: 3,    
                    slidesToScroll: 1,
                  },

                },
                {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 2,    
                    slidesToScroll: 1,
                  },

                },
                {
                  breakpoint: 560,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                  },
                },
                {
                  breakpoint: 450,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                  },
                },
                ],
            });


    $("#core-team").slick({
        speed: 5000,
        autoplay: true,
        autoplaySpeed: 0,
        centerMode: true,
        centerPadding: '10px',
        cssEase: 'linear',
        slidesToShow: 5,
        draggable:false,
        focusOnSelect:false,
        pauseOnFocus:false,
        pauseOnHover:false,
        slidesToScroll: 1,
        //variableWidth: true,
        infinite: true,
        initialSlide: 1,
        arrows: false,
        buttons: false,
         pauseOnHover: true,
         responsive: [
                 {
                  breakpoint: 1400,
                  settings: {
                    slidesToShow: 5,    
                    slidesToScroll: 1,
                  },

                },
                {
                  breakpoint: 1200,
                  settings: {
                    slidesToShow: 4,    
                    slidesToScroll: 1,
                  },

                },
                 {
                  breakpoint: 991,
                  settings: {
                    slidesToShow: 4,    
                    slidesToScroll: 1,
                  },

                },
                {
                  breakpoint: 860,
                  settings: {
                    slidesToShow: 3,    
                    slidesToScroll: 1,
                  },

                },
                {
                  breakpoint: 760,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                  },
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                  },
                },
                ],
    });
		
	$(".cs-team-slider .team-lists").slick({
        speed: 5000,
        autoplay: true,
        autoplaySpeed: 0,
        centerMode: true,
        centerPadding: '10px',
        cssEase: 'linear',
        slidesToShow: 3,
        draggable:false,
        focusOnSelect:false,
        pauseOnFocus:false,
        pauseOnHover:false,
        slidesToScroll: 1,
        //variableWidth: true,
        infinite: true,
//         initialSlide: 1,
        arrows: false,
        buttons: false,
         pauseOnHover: true,
         responsive: [
                 {
                  breakpoint: 1400,
                  settings: {
                    slidesToShow: 3,    
                    slidesToScroll: 1,
                  },

                },
                {
                  breakpoint: 1200,
                  settings: {
                    slidesToShow: 3,    
                    slidesToScroll: 1,
                  },

                },
                 {
                  breakpoint: 991,
                  settings: {
                    slidesToShow: 3,    
                    slidesToScroll: 1,
                  },

                },
                {
                  breakpoint: 860,
                  settings: {
                    slidesToShow: 3,    
                    slidesToScroll: 1,
                  },

                },
                {
                  breakpoint: 760,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                  },
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                  },
                },
                ],
    });
		
      $("#extended-team").slick({
        speed: 5000,
        autoplay: true,
        autoplaySpeed: 0,
        centerMode: true,
        centerPadding: '10px',
        cssEase: 'linear',
        slidesToShow: 5,
        draggable:false,
        focusOnSelect:false,
        pauseOnFocus:false,
        pauseOnHover:false,
        slidesToScroll: 1,
        //variableWidth: true,
        infinite: true,
        initialSlide: 1,
        arrows: false,
        buttons: false,
        pauseOnHover: true,
        responsive: [
                {
                breakpoint: 1400,
                settings: {
                  slidesToShow: 5,    
                  slidesToScroll: 1,
                },

              },
              {
                breakpoint: 1200,
                settings: {
                  slidesToShow: 4,    
                  slidesToScroll: 1,
                },

              },
                {
                breakpoint: 991,
                settings: {
                  slidesToShow: 4,    
                  slidesToScroll: 1,
                },

              },
              {
                breakpoint: 860,
                settings: {
                  slidesToShow: 3,    
                  slidesToScroll: 1,
                },

              },
              {
                breakpoint: 760,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                },
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                },
              },
          ],
    });

    console.log('it-industry');
    

    $("#it-industry").slick({
      speed: 5000,
      autoplay: true,
      autoplaySpeed: 0,
      centerMode: true,
      centerPadding: '10px',
      cssEase: 'linear',
      slidesToShow: 5,
      draggable:false,
      focusOnSelect:false,
      pauseOnFocus:false,
      pauseOnHover:false,
      slidesToScroll: 1,
      infinite: true,
      initialSlide: 1,
      arrows: false,
      buttons: false,
         responsive: [
                 {
                  breakpoint: 1400,
                  settings: {
                    slidesToShow: 5,    
                    slidesToScroll: 5,
                  },

                },
                {
                  breakpoint: 1200,
                  settings: {
                    slidesToShow: 4,    
                    slidesToScroll: 4,
                  },

                },
                 {
                  breakpoint: 991,
                  settings: {
                    slidesToShow: 4,    
                    slidesToScroll: 4,
                  },

                },
                {
                  breakpoint: 860,
                  settings: {
                    slidesToShow: 3,    
                    slidesToScroll: 3,
                  },

                },
                {
                  breakpoint: 760,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                  },
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                  },
                },
                ],
    });
     $("#speakers").slick({
        slidesToShow: 5,
        slidesToScroll: 5,
        centerMode: false,
        arrows: false,
        infinite: true,
        dots:true,
        autoplay: true,
        autoplaySpeed: 2000,
         responsive: [
                 {
                  breakpoint: 1400,
                  settings: {
                    slidesToShow: 5,    
                    slidesToScroll: 5,
                  },

                },
                {
                  breakpoint: 1200,
                  settings: {
                    slidesToShow: 4,    
                    slidesToScroll: 4,
                  },

                },
                 {
                  breakpoint: 991,
                  settings: {
                    slidesToShow: 4,    
                    slidesToScroll: 4,
                  },

                },
                {
                  breakpoint: 860,
                  settings: {
                    slidesToShow: 3,    
                    slidesToScroll: 3,
                  },

                },
                {
                  breakpoint: 760,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                  },
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                  },
                },
                ],
    });
        /*$("#mentor-team").slick({
        speed: 5000,
        autoplay: true,
        autoplaySpeed: 0,
        centerMode: true,
        centerPadding: '10px',
        cssEase: 'linear',
        slidesToShow: 5,
        draggable:false,
        focusOnSelect:false,
        pauseOnFocus:false,
        pauseOnHover:false,
        slidesToScroll: 1,
        //variableWidth: true,
        infinite: true,
        initialSlide: 1,
        arrows: false,
        buttons: false,
         pauseOnHover: true
    }); */
    
     
    /*$(".indus-gallery").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '40px',
        arrows: false,
        infinite: true,
        autoplay: true
    });
    $(".prev-btn").click(function () {
        $(".indus-gallery").slick("slickPrev");
    });

    $(".next-btn").click(function () {
        $(".indus-gallery").slick("slickNext");
    });
    $(".prev-btn").addClass("slick-disabled");
    $(".indus-gallery").on("afterChange", function () {
        if ($(".slick-prev").hasClass("slick-disabled")) {
            $(".prev-btn").addClass("slick-disabled");
        } else {
            $(".prev-btn").removeClass("slick-disabled");
        }
        if ($(".slick-next").hasClass("slick-disabled")) {
            $(".next-btn").addClass("slick-disabled");
        } else {
            $(".next-btn").removeClass("slick-disabled");
        }
    });*/


    jQuery(window).scroll(function(){
        if (jQuery(window).scrollTop() > 3 )
        {
            jQuery('.header-nav').addClass('fix-top');        
        }
        else
        {
            jQuery('.header-nav').removeClass('fix-top');
        }
    });

  


}); })(jQuery);