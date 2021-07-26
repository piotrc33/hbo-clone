import React from "react";
import Link from "next/link";
import { useState } from "react";

function GenreNav() {
  const [activeNav, setActiveNav] = useState(false);
  setTimeout(() => {
    setActiveNav(true);
  }, 100);

  return (
    <ul className={`genre-nav ${activeNav ? "genre-nav--active" : ""}`}>
      <li>
        <Link href="/">
          <a >Home</a>
        </Link>
      </li>
      <li>
        <Link href="/">
          <a >Home</a>
        </Link>
      </li>
      <li>
        <Link href="/">
          <a >Home</a>
        </Link>
      </li>
      <li>
        <Link href="/">
          <a >Home</a>
        </Link>
      </li>
    </ul>
  );
}

export default GenreNav;
