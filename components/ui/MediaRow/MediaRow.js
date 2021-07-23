import { useState, useEffect } from "react";
import { useStateContext } from "../../HBOProvider";
import { shuffleArray } from "../../utilities";
import axios from "axios";

function MediaRow({ title, type, endpoint }) {
  const [loadingData, setLoadingData] = useState(true);
  const [movies, setMovies] = useState([]);
  const { api_key } = useStateContext();

  const loopComp = (comp, times) => {
    let thumbnails = [];
    for (let i = 0; i < times; i++) {
      thumbnails.push(comp);
    }
    return thumbnails;
  };

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/${endpoint}&api_key=${api_key}&language=en-US&`
      )
      .then((response) => {
        setLoadingData(false);
        setMovies(shuffleArray(response.data.results));
        // console.log("Success ", response);
      })
      .catch((error) => {
        console.log("Error ", error);
      });
  }, []);

  const showThumbnails = () => {
    return loadingData
      ? loopComp(<Skeleton />, 10)
      : movies.map((movie) => {
          console.log(movie)
          return <Thumbnail key={movie.id} movieData={movie} />;
        });
  };

  return (
    <div className={`media-row ${type}`}>
      <h3 className="media-row__title">{title}</h3>
      <div className="media-row__thumbnails">{showThumbnails()}</div>
    </div>
  );
}

function Thumbnail({ movieData }) {
  return (
    <div className="media-row__thumbnail">
      <img
        src={`https://image.tmdb.org/t/p/original/${movieData.poster_path}`}
        alt="rickmorty"
      />
      <div className="media-row__top-layer">
        <i className="fas fa-play" />
      </div>
    </div>
  );
}

function Skeleton() {
  return (
    <div className="media-row__thumbnail-skeleton">
      <div className="media-row__thumbnail-skeleton-img"></div>
    </div>
  );
}

export default MediaRow;
