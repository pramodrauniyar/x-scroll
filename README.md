# x-scroll
jquery plugin for horizontal scrolling
#jQuery horizontal scrolling for multiple items per view

## Description 

This is simple jquery plugin for horizontal scrolling for multuple items per view.It includes left and right scrolling buttons and that can be customize. One can customize the setting options as described below:

### default settings

    {
        'containerWrapper': '',
        'animateTime' :1000,
        'btnColor':'#e03131',
        'sliderItem':'.x-scroll-item'
   
     }
  		
## Example horizontal scroll
	 $.xScroll(
	                    '.x-scroll-jq',
	                    {containerWrapper:'#x-scroll-jq'}
	                  );


### Dependecy
It depends on the JQUERY plug in, so before using this, make sure you have jquery libarary is loaded. 

### usages
> $.xScroll('.x-scroll-jq');

### Install via bower
> bower install x-scroll 
