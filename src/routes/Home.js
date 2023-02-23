import { useState, useEffect } from "react";
import Movies from "../component/Movies";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const getMovies = async () => {
    const respone = await fetch(
      "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year"
    );
    const json = await respone.json();
    // const json = await(await fetch(
    //   "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year"
    // ));
    //축약버전

    setMovie(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  console.log(movie);
  return (
    <>
      <h1>The Coins!</h1>
      {loading ? (
        <strong>loading...</strong>
      ) : (
        <ul>
          {movie.map((item) => (
            <li key={item.id}>
              <Movies
                title={item.title}
                id={item.id}
                movieImg={item.medium_cover_image}
              />
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default Home;
