var started = false;
var canvas, context;
var stampId = '';
var lastColor = 'black';
var lastStampId = '';

function init() {
	canvas = $('#imageView').get(0);
	context = canvas.getContext('2d');
	
	// Auto-adjust canvas size to fit window.
	canvas.width  = window.innerWidth - 75;
	canvas.height = window.innerHeight - 75;
  
	//$('#container').get(0).addEventListener('mousemove', onMouseMove, false);
	canvas.addEventListener('mousemove', onMouseMove, false);
	canvas.addEventListener('click', onClick, false);
	
	// Add events for toolbar buttons.
	
	$('#broccoli').get(0).addEventListener('click', function(e) { onStamp(e.target.id); }, false);
	$('#avocado').get(0).addEventListener('click', function(e) { onStamp(e.target.id); }, false);
	$('#chilli').get(0).addEventListener('click', function(e) { onStamp(e.target.id); }, false);
	$('#cucumber').get(0).addEventListener('click', function(e) { onStamp(e.target.id); }, false);
	$('#mushroom').get(0).addEventListener('click', function(e) { onStamp(e.target.id); }, false);
    $('#vegan').get(0).addEventListener('click', function(e) { onStamp(e.target.id); }, false);
}

function onMouseMove(ev) {
	var x, y;
		
	// Get the mouse position.
	if (ev.layerX >= 0) {
		// Firefox
		x = ev.layerX - 50;
		y = ev.layerY - 5;
	}
	else if (ev.offsetX >= 0) {
		// Opera
		x = ev.offsetX - 50;
		y = ev.offsetY - 5;
	}
	
	// if (!started) {
	// 	started = true;

	// 	context.beginPath();
	// 	context.moveTo(x, y);		
	// }
	// else {
	// 	context.lineTo(x, y);
	// 	context.stroke();
	// }
	
	$('#stats').text(x + ', ' + y);
}

function onClick(e) {
	if (stampId.length > 0) {
		context.drawImage($(stampId).get(0), e.pageX - 90, e.pageY - 60, 200, 200);
	}
}


function onStamp(id) {
	// Update the stamp image.
	stampId = '#' + id;

    if (lastStampId == stampId) {
        // User clicked the selected stamp again, so deselect it.
        stampId = '';
    }

	$(lastStampId).css("border", "0px dashed white");
	$(stampId).css("border", "1px dashed black");
	
	// Store stamp so we can un-highlight it next time around.
	lastStampId = stampId;	
}

// function onSave() {
// 	var img = canvas.toDataURL("image/png");
// 	document.write('<img src="' + img + '"/>');
// }