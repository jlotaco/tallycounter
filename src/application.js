var amount, unit, stepping;

unit = "pint";

function showBack() {
    dizmo.showBack();
    dizmo.setHeight(300);
	dizmo.setWidth(300);
	DizmoElements('#unit-select').dselectbox('update');
}

function showFront(){
	dizmo.setHeight(180);
	dizmo.setWidth(180);
	dizmo.showFront();
}


// As soon as the dom is loaded, and the dizmo is ready, instantiate the main class
window.document.addEventListener('dizmoready', function() {
	stepping = 0.5;
	dizmo.setHeight(180);
	dizmo.setWidth(180);

	dizmo.onShowBack(showBack);


	DizmoElements('#stepping-slider').dslider({ 
	    orientation: 'horizontal',
	    step: 0.25,
	    max: 10,

	    onSliderMoved: function(value, e) {
			console.log(value);
			stepping = value;
			$('#stepping').text(value);
	    }
	  });

	DizmoElements('#stepping-slider').dslider('update');

	DizmoElements('#stepping-slider').dslider('value', 0.5);
    DizmoElements('#stepping-slider').dslider('update');


	
	if (dizmo.privateStorage.getProperty('amount') === null) {
		amount = 0;
	}
	else {
		amount = dizmo.privateStorage.getProperty('amount');
	}
	
	if (dizmo.privateStorage.getProperty('stepping') === null) {
		stepping = 0.5;
	}
	else {
		stepping = dizmo.privateStorage.getProperty('stepping');
	}

	if (dizmo.privateStorage.getProperty('unit') === null) {
		unit = "pint";
	}
	else {
		unit = dizmo.privateStorage.getProperty('unit');
	}

    // Your code should be in here so that it is secured that the dizmo is fully loaded
    document.getElementById('doneBtn').onclick = function() {
        showFront();
        dizmo.privateStorage.setProperty('stepping', DizmoElements('#stepping-slider').dslider('value'));
    };

    $('#display').on('click',function(){
    	amount = amount + stepping;
    	$('#amount').text(amount);

	});

	DizmoElements('#reset-button').on('click',function(){
		amount = 0;
		$('#amount').text(amount);
	});


});
