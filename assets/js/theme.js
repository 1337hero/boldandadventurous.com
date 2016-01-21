/*global jQuery */

// $(".menu_button").click(function() {
//         $(".header").toggleClass("open")
//     });

//     $(window).scroll(function(){
//         /** Get the scroll position of the page */
//         var scrollPos = $("body").scrollTop();
//         /** Scroll and fade out the banner text */
//         $('.introText').css({
//             'margin-top' : -( scrollPos / 2 ) + "px",
//             'opacity' : 1 - ( scrollPos / 200 ),
//             '-ms-filter' : 'progid:DXImageTransform.Microsoft.Alpha(Opacity=' + 1 - ( scrollPos / 300 ) + ')'
//         });
//         $('.hero-image').css({
//             'margin-top' : -( scrollPos / 1 ) + "px",
//             'opacity' : 1 - ( scrollPos / 200 ),
//             '-ms-filter' : 'progid:DXImageTransform.Microsoft.Alpha(Opacity=' + 1 - ( scrollPos / 300 ) + ')'
//         });

//     });


    $(document).ready(function(){
    
    var getMax = function(){
        return $(document).height() - $(window).height();
    }
    
    var getValue = function(){
        return $(window).scrollTop();
    }
    
    if('max' in document.createElement('progress')){
        // Browser supports progress element
        var progressBar = $('progress');
        
        // Set the Max attr for the first time
        progressBar.attr({ max: getMax() });

        $(document).on('scroll', function(){
            // On scroll only Value attr needs to be calculated
            progressBar.attr({ value: getValue() });
        });
      
        $(window).resize(function(){
            // On resize, both Max/Value attr needs to be calculated
            progressBar.attr({ max: getMax(), value: getValue() });
        });   
    }
    else {
        var progressBar = $('.progress-bar'), 
            max = getMax(), 
            value, width;
        
        var getWidth = function(){
            // Calculate width in percentage
            value = getValue();            
            width = (value/max) * 100;
            width = width + '%';
            return width;
        }
        
        var setWidth = function(){
            progressBar.css({ width: getWidth() });
        }
        
        $(document).on('scroll', setWidth);
        $(window).on('resize', function(){
            // Need to reset the Max attr
            max = getMax();
            setWidth();
        });
    }
});



