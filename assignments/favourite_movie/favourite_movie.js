const movies = [];

function favouriteMovie(operation, movie) {
    if(operation==="add")
    {
        movies.push(movie)
    }
    if(operation==="remove")
    {
        movies.pop(movie)
    }
    return movies
}

module.exports = favouriteMovie;
