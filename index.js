$('a[href^="#"]').click(function () {
    $('html, body').animate({
        scrollTop: $('[name="' + $.attr(this, 'href').substr(1) + '"]').offset().top
    }, 500);
    return;
});

var data = { email: "" };
var button = document.getElementById("submit");


button.addEventListener("click", function(event) {
    data = { email: String(document.getElementById("emailInput").value) };
	//console.log(data);

    fetch("http://atarraya.eastus.cloudapp.azure.com/api/submitEmail", {
        method: "POST",
        body: JSON.stringify(data)
    }).then(res => {
        alert(String(data.email) + "ok")
    });
});