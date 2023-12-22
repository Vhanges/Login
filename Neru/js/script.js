jQuery(document).ready(function() {
    jQuery("#do_login").click(function() { 
        closeLoginInfo();
        jQuery(this).parent().find('span').css("display","none");
        jQuery(this).parent().find('span').removeClass("i-save i-warning i-close");

        var proceed = true;
        jQuery("#login_form input").each(function(){
            if(!jQuery.trim(jQuery(this).val())){
                var span = jQuery(this).parent().find('span');
                span.addClass("i-warning");
                span.css("display","block");
                proceed = false;
            }
        });

        if(proceed) {
            jQuery(this).parent().find('span').addClass("i-save").css("display","block");
        }
    });
    
    // reset previously results and hide all messages on .keyup()
    jQuery("#login_form input").keyup(function() { 
        jQuery(this).parent().find('span').css("display","none");
    });

    openLoginInfo();
    setTimeout(closeLoginInfo, 1000);
});

function openLoginInfo() {
    jQuery('.b-form').css("opacity","0.01");
    jQuery('.box-form').css("left","-37%");
    jQuery('.box-info').css("right","-37%");
}

function closeLoginInfo() {
    jQuery('.b-form').css("opacity","1");
    jQuery('.box-form').css("left","0px");
    jQuery('.box-info').css("right","-5px"); 
}

jQuery(window).on('resize', function(){
    closeLoginInfo();
});
