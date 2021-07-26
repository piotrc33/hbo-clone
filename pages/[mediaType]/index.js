import { useEffect } from "react";
import { useRouter } from "next/router";
import MainLayout from "../../components/Layout/MainLayout";
import FeaturedMedia from "../../components/ui/FeaturedMedia/FeaturedMedia";
import MediaRow from "../../components/ui/MediaRow/MediaRow";
import AuthCheck from "../../components/AuthCheck";
import LazyLoad from "react-lazyload";
import Placeholder from "../../components/ui/Placeholder/Placeholder";
import GenreNav from "../../components/ui/GenreNav/GenreNav";
import axios from "axios";
import { shuffleArray } from "../../components/utilities";

export default function MediaTypePage({ genresData, featuredData, query }) {
  const router = useRouter();
  function getTitle(){
    return query.mediaType === 'movie' ? featuredData.title : featuredData.name;
  }

  return AuthCheck(
    <MainLayout>
      <FeaturedMedia
        mediaUrl={`https://image.tmdb.org/t/p/w1280${featuredData.backdrop_path}`}
        title={getTitle()}
        location="In theaters and on HBO MAX"
        linkUrl={`/${query.mediaType}/${featuredData.id}`}
        type="poster"
      />
      <GenreNav mediaType={query.mediaType} genresData={genresData} />
      <LazyLoad
        offset={-200}
        placeholder={<Placeholder title="Movies" type="large-h" />}
      >
        <MediaRow
          title="Movies"
          type="large-h"
          endpoint="discover/movie?sort_by=popularity.desc"
        />
      </LazyLoad>
    </MainLayout>
  );
}

export async function getServerSideProps(context) {
  const api_key = "bea23fa52dfceb92799aa605744eeb8e";
  let genresData;
  let featuredData;
  console.log("fucking shitittS");
  try {
    genresData = await axios.get(
      `https://api.themoviedb.org/3/genre/${context.query.mediaType}/list?api_key=${api_key}&language=en-US`
    );
    featuredData = await axios.get(
      `https://api.themoviedb.org/3/discover/${context.query.mediaType}?api_key=${api_key}&language=en-US&primary_release_year=2021`
    );

    
  } catch (error) {
    console.log("error", error);
  }
  console.log("genresData", genresData);

  return {
    props: {
      genresData: genresData.data.genres,
      featuredData: shuffleArray(featuredData.data.results)[0],
      query: context.query
    },
  };
}
