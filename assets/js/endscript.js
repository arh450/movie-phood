$(document).ready(function () {

    function renderRestart(html) {
        window.location.replace("index.html");
    }

    function getMovieCombo() {
        var getMovieInfo = localStorage.getItem('MovieInfo');
        var finalMovieInfo = JSON.parse(getMovieInfo);

        console.log(finalMovieInfo);

        $("#movie-poster").attr("src", finalMovieInfo.imgSrc);
        $("#movie-title").text(finalMovieInfo.title);
        $("#movie-year").text(`Year: ${finalMovieInfo.year}`);
        $("#movie-plot").text(finalMovieInfo.plot);
    }

    function getFoodCombo() {
        var getFoodInfo = localStorage.getItem('FoodInfo');
        var finalFoodInfo = JSON.parse(getFoodInfo);

        $("#food-poster").attr("src", finalFoodInfo.foodimgSrc);
        $("#food-title").text(finalFoodInfo.meal);
        $("#food-recipe").attr("href", finalFoodInfo.foodRecipe);
        console.log(finalFoodInfo);


    }

    function getDrinkCombo() {
        var getDrinkInfo = localStorage.getItem('DrinkInfo');
        var finalDrinkInfo = JSON.parse(getDrinkInfo);

        console.log(finalDrinkInfo);




    }

    getMovieCombo();
    getFoodCombo();
    getDrinkCombo();


    $(document).on("click", "#thumb-down-btn", function (event) {
        renderRestart("index.html");
    });

    $(document).on("click", "#thumb-up-btn", function (event) {

    });

    $(document).on("click", "#home-btn", function (event) {
        renderRestart("index.html");
    });
});