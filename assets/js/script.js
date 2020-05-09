(document).ready(function () {

    // On click of #app-start button ("start on html") #about-area (title & description is hidden)
    // Then the empty #user-input-section is loaded with the moviesection html
    $(document).on("click", "#app-start", function (event) {
        event.preventDefault(event);
        $("#about-area").hide();
        // renderSectionContainer();
        $("#user-input-section").load("moviesection.html");

    });





});