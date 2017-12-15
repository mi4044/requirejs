requirejs(["main"],function () {
    requirejs(["jquery","layer"], function($) {
        var Time;
         $("div").click(function () {
             $(this).attr("disabled","true");
               layer.msg("84616515655", {
                    time: 1000
                }, function () {
                    layer.msg("ssss", {time: 1000});
                    });

             setTimeout("$('#submit').removeAttr('disabled')",3000);
            });
        var box=document.getElementsByTagName("p")[0];
        box.onmouseover=function () {
            layer.msg("把光标移开",{time:0})
        };
        box.onmouseout=function (){
            layer.msg("你真亭湖",{time:1000})
        }
    });
});
