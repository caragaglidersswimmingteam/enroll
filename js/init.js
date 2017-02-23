jQuery(document).ready(function(){
								
	
	
	jQuery('html').css({height:'auto'});
	jQuery('#intro').css({height:jQuery(window).height()});
			  
	  jQuery(window).bind('resize',function() {
											
		jQuery('#intro').css({height:jQuery(window).height()});
	  
	  });
								
	
 	var nice = jQuery('html').niceScroll({
      scrollspeed: 60,
      mousescrollstep: 35,
      cursorwidth: 15,
      cursorborder: 0,
      cursorcolor: '#4E88C0',
      cursorborderradius: 5,
      autohidemode: true,
      zindex: 9998,
      railalign:'right'
    });
	
		// MENU NAVIGATION
	
	jQuery('.menu li a[href*=#]').click(function() {
			
		var headerH = jQuery('.nav-bar').height() - 1;
	
        jQuery("html, body").animate({
            scrollTop: jQuery(jQuery(this.hash)).offset().top - headerH  + "px"
        }, {
            duration: 1000,
            easing: "easeInOutExpo"
        });

        return false;
    });
	
	jQuery('a.goto[href*=#]').click(function() {
			
		var headerH = jQuery('.nav-bar').height() - 1;
	
        jQuery("html, body").animate({
            scrollTop: jQuery(jQuery(this.hash)).offset().top - headerH  + "px"
        }, {
            duration: 1000,
            easing: "easeInOutExpo"
        });

        return false;
    });
	
	

	// END MENU NAVIGATION
	
	// MOBILE NAVIGATION
	
	navigation = jQuery('#nav-desktop').children('ul');
options = '<option value="" selected>-Main Menu-</option>';

navigation.find('li').each(function() {
		
			link = jQuery(this).children('a');
			depth   = jQuery(this).parents('ul').length - 1;
			indent  = '';

		if( depth ) {
			while( depth > 0 ) {
				indent += ' - ';
				depth--;
			}
		}
options += '<option value="' + link.attr('href') + '">' + indent + ' ' + link.text() + '</option>';
		
	}).end().after('<select class="mobile-navigation">' + options + '</select>');

	jQuery('.mobile-navigation').on('change', function() {
		//window.location = jQuery(this).val();
		
		var headerH = jQuery('.nav-bar').height();
	
        jQuery("html, body").animate({
            scrollTop: jQuery(jQuery(this).val()).offset().top - headerH  + "px"
        }, {
            duration: 1000,
            easing: "easeInOutExpo"
        });

        return false;
	});
	
	// END MOBILE NAVIGATION
	
	// STICKY MENU
	
	jQuery(".nav-bar").sticky({ topSpacing: 0, className: 'sticky', wrapperClassName: 'main-menu-wrapper' });
	
	// END STICKY MENU
	
	// TEAM MEMBERS
	
	jQuery('.flexslider-team').flexslider({
			animation: "slide",
			slideshow: true,
			slideshowSpeed: 5000,
			animationSpeed: 600, 
			controlNav: false,
			useCSS: false
					});	
	
	// TEAM MEMBERS	
	

	jQuery('#portfolio-items li .view-project a').click(function() {
		jQuery('.project-close').fadeOut(500);										   
		jQuery('html, body').animate({scrollTop:jQuery('.portfolio-bkg-ajax').position().top}, 500);

	var toLoad = jQuery(this).attr('href'); 
	var loader= jQuery('#project-loader');
		loader.fadeIn();
		jQuery('.project-content').slideUp(500);
		jQuery('.project-content').load( toLoad , function(){
                loader.fadeOut();
                jQuery(this).slideDown(500);
				jQuery('.flexslider-project').flexslider({
			animation: "fade",
			slideshow: true,
			slideshowSpeed: 5000,
			animationSpeed: 600, 
			directionNav: false,
			useCSS: false
					});	
				jQuery('.project-close').delay(500).fadeIn(500);
               
            });

		return false;
	});
	
	jQuery(".project-close").click(function() {
		jQuery('.project-content').slideUp(500);
		jQuery(this).fadeOut(500);
		jQuery('html, body').animate({scrollTop:$('.portfolio-bkg-ajax').position(-200).top-70},1000);
	});	
	
	
	// TESTIMONIALS
	
	jQuery('.flexslider-testimonials').flexslider({
			animation: "fade",
			slideshow: true,
			slideshowSpeed: 5000,
			animationSpeed: 600, 
			directionNav: false,
			useCSS: false
					});	
	
	
	// TESTIMONIALS


}); //end document

// PORTFOLIO

jQuery(window).load(function() {
						  
	// cache container
var portfolioItems = jQuery('#portfolio-items');
// initialize isotope
portfolioItems.isotope({
  itemSelector : '.portfolio-item',
  layoutMode : 'fitRows'
});

// filter items when filter link is clicked
jQuery('#portfolio-filter a').click(function(){
  var selector = jQuery(this).attr('data-filter');
  portfolioItems.isotope({ filter: selector });
  return false;
});


jQuery(".view-larger a[data-rel^='prettyPhoto']").prettyPhoto({
						animation_speed: 'normal',
						autoplay_slideshow: true,
						slideshow: 3000
					});


		}); //end window load

// END PORTFOLIO



	