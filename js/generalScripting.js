$(document).ready(function(){
    $(".navigation-bar__section").sticky({topSpacing:0});

    $(".navigation-bar__burger-menu").click(function(){
        $(".menu-side__section").css("left","left").animate({"left":"0px"}, "fast");
    });

    $(".close-menu-btn").click(function(){
        $(".menu-side__section").css("left","left").animate({"left":"-250px"}, "fast");
    });
});