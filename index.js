$('a[href^="#"]').click(function () {
    $('html, body').animate({
        scrollTop: $('[name="' + $.attr(this, 'href').substr(1) + '"]').offset().top
    }, 500);
    return;
});

var data = {subject: "", 
			name: "", 
			lastname: "",
			company: "",
			country: "",
			phone: "",
			email: "", 
			message: ""};

var button = document.getElementById("submit");

button.addEventListener("click", function(event) {
    data = {subject: String(document.getElementById("subject").value),
    		name: String(document.getElementById("name").value), 
			lastname: String(document.getElementById("lastname").value),
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
});