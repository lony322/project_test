
let numberOfFilms;
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function whatMovie() {
    let askLastFilm; //Переменная для вопроса о последнем фильме
    while ((askLastFilm || "").length > 50 || askLastFilm === null || (askLastFilm || "").length === 0 || askLastFilm === undefined) {
        askLastFilm = prompt('Какой последнйи фильм ты посмотрел?', '');
    }

    let askFilmScore;
    while (!askFilmScore || askFilmScore < 0 || askFilmScore > 10) {
        askFilmScore = parseFloat(prompt('Какую оценку ты дашь фильму?', ''));
        console.log(askFilmScore);
    }


    personalMovieDB.movies[askLastFilm] = askFilmScore;
}
numberOfFilms = prompt("Cколько фильмов ты посмотрел за последнее время?");
numberOfFilms = (numberOfFilms < 10) ? alert("Просмотренно довольно мало фильмов") :
(numberOfFilms > 30) ? alert("Вы киноман") :
(numberOfFilms > 10 && numberOfFilms < 30) ? alert("Вы классический зритель") :
alert("Произошла ошибка");
whatMovie();
whatMovie();
console.log(personalMovieDB);