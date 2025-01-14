const API_KEY = "2663a47da530c754207396eef5db5fb1"; // Add your API key

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('search-btn').addEventListener('click', function (ev) {
        ev.preventDefault();
        let title = document.getElementById('search').value;

        if (title.trim()) {
            fetchMovie(title);
            document.getElementById('details-page').style.display = 'block'; // Show the details page
        } else {
            document.getElementById('details-page').style.display = 'none'; // Hide the details page
        }
    });
});

function fetchMovie(title) {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${title}`)
        .then(response => response.json())
        .then(data => {
            let movieData = data.results[0];

            document.getElementById('title').textContent = movieData.title;
            document.getElementById('release_date').textContent = movieData.release_date;
            document.getElementById('overview').textContent = movieData.overview;
            document.getElementById('vote_average').textContent = movieData.vote_average;
            document.getElementById('original_language').textContent = movieData.original_language;
            document.getElementById('poster').src = 'https://image.tmdb.org/t/p/w500' + movieData.poster_path;
        })
        .catch(error => console.error(error));
}