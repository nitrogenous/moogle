/*
  Programın çalışmaması durumunda apiKey değişkeninin değerini 
  aşağıda bulunan değerlerden birisi ile değiştirip tekrar deneyin
  6d5356a6, b65fc376, 8fe690, bb2e699b, 29089fd7
*/
const apiKey = '976d21e3'; 
const baseUrl = 'https://www.omdbapi.com/?apikey=' + apiKey + '&t=';
const selectors = {
  movieNameInput: 'movieNameInput',
  moviePoster: 'moviePoster',
  movieName: 'movieName',
  moviePlot: 'moviePlot',
};

function searchForMovie() {
  const movieName = document.getElementById(selectors.movieNameInput).value;
  const requestUrl = encodeURI(baseUrl + movieName);

  $.ajax({
    url: requestUrl,
    async: false,
    dataType: 'json',
    success: function (response) {
      if (response.Error) {
        updateMovieShowcase('', response.Error, '');
        return;
      }

      updateMovieShowcase(response.Poster, response.Title, response.Plot);
    },
  });
};

function updateMovieShowcase(moviePoster, movieName, moviePlot) {
  document.getElementById(selectors.moviePoster).src = moviePoster;
  document.getElementById(selectors.movieName).innerHTML = movieName;
  document.getElementById(selectors.moviePlot).innerHTML = moviePlot;
};