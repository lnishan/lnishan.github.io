---
layout: null
---
$(document).ready(function () {
  $('a.blog-button').click(function (e) {
    $('.content-wrapper__inner').css('display', 'block')
    if ($('.panel-cover').hasClass('panel-cover--collapsed')) return
    currentWidth = $('.panel-cover').width()
    if (currentWidth < 960) {
      $('.panel-cover').addClass('panel-cover--collapsed')
      $('.content-wrapper').addClass('animated slideInRight')
    } else {
      $('.panel-cover').css('max-width', currentWidth)
	  $('.panel-cover .panel-title').animate({'font-size': '1.8em', 'letter-spacing': '2px'}, 400)
	  $('.panel-cover .user-image').animate({'width': '120px', 'height': '120px'}, 400)
      $('.panel-cover').animate({'max-width': '530px', 'width': '40%'}, 400, swing = 'swing', function () {  $('.panel-cover').addClass('panel-cover--collapsed')  })
    }
  })

  if (window.location.hash && window.location.hash == '#blog') {
    $('.panel-cover').addClass('panel-cover--collapsed')
	$('.content-wrapper__inner').css('display', 'block')
  }

  if (window.location.pathname !== '{{ site.baseurl }}' && window.location.pathname !== '{{ site.baseurl }}index.html') {
    $('.panel-cover').addClass('panel-cover--collapsed')
	$('.content-wrapper__inner').css('display', 'block')
  }

  $('.btn-mobile-menu').click(function () {
    $('.navigation-wrapper').toggleClass('visible animated bounceInDown')
    $('.btn-mobile-menu__icon').toggleClass('icon-list icon-x-circle animated fadeIn')
  })

  $('.navigation-wrapper .blog-button').click(function () {
    $('.navigation-wrapper').toggleClass('visible')
    $('.btn-mobile-menu__icon').toggleClass('icon-list icon-x-circle animated fadeIn')
  })

})
