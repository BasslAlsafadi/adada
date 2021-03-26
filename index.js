var x = 0;
jQuery(document).ready(function(){

    jQuery('.btn-js').click(function(){

        jQuery('h1').text(x+=1);

    });

    jQuery('.btn2-js').click(function(){

        jQuery('h1').text(x=0);

    });


//---------------------------------------------------
    jQuery(".humburger-btn").on("click" , function(){

        jQuery("header").toggleClass('show');

    });

});