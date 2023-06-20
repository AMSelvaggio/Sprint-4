// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result = array.map((movie) => movie.director)
  console.log("EXERCICE 1 ->", result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {

  const filmography = array.filter((movies) => movies.director === director)

  return filmography
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {

  const getDirectorsFilmography = getMoviesFromDirector(array, director)

  const value = getDirectorsFilmography.reduce((acc, curr) => acc += curr.score, 0)

  const result = Number(value / getDirectorsFilmography.length).toFixed(2)

  return Number(result)
}




// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {

  const onlyMovies = array.map((item) => item.title)

  const ABCOrder = onlyMovies.sort()

  return ABCOrder.slice(0, 20)


}




// Exercise 5: Order by year, ascending
function orderByYear(array) {

  const result = [...array].sort((a, b) => {

    if (a.year > b.year) {
      return 1;
    }
    if (a.year < b.year) {
      return -1;
    }
    if (a.title > b.title) {
      return 1;
    }
    if (a.title < b.title) {
      return -1;
    }
  });
  return result;





}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, category) {

  const onlyOneCategoryOfFIlms = array.filter((item) => item.genre.includes(category) && (item.score !== ""))

  const value = onlyOneCategoryOfFIlms.reduce((acc, curr) => acc += curr.score, 0)

  const result = Number(value / onlyOneCategoryOfFIlms.length).toFixed(2)

  return Number(result)
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {


  const convertedTimeFilms = array.map(film => {
    const timeString = film.duration
    const hoursString = timeString.match(/\d+h/) //Tanto match como replace som metodos de string. Uno para buscar una coincidencia y el otro para repmplazar.
    const minutesString = timeString.match(/\d+min/)
    const hours = hoursString ? Number(hoursString[0].replace('h', '')) : 0
    const minutes = minutesString ? Number(minutesString[0].replace('min', '')) : 0
    const totalMinutes = hours * 60 + minutes
    return { ...film, duration: totalMinutes }
  })

  return convertedTimeFilms

}

// Exercise 8: Get the best film of a year
function bestFilmOfYear(array,year) {

  const bestFilmOfYear = array.filter(film => film.year === year) 
  bestFilmOfYear.sort((a, b) => b.score - a.score) 
  return [bestFilmOfYear[0]] 



  /*
  const filmOfYear =  [...array].filter((film) => year === film.year) ;
  filmOfYear.sort((a, b) => {  a > b});
  return [filmOfYear[0]]

*/
 /* 

const oneYearOfFilms= [...array].filter(item=> item.year===year)

const OrderedByscore = oneYearOfFilms.sort((a, b) => {

  if (a.score > b.score) {
    return 1;
  }
  if (a.score < b.score) {
    return -1;
  }})

const result=[]

result.push(OrderedByscore[0])

return result*/

}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
