var amount, unit;

unit = "pint";

function showBack() {
    dizmo.showBack();
}

// As soon as the dom is loaded, and the dizmo is ready, instantiate the main class
window.document.addEventListener('dizmoready', function() {
	
	if (dizmo.privateStorage.getProperty('amount') === null) {
		amount = 0;
	}
	else {
		amount = dizmo.privateStorage.getPropert('amount');
	}
	if (dizmo.privateStorage.getProperty('unit') === null) {
		unit = "pint";
	}
	else {
		unit = dizmo.privateStorage.getPropert('unit');
	}

    // Your code should be in here so that it is secured that the dizmo is fully loaded
    document.getElementById('doneBtn').onclick = function() {
        dizmo.showFront();
    };

    $('#display').on('click',function(){
    	amount++;
    	$('#amount').text(amount / 2);

	});

	DizmoElements('#reset-button').on('click',function(){
		amount = 0;
		$('#amount').text(amount);
	});


});
