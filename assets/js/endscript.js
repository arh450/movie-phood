$(document).ready(function () {

    function renderRestart(html) {
        window.location.replace("index.html");
    }

    function getMovieCombo() {
        var getMovieInfo = localStorage.getItem('MovieInfo');
        var finalMovieInfo = JSON.parse(getMovieInfo);

        console.log(finalMovieInfo);

        $("#movie-poster").attr("src", finalMovieInfo.mImgSrc);
        $("#movie-title").text(finalMovieInfo.mTitle);
        $("#movie-year").text(`Year: ${finalMovieInfo.mYear}`);
        $("#movie-plot").text(finalMovieInfo.mPlot);
    }

    function getFoodCombo() {
        var getFoodInfo = localStorage.getItem('FoodInfo');
        var finalFoodInfo = JSON.parse(getFoodInfo);

        $("#food-poster").attr("src", finalFoodInfo.fImgSrc);
        $("#food-title").text(finalFoodInfo.fTitle);
        $("#food-recipe").attr("href", finalFoodInfo.fRecipe);
        console.log(finalFoodInfo);


    }

    function getDrinkCombo() {
        var getDrinkInfo = localStorage.getItem('DrinkInfo');
        var finalDrinkInfo = JSON.parse(getDrinkInfo);

        $("#drink-poster").attr("src", finalDrinkInfo.dImgSrc);
        $("#drink-title").text(finalDrinkInfo.dTitle);
        $("#drink-ins").text(finalDrinkInfo.dIns);
        console.log(finalDrinkInfo);




    }

    getMovieCombo();
    getFoodCombo();
    getDrinkCombo();


    $(document).on("click", "#thumb-down-btn", function (event) {
        renderRestart("index.html");
    });
    // THANK YOU MODAL IF USER SELECTS THUMBS UP BUTTON
    $('.modal').modal();

    $(document).on("click", "#home-btn", function (event) {
        renderRestart("index.html");
    });
});




