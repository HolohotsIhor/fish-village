$(document).ready(function() {
    /* Burger */
    $(".toggle_mnu").click(function() {
        $(".sandwich").toggleClass("active");
    });
    /* Burger. Hover */
    $(".top_mnu ul a").click(function() {
        $(".top_mnu").fadeOut(600);
        $(".sandwich").toggleClass("active");
        $(".top_text").css("opacity", "1");
    });

    /* Burger. Open and close */
    $(".toggle_mnu").click(function() {
        if ($(".top_mnu").is(":visible")) {
            $('.top_mnu').css('left', '-100%');
            $(".top_text").css("opacity", "1");
            $(".top_mnu").fadeOut(600);
            $(".top_mnu li a").removeClass("fadeIn animated");
            $(".sw-topper, .sw-bottom, .sw-footer, .toggle_mnu a").css("opacity", "1");
        } else {
            $('.top_mnu').css('left', '0');
            $(".top_text").css("opacity", ".1");
            $(".top_mnu").fadeIn(600);
            $(".top_mnu li a").addClass("fadeIn animated");
            $(".sw-topper, .sw-bottom, .sw-footer, .toggle_mnu a").css("opacity", "0");
        };
    });

    /********** Sticky menu **********/
    // When the user scrolls the page, execute myFunction
    window.onscroll = function() { myFunction() };
    // Get the navbar
    var navbar = document.getElementById("navbar");
    // Get the offset position of the navbar
    var sticky = navbar.offsetTop;
    // Проверка при перезагрузке странице в уже опущенном положении (дописано)
    if (window.pageYOffset > sticky) {
        navbar.classList.remove("no-sticky");
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
        navbar.classList.add("no-sticky");
    }
    // Проверка при перезагрузке странице в уже опущенном положении (дописано)
    // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
    function myFunction() {
        if (window.pageYOffset > sticky) {
            navbar.classList.remove("no-sticky");
            navbar.classList.add("sticky");
        } else {
            navbar.classList.remove("sticky");
            navbar.classList.add("no-sticky");
        }
    }

    /********************** OWL carousel ***************/
    $(function() {
    // Owl Carousel
    var owl = $(".owl-carousel");
    owl.owlCarousel({
        items: 3,
        margin: 10,
        loop: true,
        nav: true,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            960: {
                items: 6
            },
            1200: {
                items: 6
            }
        }
    });
});

    
});