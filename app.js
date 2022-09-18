const numberOfFilms = prompt('Скільки фільмів ви подивились', '')

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	private: false,
};

for (let i = 1; i <= 2; i++) {
	const a = prompt('Напишіть один із останіх переглянутих фільмів', '');
	const b = prompt('Дайте свою оцінку')
	if (a == '' || b == '') {
		i = 1;
	} else if (a.length >= 50 || b.length >= 50) {
		i = 1
	}
	personalMovieDB.movies[a] = b;
}
if (numberOfFilms < 10) {
	alert('Мало фильмов')
} else if (numberOfFilms > 10 && numberOfFilms < 30) {
	alert('Класичний зритель')
} else {
	alert('Киноман')
}
