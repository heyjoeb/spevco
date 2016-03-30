/* global $ */
'use strict';
$(document).ready(function(){
	/* jshint strict: false */
	/*jshint camelcase: false */
	// sliders
	$('.main-slider').bxSlider({
		controls: false
	});
	$('.stories-slider').bxSlider({
		pagerCustom: '#stories-slider-pager'
	});
	$('.process-slider').bxSlider({
		controls: false,
		mode: 'fade',
		pagerCustom: '#process-slider-pager'
	});
	// responsive video embed
	$('.responsive-video-embed').fitVids();
	// ADD SLIDEDOWN ANIMATION TO DROPDOWN //
  	$('.dropdown').on('show.bs.dropdown', function(e){
    	$(this).find('.dropdown-menu').first().stop(true, true).slideDown();
  	});
  	// ADD SLIDEUP ANIMATION TO DROPDOWN //
  	$('.dropdown').on('hide.bs.dropdown', function(e){
    	$(this).find('.dropdown-menu').first().stop(true, true).slideUp();
  	});
});

