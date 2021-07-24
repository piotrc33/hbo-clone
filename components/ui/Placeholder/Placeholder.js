import { useState, useEffect } from "react";
import { useStateContext } from "../../HBOProvider";
import { shuffleArray } from "../../utilities";
import axios from "axios";

function Placeholder({ title, type, endpoint }) {
  const [loadingData, setLoadingData] = useState(true);
  const [movies, setMovies] = useState([]);
  const { api_key } = useStateContext();

  return (
    <div className={`media-row ${type}`}>
      <h3 className="media-row__title">{title}</h3>
      <div className="media-row__thumbnails">
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
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

export default Placeholder;
