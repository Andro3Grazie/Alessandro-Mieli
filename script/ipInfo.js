window.onload = function () {

    // Check if language preference is saved in cookies
    lan = getCookie("language");
    oldCookie = getCookie('cookieconsent_status');
    
    if (getCookie('askeMe') != 'false' && lan == 'it') {
        $('#modalLan').modal('toggle');
    }

    // $.getJSON("https://ipinfo.io/geo", function (data) {        
    
        // var country = data.country; // Get country name

        var country = "IT";
        
        var x = this.setInterval(function() { // every seconds check if cookies status has change
                    
            if(getCookie('cookieconsent_status') != oldCookie && getCookie('cookieconsent_status') != false) {
                
                oldCookie = getCookie('cookieconsent_status'); // Change the old variable with the new one

                console.log('cookie change to: ' + oldCookie);
                    
                if(oldCookie == 'deny') { // delete cookie
                    deleteCookies('language');
                }
                
                if(oldCookie == 'allow') { // Add cookie
                    checkLan(country);
                }
            }
        }, 100);

        // checkCountry(country);

        
        /* (Temporarily Discontinued)
        
        // Get latitude and longitude
        var coordinate = data.loc.split(",");

        $.getJSON(`https://api.openweathermap.org/data/2.5/onecall?lat=${coordinate[0]}&lon=${coordinate[1]}&appid=d35e3310d721b8d531e621c926bf4c2a`, function (informazioniZona) {
            
            // Get sunrise and sunset
            alba = informazioniZona.current.sunrise;
            tramonto = informazioniZona.current.sunset
            
            // chekTheme();
            // resetColor();


            // Check if Day/Night every 60 seconds
            var x = setInterval(function () {
                chekTheme();
            }, 60000);
        });
        */
    // });
};
