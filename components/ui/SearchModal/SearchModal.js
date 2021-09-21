import { useStateContext } from "../../HBOProvider";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

function SearchModal() {
  const { searchOpened, setSearchOpened, api_key } = useStateContext();
  const [popularSearches, setPopularSearches] = useState([]);
  const [searchData, setSearchData] = useState([]);
  const [resultsShowed, setResultsShowed] = useState(false);
  const [text, setText] = useState("");

  useEffect(async () => {
    try {
      let popularSearches = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?primary_release_year=2021&api_key=${api_key}&language=en-US&`
      );

      setPopularSearches(
        popularSearches.data.results.filter((item, i) => i < 14)
      );
      setResultsShowed(true);
    } catch (error) {}
  }, []);

  useEffect(() => {
    if (searchOpened) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [searchOpened]);

  const handleInput = async (e) => {
    try {
      setText(e.target.value);
      let searchData = await axios.get(
        `https://api.themoviedb.org/3/search/multi?api_key=${api_key}&query=${text}`
      );

      setSearchData(
        searchData.data.results.filter(
          (item, i) => item.media_type === "tv" || item.media_type === "movie"
        )
      );
      setResultsShowed(true);
      console.log(searchData.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className={`search-modal ${searchOpened ? "search-modal--active" : ""}`}
    >
      <div className="search-modal__input-group">
        <input
          className="search-modal__input"
          type="text"
          placeholder="What are you looking for?"
          onChange={handleInput}
          value={text}
        />
        <div className="search-modal__close-btn">
          <i className="fas fa-times" onClick={() => setSearchOpened(false)} />
        </div>
      </div>

      <h3 className="search-modal__title">{text ? `Search results for ${text}` : `Popular Searches`}</h3>

      <div className="search-modal__thumbnails">
        {resultsShowed && searchData.length >= 1 ? (
          <SearchResults searchData={searchData} />
        ) : (
          <PopularResults popularSearches={popularSearches} />
        )}
      </div>
    </div>
  );
}

function PopularResults({ popularSearches }) {
  const { closeModals } = useStateContext();

  return popularSearches.map((item, index) => {
    return (
      <Link href={`/movie/${item.id}`} key={item.id}>
        <a>
          <div
            className="search-modal__thumbnail"
            onClick={closeModals}
          >
            <img
              src={`https://image.tmdb.org/t/p/w185/${item.poster_path}`}
              alt="media_image"
            />
            <div className="search-modal__top-layer">
              <i className="fas fa-play" />
            </div>
          </div>
        </a>
      </Link>
    );
  });
}

function SearchResults({ searchData }) {
  const { closeModals } = useStateContext();

  return searchData.map((item, index) => {
    return (
      <Link href={`/movie/${item.id}`} key={item.id}>
        <a>
          <div
            className="search-modal__thumbnail"
            onClick={closeModals}
          >
            <img
              src={`https://image.tmdb.org/t/p/w185/${item.poster_path}`}
              alt="media_image"
            />
            <div className="search-modal__top-layer">
              <i className="fas fa-play" />
            </div>
          </div>
        </a>
      </Link>
    );
  });
}

export default SearchModal;
