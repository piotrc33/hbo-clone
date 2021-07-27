import { useStateContext } from "../../HBOProvider";
import { useEffect } from "react";

function SearchModal() {
  const { searchOpened, setSearchOpened } = useStateContext();

  useEffect(() => {
    if (searchOpened) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [searchOpened]);

  const loopComp = (comp, times) => {
    let thumbnails = [];
    for (let i = 0; i < times; i++) {
      thumbnails.push(comp);
    }
    return thumbnails;
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
        />
        <div className="search-modal__close-btn">
          <i className="fas fa-times" onClick={() => setSearchOpened(false)} />
        </div>
      </div>

      <h3 className="search-modal__title">Popular Searches</h3>

      <div className="search-modal__thumbnails">
        <div className="search-modal__thumbnail">
          <img
            src="https://creativereview.imgix.net/content/uploads/2019/12/joker_full.jpg?auto=compress,format&q=60&w=1012&h=1500"
            alt="rickmorty"
          />
          <div className="search-modal__top-layer">
            <i className="fas fa-play" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchModal;
