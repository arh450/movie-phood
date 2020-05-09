$(document).ready(function () {

    // Based on what the user inputed for a movie(s) in the movie-user-input from the moviesection.html

    // on click of #movie-submit button (shown as submit on HTML)
    $(document).on("click", "#movie-submit", function (event) {
        event.preventDefault(event);

        // Empty Array that stores the user's movie inputs
        var userMovieInputs = [];

        // Variables that are the value of the #movie-user-input (ex. I type in Scarface, Star Wars, Titanic)
        var userMovie1 = $("#movie-user-input1").val();
        var userMovie2 = $("#movie-user-input2").val();
        var userMovie3 = $("#movie-user-input3").val();

        // Push of the user's 3 movie inputs into the userMovieInputs array
        userMovieInputs.push(userMovie1, userMovie2, userMovie3);

        // Random generated index position of the userMovieInputs Array
        var randomUserMovieInput = Math.floor(Math.random() * (userMovieInputs.length));
        // console.log(randomUserMovieInput);

        // Name of random movie from the userMovieInputsArray
        console.log(userMovieInputs[randomUserMovieInput])

        // Themoviedb API Key
        var movieApiKey = "2938a7e57a5497d72c32f5b9a3fba36f";

        // URL to search a movie by name using the name of the random movie from the userMovieInputsArray
        var movieQueryURL = `https://api.themoviedb.org/3/search/movie?api_key=${movieApiKey}&language=en-US&query=${userMovieInputs[randomUserMovieInput]}&page=1&include_adult=false`

        // AJAX call to get id number of the movie was passed through the movieQueryURL (ex. Scarface's id number is 111)
        $.get(movieQueryURL).then(function (userResponse) {
            console.log(userResponse);

            // Variable that is the id for the most popular version of a certain movie(?)
            // By index position (ex. 1983 scarface is at 0 position as it has the highest themoviedb popualrity rating,  1932's scarface has a index position of 1 as it is the second most popular verison of a movie by that same name)
            var movieId = userResponse.results[0].id;
            console.log(movieId);

            // After getting the movieId number, it is passed through another themoviedb url relating to movie recommendations.
            var idQueryURL = `https://api.themoviedb.org/3/movie/${movieId}/recommendations?api_key=${movieApiKey}&language=en-US&page=1`;

            // AJAX call to generate random movie from themoviedb recommendations object
            $.get(idQueryURL).then(function (idResponse) {
                console.log(idResponse);

                // variable that is the randomized index position of the idResponse call
                var randomMovieResult = Math.floor(Math.random() * idResponse.results.length);
                // console.log(randomMovieResult);

                // Varaible that takes that randomMovieResult number and gets the title of the randomized movie title
                var finalMovieTitle = idResponse.results[randomMovieResult].title;
                // console.log(finalMovieTitle);

                // For test purposes to display to page
                $("#test-random-movie").text(`You should check out: ${finalMovieTitle}`);
            });
        });
    });
});