
requirejs(["main"],function () {
    // define(["jquery","jquery_slitslider","jquery_ba_cond","modernizr"], function($) {

        requirejs(["jquery","jquery_slitslider","jquery_ba_cond","modernizr"], function($) {

                $.Slitslider.defaults 	= {
                    // transitions speed
                    speed : 1000,
                    // if true the item's slices will also animate the opacity value
                    optOpacity : true,
                    // amount (%) to translate both slices - adjust as necessary
                    translateFactor : 230,
                    // maximum possible angle
                    maxAngle : 25,
                    // maximum possible scale
                    maxScale : 2,
                    // slideshow on / off
                    autoplay : true,
                    // keyboard navigation
                    keyboard : true,
                    // time between transitions
                    interval : 3000,
                    // callbacks
                    onBeforeChange : function( slide, idx ) { return false; },
                    onAfterChange : function( slide, idx ) { return false; }
                };


                $(function() {

                    var Page = (function() {

                        var $navArrows = $( '#nav-arrows' ),
                            $nav = $( '#nav-dots > span' ),
                            slitslider = $( '#slider' ).slitslider( {
                                onBeforeChange : function( slide, pos ) {

                                    $nav.removeClass( 'nav-dot-current' );
                                    $nav.eq( pos ).addClass( 'nav-dot-current' );

                                }
                            } ),

                            init = function() {

                                initEvents();

                            },
                            initEvents = function() {

                                // add navigation events
                                $navArrows.children( ':last' ).on( 'click', function() {

                                    slitslider.next();
                                    return false;

                                } );

                                $navArrows.children( ':first' ).on( 'click', function() {

                                    slitslider.previous();
                                    return false;

                                } );

                                $nav.each( function( i ) {

                                    $( this ).on( 'click', function( event ) {

                                        var $dot = $( this );

                                        if( !slitslider.isActive() ) {

                                            $nav.removeClass( 'nav-dot-current' );
                                            $dot.addClass( 'nav-dot-current' );

                                        }

                                        slitslider.jump( i + 1 );
                                        return false;

                                    } );

                                } );

                            };

                        return { init : init };

                    })();

                    Page.init();
                });





    });
});
