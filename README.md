# x-scroll
jquery plugin for horizontal scrolling

# jQuery horizontal scrolling for multiple items per view

## Description 

This is simple jquery plugin for horizontal scrolling for multuple items per view.It includes left and right scrolling buttons and that can be customize. One can customize the setting options as described below:

### default settings

    {
        'containerWrapper': '',
        'animateTime' :1000,
        'btnColor':'#e03131',
        'sliderItem':'.x-scroll-item'
   
     }
  		
## Example horizontal sinlge caresoule init
	 $.xScroll(
		    '.x-scroll-jq',
		    {containerWrapper:'#x-scroll-jq'}
		  );
	

### Codepen example for single carousel 
> http://codepen.io/pramodrauniyar/pen/vxvPmY

### Codepen example for multiple caresoule 
> https://codepen.io/pramodrauniyar/pen/RwboxYM

## Example horizontal multiple caresoule init

	var scrollContainer=".x-scroll-jq";
	$.xScroll(scrollContainer,{containerWrapper:"#x-scroll-jq"});
	$.xScroll(scrollContainer,{containerWrapper:"#x-scroll-jq-2"});

### Dependecy
It depends on the JQUERY plug in, so before using this, make sure you have jquery libarary is loaded. 

### usages
> $.xScroll('.x-scroll-jq');

	 <link rel='stylesheet' href="/bower_components/xScroll/xScroll.min.css">
	 <script type="text/javascript" src="/bower_components/xScroll/xScroll.min.js"></script>

### Install via bower
> bower install x-scroll 


