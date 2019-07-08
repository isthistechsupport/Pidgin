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

var data = {
	subject: "", 
	name: "", 
	company: "",
	country: "",
	phone: -1,
	email: "", 
	message: ""
};

var button = document.getElementById("submit");

button.addEventListener("click", function(event) {

	var subject = String(document.getElementById("subject").value);
	var name = String(document.getElementById("name").value);
	var company = String(document.getElementById("company").value);
	var country = String(document.getElementById("country").value);
	var phone = String(document.getElementById("phone").value);
	var email = String(document.getElementById("email").value); 
	var message = String(document.getElementById("message").value);

	if (subject == "" || name == "" || company == "" || phone == -1 || email == "" || message == "") {
		alert("No pueden haber campos vacíos")
	} else if (isNaN(String(document.getElementById("phone").value))) {
		alert("Número de teléfono no válido");
	} else if (!validateEmail(String(document.getElementById("email").value))) {
		alert("Correo electrónico no válido");
	} else if (document.getElementById("check").checked == false) {
		alert("Debes aceptar los términos y condiciones para continuar")
	} else {
		data = {
			subject: String(document.getElementById("subject").value),
			name: String(document.getElementById("name").value), 
			company: String(document.getElementById("company").value),
			country: String(document.getElementById("country").value),
			phone: String(document.getElementById("phone").value),
			email: String(document.getElementById("email").value), 
			message: String(document.getElementById("message").value)
		};
		console.log(data);

		fetch("https://pidgin.com.co/api/v1/contactSubmit", {
			method: "POST",
			body: JSON.stringify(data)
		}).then(res => {
			alert("Gracias por ponerse en contacto con nosotros, " + String(data.name) + ".")
		});
	}
	return false;
});