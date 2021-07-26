import { useState, useEffect } from "react";
import { useStateContext } from "../../HBOProvider";
import { shuffleArray } from "../../utilities";
import axios from "axios";
import Link from "next/link";

function MediaRow({ title, type, endpoint, mediaType }) {
  const [loadingData, setLoadingData] = useState(true);
  const [movies, setMovies] = useState([]);
  const { api_key } = useStateContext();

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
  }, [endpoint]);

  const thumbnailSize = () => {
    switch (type) {
      case "large-v":
        return "400";
      case "small-v":
        return "185";
      case "large-h":
        return "500";
      case "small-h":
        return "342";
    }
  };
  const loopComp = (comp, times) => {
    let thumbnails = [<Skeleton key={'a'} />, <Skeleton key={'b'} />, <Skeleton key={'c'} />, <Skeleton key={'d'} />, <Skeleton key={'e'} />, <Skeleton key={'f'} />];
    // for (let i = 0; i < times; i++) {
    //   thumbnails.push(comp);
    // }
    return thumbnails;
  };

  const showThumbnails = () => {
    return loadingData
      ? loopComp(<Skeleton />, 10)
      : movies.map((movie) => {
          return (
            <Thumbnail
              mediaType={mediaType}
              thumbnailSize={thumbnailSize()}
              key={movie.id}
              movieData={movie}
            />
          );
        });
  };

  return (
    <div className={`media-row ${type}`}>
      <h3 className="media-row__title">{title}</h3>
      <div className="media-row__thumbnails">{showThumbnails()}</div>
    </div>
  );
}

function Thumbnail({ movieData, thumbnailSize, mediaType }) {
  let urlMediaType = mediaType === 'movie' ? 'movie' : 'tv';

  return (
    <Link href={`/${urlMediaType}/${movieData.id}`}>
      <a>
        <div className="media-row__thumbnail">
          <img
            src={`https://image.tmdb.org/t/p/w${thumbnailSize}/${movieData.poster_path}`}
            alt="movie_image"
          />
          <div className="media-row__top-layer">
            <i className="fas fa-play" />
          </div>
        </div>
      </a>
    </Link>
  );
}

function Skeleton() {
  return (
    <div className="media-row__thumbnail-skeleton">
      <div className="media-row__thumbnail-skeleton-img"></div>
    </div>
  );
}

MediaRow.defaultProps = {
  mediaType: 'movie'
}
export default MediaRow;
