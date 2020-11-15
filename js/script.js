"use strict";

let  numberOfFilms;


function start() {
    numberOfFilms = prompt('How many films have you seen?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        /* console.log('error'); */
        numberOfFilms = prompt('How many films have you seen?', '');
    }
}

start();

const pesonalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};





function rememberMyFilms() {
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
}

/* rememberMyFilms(); */



function detectPersonalLevel() {
    if (pesonalMovieDB.count < 10) {
        console.log('youve watched too little movies');
    } else if (pesonalMovieDB.count >= 10 && pesonalMovieDB.count < 30) {
        console.log('youre typical viwer');
    } else if (pesonalMovieDB.count >= 30) {
        console.log('youre cool viewer');
    } else if (pesonalMovieDB.count == null) {
        console.log('error');
    } else {
        console.log('error');
    }
}

/* detectPersonalLevel(); */




function showMyDB(hidden) {
    if (!hidden) {
        console.log(pesonalMovieDB);
    }
}

showMyDB(pesonalMovieDB.privat);

/* function showMyDB() {
    if (pesonalMovieDB.privat == false) {
        console.log(pesonalMovieDB);
    }
}

showMyDB(); */




/* console.log(pesonalMovieDB); */


function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        const genre = prompt(`what is yor favourite genre number ${i}`, '');
    
    
        if (genre != null && genre != ''  && genre.length < 50 ) {
            pesonalMovieDB.genres[i - 1] = genre;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }  
        
    }
}

writeYourGenres();

