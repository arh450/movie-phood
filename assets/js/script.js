$(document).ready(function () {

  // Materialize JS to make carousel function
  var elems = document.querySelectorAll(".carousel");
  var instances = M.Carousel.init(elems);

  var instance = M.Carousel.init({
    fullWidth: true,
    indicators: true,
  });


  function renderHtml(html) {
    $("#user-input-section").load(html);
  }

  // On click of #app-start button ("start on html") #about-area (title & description is hidden)
  // Then the empty #user-input-section is loaded with the moviesection html
  $(document).on("click", "#app-start", function (event) {
    event.preventDefault(event);
    $("#about-area").hide();
    $("#carousel").hide();

    renderHtml("moviesection.html");
  });






});



