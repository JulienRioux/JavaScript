// create an array of movie Objects
var movies = [
    {
        title: "Django",
        rating: "5",
        seen: true
    },
    {
        title: "Star Wars",
        rating: "4.5",
        seen: false
    },
    {
        title: "Wolf of WallStreet",
        rating: "4.7",
        seen: true
    },
    {
        title: "Pinaple Express",
        rating: "4.6",
        seen: true
    }
]

function printMovie(movie) {
    // create a variable that will be printed
    var result = "You have ";
    // check if the user have seen the movie
    var watched = "not seen";
    if (movie.seen === true) {
        watched = "watched";
    }
    // add the watched value, title and rating
    result += watched + " \"" + movie.title + "\" - " + movie.rating + " stars";
    // print the movie description
    console.log(result);
}

// create an function that print all the movie invormations for all movies in the list
Array.prototype.printAllMovies = function() {
    // print the number of movie in the movies list
    console.log("There is " + this.length + " movies:\n ");
    // print the informations for each movie
    for (var i= 0; i < this.length; i++) {
        printMovie(this[i]);
    }
}

movies.printAllMovies();



// *************
// Console print
// *************

// There is 4 movies:
 
// You have watched "Django" - 5 stars
// You have not seen "Star Wars" - 4.5 stars
// You have watched "Wolf of WallStreet" - 4.7 stars
// You have watched "Pinaple Express" - 4.6 stars
