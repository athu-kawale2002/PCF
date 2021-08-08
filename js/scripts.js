/*!
* Start Bootstrap - Business Casual v7.0.2 (https://startbootstrap.com/theme/business-casual)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-business-casual/blob/master/LICENSE)
*/

function validateForm() {
  var name =  document.getElementById('name').value;
  if (name == "") {
      document.querySelector('.status').innerHTML = "Name cannot be empty";
      return false;
  }
  var email =  document.getElementById('email').value;
  if (email == "") {
      document.querySelector('.status').innerHTML = "Email cannot be empty";
      return false;
  } else {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if(!re.test(email)){
          document.querySelector('.status').innerHTML = "Email format invalid";
          return false;
      }
  }
  var subject =  document.getElementById('subject').value;
  if (subject == "") {
      document.querySelector('.status').innerHTML = "Subject cannot be empty";
      return false;
  }
  var message =  document.getElementById('message').value;
  if (message == "") {
      document.querySelector('.status').innerHTML = "Message cannot be empty";
      return false;
  }
  document.querySelector('.status').innerHTML = "Sending...";
}
! function ($) {
     var defaults = {
         sectionContainer: "> section",
         angle: 50,
         opacity: true,
         scale: true,
         outAnimation: true,
         pageContainer: '.page_container',
         pageOpacity: true
     };
     $.fn.tiltedpage_scroll = function (options) {
         var settings = $.extend({}, defaults, options),
             el = $(this);
         el.find(settings.sectionContainer).addClass("tps-section");
         el.find('.tps-section').each(function () {
             var el2 = $(this);
             el2.wrapInner("<div class='tps-wrapper'></div>");
         });

         function isElementInViewport(el3) {
             var docViewTop = $(window).scrollTop(),
                 docViewBottom = docViewTop + $(window).height(),
                 elemTop = el3.offset().top,
                 elemBottom = elemTop + el3.outerHeight(true);
             return ((elemBottom >= docViewTop) && (elemTop <= docViewBottom));
         }

         function elementVisibilityMayChange(el4) {
             if (isElementInViewport(el4)) {
                 el4.addClass("tps-inview")
             } else {
                 el4.removeClass("tps-inview")
             }
         }
         $(window).on('DOMContentLoaded load resize scroll', function () {
             el.find(settings.sectionContainer).each(function () {
                 elementVisibilityMayChange($(this));
             });
             el.find('.tps-section.tps-inview > .tps-wrapper').each(function (index) {
                 var el2 = $(this),
                     elc = el2.find(settings.pageContainer),
                     opacity = 0,
                     opacity2 = 0,
                     st = $(window).scrollTop(),
                     deg = ((el2.parent().offset().top - el2.parent().height()) - st) / $(window).height() * (settings.angle * 3),
                     scale = ((st + $(window).height() - (el2.parent().offset().top - el2.parent().height())) / ($(window).height()));
                 if (scale > 1) scale = 1;
                 if (deg < 0) deg = 0;
                 if (st > el2.parent().offset().top) {
                     if (settings.outAnimation == false) {
                         opacity = 1;
                         opacity2 = 1;
                         if (opacity < 0) {
                           opacity = 0;
                           opacity2 = 0;
                         }
                         if (deg < 0) deg = 0;
                     } else {
                         opacity = ((el2.parent().offset().top + ($(window).height() * 1.2) - st)) / ($(window).height());
                         opacity2 = opacity;
                         opacity = Math.pow(opacity, 25);
                         opacity2 = Math.pow(opacity2, 25);
                         //console.log('- '+opacity2);
                         deg = (el2.parent().offset().top - st) / $(window).height() * (settings.angle * 3);
                         scale = ((st + $(window).height() - el2.parent().offset().top) / ($(window).height()));
                     }
                 } else {
                     if (index != 0) {
                         opacity = ((st + $(window).height() - el2.parent().offset().top + (el2.height() / 2)) / $(window).height());
                       opacity2 = opacity / 2;
                       opacity2 = opacity2 < 0.4 ? opacity2/2 : opacity2;
                         //console.log(opacity2);
                         if (opacity > 1) {
                             opacity = 1;
                             opacity2 = 1;
                         }
                     } else {
                         opacity = 1;
                         opacity2 = 1;
                         deg = 0;
                         scale = 1;
                     }
                 } if (settings.scale == false) scale = 1;
                 if (settings.angle == false) deg = 0;
                 if (settings.opacity == false) {
                   opacity = 1;
                   opacity2 = 1;
                 }
                 el2.css({
                     'transform': 'rotateX(' + deg + 'deg) scale(' + scale + ', ' + scale + ')',
                     opacity: opacity
                 });
                 elc.css({opacity: opacity2});
             });
         });
     }
 }(window.jQuery);

$(document).ready(function(){
  $(".main").tiltedpage_scroll({
    angle: 20
  });
});

const balls = document.getElementsByClassName("ball");
document.onmousemove = function() {
  let x = event.clientX * 100 / window.innerWidth + "%";
  let y = event.clientY * 100 / window.innerHeight + "%";
  // event.cilentX => get the horizontal coordinate of the mouse
  // event.cilentY => get the vertical coordinate of the mouse
  // window.innerWidth => get the browser width
  // window.innerHeight => get the browser height

  for(let i = 0; i < 2; i++) {
    balls[i].style.left = x;
    balls[i].style.top = y;
    balls[i].style.transform = "translate(-"+x+", -"+y+")";
  }
}