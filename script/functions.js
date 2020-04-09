function openNav() { // Open navbar on mobile
    document.getElementById("navbarSupportedContent").style.width = "100%";
}
function closeNav() { // Close navbar on mobile
    document.getElementById("navbarSupportedContent").style.width = "0";
}
$(document).ready(function() { // Change color on contact link hover
    $('#contact-item-a').hover(function(){     
        $('#contact-item-b').toggleClass('contact-item-hover');
        $('#contact-item-c').toggleClass('contact-item-hover');  
    }),
    $('#contact-item-b').hover(function(){     
        $('#contact-item-a').toggleClass('contact-item-hover');
        $('#contact-item-c').toggleClass('contact-item-hover');  
    }),
    $('#contact-item-c').hover(function(){     
        $('#contact-item-a').toggleClass('contact-item-hover');
        $('#contact-item-b').toggleClass('contact-item-hover');  
    });
});
