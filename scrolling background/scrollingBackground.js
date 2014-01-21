var pix;
var img_1;
var img_2;
var canvas;
var context;

function init() {
	pix = -30;
	img_1 = new Image();
	img_2 = new Image();
	canvas = document.getElementById("gameCanvas");
	context = canvas.getContext("2d");
}

function test_animation() {
	init();

	img_1.src = 'http://rack.2.mshcdn.com/media/ZgkyMDEzLzExLzA1LzQ0L2phc29uY2hhcG1hLjdmOGY2LmpwZwpwCXRodW1iCTg1MHg1OTA-CmUJanBn/9b18b8e3/c3a/jasonchapman.jpg';
	img_2.src = 'http://rack.2.mshcdn.com/media/ZgkyMDEzLzExLzA1LzQ0L2phc29uY2hhcG1hLjdmOGY2LmpwZwpwCXRodW1iCTg1MHg1OTA-CmUJanBn/9b18b8e3/c3a/jasonchapman.jpg';

	$("#text_data").text("asdf");	

	window.requestAnimationFrame(animate);
}

function animate(chumma) {	
	context.save();
	context.translate(pix, 0);
	context.drawImage(img_1, 0, 0, 500, img_1.height * (500/img_1.width));
	context.drawImage(img_2, 500, 0, 500, img_2.height * (500/img_2.width));
	context.restore();
	pix -= 1;
	if(pix < -500)
		pix = 0;
	window.requestAnimationFrame(animate);
}