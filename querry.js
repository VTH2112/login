$(document).ready(function () {
    $("#signUp-show").click(function () {
        $("#login-group").hide(500);
        $("#signUp-group").show(500);
    });
    $("#login-Show").click(function () {
        $("#login-group").show(500);
        $("#signUp-group").hide(500);
    });
});