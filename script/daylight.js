var alba;
var tramonto; 
var darkMode = false;

function checkTime() {
    currentDate = Math.round(new Date().getTime()/1000);
    
    if (currentDate >= tramonto || currentDate <= alba) {
        // Nighttime
        return true;
    }
    else {
        // Daylight
        return false;
    }
}
function invertColor() {
    var link = document.createElement( "link" );
    link.rel = "stylesheet";
    link.href = "style/invert-color.css";
    link.id = "invertColor";

    document.getElementsByTagName("head")[0].appendChild(link);
}
function resetColor() {
    $( "#invertColor" ).remove();
}
function chekTheme() {
    if (checkTime()) {
        // Nighttime
        if(!darkMode) {
            invertColor();
            darkMode = true;
        }
    }
    else {
        // Daylight
        if (darkMode) {
            resetColor();
            darkMode = false;
        }
    }
}