const numberOfFilms = prompt('Скільки фільмів ви подивились', '');

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	private: false,
};
const a = prompt('Напишіть один із останіх переглянутих фільмів', ''),
	b = prompt('Дайте свою оцінку'),
	c = prompt('Напишіть один із останіх переглянутих фільмів', ''),
	d = prompt('Дайте свою оцінку');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
