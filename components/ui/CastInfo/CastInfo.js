import axios from "axios";
import { useState, useEffect } from "react";

function CastInfo({ mediaId }) {
  const api_key = "bea23fa52dfceb92799aa605744eeb8e";
  const [loadingData, setLoadingData] = useState(true);
  const [credits, setCredits] = useState({});

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${mediaId}/credits?api_key=${api_key}&language=en-US&`
      )
      .then((response) => {
        setCredits(response.data);
        setLoadingData(false);
        console.log("Success for Cast", response);
      })
      .catch((error) => {
        console.log("Error ", error);
      });
  }, [mediaId]);

  const showCast = () => {
    if (loadingData) {
      return <div>Loading</div>;
    }
    return credits.cast.map((person) => {
      return (
        <ul className="cast-info__crew">
          <li>{person.character}</li>
          <li>{person.name}</li>
        </ul>
      );
    });
  };

  const showCrew = () => {
    if (loadingData) {
      return <div>Loading</div>;
    }
    return credits.crew.map((person) => {
      return (
        <ul className="cast-info__crew">
          <li>{person.job}</li>
          <li>{person.name}</li>
        </ul>
      );
    });
  };

  return (
    <div className="cast-info">
      <div className="cast-info__group-title">Cast</div>
      <div className="cast-info__list">{showCast()}</div>
      <div className="cast-info__group-title">Crew</div>
      <div className="cast-info__list">{showCrew()}</div>
    </div>
  );
}

export default CastInfo;
