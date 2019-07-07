$('a[href^="#"]').click(function () {
	$('html, body').animate({
		scrollTop: $('[name="' + $.attr(this, 'href').substr(1) + '"]').offset().top
	}, 500);
	return;
});

function validateEmail(mail) {
	if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)){
		return (true)
	}
	return (false)
}

var data = {subject: "", 
name: "", 
company: "",
country: "",
phone: -1,
email: "", 
message: ""};

var button = document.getElementById("submit");

button.addEventListener("click", function(event) {
	if (isNaN(String(document.getElementById("phone").value))) {
		alert("Número de teléfono no válido");
	} else if (!validateEmail(String(document.getElementById("email").value))) {
		alert("Correo electrónico no válido");
	} else {
		
		data = {subject: String(document.getElementById("subject").value),
		name: String(document.getElementById("name").value), 
		company: String(document.getElementById("company").value),
		country: String(document.getElementById("country").value),
		phone: String(document.getElementById("phone").value),
		email: String(document.getElementById("email").value), 
		message: String(document.getElementById("message").value)};
		console.log(data);

		fetch("http://someurl.com", {
			method: "POST",
			body: JSON.stringify(data)
		}).then(res => {
			alert("Gracias por ponerse en contacto con nosotros, " + String(data.name) + ".")
		});
	}
});