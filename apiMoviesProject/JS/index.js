
$(function () {
    $('button').on('click', function () {
        let MovieSeriesInput = $('input').val(),
        url = 'http://www.omdbapi.com/',
        movieAlternative = {
            apiKey: 'a2d3b321',
            r: 'json',
            s: MovieSeriesInput
        };

        function displayMovies(info) {
            console.log(info);
        var movieHTML = ' ';
            $.each(info.Search, function(key, val){
                movieHTML += '<div class= "m-4 align-items-center  border border-warning rounded"> <div>' + info.Search[key].Title + " " + info.Search[key].Year + '</div>';
                movieHTML += '<img ';
                movieHTML += 'src="' + info.Search[key].Poster + '" ' + ' class= "m-4 fluid rounded ">';
                movieHTML += '</div>';
            });
    $('#output').html(movieHTML);
        }
    $.getJSON(url, movieAlternative, displayMovies);
    }) 
});
