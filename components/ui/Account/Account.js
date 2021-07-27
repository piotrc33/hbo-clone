import { useEffect } from "react";
import { useStateContext } from "../../HBOProvider";


function Account() {
  const { accountModalOpened } = useStateContext();

  useEffect(() => {
    if(accountModalOpened){
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'auto';
    }
  }, [accountModalOpened])

  return (
    <div className={`account ${accountModalOpened ? "account--active" : ""}`}>
      <div className="account__details">
        <div className="account__title">My list</div>
        <div className="account__watch-list">
          <div className="account__watch-video">
            <img
              src="https://static.posters.cz/image/1300/plakaty/rick-morty-portal-i86752.jpg"
              alt="video"
            />
            <div className="account__watch-overlay">
              <div className="account__watch-buttons">
                <div className="account__watch-circle">
                  <i className="fas fa-play" />
                </div>
                <div className="account__watch-circle">
                  <i className="fas fa-times" />
                </div>
              </div>
            </div>
          </div>
        </div>
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
            <a href="/">Sign Out</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Account;
