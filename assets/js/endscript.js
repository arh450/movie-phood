$(document).ready(function () {

    // Function to load index.html
    function renderRestart(html) {
        window.location.replace("index.html");
    }

    // Function that retrieves the userMovieInfo object (see script.js) from local storage and display data to movie card on html
    function getMovieCombo() {
        var getMovieInfo = localStorage.getItem('MovieInfo');
        var finalMovieInfo = JSON.parse(getMovieInfo);

        console.log(finalMovieInfo);

        $("#movie-poster").attr("src", finalMovieInfo.mImgSrc);
        $("#movie-title").text(finalMovieInfo.mTitle);
        $("#movie-year").text(`Year: ${finalMovieInfo.mYear}`);
        $("#movie-plot").text(finalMovieInfo.mPlot);
    }

    // Function that retrieves the userFoodInfo object (see script.js) from local storage and display data to movie card on html
    function getFoodCombo() {
        var getFoodInfo = localStorage.getItem('FoodInfo');
        var finalFoodInfo = JSON.parse(getFoodInfo);

        console.log(finalFoodInfo);

        $("#food-poster").attr("src", finalFoodInfo.fImgSrc);
        $("#food-title").text(finalFoodInfo.fTitle);
        $("#food-recipe").attr("href", finalFoodInfo.fRecipe);
    }

    // Function that retrieves the userDrinkInfo object (see script.js) from local storage and display data to movie card on html
    function getDrinkCombo() {
        var getDrinkInfo = localStorage.getItem('DrinkInfo');
        var finalDrinkInfo = JSON.parse(getDrinkInfo);

        console.log(finalDrinkInfo);

        $("#drink-poster").attr("src", finalDrinkInfo.dImgSrc);
        $("#drink-title").text(finalDrinkInfo.dTitle);
        $("#drink-ins").text(finalDrinkInfo.dIns);

    }

    // Calls of functions described above
    getMovieCombo();
    getFoodCombo();
    getDrinkCombo();

    // On click of thumbs down button, which give user option to start application over if they are not satisfied with given combination
    $(document).on("click", "#thumb-down-btn", function (event) {
        renderRestart("index.html");
    });

    // THANK YOU MODAL IF USER SELECTS THUMBS UP BUTTON
    $('.modal').modal();

    // Home button to give user option to try app again if they are satisfied and want to keep using application
    $(document).on("click", "#home-btn", function (event) {
        renderRestart("index.html");
    });

});




