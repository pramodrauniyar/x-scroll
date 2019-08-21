/*global $, jQuery*/
/**
 * Version 1.1.0
 * JQUERY plugin for horizontal scroll (xScroll)
 * @author Pramod Rauniyar
 * @descriptions
 simple jquery plugin for horizontal scroll

 */

(function($) {
    'use strict';
    $.xScroll = function(container, options) {
        //initializing variables

        var $container = $(options.containerWrapper +' '+container);
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
            'sliderItem':options.containerWrapper+' .x-scroll-item',
            'responsive':1,
            'responsiveItem' :2,
            'itemWidth' : 167,
            'itemOffset':16
        }, options);

        //binding the click events
        var bindEvents = function() {

            //next click button
            $elementNextBtn.click(function(event) {

                numberOfItem = $(settings.sliderItem).length;
                var itemWidth = parseInt($(settings.sliderItem).css('width'));
                var currentVisibleWidth = parseInt($(settings.containerWrapper+ ' .x-scroll-jq').css('width')) + settings.itemOffset;

                var visibleItemWidth = numberOfItem * itemWidth;

                settings.responsive = ( visibleItemWidth > currentVisibleWidth) ? settings.responsive : 0;

                totalPagination = Math.ceil(numberOfItem / itemPerView)+ settings.responsive;

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

                event.stopImmediatePropagation();
                return false;
            });


            //right click
            $elementPrevBtn.click(function(event) {
                // console.log("page: "+ totalPagination + " numberOfItem: "+ numberOfItem +" itemPerView "+itemPerView);
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

                event.stopImmediatePropagation();
                return false;
            });

        };
        //initalizing the slider
        var init = function() {
            $(settings.containerWrapper).prepend('<div class="scroll-previous-wrapp"><a class="scroll-previous" href="#"><i class="material-icons">keyboard_arrow_left</i></a></div>');
            $(settings.containerWrapper).prepend('<div class="scroll-next-wrapp"><a class="scroll-next" href="#" ><i class="material-icons">keyboard_arrow_right</i></a></div>');
            $container.attr('style', 'position:relative');
            $elementNextBtnWrapper = $('.scroll-next-wrapp');
            $elementPreviousBtnWrapper = $('.scroll-previous-wrapp');
            $elementNextBtn = $(options.containerWrapper +' .scroll-next');
            $elementPrevBtn =  $(options.containerWrapper +' .scroll-previous');
            $elementNextBtn.attr('style','background:'+settings.btnColor+'');
            $elementPrevBtn.attr('style','background:'+settings.btnColor+'');
            // $elementPrevBtn.addClass('disabled-btn');
            itemWidthPX = $(settings.sliderItem).css('width');
            itemWidth = parseInt(itemWidthPX);
            itemPerView = Math.round(parseInt($container.css('width')) / itemWidth);
            //bindling event
            bindEvents();
        };
        init();


    };
}(jQuery));
// var scrollContainer=".x-scroll-jq";
// $.xScroll(scrollContainer,{containerWrapper:"#x-scroll-jq"});
//
//
// $.xScroll(scrollContainer,{containerWrapper:"#x-scroll-jq-2"});