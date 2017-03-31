/*global $, jQuery*/
/**
 * JQUERY plugin for horizontal scroll (xScroll)
 * @author Pramod Rauniyar 
 * @descriptions
        simple jquery plugin for horizontal scroll

 */

(function($) {
    'use strict';
    $.xScroll = function(container, options) {
        //initializing variables

        var $container = $(container);
        var numberOfItem;
        var itemWidthPX;
        var itemWidth;
        var itemPerView;
        var totalPagination;
        var $elementNextBtn;
        var $elementNextBtnWrapper;
        var $elementPreviousBtnWrapper;
        var $elementPrevBtn;
        var currentScrollNumber = 1;
        var scrollPerItem = 2;
        var finalScroll;
      

        //setting default variables
        var settings = $.extend({
            'containerWrapper': '',
            'animateTime' :1000,
            'btnColor':'#e03131',
            'sliderItem':'.x-scroll-item'
        }, options);

        //binding the click events
        var bindEvents = function() {

            //next click button 
            $elementNextBtn.click(function(event) {

                numberOfItem = $(settings.sliderItem).length;
                totalPagination = Math.ceil(numberOfItem / itemPerView);
                if (currentScrollNumber === totalPagination) {
                    $elementNextBtn.addClass('disabled-btn');
                    event.stopImmediatePropagation();
                    return false;
                }
                $elementNextBtn.removeClass('disabled-btn');
                $elementPrevBtn.removeClass('disabled-btn');
                finalScroll = itemWidth * currentScrollNumber * scrollPerItem;
                $container.animate({ scrollLeft: finalScroll }, settings.animateTime);
                currentScrollNumber = currentScrollNumber + 1;
                var r = '-' + finalScroll + 'px';
                var l = finalScroll + 'px';
               
                event.stopImmediatePropagation();
                return false;
            });


            //right click
            $elementPrevBtn.click(function(event) {

                if (currentScrollNumber === 1) {
                    $elementPrevBtn.addClass('disabled-btn');
                    event.stopImmediatePropagation();
                    return false;
                }

                currentScrollNumber = currentScrollNumber - 1;
                $elementPrevBtn.removeClass('disabled-btn');
                $elementNextBtn.removeClass('disabled-btn');
              
                finalScroll = (currentScrollNumber === 1) ? 0 : itemWidth * currentScrollNumber;

                $container.animate({ scrollLeft: finalScroll }, settings.animateTime);
               

                var r = '-' + finalScroll + 'px';
                var l = finalScroll + 'px';
               
                event.stopImmediatePropagation();
                return false;
            });

        };
        //initalizing the slider
        var init = function() {
            $(settings.containerWrapper).prepend('<div class="scroll-previous-wrapp"><a class="scroll-previous" href="#"><i class="material-icons">keyboard_arrow_left</i></a></div>');
            $(settings.containerWrapper).prepend('<div class="scroll-next-wrapp"><a class="scroll-next" href="#"><i class="material-icons">keyboard_arrow_right</i></a></div>');
            $container.attr('style', 'position:relative');
            $elementNextBtnWrapper = $('.scroll-next-wrapp');
            $elementPreviousBtnWrapper = $('.scroll-previous-wrapp');
            $elementNextBtn = $('.scroll-next');
            $elementPrevBtn = $('.scroll-previous');
            $elementNextBtn.attr('style','background:'+settings.btnColor+'');
            $elementPrevBtn.attr('style','background:'+settings.btnColor+'');
            itemWidthPX = $(settings.sliderItem).css('width');
            itemWidth = parseInt(itemWidthPX);
            itemPerView = Math.round(parseInt($container.css('width')) / itemWidth);

            //bindling event
            bindEvents();
        };
        init();
       

    };
}(jQuery));
