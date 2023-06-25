(function ($) {
        "use strict";
    
    
        $(document).ready(function () {
            function sticky_header(){
                var wind = $(window);
                var sticky = $('header');
                wind.on('scroll', function () {
                    var scroll = wind.scrollTop();
                    if (scroll < 100) {
                        sticky.removeClass('sticky');
                    } else {
                        sticky.addClass('sticky');
                    }
                });
            }
            sticky_header();
        });
        
        // ========================================== skill start ==========================================
        var skills = {
            ht: 90,
            cs: 80,
            bo: 95,
            js: 40,
            jq: 60,
            sa: 20
          };
          
          $.each(skills, function(key, value) {
            var skillbar = $("." + key);
          
            skillbar.animate(
              {
                width: value + "%"
              },
              3000,
              function() {
                $(".speech-bubble").fadeIn();
              }
            );
        }); 
        // ========================================== skill end ==========================================
        // ========================================== typed start ==========================================
        var typed = new Typed('.header_typing', {
            strings: ["Freelancer.", "Web Designer."],
            typeSpeed: 40,
            backSpeed: 40,
            loop: true,
            showCursor: false,
            backDelay: 2000,
            startDelay: 1000,

        });
    
        var typed = new Typed('.about_typing', {
            strings: ["Freelancer.", "Web Designer."],
            typeSpeed: 40,
            backSpeed: 40,
            loop: true,
            showCursor: false,
            backDelay: 2000,
            startDelay: 1000,

        });
        // ========================================== typed end ==========================================
        // ========================================== Hamburger-menu start ==========================================
        $('.hamburger-menu').on('click', function () {
            $('.hamburger-menu .line-top, .responsive-menu').toggleClass('current');
            $('.hamburger-menu .line-center').toggleClass('current');
            $('.hamburger-menu .line-bottom').toggleClass('current');
        });
        // ========================================== Hamburger-menu end ==========================================
        // ========================================== preloader start ==========================================
        $(window).on('load', function(){
            $("#preloader").delay(500).fadeOut("slow");

        });
        // ========================================== preloader end ==========================================
        // ========================================== portfolio start ==========================================
        var $grid = $('.portfolio-active').isotope({
            itemSelector: '.grid-item',
            percentPosition: true,
            masonry: {
              columnWidth: 1
            }
        })
        // filter items on button click
        $('.portfolio-menu').on( 'click', 'button', function() {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({ filter: filterValue });
        });
        // ========================================== portfolio end ==========================================
        // ========================================== sticky start ==========================================
        var swiper6 = new Swiper(".mySwiper6", {
            grabCursor: true,
            effect: "creative",
            creativeEffect: {
              prev: {
                shadow: true,
                origin: "left center",
                translate: ["-5%", 0, -200],
                rotate: [0, 100, 0],
              },
              next: {
                origin: "right center",
                translate: ["5%", 0, -200],
                rotate: [0, -100, 0],
              },
            },
          });
          

        // ========================================== sticky end ==========================================
        // ========================================== scrollUp strat ==========================================
        $.scrollUp({
            scrollName: 'scrollUp',
            topDistance: '300',
            topSpeed: 300,
            animation: 'fade',
            animationInSpeed: 200,
            animationOutSpeed: 200,
            scrollText: '<i class="fas-sharp fa-solid fa-arrow-up-from-bracket"></i>',
            activeOverlay: false,
        });
        // ========================================== scrollUp end ==========================================
        // ========================================== wow strat ==========================================
        // WOW active
        new WOW().init();
        // ========================================== wow end ==========================================

        
        // FORM VALIDATION
        $('.dh-container').directionalHover({	
            speed: 300
        });	
        $('[data-fancybox="gallery"]').fancybox({
            buttons: [
                "zoom",
                "slideShow",
                "fullScreen",
                "thumbs",
                "close"
            ]
        });

})(jQuery);
