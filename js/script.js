$(window).on("load", function() {
    $("#preloader").fadeOut();
    AOS.init({
        easing: 'ease-out-back',
        duration: 1000,
        once:true,
    });
});

$(document).ready(function(){
	var rtl = false;
    if($("html").attr("lang") == 'ar'){
         rtl = true;
    }
    

    $('.main_menu .dropdown-toggle').click(function(){
        var thisclick = $('.main_menu .dropdown-toggle')
        var html = $("html")
        if(thisclick.hasClass('active') != true){
            thisclick.addClass('active');
            html.addClass('no-scroll')
            }
            else{
                 thisclick.removeClass('active');
                 html.removeClass('no-scroll')
                }
        
        });


    $('#myTab').on('click', '.nav-item a', function(){
        $(this).closest('.dropdown').addClass('dontClose');
    })

    $('#myTab2').on('click', '.nav-item a', function(){
        $(this).closest('.dropdown').addClass('dontClose');
    })

    $('.main_menu .dropdown').on('hide.bs.dropdown', function(e) {
        if ( $(this).hasClass('dontClose') ){
            e.preventDefault();
        }
        $(this).removeClass('dontClose');
    });

    /*open menu*/
    $(".menu-trigger").click(function(){
        $("body,html").addClass('menu-toggle');
        $(".menu-trigger").addClass('active');
    });
    $(".m-overlay").click(function(){
        $("body,html").removeClass('menu-toggle');
        $(".menu-trigger").removeClass('active');
    });

    $('a[href="#search"]').on('click', function(event) {
        event.preventDefault();
        $('#search').addClass('open');
        setTimeout(function(){
            $('#search form input[type="text"]').focus();
        },100);
    });

    $('.search_close').on('click', function(event) {
            $('#search').removeClass('open');
    });
    

    $(".js-select").each(function(i,v){
        var that = $(this);
        var placeholder = $(that).attr("data-placeholder");
        $(that).select2({
            placeholder:placeholder,
            minimumResultsForSearch: Infinity,
        });
    });


	var owl = $('#slide_home');

        owl.on('initialized.owl.carousel change.owl.carousel',function(elem){
            var current = elem.item.index;
            $(elem.target).find(".owl-item").eq(current).find(".to-animate").removeClass('fadeInUp animated');
            $(elem.target).find(".owl-item").eq(current).find(".to-animate2").removeClass('fadeInUp animated');
            $(elem.target).find(".owl-item").eq(current).find(".to-animate3").removeClass('fadeInUp animated');
            $(elem.target).find(".owl-item").eq(current).find(".to-animate4").removeClass('fadeInUp animated');
        });
       
        owl.on('initialized.owl.carousel changed.owl.carousel',function(elem){
            window.setTimeout(function(){
                var current = elem.item.index;
                $(elem.target).find(".owl-item").eq(current).find(".to-animate").addClass('fadeInUp animated');
                $(elem.target).find(".owl-item").eq(current).find(".to-animate2").addClass('fadeInUp animated');
                $(elem.target).find(".owl-item").eq(current).find(".to-animate3").addClass('fadeInUp animated');
                $(elem.target).find(".owl-item").eq(current).find(".to-animate4").addClass('fadeInUp animated');
            }, 400);
        });
        owl.owlCarousel({
                items: 1,
                loop: true,
                margin: 0,
                responsiveClass: true,
                nav: true,
                dots: true,
                rtl:rtl,
                smartSpeed: 500,
                autoplay: false,
                autoplayTimeout: 5000,
                autoplayHoverPause: false,
                animateOut: 'fadeOut',
                animateIn: 'fadeIn',
                navText:['<i class="far fa-long-arrow-left"></i>',
                '<i class="far fa-long-arrow-right"></i>'],
        });



    var $input;

    function onInputFocus(event) {
      var $target = $(event.target);
      var $parent = $target.closest("div.form-group");
          $parent.addClass('focus-input');
    };

    function onInputBlur(event) {
      var $target = $(event.target);
      var $parent = $target.closest("div.form-group");

      if (event.target.value.trim() === '') {
        $parent.removeClass('focus-input');
      }
    };

    $input = $('.form_sty .form-control');
      
      $input.each(function(){
        if ($input.val().trim() !== '') {
          var $parent = $input.closest("div.form-group");
          $parent.addClass('focus-input');
        }
    });
          
    $input.on('focus', onInputFocus);
    $input.on('blur', onInputBlur);


    $input2 = $('.form_sty select');

    $input2.each(function(){
        if ($input2.val().trim() !== '') {
            var $parent2 = $input2.closest('div.form-group');
            $parent2.addClass('focus-input');
        }
    });

    $input2.on('change', onInputFocus);
    $input2.on('blur', onInputBlur);

})