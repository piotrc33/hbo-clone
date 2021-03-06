import { useStateContext } from "../../HBOProvider";
import Link from "next/link";
import { useEffect } from "react";

function SideNav() {
  const { sideNavOpened, setSideNavOpened } = useStateContext();

  useEffect(() => {
    if(sideNavOpened){
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'auto';
    }
  }, [sideNavOpened])

  return (
    <section className={`side-nav ${sideNavOpened ? "side-nav--active" : ""} `}>
      <i
        className="side-nav__close-btn fas fa-times"
        onClick={() => setSideNavOpened(false)}
      />
      <ul className="side-nav__list">
        <li onClick={() => setSideNavOpened(false)}>
          <Link href="/">
            <a className="active">Home</a>
          </Link>
        </li>
        <li>
          <Link href="/tv">
            <a>Series</a>
          </Link>
        </li>
        <li>
          <Link href="/movie">
            <a>Movies</a>
          </Link>
        </li>
        <li>
          <a href="/">Originals</a>
        </li>
        <li>
          <a href="/">Just Added</a>
        </li>
        <li>
          <a href="/">Last Chance</a>
        </li>
        <li>
          <a href="/">Coming Soon</a>
        </li>
        <li>
          <a href="/">Trending Now</a>
        </li>
      </ul>
      <div className="side-nav__divider"></div>
      <ul className="side-nav__list">
        <li>
          <a href="/">Action</a>
        </li>
        <li>
          <a href="/">Animation</a>
        </li>
        <li>
          <a href="/">Comedy</a>
        </li>
        <li>
          <a href="/">Crime</a>
        </li>
        <li>
          <a href="/">Documentaries</a>
        </li>
        <li>
          <a href="/">Drama</a>
        </li>
        <li>
          <a href="/">Fantasy & Sci-Fi</a>
        </li>
        <li>
          <a href="/">Horror</a>
        </li>
        <li>
          <a href="/">International</a>
        </li>
        <li>
          <a href="/">Kids & Family</a>
        </li>
        <li>
          <a href="/">Latino</a>
        </li>
        <li>
          <a href="/">Music</a>
        </li>
        <li>
          <a href="/">News/Talk</a>
        </li>
        <li>
          <a href="/">Reality</a>
        </li>
        <li>
          <a href="/">Romance</a>
        </li>
        <li>
          <a href="/">Shorts</a>
        </li>
        <li>
          <a href="/">Sports</a>
        </li>
        <li>
          <a href="/">Suspense</a>
        </li>
      </ul>
    </section>
  );
}

export default SideNav;
