"use strict";

let  numberOfFilms = +prompt('How many films have you seen?', '');

let pesonalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 2; i++) {
    const a = prompt('one of the last films you have seen?', ''),
          b = prompt('how would you review it?', '');


    if (a != null && b != null && a != '' && b != '' && a.length < 50 ) {
        pesonalMovieDB.movies[a] = b;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }    
}

while (numberOfFilms <= 10) {
    console.log('youve watched too little movies');
    numberOfFilms++;
} while (numberOfFilms >= 10 && numberOfFilms < 30) {
    console.log('youre typical viwer');
    numberOfFilms++;
} while (numberOfFilms >= 30) {
    console.log('youre cool viewer');
    numberOfFilms++;
} 

/* for (let i = 0; i < 10; i++) {
    console.log('youve watched too little movies');
} */

/* if (pesonalMovieDB.count < 10) {
    console.log('youve watched too little movies');
} else if (pesonalMovieDB.count >= 10 && pesonalMovieDB.count < 30) {
    console.log('youre typical viwer');
} else if (pesonalMovieDB.count >= 30) {
    console.log('youre cool viewer');
} else if (pesonalMovieDB.count == null) {
    console.log('error');
} else {
    console.log('error');
} */


console.log(pesonalMovieDB);
