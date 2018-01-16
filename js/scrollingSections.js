$.scrollify({
    section : ".js-scroll-section",
    sectionName : "section-name",
    interstitialSection : "",
    easing: "easeOutExpo",
    scrollSpeed: 1000,
    offset : 0,
    scrollbars: true,
    standardScrollElements: "",
    setHeights: true,
    overflowScroll: true,
    updateHash: true,
    touchScroll:true,
    before:function() {setActiveSectionLight();closeSideBarMenu();},
    after:function() {},
    afterResize:function() {},
    afterRender:function() {}
});


$(function() {
    $.scrollify({
        section : ".js-scroll-section"
    });


});

var setActiveSectionLight = function(){
    if($.scrollify.currentIndex() == 1){
        $("#hoods-light").removeClass("active-section-light");
        $("#scripta-light").removeClass("active-section-light");
        $("#stream-light").addClass("active-section-light");
    }
    else if($.scrollify.currentIndex() == 2){
        $("#stream-light").removeClass("active-section-light");
        $("#scripta-light").removeClass("active-section-light");
        $("#hoods-light").addClass("active-section-light");
    }
    else if($.scrollify.currentIndex() == 3){
        $("#stream-light").removeClass("active-section-light");
        $("#hoods-light").removeClass("active-section-light");
        $("#scripta-light").addClass("active-section-light");
    }
    else{
        $("#hoods-light").removeClass("active-section-light");
        $("#scripta-light").removeClass("active-section-light");
        $("#stream-light").removeClass("active-section-light");
    }
};

$(document).ready(function(){
    $(".navigation-bar__section--link").click(function(){
        $.scrollify.move($(this).attr('href'));
    });
});

var closeSideBarMenu = function(){
    $(".menu-side__section").css("left","left").animate({"left":"-250px"}, "fast");
};