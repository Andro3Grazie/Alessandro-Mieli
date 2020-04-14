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
// Scroll to Top 
$(window).scroll(function() {
    // If page is scrolled more than 50px
    if ($(this).scrollTop() >= 50) { 
        // Fade in the arrow
        $('#return-to-top').fadeIn(200);    
    } else {
        // Else fade out the arrow
        $('#return-to-top').fadeOut(200);   
    }
});
// When arrow is clicked
$('#return-to-top').click(function() {
    // Scroll to top of body
    $('body,html').animate({
        scrollTop : 0
    }, 500);
});
// When arrow is clicked
$('#return-to-top-mobile').click(function() {
    // Scroll to top of body
    $('body,html').animate({
        scrollTop : 0
    }, 500);
});

// Scroll to contact me
$('#contactme-link').click(function() {
    var el = document.querySelector("#contactme-section");

    // scroll to element
    el.scrollIntoView({ behavior: 'smooth' });    
});