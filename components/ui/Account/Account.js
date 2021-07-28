import { useEffect } from "react";
import { useStateContext } from "../../HBOProvider";
import { useRouter } from "next/router";
import ls from 'local-storage';

function Account() {
  const { accountModalOpened, watchList, removeFromList, closeModals } = useStateContext();
  const router = useRouter();

  useEffect(() => {
    if (accountModalOpened) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [accountModalOpened]);

  const handlePlay = (mediaType, mediaId) => {
    router.push(`/${mediaType}/${mediaId}`);
    closeModals();
  };

  const signOut = () => {
    ls.remove("activeUID")
  }

  const showWatchList = () => {
    if (watchList === null) {
      console.log("watchlist is null");
    } else {
      return watchList.map((item, index) => {
        return (
          <div className="account__watch-video" key={index}>
            <img src={item.mediaUrl} alt="media_image" />
            <div className="account__watch-overlay">
              <div className="account__watch-buttons">
                <div
                  className="account__watch-circle"
                  onClick={() => handlePlay(item.mediaType, item.mediaId)}
                >
                  <i className="fas fa-play" />
                </div>
                <div
                  className="account__watch-circle"
                  onClick={() => removeFromList(item.mediaId)}
                >
                  <i className="fas fa-times" />
                </div>
              </div>
            </div>
          </div>
        );
      });
    }
  };

  return (
    <div className={`account ${accountModalOpened ? "account--active" : ""}`}>
      <div className="account__details">
        <div className="account__title">My list</div>
        <div className="account__watch-list">{showWatchList()}</div>
      </div>
      <div className="account__menu">
        <ul className="account__main">
          <li>
            <a href="/" className="active">
              My List
            </a>
          </li>
        </ul>
        <div className="side-nav__divider" />
        <ul className="account__main">
          <li>
            <a href="/">Account</a>
          </li>
          <li>
            <a href="/" onClick={signOut}>Sign Out</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Account;
