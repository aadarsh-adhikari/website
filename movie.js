    const apiKey = '215bffcf47c5f43ac8e2c56f5af286d9';
    const searchInput = document.querySelector('input');
    const movieName = document.getElementById('nameofmovie');
    const imdbElement = document.getElementById('imdb');
    const movieDescription = document.getElementById('moviedescription');
    const movieDate = document.getElementById('date');
    const movieRun = document.getElementById('runtime');
    const moviePoster = document.getElementById('movieposter');

    document.querySelector('.search-btn').addEventListener('click', ()=> {
        const movieNameValue = searchInput.value;
        fetch(`https://api.themoviedb.org/3/search/movie?query=${movieNameValue}&api_key=${apiKey}`)
            .then(response => response.json())
            .then(data => {
                if(data.results && data.results.length > 0){
                const movie = data.results[0]; // Assuming you want the first result
                movieName.textContent = movie.title;
                imdbElement.textContent = movie.vote_average;
                movieDescription.textContent = movie.overview;
                movieDate.textContent = movie.release_date;
                // Update other movie details as needed
                const poster = movie.poster_path
                if(poster){
                    moviePoster.src = `https://image.tmdb.org/t/p/w500/${poster}`
                }
                else
               {
                poster.src =''
               }
                }
                else{
                   movieName.textContent = 'NOT FOUND';
                  imdbElement.textContent = '';
                  movieDescription.textContent = '';
                  movieDate.textContent = '';
                  moviePoster.src =''
                }
                // Handle the data and update the DOM accordingly
              searchInput.value =''
            })
            .catch(error => console.error('Error fetching movie details:', error));
    });