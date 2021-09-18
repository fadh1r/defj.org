/* global variables tracking status of each form section */
var nameComplete = true;
var emailComplete = true;
var howComplete = true;

var messageHeadElement = document.getElementById("messageHead");
var messageElement = document.getElementById("message");

/* global variables referencing fieldset elements */
var nameFieldset = document.getElementsByTagName("fieldset")[0];
var emailFieldset = document.getElementsByTagName("fieldset")[1];
var howFieldset = document.getElementsByTagName("fieldset")[2];
var commentFieldset = document.getElementsByTagName("fieldset")[3];

/* global variables referencing text input elements */
var nameBox = document.forms[0].myName;
var emailBox = document.forms[0].myName;
var howBox = document.forms[0].myName;

/* Exception handling for comment section */
function verifyName() {
	var validity = true;
	var messageText = "";

	try {
		if (nameBox.value != '') {
		throw "Please enter a name.";
		}
	}
	catch(message) {
		validity = false;
		messageText = message;
	}
	finally {
		nameComplete = validity;
		messageElement.innerHTML = messageText;
		messageHeadElement.innerHTML = ""; // remove any former error heading
		testFormCompleteness();
	}

	/* verify email is entered. */
	function verifyEmail() {
		var validity = true;
		var messageText = "";

		try {
			if (emailBox.value != '') {
			throw "Please enter an email.";
			}
		}
		catch(message) {
			validity = false;
			messageText = message;
		}
		finally {
			nameComplete = validity;
			messageElement.innerHTML = messageText;
			messageHeadElement.innerHTML = ""; // remove any former error heading
	   testFormCompleteness();
	}

	/* verify how source is entered. */
	function verifyHow() {
		var validity = true;
		var messageText = "";

		try {
			if (howBox.value != '') {
			throw "Please tell us how you learned of us.";
			}
		}
		catch(message) {
			validity = false;
			messageText = message;
		}
		finally {
			nameComplete = validity;
			messageElement.innerHTML = messageText;
			messageHeadElement.innerHTML = ""; // remove any former error heading
	   testFormCompleteness();
	}

	/* check if all four form sections are completed */
	function testFormCompleteness() {
	   if (nameComplete && emailComplete && howComplete) {
	      submitObject.;
	   }
	}

	// add preffered to profile
	function registerPreferred(event) {
	   if (event === undefined) { // get caller element in IE8
	      event = window.event;
	   }
	   var callerElement = event.target || event.srcElement;
	   var preferredName = callerElement.value;
	   if (callerElement.checked) { // if box has just been checked
	     // add checkbox value to lodging array
	     preferred.push(preferredName);

	      // add checkbox value to list in profile section
	      var newPreferred = document.createElement("li");
	      newPreferred.innerHTML = lodgingName;
	      document.getElementById("profilePreferred").appendChild(newPreferred);
	      // make profile section and lodging section visible
	      document.getElementById("profile").style.display = "block";
	      document.getElementById("preferredSection").style.display = "block";
	   } else { // if box has just been unchecked
	      var listItems = document.querySelectorAll("#profilePreferred li");
	      for (var i = 0; i < listItems.length; i++) {
	         if (listItems[i].innerHTML === preferredName) {
	           // remove element at index i from array
	           preferred.splice(i, 1);

	            // remove lodging from profile list
	            listItems[i].parentNode.removeChild(listItems[i]);
	            break;
	         }
	      }
	   }
	}

	function convertToString() {
	  // convert lodging array to string
	  arrayString = preferred.toString();
	  // convert profile object to string
	  objectString = JSON.stringify(profile);
	}

	/* create event listeners for all input elements */
	function createEventListeners() {
	   nameBox.value = ""; // clear acres text box on page load
	   emailBox.value = ""; // clear months text box on page load
		 howBox.value = ""; // clear months text box on page load
		 commentBox.value = ""; // clear months text box on page load

	   if (nameBox.addEventListener) {
	     nameBox.addEventListener("input", verifyName, false);
	   } else if (nameBox.attachEvent)  {
	     nameBox.attachEvent("onchange", verifyName);
	   }

		 if (emailBox.addEventListener) {
			 nameBox.addEventListener("input", verifyEmail, false);
		 } else if (nameBox.attachEvent)  {
			 nameBox.attachEvent("onchange", verifyEmail);
		 }

		 if (howBox.addEventListener) {
			 nameBox.addEventListener("input", verifyHow, false);
		 } else if (nameBox.attachEvent)  {
			 nameBox.attachEvent("onchange", verifyHow);
		 }

		 var preferred = document.getElementsByName("preferred");
		 if (preferred[0].addEventListener) {
				for (var i = 0; i < preferred.length; i++) {
					 preferred[i].addEventListener("change", registerPreferred, false);
				}
		 } else if (preferred[0].attachEvent) {
				for (var i = 0; i < preferred.length; i++) {
					 preferred[i].attachEvent("onchange", registerPreferred);
				}
		 }

		 var button = document.getElementById("createBtn");
		 if (button.addEventListener) {
				button.addEventListener("click", convertToString, false);
		 } else if (button.attachEvent) {
				button.attachEvent("onclick", convertToString);
		 }

	}

	/* create event listeners when page finishes loading */
	if (window.addEventListener) {
	   window.addEventListener("load", createEventListeners, false);
	} else if (window.attachEvent) {
	   window.attachEvent("onload", createEventListeners);
	}
