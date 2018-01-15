/**
 * Created by PriestDesktop on 30/12/2017.
 * This script rotates the background images in the header section.
 */

var backgroundImagesList = [];
var currentBackground = 0;

var rotateBackgroundImages = function(){
    //console.log(backgroundImagesList[currentBackground]);
    currentBackground++;
    if(currentBackground > backgroundImagesList.length - 1) currentBackground = 0;

        $('.header__background').fadeTo('600', 0.6, function() {
            $(this).css('background-image', 'url(' +backgroundImagesList[currentBackground]+ ')');
        }).fadeTo('400', 1);

    setTimeout(rotateBackgroundImages,6000);

};


$(document).ready(function() {
    $('#bg-images-rotation-list li').each(function() {
        backgroundImagesList.push($(this).attr('data-img-src'));
    });

    rotateBackgroundImages();

});