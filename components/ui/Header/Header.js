import Account from "../Account/Account";
import SearchModal from "../SearchModal/SearchModal";
import SideNav from "../SideNav/SideNav";
import { useStateContext } from "../../HBOProvider";
import Link from "next/link";
import ls from "local-storage";

function Header() {
  const {
    setSideNavOpened,
    setAccountModalOpened,
    accountModalOpened,
    sideNavOpened,
    searchOpened,
    setSearchOpened,
    user,
  } = useStateContext();

  const getUsername = () => {
    let activeUID = ls("activeUID");
    let users = ls("users");
    console.log(users);
    if (users !== null)
      for (let u of users) {
        if (u.id === activeUID) {
          console.log(u.user);
          return u.user;
        }
      }
    return activeUID;
  };

  return (
    <header
      className={`top-header ${
        accountModalOpened || sideNavOpened ? "top-header--menu-opened" : ""
      }`}
    >
      <div className="top-header__left-side">
        <div
          className="top-header__menu-btn"
          onClick={() => {
            setSideNavOpened(true);
            setAccountModalOpened(false);
          }}
        >
          <i className="fas fa-bars" />
        </div>
        <div
          className="top-header__search-btn"
          onClick={() => setSearchOpened(true)}
        >
          <i className="fas fa-search" />
        </div>
      </div>
      <Link href="/">
        <a>
          <div className="top-header__logo"></div>
        </a>
      </Link>

      <div
        className="top-header__account"
        onClick={() => {
          setAccountModalOpened(!accountModalOpened);
          setSideNavOpened(false);
        }}
      >
        <div className="top-header__user-img-border">
          <img
            src="https://images.pexels.com/photos/61100/pexels-photo-61100.jpeg?crop=faces&fit=crop&h=200&w=200&auto=compress&cs=tinysrgb"
            alt="user_image"
            className="top-header__user-img"
          />
        </div>

        <div className="top-header__user-name">{getUsername()}</div>
      </div>
      <SideNav />
      <Account />
      <SearchModal />
    </header>
  );
}

export default Header;
