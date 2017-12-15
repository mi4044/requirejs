requirejs(["main"],function () {
    requirejs(["jquery","layer" ,"bootstrap"], function($,_) {
        $("div").click(function(){
            layer.msg("84616515655",{
                time:1000
            },function(){
                layer.msg("ssss",{time:1000});
            });
        });
    });
});
