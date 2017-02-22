function showResponse(responseText, statusText)  { 
	if (statusText == 'success') {
		jQuery('#contact-container').html('<h3>Message sent</h3>'); 
		jQuery('#output').html('<p>' + jQuery('someText', responseText).html()  + '</p>'); 
	} else {
		alert('status: ' + statusText + '\n\nSomething is wrong here');
	}
}

function showRequest(formData, jqForm, options) { 
	var form = jqForm[0];
	var validRegExp = /^[^@]+@[^@]+.[a-z]{2,}$/i;
	// or use 
	// if (!$('input[@name=email]').fieldValue()) { 
	if (!form.author.value) { 
		jQuery('#output').html('<div class="output2">Please fill the Name field!</div>'); 
		return false; 
	} else if (!form.email.value) {
		jQuery('#output').html('<div class="output2">Please fill the Email field!</div>'); 
		return false; 
	} else if (form.email.value.search(validRegExp) == -1) {
		jQuery('#output').html('<div class="output2">Please provide a valid Email address!</div>'); 
		return false; 
	}
	else if (!form.title.value) {
		jQuery('#output').html('<div class="output2">Please fill the Subject field!</div>'); 
		return false; 
	}
	else if (!form.message.value) {
		jQuery('#output').html('<div class="output2">Please fill the Message field!</div>'); 
		return false; 
	}
	 else {	   
	 jQuery('#output').html('Sending message...!');  		
		return true;
	}
}

jQuery(document).ready(function() { 
    var options = { success: showResponse, beforeSubmit: showRequest}; 
    jQuery('#my-form').submit(function() { 
        jQuery(this).ajaxSubmit(options); 
        return false; 
    });
}); 