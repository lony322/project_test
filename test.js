let numberOfFilms;
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function whatMovie() {
    let askLastFilm = ""; //Переменная для вопроса о последнем фильме
    while ((askLastFilm || "").length > 50 || askLastFilm === null || askLastFilm.length === 0) {
        askLastFilm = prompt('Какой последнйи фильм ты посмотрел?', '');
    }

    let askFilmScore;
    while (!askFilmScore || askFilmScore < 0 || askFilmScore > 10) {
        /* askFilmScore = prompt('Какую оценку ты дашь фильму?', ''); */
        askFilmScore = parseFloat(prompt('Какую оценку ты дашь фильму?', ''));
    }
    
    personalMovieDB.movies[askLastFilm] = askFilmScore;
}
whatMovie();

console.log(personalMovieDB);