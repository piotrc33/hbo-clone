import { useRouter } from "next/router";
import MainLayout from "../../../components/Layout/MainLayout";
import FeaturedMedia from "../../../components/ui/FeaturedMedia/FeaturedMedia";
import MediaRow from "../../../components/ui/MediaRow/MediaRow";
import AuthCheck from "../../../components/AuthCheck";
import LazyLoad from "react-lazyload";
import Placeholder from "../../../components/ui/Placeholder/Placeholder";
import GenreNav from "../../../components/ui/GenreNav/GenreNav";
import axios from "axios";
import { shuffleArray } from "../../../components/utilities";
import { useStateContext } from "../../../components/HBOProvider";

export default function MediaTypePage({ genresData, featuredData, query }) {
  const { thumbnailSizes } = useStateContext();
  const router = useRouter();
  function getTitle() {
    return query.mediaType === "movie" ? featuredData.title : featuredData.name;
  }

  const showRandomMedia = () => {
    let thumbnailSize;
    return genresData.map((item, index) => {
      thumbnailSize = shuffleArray(thumbnailSizes)[0];
      return (
        <LazyLoad
          key={item.id}
          offset={-200}
          placeholder={<Placeholder title={item.name} type={thumbnailSize} />}
        >
          <MediaRow
            title={item.name}
            mediaType={query.mediaType}
            type={thumbnailSize}
            endpoint={`discover/${query.mediaType}?with_genres=${query.genre_id}&sort_by=popularity.desc&primary_release_year=2021&page=${index + 1}`}
          />
        </LazyLoad>
      );
    });
  };

  return AuthCheck(
    <MainLayout>
      <FeaturedMedia
        mediaUrl={`https://image.tmdb.org/t/p/w1280${featuredData.backdrop_path}`}
        title={getTitle()}
        location="In theaters and on HBO MAX"
        linkUrl={`/${query.mediaType}/${featuredData.id}`}
        type="poster"
        mediaType={query.mediaType}
        mediaId={query.id}
      />
      <GenreNav mediaType={query.mediaType} genresData={genresData} />

      {showRandomMedia()}
    </MainLayout>
  );
}

export async function getServerSideProps(context) {
  const api_key = "bea23fa52dfceb92799aa605744eeb8e";
  let genresData;
  let featuredData;
  try {
    genresData = await axios.get(
      `https://api.themoviedb.org/3/genre/${context.query.mediaType}/list?api_key=${api_key}&language=en-US`
    );
    featuredData = await axios.get(
      `https://api.themoviedb.org/3/discover/${context.query.mediaType}?api_key=${api_key}&language=en-US&primary_release_year=2021&with_genres=${context.query.genre_id}`
    );
  } catch (error) {
    console.log("error", error);
  }
  console.log("genresData", genresData);

  return {
    props: {
      genresData: genresData.data.genres,
      featuredData: shuffleArray(featuredData.data.results)[0],
      query: context.query,
    },
  };
}
