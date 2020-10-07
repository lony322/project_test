let numberOfFilms = 0; //Сколько всего фильмов
let lastFilm = ''; //Последний просмотренный фильм
let filmScore = 0; // Оценнка последнего просмотренного фильма
let askLastFilm = '';//Переменная для вопроса о последнем фильме
let askFilmScore = 0;//Переменная для вопроса об оценки пследнего фильма
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


function whatMovie () {
    askLastFilm = prompt('Какой последнйи фильм ты посмотрел?', '');
    askLastFilm = askLastFilm.length;
    console.log(askLastFilm);
    switch(askLastFilm){
        case askLastFilm < 50:
            alert("Много!");
            break;
            
    }
        }


function whatScore () {
    return prompt('Какую оценку ты дашь фильму?', '');
    }
    personalMovieDB.movies[whatMovie()] =  whatScore();
    console.log(personalMovieDB);

