/* global $, e, ScrollMagic, enquire, Linear, TimelineMax, Back, TweenMax, TweenLite  */
/*eslint-disable no-unused-vars*/
'use strict';
$(document).ready(function(){
	/* jshint strict: false */
	/*jshint camelcase: false */
	// PRELOADER
	$('#main').imagesLoaded( { background: true }, function() {
		setTimeout(function(){
			$('body').addClass('loaded');
			// ANIMATE MENU
			var siteNav = $('#siteNav');
			TweenLite.to(siteNav, 0.5, {top: 0, delay: 1});
		}, 5000);
	});
	// sliders
	$('.main-slider').bxSlider({
		controls: false
	});
	$('.stories-slider').bxSlider({
		pagerCustom: '#stories-slider-pager',
		auto: true,
		pause: 7000
	});
	$('.process-slider').bxSlider({
		mode: 'fade',
		pagerCustom: '#animate4'
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
	enquire.register('screen and (min-width:992px)', {
		match: function() {
			// init controller
			var controller = new ScrollMagic.Controller();
			// build tween
			var tween = TweenMax.staggerFromTo('#animate1', 2, {left: 700}, {left: '50%', opacity: 1, ease: Back.easeOut}, 0.15);
			var tween2 = TweenMax.staggerFromTo('#animate2', 2, {left: -100}, {left: '0', opacity: 1, ease: Back.easeOut}, 0.15);
			var tween3 = TweenMax.staggerFromTo('#animate3', 2, {left: 700}, {left: '50%', opacity: 1, ease: Back.easeOut}, 0.15);
			var tween4 = TweenMax.staggerFromTo('#animate4', 2, {bottom: -100}, {bottom: 0, opacity: 1, ease: Back.easeOut}, 0.15);
			var tween5 = TweenMax.staggerFromTo('#animate5', 2, {left: 700}, {left: '50%', opacity: 1, ease: Back.easeOut}, 0.15);
			var tween6 = TweenMax.staggerFromTo('#animate6', 2, {left: -100}, {left: '0', opacity: 1, ease: Back.easeOut}, 0.15);
			var tween7 = TweenMax.staggerFromTo('#animate7', 2, {bottom: -100}, {bottom: 0, opacity: 1, ease: Back.easeOut}, 0.15);
			var tween8 = TweenMax.staggerFromTo('#animate8', 2, {left: 700}, {left: '0', opacity: 1, ease: Back.easeOut}, 0.15);
			var tween9 = TweenMax.staggerFromTo('#animate9', 2, {top: -300}, {top: 0, opacity: 1, ease: Back.easeOut}, 0.15);
			var tween10 = TweenMax.staggerFromTo('#animate10', 2, {bottom: -300, left: -300}, {bottom: 0, left: 0, opacity: 1, ease: Back.easeOut}, 0.15);
			var tween11 = TweenMax.staggerFromTo('#animate11', 2, {left: 700}, {left: '50%', opacity: 1, ease: Back.easeOut}, 0.15);
			var tween12 = TweenMax.staggerFromTo('#animate12', 2, {left: 700}, {left: '50%', opacity: 1, ease: Back.easeOut}, 0.15);
			var tween13 = TweenMax.staggerFromTo('#animate13', 2, {left: 700}, {left: '50%', opacity: 1, ease: Back.easeOut}, 0.15);
			// build scene
			var scene = new ScrollMagic.Scene({triggerElement: '#trigger1', duration: 300})
							.setTween(tween)
							.addTo(controller);
			var scene2 = new ScrollMagic.Scene({triggerElement: '#trigger2', duration: 300})
							.setTween(tween2)
							.addTo(controller);
			var scene3 = new ScrollMagic.Scene({triggerElement: '#trigger3', duration: 300})
							.setTween(tween3)
							.addTo(controller);
			var scene4 = new ScrollMagic.Scene({triggerElement: '#trigger4', duration: 300})
							.setTween(tween4)
							.addTo(controller);
			var scene5 = new ScrollMagic.Scene({triggerElement: '#trigger5', duration: 300})
							.setTween(tween5)
							.addTo(controller);
			var scene6 = new ScrollMagic.Scene({triggerElement: '#trigger6', duration: 300})
							.setTween(tween6)
							.addTo(controller);
			var scene7 = new ScrollMagic.Scene({triggerElement: '#trigger7', duration: 300})
							.setTween(tween7)
							.addTo(controller);
			var scene8 = new ScrollMagic.Scene({triggerElement: '#trigger8', duration: 300})
							.setTween(tween8)
							.addTo(controller);
			var scene9 = new ScrollMagic.Scene({triggerElement: '#trigger9', duration: 300})
							.setTween(tween9)
							.addTo(controller);
			var scene10 = new ScrollMagic.Scene({triggerElement: '#trigger10', duration: 300})
							.setTween(tween10)
							.addTo(controller);
			var scene11 = new ScrollMagic.Scene({triggerElement: '#trigger11', duration: 300})
							.setTween(tween11)
							.addTo(controller);
			var scene12 = new ScrollMagic.Scene({triggerElement: '#trigger12', duration: 300})
							.setTween(tween12)
							.addTo(controller);
			var scene13 = new ScrollMagic.Scene({triggerElement: '#trigger13', duration: 300})
							.setTween(tween13)
							.addTo(controller);
		}
	});
});
