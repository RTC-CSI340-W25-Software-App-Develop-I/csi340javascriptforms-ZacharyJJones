const form = document.querySelector("form");

// #1: Capture Form Data
function submitCallback(event) {
	event.preventDefault();

	const data = {
		name: event.target.name.value,
		email: event.target.email.value,
		phone: event.target.phone.value,
		reason: event.target.reason.value,
		message: event.target.message.value,
	};

	renderConfirmation(data);
}

// #2: Render Form Data to DOM
function renderConfirmation(formData) {
	const h2 = document.createElement("h2");
	h2.textContent = "Submission Confirmation";

	// praise be https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in
	for (const property in formData) {
		const element = document.createElement("p");
		element.textContent = property + ": " + formData[property];
		h2.append(element);
	}

	document.querySelector(".confirmation").append(h2);
}

form.addEventListener("submit", submitCallback);
