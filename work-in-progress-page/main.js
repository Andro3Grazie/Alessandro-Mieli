$(document).ready(function() {
	var counter = 0;
	var c = 0;
	var i = setInterval(function(){
		$(".loading-page .counter h1").html(c + "%");
		$(".loading-page .counter hr").css("width", c + "%");

		counter++;
		c++;

		if(counter == 75) {
			clearInterval(i);
			setTimeout(function myFunction() {
				var i = setInterval(function(){
					$(".loading-page .counter h1").html(c + "%");
					$(".loading-page .counter hr").css("width", c + "%");

					counter++;
					c++;

					if(counter == 100) {
						clearInterval(i);
						setTimeout(function myFunction() {
							var i = setInterval(function(){
								$(".loading-page .counter h1").html(c + "%");
								$(".loading-page .counter hr").css("width", c + "%");

								counter++;
								c++;

								if(counter == 101) {
									clearInterval(i);
									location.replace("../");
								}
							}, 100);
						}, 500);
					}
				}, 75);
			}, 1000);
		}
	}, 50);
});