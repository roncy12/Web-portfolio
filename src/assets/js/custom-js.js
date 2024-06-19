import jQuery from 'jquery';


window.addEventListener("scroll", function(){ 
// var lastScrollTop = 0;
var st = window.scrollY;
// var st = (window.scrollY || window.pageYOffset || document.body.scrollTop) + (document.documentElement && document.documentElement.scrollTop || 0);
var navPage = document.getElementsByClassName("navPages-container");

if(st===0){
    for (let i = 0; i < navPage.length; i++) {
        const div = navPage[i];
        div.classList.remove("header-fixed");
    }
}else{
    for (let i = 0; i < navPage.length; i++) {
        const div = navPage[i];
        div.classList.add("header-fixed");
    }
}

// lastScrollTop = st <= 0 ? 0 : st; 
}, false);


// Mobile Responsive Custom Script

jQuery(document).ready(function() {
    jQuery(".mobileMenu-toggle").click(function() {
        jQuery(".floats-nav-custom").toggleClass("is-open");
        jQuery('header').toggleClass("is-open");
        jQuery('body').toggleClass("is-open");
    });

    jQuery("a.btn.letsTalk").click(function() {
      jQuery(".floats-nav-custom").removeClass("is-open");
      jQuery('header').removeClass("is-open");
      jQuery('body').removeClass("is-open");
    });
});

jQuery(document).ready(function() {
    jQuery('ul.navPages-list .navPages-item:not(:first-child) a').click(function(e) {
        e.preventDefault(); 
        var headerHeight = 0;
        var target = jQuery(this).data('target'); 
        if(target==='#about' || target==='#services'){
          headerHeight = jQuery("div#menu").outerHeight() + 55;
        }else{
          headerHeight = jQuery("div#menu").outerHeight() - 20;
        }
        

            jQuery('html, body').animate({
                scrollTop: jQuery(target).offset().top - headerHeight
            }); 


    });

    
    if (jQuery(window).width() <= 1024) {
      jQuery('ul.navPages-list .navPages-item:not(:first-child) a').click(function(e) {
        e.preventDefault(); 
        jQuery("nav.floats-nav-custom, header").removeClass("is-open");

        var target = jQuery(this).data('target'); 
          var headerHeightC = jQuery("div#menu").outerHeight() + 65;

            jQuery('html, body').animate({
                scrollTop: jQuery(target).offset().top - headerHeightC
            }); 
      });
    }
});