requirejs(['main'], function (main) {
    requirejs(["jquery","layer" ,"bootstrap"], function($,_) {
        $(".ss").click(function(){
            layer.msg("你大爷的",{

                time:1000
            },function(){
                layer.msg("ssss",{time:1000});
            })
        })
    });
});
