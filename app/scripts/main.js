/* global $, e */
/*eslint-disable no-unused-vars*/
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
	// CONTACT INFO SLIDE
	$('.slide-toggle').click(function(){
		$('.slider-contact-info').stop().animate({
			width: 'toggle'
		});
	});
	// SLIDEUP BLOG POST
	$('.wrapper-info-post').mouseenter(function(){
		$(this).find('.info-post').stop().animate({height: '100%'});
		$(this).find('.icon-post').removeClass('more');
	});
	$('.wrapper-info-post').mouseleave(function(){
		$(this).find('.info-post').stop().animate({height: '28%'}, 1000, function() {});
		$(this).find('.icon-post').addClass('more');
	});
	// PARALLAX - SCROLLMAGIC
	// init controller
	var controller = new ScrollMagic.Controller();
	// build tween
	var tween = TweenMax.staggerFromTo("#animate1", 2, {left: 700}, {left: 220, opacity:1, ease: Back.easeOut}, 0.15);

	// build scene
	var scene = new ScrollMagic.Scene({triggerElement: "#trigger1", duration: 300})
					.setTween(tween)
					.addTo(controller);
});

