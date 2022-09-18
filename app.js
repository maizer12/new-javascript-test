const numberOfFilms = prompt('Скільки фільмів ви подивились', '');

const personalMovieDB ={
	count:numberOfFilms,
	movies: {},
	actors:{},
	genres:[],
	private:false
};
const oneTheLastFilm = prompt('Напишіть один із останіх переглянутих фільмів', '');
const reviewThisMovies = prompt('Дайте свою оцінку');

const movies = {
	[oneTheLastFilm]:reviewThisMovies,
};
console.log(personalMovieDB, movies);