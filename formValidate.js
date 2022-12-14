/*
 * Handles the submit event of the survey form
 *
 * param e  A reference to the event object
 * return   True if no validation errors; False if the form has
 *          validation errors
 */
function validate(e) {
    
    // Hides all error elements on the page
	hideErrors();

	// Determine if the form has errors
	if (formHasErrors()) {
		// Prevents the form from submitting
		e.preventDefault();

		// When using onSubmit="validate()" in markup, returning false would prevent
		// the form from submitting
		return false;
	}

	// When using onSubmit="validate()" in markup, returning true would allow
	// the form to submit
	return true;


}

/*
 * Handles the reset event for the form.
 *
 * param e  A reference to the event object
 * return   True allows the reset to happen; False prevents
 *          the browser from resetting the form.
 */
function resetForm(e) {
	// Confirm that the user wants to reset the form.
	if (confirm('Delete all comments?')) {
		// Ensure all error fields are hidden
		hideErrors();

		// When using onReset="resetForm()" in markup, returning true will allow
		// the form to reset
		return true;
	}

	// Prevents the form from resetting
	e.preventDefault();

	// When using onReset="resetForm()" in markup, returning false would prevent
	// the form from resetting
	return false;
}

/*
 * Does all the error checking for the form.
 *
 * return   True if an error was found; False if no errors were found
 */
function formHasErrors() {

	//	Complete the validations below
	let returnBool = false;
	let requiredInputs = ["firstName", "lastName", "myEmailAddress", "telNumber", "comments"];
	let requiredErrors = ["firstName_error", "lastName_error", "email_error", "telNumber_error", "comments_error"];

	for(let i = 0; i <requiredInputs.length; i++)
	{
		if(document.getElementById(requiredInputs[i]).value == '')
		{
			document.getElementById(requiredErrors[i]).style.display = 'block';
			if(returnBool == false)
			{
				document.getElementById(requiredInputs[i]).focus();
			}
			returnBool = true;
		}
	}

	if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(document.getElementById("myEmailAddress").value)){
		document.getElementById("emailFormat_error").style.display = 'block';
		if(returnBool == false)
		{
			document.getElementById("myEmailAddress").focus();
		}
		returnBool = true;
	}

    if(!/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(document.getElementById("telNumber").value)){
		document.getElementById("telNumberFormat_error").style.display = 'block';
		if(returnBool == false)
		{
			document.getElementById("telNumber").focus();
		}
		returnBool = true;
	}

	return returnBool;

}

/*
 * Hides all of the error elements.
 */
function hideErrors() {
	// Get an array of error elements
	let error = document.getElementsByClassName("error");

	// Loop through each element in the error array
	for (let i = 0; i < error.length; i++) {
		// Hide the error element by setting it's display style to "none"
		error[i].style.display = "none";
	}
}

/*
 * Handles the load event of the document.
 */
function load() {

    document.getElementById("reset").addEventListener("click", resetForm);
    document.getElementById("contactForm").addEventListener("submit", validate);

	hideErrors();
}

// Add document load event listener
document.addEventListener("DOMContentLoaded", load);












