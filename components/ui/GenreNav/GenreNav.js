import React from "react";
import Link from "next/link";
import { useState } from "react";

function GenreNav({ mediaType, genresData }) {
  const [activeNav, setActiveNav] = useState(false);
  setTimeout(() => {
    setActiveNav(true);
  }, 100);

  return (
    <ul className={`genre-nav ${activeNav ? "genre-nav--active" : ""}`}>
      <GenreList genresData={genresData} mediaType={mediaType} />
    </ul>
  );
}

const GenreList = ({ genresData }) => {
  return genresData.map((item) => {
    return(<li key={item.id}>
      <Link href="/">
        <a>{item.name}</a>
      </Link>
    </li>
  )});
};

export default GenreNav;
