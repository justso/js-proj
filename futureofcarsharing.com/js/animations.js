var W = window;
/// BEGIN - CAR KEY BIND AND V ALIGN ///

// KEY BIND
/*$(function carBind(){
    var pane = $('#top-panel'),
    box = $('#car'),
    w = pane.width() - box.width(),
    d = {},
    x = 3;
    function newv(v,a,b) {
        var n = parseInt(v, 10) - (d[a] ? x : 0) + (d[b] ? x : 0);
        return n < 0 ? 0 : n > w ? w : n;
    }
    $(W).keydown(function(e) { d[e.which] = true; });
    $(W).keyup(function(e) { d[e.which] = false; });

    setInterval(function() {
        box.css({
            left: function(i,v) { return newv(v, 37, 39); }
        });
    }, 40);
    // VERTICALLY ALIGN CAR //
    var $car_mask = $('#car_mask');
    $(W).bind('scroll', function() {
        $car_mask.css('top', 597-$(W).scrollTop() + 'px');
        $(W).stopTime('initiate_bridge_fade').oneTime(100, 'initiate_bridge_fade', function() {
            animateBridge( $(W).scrollLeft() > 1400 );
        });
    });
});*/

/// END - CAR KEY BIND AND V ALIGN ///

/// BEGIN - V ALIGN ///

$(function carBind(){
    var $car_mask = $('#car_mask');
    $(W).bind('scroll', function() {
        $car_mask.css('top', 597-$(W).scrollTop() + 'px');
        $(W).stopTime('initiate_bridge_fade').oneTime(100, 'initiate_bridge_fade', function() {
//            animateBridge( $(W).scrollLeft() > 1400 );
        });
    });
});

/// END - V ALIGN ///

/// BEGIN - ANIMATIONS ///

// WATER ANIMATION
$(function waterAnimation() {
    $("#bridge-water-bg").
      animate({opacity:0.9, left:'2120px'},600,'linear').
      animate({opacity:0.92, left:'2130px'},600,'linear'),
    $("#bridge-water-fg").
      animate({opacity:0.9, left:'2126px'},600,'linear').
      animate({opacity:0.92, left:'2120px'},600,'linear',waterAnimation);
});
$(function waterAnimation() {
    $("#bridge-water-bg-2").
      animate({opacity:0.9, left:'5715px'},600,'linear').
      animate({opacity:0.92, left:'5725px'},600,'linear'),
    $("#bridge-water-fg-2").
      animate({opacity:0.9, left:'5725px'},600,'linear').
      animate({opacity:0.92, left:'5715px'},600,'linear',waterAnimation);
});

// CAR BUBBLE CONTENT ANIMATION
$(function carBubbleAnimation() {

    $(document).delay(6000),
    $("#car-bubble-text").
      animate({opacity:1},400,'linear').
      delay(1600).
      animate({opacity:0},400,'linear'),
    $("#car-keyboard").
      delay(2400).
      animate({opacity:1},400,'linear').
      delay(2400).
      animate({opacity:0},400,'linear',carBubbleAnimation);
});

// CAR KEYBOARD ANIMATION
$(function carKeyboardAnimation() {
    $("#car-keyboard-left").
      animate({opacity:1},100,'linear').
      animate({opacity:0},100,'linear'),
    $("#car-keyboard-right").
      delay(200).
      animate({opacity:1},100,'linear').
      animate({opacity:0},100,'linear',carKeyboardAnimation);
});

// PLANE ANIMATION
$(function planeAnimation() {
    $("#plane").
      animate({bottom:'520px'},1200,'linear').
      animate({bottom:'470px'},1200,'linear',planeAnimation);
});

// CLOUDS ANIMATION
$(function cloudsAnimation() {
    $(".cloud-animation-2").
      animate({left:'+=-600px', opacity:0.0},28000).
      animate({left:'+=600px'},0).
      animate({opacity:0.8},4000),
    $(".cloud-animation-5").
      animate({left:'+=-4000px', opacity:0.0},120000).
      animate({left:'+=4000px'},0).
      animate({opacity:0.8},4000, cloudsAnimation);
});

// CLOUD ARROWS ANIMATION
$(function cloudArrowsAnimation() {
    $("#cloud-arrow-1").
      animate({bottom:'400px'},1200,'linear').
      animate({bottom:'370px'},1100,'linear'),
    $("#cloud-arrow-2").
      animate({bottom:'330px'},1200,'linear').
      animate({bottom:'350px'},1100,'linear'),
    $("#cloud-arrow-3").
      animate({bottom:'410px'},1200,'linear').
      animate({bottom:'370px'},1100,'linear', cloudArrowsAnimation);
});

// SUN ANIMATION
$(function sunAnimation() {
    $("#sun").
      animate({rotate:'+=10deg'},1000, sunAnimation);
});

// UFO ANIMATION
function ufoAnimation() {
    if( $("#ufo").css('opacity') == 0)
    $("#ufo").
      delay(10000).
      animate({opacity:1, left:'12026px'},2000, 'linear').
      animate({bottom:'300px'},2000, 'linear').
      delay(6000).
      animate({bottom:'400px'},2000, 'linear').
      animate({opacity:0, left:'13000px'},2000, 'linear'),
    $("#sheep-2").
      delay(800).
      animate({opacity:1},200, 'linear').
      delay(15000).
      animate({bottom:'320px',opacity:0},2000, 'linear').
      animate({bottom:'20px'},2000, 'linear').
      delay(4000),
    $("#beam").
      delay(10000).
      delay(4000).
      animate({opacity:0.6},400, 'linear').
      animate({opacity:0},400, 'linear').
      animate({opacity:0.6},400, 'linear').
      animate({opacity:0},400, 'linear').
      animate({opacity:0.6},400, 'linear').
      delay(2000).
      animate({opacity:0},2000, 'linear').
      delay(4000);
}

// CAR ENTRANCE ANIMATION
function carAnimation() {
    if( $("#car_mask").css('opacity') == 1)
    $("#car_mask").
      delay(5600).
      animate({opacity:1,left:'+=150'},800),
    $("#car-bubble-wrapper").
      delay(5600).
      animate({opacity:1},800);
}

// PLANE ENTRANCE ANIMATION
function planeAnimation() {
    if( $("#plane").css('opacity') == 1)
    $("#plane").
      delay(1100).
      animate({opacity:1,left:'+=1150'},2200);
}

// HILL ENTRANCE ANIMATION
function hillEntranceAnimation() {
    if( $(".hill-animation-1").css('opacity') == 1)
    $(".hill-animation-1").
      delay(2000).
      animate({opacity:1,bottom:'0px'},400),
    $(".hill-animation-2").
      delay(2200).
      animate({opacity:1,bottom:'0px'},600),
    $(".hill-animation-3").
      delay(2400).
      animate({opacity:1,bottom:'0px'},800);
    $("#sign-p2p").
      delay(3200).
      animate({opacity: 1.0},400),
    $("#sign-b2c").
      delay(3600).
      animate({opacity: 1.0},400),
    $("#sign-nfp").
      delay(4000).
      animate({opacity: 1.0},400),
    $("#hill-2-content").
      delay(4400).
      animate({bottom:'+=210', opacity: 1.0},400),
    $("#hill-3-content").
      delay(4800).
      animate({opacity: 1.0},400),
    $("#hill-4-content").
      delay(5200).
      animate({bottom:'+=220', opacity: 1.0},400);
}

/// END - ANIMATIONS ///

/// BEGIN - EXECUTE ANIMATIONS ///

// ENTRANCE ANIMATIONS
$(function (){
    carAnimation();
    planeAnimation();
    hillEntranceAnimation();
});

/// END - EXECUTE ANIMATIONS ///

/// BEGIN - EXECUTE SCROLL ANIMATIONS ///

$(function scrollAnimations(){

    // SCROLL CAR BUBBLE
    $(function() {
        $(W).bind('scroll', function() {
            scrollAnimationCarBubble( $(W).scrollLeft() > 600 );
        });
        function scrollAnimationCarBubble() {
            if( $("#car-bubble-wrapper").css('opacity') == 1)
            $("#car-bubble-wrapper").animate({ opacity:0},200);
        }
    });

    // SCROLL ANIMATION ONE - 2200
    $(function() {
        $(W).bind('scroll', function() {
            scrollAnimationOne( $(W).scrollLeft() > 2200 );
        });
        function scrollAnimationOne( right_of_bridge ) {
            if( $(".hill-animation-4").css('opacity') == 0 && right_of_bridge )
            $(".hill-animation-4").animate({ opacity:1, bottom:'0px'},600),
            $("#mountain-1").delay(200).animate({ opacity:1, bottom:'0px'},200),
            $("#mountain-2").delay(400).animate({ opacity:1, bottom:'0px'},200),
            $("#mountain-3").delay(600).animate({ opacity:1, bottom:'0px'},200),
            $("#flag-2").delay(800).animate({opacity: 1.0},200),
            $("#flag-2-text").delay(1000).animate({opacity: 1.0},200),
            $("#moose").delay(1000).animate({opacity: 1.0},200);
        }
    });

    // SCROLL ANIMATION TWO - 1600
    $(function() {
        $(W).bind('scroll', function() {
            scrollAnimationTwo( $(W).scrollLeft() > 1600 );
        });
        function scrollAnimationTwo( right_of_bridge ) {
            if( $("#united-states-box").css('opacity') == 0 && right_of_bridge )
            $("#united-states-box").animate({ opacity:1},200);
        }
    });

    // SCROLL ANIMATION THREE - 7800
    $(function() {
        $(W).bind('scroll', function() {
            scrollAnimationThree( $(W).scrollLeft() > 7800 );
        });
        function scrollAnimationThree( right_of_bridge ) {
            if( $("#germany-box").css('opacity') == 0 && right_of_bridge )
            $("#germany-box").animate({ opacity:1},200);
        }
    });

    // SCROLL ANIMATION FOUR - 9400
    $(function() {
        $(W).bind('scroll', function() {
            scrollAnimationFour( $(W).scrollLeft() > 9400 );
        });
        function scrollAnimationFour( right_of_bridge ) {
            if( $("#japan-box").css('opacity') == 0 && right_of_bridge )
            $("#japan-box").animate({ opacity:1},200);
        }
    });

    // SCROLL ANIMATION FIVE - 1800
    $(function() {
        $(W).bind('scroll', function() {
            scrollAnimationFive( $(W).scrollLeft() > 1800 );
        });
        function scrollAnimationFive( right_of_bridge ) {
            if( $("#tower-1").css('opacity') == 0 && right_of_bridge )
            $("#tower-1").animate({ opacity:1, bottom:'0px'},200),
            $("#tower-1-text").delay(400).animate({ opacity:1},200),
            $("#tower-2").delay(600).animate({ opacity:1, bottom:'0px'},200),
            $("#tower-2-text").delay(800).animate({ opacity:1},200);
        }
    });

    // TREE ANIMATION - 2800 to 3800
    $(function() {
        $(W).bind('scroll', function() {
            animateTreeOne( $(W).scrollLeft() > 2800 );
        });
        function animateTreeOne( right_of_bridge ) {
            if( $("#tree-1").css('opacity') == 0 && right_of_bridge )
            $("#tree-1").animate({ opacity:1, bottom:'0px'},200),
            $("#tree-1-text").delay(400).animate({ opacity:1},200),
            $("#tree-2").delay(600).animate({ opacity:1, bottom:'0px'},200),
            $("#tree-2-text").delay(800).animate({ opacity:1},200);
        }
    });
    $(function() {
        $(W).bind('scroll', function() {
            animateTreeTwo( $(W).scrollLeft() > 3000 );
        });
        function animateTreeTwo( right_of_bridge ) {
            if( $("#tree-3").css('opacity') == 0 && right_of_bridge )
            $("#tree-3").animate({ opacity:1, bottom:'0px'},200),
            $("#tree-3-text").delay(400).animate({ opacity:1},200),
            $("#tree-4").delay(600).animate({ opacity:1, bottom:'0px'},200),
            $("#tree-4-text").delay(800).animate({ opacity:1},200);
        }
    });
    $(function() {
        $(W).bind('scroll', function() {
            animateTreeThree( $(W).scrollLeft() > 3200 );
        });
        function animateTreeThree( right_of_bridge ) {
            if( $("#tree-5").css('opacity') == 0 && right_of_bridge )
            $("#tree-5").animate({ opacity:1, bottom:'0px'},200),
            $("#tree-5-text").delay(400).animate({ opacity:1},200),
            $("#tree-6").delay(600).animate({ opacity:1, bottom:'0px'},200),
            $("#tree-6-text").delay(800).animate({ opacity:1},200);
        }
    });
    $(function() {
        $(W).bind('scroll', function() {
            animateTreeFour( $(W).scrollLeft() > 3400 );
        });
        function animateTreeFour( right_of_bridge ) {
            if( $("#tree-7").css('opacity') == 0 && right_of_bridge )
            $("#tree-7").animate({ opacity:1, bottom:'0px'},200),
            $("#tree-7-text").delay(400).animate({ opacity:1},200),
            $("#tree-8").delay(600).animate({ opacity:1, bottom:'0px'},200),
            $("#tree-8-text").delay(800).animate({ opacity:1},200);
        }
    });
    $(function() {
        $(W).bind('scroll', function() {
            animateTreeFive( $(W).scrollLeft() > 3600 );
        });
        function animateTreeFive( right_of_bridge ) {
            if( $("#tree-9").css('opacity') == 0 && right_of_bridge )
            $("#tree-9").animate({ opacity:1, bottom:'0px'},200),
            $("#tree-9-text").delay(400).animate({ opacity:1},200),
            $("#tree-10").delay(600).animate({ opacity:1, bottom:'0px'},200),
            $("#tree-10-text").delay(800).animate({ opacity:1},200);
        }
    });
    $(function() {
        $(W).bind('scroll', function() {
            animateTreeSix( $(W).scrollLeft() > 3800 );
        });
        function animateTreeSix( right_of_bridge ) {
            if( $("#tree-11").css('opacity') == 0 && right_of_bridge )
            $("#tree-11").animate({ opacity:1, bottom:'0px'},200),
            $("#tree-11-text").delay(400).animate({ opacity:1},200),
            $("#tree-12").delay(600).animate({ opacity:1, bottom:'0px'},200),
            $("#tree-12-text").delay(800).animate({ opacity:1},200);
        }
    });

    // SURF ANIMATION
    $(function() {
        $(W).bind('scroll', function() {
            animateSurfOne( $(W).scrollLeft() > 3400 );
        });
        function animateSurfOne( right_of_bridge ) {
            if( $("#surf-1").css('opacity') == 0 && right_of_bridge )
            $("#surf-1").animate({ opacity:1, bottom:'0px'},200);
        }
    });
    $(function() {
        $(W).bind('scroll', function() {
            animateSurfTwo( $(W).scrollLeft() > 4200 );
        });
        function animateSurfTwo( right_of_bridge ) {
            if( $("#surf-2").css('opacity') == 0 && right_of_bridge )
            $("#surf-2").animate({ opacity:1, bottom:'0px'},200),
            $("#surfer").animate({ opacity:1, bottom:'24px'},800);
        }
    });
    $(function() {
        $(W).bind('scroll', function() {
            animateSurfThree( $(W).scrollLeft() > 4800 );
        });
        function animateSurfThree( right_of_bridge ) {
            if( $("#surf-3").css('opacity') == 0 && right_of_bridge )
            $("#surf-3").animate({ opacity:1, bottom:'0px'},200),
            $("#flag-brazil").delay(200).animate({opacity: 1.0},200),
            $("#flag-brazil-text").delay(300).animate({opacity: 1.0},200);
        }
    });

    // BIRDS ANIMATION
    $(function() {
        $(W).bind('scroll', function() {
            animateBirds( $(W).scrollLeft() > 3600 );
        });
        function animateBirds( right_of_bridge ) {
            if( $("#birds").css('opacity') == 0 && right_of_bridge )
            $("#birds").animate({opacity:1, bottom:'200px'},1200);
        }
    });

    // SUN ANIMATION
    $(function() {
        $(W).bind('scroll', function() {
            animateSun( $(W).scrollLeft() > 5200 );
        });
        function animateSun( right_of_bridge ) {
            if( $("#sun-text").css('opacity') == 0 && right_of_bridge )
            $("#sun-text").animate({opacity:1},400);
        }
    });

    // RAINBOW ANIMATION
    $(function() {
        $(W).bind('scroll', function() {
            animateHillSix( $(W).scrollLeft() > 5600 );
        });
        function animateHillSix( right_of_bridge ) {
            if( $("#hill-6").css('opacity') == 0 && right_of_bridge )
            $("#hill-6").animate({ opacity:1, bottom:'0px'},200),
            $("#rainbow").delay(200).animate({ opacity:1, bottom:'-10px'},400),
            $("#pot").delay(400).animate({opacity:1},400),
            $("#flag-ireland").delay(600).animate({opacity:1},400),
            $("#flag-ireland-text").delay(600).animate({opacity:1},400);
        }
    });

    // BILLBOARD ANIMATION
    $(function() {
        $(W).bind('scroll', function() {
            animateBillboard( $(W).scrollLeft() > 5800 );
        });
        function animateBillboard( right_of_bridge ) {
            if( $("#billboard").css('opacity') == 0 && right_of_bridge )
            $("#billboard").animate({ opacity:1, bottom:'0px'},200);
        }
    });

    // HILL 7 ANIMATION
    $(function() {
        $(W).bind('scroll', function() {
            animateHillSeven( $(W).scrollLeft() > 6400 );
        });
        function animateHillSeven( right_of_bridge ) {
            if( $("#hill-7").css('opacity') == 0 && right_of_bridge )
            $("#hill-7").animate({opacity:1, bottom:'0px'},200),
            $("#big-ben").delay(200).animate({opacity:1},400),
            $("#flag-uk").delay(400).animate({opacity:1},400),
            $("#flag-uk-text").delay(400).animate({opacity:1},400);
        }
    });

    // HILL 8, 9 AND 10 ANIMATION
    $(function() {
        $(W).bind('scroll', function() {
            animateHillEight( $(W).scrollLeft() > 6800 );
        });
        function animateHillEight( right_of_bridge ) {
            if( $("#hill-8").css('opacity') == 0 && right_of_bridge )
            $("#hill-8").animate({opacity:1, bottom:'0px'},200),
            $("#hill-9").animate({opacity:1, bottom:'0px'},200),
            $("#hill-10").animate({opacity:1, bottom:'0px'},200),
            $("#eiffel-tower").delay(200).animate({opacity:1},400),
            $("#flag-france").delay(400).animate({opacity:1},400),
            $("#flag-france-text").delay(500).animate({opacity:1},400),
            $("#flag-belgium").delay(600).animate({opacity:1},400),
            $("#flag-belgium-text").delay(700).animate({opacity:1},400),
            $("#flag-netherlands").delay(800).animate({opacity:1},400),
            $("#flag-netherlands-text").delay(900).animate({opacity:1},400),
            $("#flag-denmark").delay(1000).animate({opacity:1},400),
            $("#flag-denmark-text").delay(1100).animate({opacity:1},400),
            $("#flag-switzerland").delay(1200).animate({opacity:1},400),
            $("#flag-switzerland-text").delay(1300).animate({opacity:1},400);
        }
    });

    // MOUNTAIN 4 ANIMATION
    $(function() {
        $(W).bind('scroll', function() {
            animateMountainFour( $(W).scrollLeft() > 6600 );
        });
        function animateMountainFour( right_of_bridge ) {
            if( $("#mountain-4").css('opacity') == 0 && right_of_bridge )
            $("#mountain-4").animate({opacity:1, bottom:'0px'},200);
        }
    });

    // MOUNTAIN 5 ANIMATION
    $(function() {
        $(W).bind('scroll', function() {
            animateMountainFive( $(W).scrollLeft() > 6800 );
        });
        function animateMountainFive( right_of_bridge ) {
            if( $("#mountain-5").css('opacity') == 0 && right_of_bridge )
            $("#mountain-5").animate({opacity:1, bottom:'0px'},200);
        }
    });

    // MOUNTAIN 6 ANIMATION
    $(function() {
        $(W).bind('scroll', function() {
            animateMountainSix( $(W).scrollLeft() > 7000 );
        });
        function animateMountainSix( right_of_bridge ) {
            if( $("#mountain-6").css('opacity') == 0 && right_of_bridge )
            $("#mountain-6").animate({opacity:1, bottom:'0px'},200);
        }
    });

    //  MOUNTAIN 7 ANIMATION
    $(function() {
        $(W).bind('scroll', function() {
            animateMountainSeven( $(W).scrollLeft() > 7200 );
        });
        function animateMountainSeven( right_of_bridge ) {
            if( $("#mountain-7").css('opacity') == 0 && right_of_bridge )
            $("#mountain-7").animate({opacity:1, bottom:'0px'},200);
        }
    });

    // MOUNTAIN 8 ANIMATION
    $(function() {
        $(W).bind('scroll', function() {
            animateMountainEight( $(W).scrollLeft() > 7400 );
        });
        function animateMountainEight( right_of_bridge ) {
            if( $("#mountain-8").css('opacity') == 0 && right_of_bridge )
            $("#mountain-8").animate({opacity:1, bottom:'0px'},200);
        }
    });

    // MOUNTAIN 9 ANIMATION
    $(function() {
        $(W).bind('scroll', function() {
            animateMountainNine( $(W).scrollLeft() > 8000 );
        });
        function animateMountainNine( right_of_bridge ) {
            if( $("#mountain-9").css('opacity') == 0 && right_of_bridge )
            $("#mountain-9").animate({opacity:1, bottom:'0px'},200),
            $("#ski").delay(200).animate({opacity:1},200);
        }
    });

    // HILL 11 ANIMATION
    $(function() {
        $(W).bind('scroll', function() {
            animateHillEleven( $(W).scrollLeft() > 7600 );
        });
        function animateHillEleven( right_of_bridge ) {
            if( $("#hill-11").css('opacity') == 0 && right_of_bridge )
            $("#hill-11").animate({opacity:1, bottom:'0px'},200);
        }
    });

    // HOUSE 1 AND 2 ANIMATION
    $(function() {
        $(W).bind('scroll', function() {
            animateHouseOne( $(W).scrollLeft() > 7800 );
        });
        function animateHouseOne( right_of_bridge ) {
            if( $("#house-1").css('opacity') == 0 && right_of_bridge )
            $("#house-1").animate({opacity:1, bottom:'0px'},200),
            $("#house-1-text").delay(200).animate({opacity:1},200),
            $("#house-2").delay(400).animate({opacity:1, bottom:'0px'},200),
            $("#house-2-text").delay(600).animate({opacity:1},200),
            $("#flag-sweden").delay(700).animate({opacity:1},400),
            $("#flag-sweden-text").delay(800).animate({opacity:1},400),
            $("#flag-austria").delay(700).animate({opacity:1},400),
            $("#flag-austria-text").delay(800).animate({opacity:1},400);
        }
    });

    // TRUCK ANIMATION
    $(function() {
        $(W).bind('scroll', function() {
            animateTruck( $(W).scrollLeft() > 8400 );
        });
        function animateTruck( right_of_bridge ) {
            if( $("#truck").css('opacity') == 0 && right_of_bridge )
            $("#truck").animate({opacity:1, bottom:'0px'},200),
            $("#car-1").delay(200).animate({opacity:1},400).animate({left:'9880'},1000),
            $("#car-2").delay(1000).animate({opacity:1},400).animate({left:'9760'},900),
            $("#car-3").delay(1800).animate({opacity:1},400).animate({left:'9640'},700),
            $("#car-4").delay(2600).animate({opacity:1},400).animate({left:'9520'},500),
            $("#car-5").delay(3400).animate({opacity:1},400),
            $("#car-6").delay(200).animate({opacity:1},400).animate({left:'9880'},1000),
            $("#car-7").delay(1000).animate({opacity:1},400).animate({left:'9760'},900),
            $("#car-8").delay(1800).animate({opacity:1},400).animate({left:'9640'},700),
            $("#car-9").delay(2600).animate({opacity:1},400).animate({left:'9520'},500),
            $("#car-10").delay(3400).animate({opacity:1},400),
            $("#car-11").delay(200).animate({opacity:1},400).animate({left:'9880'},1000),
            $("#car-12").delay(1000).animate({opacity:1},400).animate({left:'9760'},900),
            $("#car-13").delay(1800).animate({opacity:1},400).animate({left:'9640'},700),
            $("#car-14").delay(2600).animate({opacity:1},400).animate({left:'9520'},500),
            $("#car-15").delay(3400).animate({opacity:1},400);
        }
    });

    // MOUNTAIN 10 ANIMATION
    $(function() {
        $(W).bind('scroll', function() {
            animateMountainTen( $(W).scrollLeft() > 8800 );
        });
        function animateMountainTen( right_of_bridge ) {
            if( $("#mountain-10").css('opacity') == 0 && right_of_bridge )
            $("#mountain-10").animate({opacity:1, bottom:'0px'},200),
            $("#mountain-11").delay(400).animate({opacity:1, bottom:'0px'},200),
            $("#mountain-12").delay(500).animate({opacity:1, bottom:'0px'},200),
            $("#mountain-13").delay(600).animate({opacity:1, bottom:'0px'},200),
            $("#mountain-14").delay(700).animate({opacity:1, bottom:'0px'},200),
            $("#mountain-15").delay(800).animate({opacity:1, bottom:'0px'},200),
            $("#flag-singapore").delay(900).animate({opacity:1},400),
            $("#flag-singapore-text").delay(1000).animate({opacity:1},400);
        }
    });

    // HILL 12, 13, 14 AND 15 ANIMATION
    $(function() {
        $(W).bind('scroll', function() {
            animateHillTwelve( $(W).scrollLeft() > 8600 );
        });
        function animateHillTwelve( right_of_bridge ) {
            if( $("#hill-12").css('opacity') == 0 && right_of_bridge )
            $("#hill-12").animate({opacity:1, bottom:'0px'},200),
            $("#hill-13").delay(400).animate({opacity:1, bottom:'0px'},200),
            $("#hill-14").delay(800).animate({opacity:1, bottom:'0px'},200),
            $("#hill-15").delay(1200).animate({opacity:1, bottom:'0px'},200);
        }
    });

    // HILL 16, 17 AND 18 ANIMATION
    $(function() {
        $(W).bind('scroll', function() {
            animateHillSixteen( $(W).scrollLeft() > 9400 );
        });
        function animateHillSixteen( right_of_bridge ) {
            if( $("#hill-16").css('opacity') == 0 && right_of_bridge )
            $("#hill-16").animate({opacity:1, bottom:'0px'},200),
            $("#hill-17").delay(400).animate({opacity:1, bottom:'0px'},200),
            $("#hill-18").delay(800).animate({opacity:1, bottom:'0px'},200);
        }
    });

    // SHRUB ANIMATION
    $(function() {
        $(W).bind('scroll', function() {
            animateShrubs( $(W).scrollLeft() > 9400 );
        });
        function animateShrubs( right_of_bridge ) {
            if( $("#shrub-1").css('opacity') == 0 && right_of_bridge )
            $("#japanese-tower-2-text").delay(400).animate({opacity:1},200),
            $("#shrub-1").delay(800).animate({opacity:1},200),
            $("#shrub-2").delay(900).animate({opacity:1},200),
            $("#shrub-3").delay(1000).animate({opacity:1},200),
            $("#shrub-4").delay(1100).animate({opacity:1},200),
            $("#shrub-5").delay(1200).animate({opacity:1},200);
        }
    });

    // HILL 19, 20 AND 21 ANIMATION
    $(function() {
        $(W).bind('scroll', function() {
            animateHillNinteen( $(W).scrollLeft() > 9800 );
        });
        function animateHillNinteen( right_of_bridge ) {
            if( $("#hill-19").css('opacity') == 0 && right_of_bridge )
            $("#hill-19").animate({opacity:1, bottom:'0px'},200),
            $("#hill-20").delay(400).animate({opacity:1, bottom:'0px'},200),
            $("#hill-21").delay(800).animate({opacity:1, bottom:'0px'},200);
        }
    });

    // SHRUB ANIMATION
    $(function() {
        $(W).bind('scroll', function() {
            animateRoo( $(W).scrollLeft() > 9900 );
        });
        function animateRoo( right_of_bridge ) {
            if( $("#roo-seat").css('opacity') == 0 && right_of_bridge )
            $("#roo-seat").delay(1000).animate({opacity:1},200),
            $("#roo").delay(1200).animate({opacity:1},200),
            $("#flag-australia").delay(1000).animate({opacity:1},400),
            $("#flag-australia-text").delay(1100).animate({opacity:1},400),
            $("#flag-newzealand").delay(1000).animate({opacity:1},400),
            $("#flag-newzealand-text").delay(1100).animate({opacity:1},400);
        }
    });

    // UFO ANIMATION
    $(function() {
        $(W).bind('scroll', function() {
          animateUfo( $(W).scrollLeft() > 10200 );
        });
        function animateUfo( right_of_bridge ) {
          if( $("#hill-23").css('opacity') == 0 && right_of_bridge )
            $("#hill-23").delay(400).animate({opacity:1, bottom:'0px'},200),
            $("#hill-24").delay(800).animate({opacity:1, bottom:'0px'},200),
            $("#sheep").delay(800).animate({opacity:1},200),
            $("#boat-2").delay(1000).animate({opacity:1},200),
            ufoAnimation();
        }
    });

    // HILL 22, 23 AND 24 ANIMATION
    $(function() {
        $(W).bind('scroll', function() {
            animateHillTwentytwo( $(W).scrollLeft() > 10400 );
        });
        function animateHillTwentytwo( right_of_bridge ) {
            if( $("#flag-collab-fund").css('opacity') == 0 && right_of_bridge )
            $("#sheep").delay(800).animate({opacity:1},200),
            $("#boat-2").delay(1000).animate({opacity:1},200),
            $("#flag-collab-fund").delay(1200).animate({opacity:1},200),
            $("#flag-hyperakt").delay(1400).animate({opacity:1},200),
            $("#flag-startup-america").delay(1600).animate({opacity:1},200);
        }
    });

});

/// BEGIN - EXECUTE SCROLL ANIMATIONS ///

// OLD LOOPING ANIMATIONS
/*$(function loopingAnimations(){
    $(W).everyTime(10, function (){
        $("#car").animate({top:'+=2'},200).animate({top:'+=-2'},200);
        $("#plane").animate({bottom:'+=50'},1200).animate({bottom:'+=-50'},1200);
        $(".bridge-water-bg").animate({opacity:0.9, left:'+=-10'},600).animate({opacity:0.7, left:'+=10'},600);
        $(".bridge-water-fg").animate({opacity:1, left:'+=4'},600).animate({opacity:0.92, left:'+=-4'},600);
        $("#cloud-arrow-1").animate({bottom:'+=20'},1200).animate({bottom:'+=-20'},1100);
        $("#cloud-arrow-2").animate({bottom:'+=60'},1200).animate({bottom:'+=-60'},1100);
        $("#cloud-arrow-3").animate({bottom:'+=40'},1200).animate({bottom:'+=-40'},1100);
        $("#sun").animate({rotate: '+=10deg'}, 1000).animate({rotate: '+=10deg'}, 1000);
    });
});*/

// OLD CLOUDS
//$(".cloud-animation-1").animate({left:'+=-200', opacity:0.0},12000).animate({left:'+=200'},0).animate({opacity:0.8},4000);
//$(".cloud-animation-3").animate({left:'+=-1000', opacity:0.0},20000).animate({left:'+=1000'},0).animate({opacity:0.8},4000);
//$(".cloud-animation-4").animate({left:'+=-2000', opacity:0.0},38000).animate({left:'+=2000'},0).animate({opacity:0.8},4000);
//$(".cloud-animation-5").animate({left:'+=-4000', opacity:0.0},120000).animate({left:'+=4000'},0).animate({opacity:0.8},4000);
//$(".cloud-animation-6").animate({opacity:0.0},20000).animate({opacity:0.8},10000);
