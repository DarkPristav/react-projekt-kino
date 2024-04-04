import allMovies from './data.js'
import MovieItem from "./components/MovieItem"

function App() {
  return (
    <section section className="movie-section">
      <MovieItem
        movieImage={allMovies[0].image}
        movieTitle={allMovies[0].title}
        movieAge={allMovies[0].age}
        movieTags={allMovies[0].tags}
        movieDesc={allMovies[0].description}
      />
      <MovieItem
        movieImage={allMovies[1].image}
        movieTitle={allMovies[1].title}
        movieAge={allMovies[1].age}
        movieTags={allMovies[1].tags}
        movieDesc={allMovies[1].description}
      />
      <MovieItem
        movieImage={allMovies[2].image}
        movieTitle={allMovies[2].title}
        movieAge={allMovies[2].age}
        movieTags={allMovies[2].tags}
        movieDesc={allMovies[2].description}
      />
      <MovieItem
        movieImage={allMovies[3].image}
        movieTitle={allMovies[3].title}
        movieAge={allMovies[3].age}
        movieTags={allMovies[3].tags}
        movieDesc={allMovies[3].description}
      />
    </section>
  );
}

export default App;
