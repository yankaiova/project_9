'use strict'

const numberOfFilms = +prompt('Сколько фильмов вы уже смотрели?', '');

console.log(numberOfFilms);

let personalMovieDB = {
    count:numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat:false   
};

if (personalMovieDB.count < 10) {
    console.log('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    console.log('Вы классический зритель');
} else if (personalMovieDB.count > 30) {
    console.log('Вы киноман');
} else {
    console.log('Произошла ошибка');
};

let nameOfMovies = [0, 0], raitingMovies = [];

for (let i = 0; i < 2; i++) {
    while (!nameOfMovies[i].length || nameOfMovies[i].length > 50) {
        nameOfMovies[i] = prompt('Один из последних просмотренных фильмов?', '');
    };
    raitingMovies[i] = prompt('На сколько оцените его?', '');
};

/*  
let i = 0; 
while (i < 2) {
    while (!nameOfMovies[i].length || nameOfMovies[i].length > 50) {
        nameOfMovies[i] = prompt('Один из последних просмотренных фильмов?', '');
   };
   raitingMovies[i] = prompt('На сколько оцените его?', '');
   i++;
};
*/

/*
let i = 0;
  while (i < 2) {
    nameOfMovies[i] = prompt('Один из последних просмотренных фильмов?', '');
    if (nameOfMovies[i].length > 0 && nameOfMovies[i].length < 50) {
        raitingMovies[i] = prompt('На сколько оцените его?', '');
        i++;
  };
};
*/

personalMovieDB.movies = {
    nameOfMovies,
    raitingMovies
};

console.log(personalMovieDB.movies);




