document.addEventListener("DOMContentLoaded", function() {
    var play = document.getElementById("play_btn");

    play.addEventListener("click", load);

    function load() {
        location.href = "../Sign Up Page/SignUp.html";
    }
});