$(document).ready(function() {

    $("button").on("click", function() {
        var APIKey = "166a433c57516f51dfab1f7edaed8413";
        var queryURL = "https://api.openweathermap.org/data/2.5/weather?" +
            "q=seattle&appid=" + APIKey;
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response) {
            console.log(response);
        })
    });
});