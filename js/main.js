require.config({
    // urlArgs: "ver=1.0_" + (new Date).getTime(),
    // baseUrl:"js" ,
    paths: {
		"layer_css":"../css/layer.css",
        "bootstrap_css":"../bootstrap/css/bootstrap.css" ,
        "jquery": "jQuery-2.1.4.min",
		"layer":"layer",
        "bootstrap":"../bootstrap/js/bootstrap",
        "jquery_slitslider":"../slitslider/js/jquery.slitslider" ,
        "jquery_ba_cond":"../slitslider/js/jquery.ba_cond.min",
        "modernizr":"../slitslider/js/modernizr.custom.79639"
	    // "jquery_slitslider":"../slitslider/css/demo.css"
    },
	shim:{

        layer: {
            "layer":["jquery"],
            deps: [
                'css!../css/layer.css'
            ]
        },
        underscore: {
            exports: '_'
        },

        bootstrap:{
            "bootstrap":["jquery"],
            deps:[
                "css!bootstrap_css"
            ]
        },
        jquery_slitslider:{
            "jquery_slitslider":["jquery"],

            deps:[

                "css!../slitslider/css/custom.css" ,
                "css!../slitslider/css/style.css",
                "css!../slitslider/css/demo.css"

            ]
        },
        "jquery_ba_cond":["jquery"],
        "modernizr":["jquery"],

    }
});




