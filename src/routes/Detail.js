import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Detail() {
  const { id } = useParams();
  const [data, setData] = useState();
  //   console.log(id);
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setData(json);
  };
  useEffect(() => {
    getMovie();
  }, []);
  console.log(data);

  return <h1>Detail</h1>;
}

export default Detail;
