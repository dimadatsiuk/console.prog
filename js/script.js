"use strict";



const pesonalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        pesonalMovieDB.count = prompt('How many films have you seen?', '');
    
        while (pesonalMovieDB.count == '' || pesonalMovieDB.count == null || isNaN(pesonalMovieDB.count)) {
            /* console.log('error'); */
            pesonalMovieDB.count = prompt('How many films have you seen?', '');
        }
    },

    rememberMyFilms: function() {
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
    },

    detectPersonalLevel: function() {
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
    },

    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(pesonalMovieDB);
        }
    },

    toggleVisibleMyDB: function() {
        if (pesonalMovieDB.privat == false) {
            pesonalMovieDB.privat = true;
        } else {
            pesonalMovieDB.privat = false;
        }
    },

    writeYourGenres: function() {
        for (let i = 1; i <= 3; i++) {
            
            let genre = prompt(`what is yor favourite genre number ${i}`, '');
        
        
            if (genre != null && genre != ''  && genre.length < 50 ) {
                pesonalMovieDB.genres[i - 1] = genre;
                console.log('done');
            } else {
                console.log('error');
                i--;
            }  
            
        }
        pesonalMovieDB.genres.forEach((item, i) => {
            console.log(`Favourite genre ${i + 1} is ${item}`)
        });
        
    },

    



};

