document.addEventListener("DOMContentLoaded", function() {
    var submitButton = document.getElementById("submit");
    var form = document.querySelector("form");

    submitButton.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent the form from submitting

        // Get form data
        var name = form.querySelector('input[name="name"]').value;
        var password = form.querySelector('input[name="password"]').value;

        // Create an object to store the form data
        var formData = {
            name: name,
            password: password
        };

        // Store the form data in local storage
        localStorage.setItem("formData", JSON.stringify(formData));

        // Redirect to the "gameover.html" page
        location.href = "../Gamepage/game.html";
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var RedirectHomepage = document.getElementById("return_homepage");

    RedirectHomepage.addEventListener("click", load);

    function load() {
        location.href = "../Homapage/homepage.html";
    }
});