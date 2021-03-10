
$(document).ready(function () {
    <!-- Plugins -->
    $(".phone_mask").mask("+7 (000) 000 00 00", {
        placeholder: ""
    });
    <!-- Plugins and -->

    <!-- Scroll -->
    $('#scrollto').on('click', function() {
        $('html,body').animate({scrollTop:$('.section_2').offset().top+"px"},{duration:1E3});

    });
    <!-- Scroll and -->

    <!-- Tabs -->
    $('.tabs-button').click(function(){
        if($(this).is(':visible')){
            setTimeout(function(){
                $(".slider_1").slick('setPosition');
                $(window).resize();
            },0);
        }
    });
    <!-- Tabs and -->

    <!-- Accordion -->
    $( function() {
        $( ".accordion" ).accordion({
            collapsible: true,

        });
    } );
    <!-- Accordion and -->

    <!-- Menu -->
    $("#navToggle").click(function() {
        $(this).toggleClass("active");
        $(".overlay").toggleClass("open");
        // this line ▼ prevents content scroll-behind
        $("body").toggleClass("locked");
        $(".text_anime").toggleClass("none");

    });
    <!-- Menu and -->


});
