import { Link } from "react-router-dom";

function Movies({ id, movieImg, title }) {
  return (
    <div>
      <Link to={`/movie/${id}`}>
        <h1>{title}</h1>
      </Link>
      <img src={movieImg} alt={title} />
    </div>
  );
}

export default Movies;
