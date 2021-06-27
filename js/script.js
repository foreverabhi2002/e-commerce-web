// Hamburger
function myFunction() {
  	var x = document.getElementById("navElements");
	if (x.style.display === "block") {
	    x.style.display = "none";
	} else {
	    x.style.display = "block";
	}
}
// On scroll
window.addEventListener("scroll", function(){
    const header = document.querySelector(".header");
    header.classList.toggle("sticky", window.scrollY > 0);
});

// For carousel of images
var swiper = new Swiper('.swiper-container', 
{
	pagination: 
	{
		el: '.swiper-pagination',
		    dynamicBullets: true,
	},
	autoplay: 
	{
		delay: 3400,
		speed: 300,
	},
});
