import { useStateContext } from "../components/HBOProvider";
import { useEffect } from "react";
import { useRouter } from "next/router";
import MainLayout from "../components/Layout/MainLayout";
import FeaturedMedia from "../components/ui/FeaturedMedia/FeaturedMedia";
import MediaRow from "../components/ui/MediaRow/MediaRow";
import AuthCheck from "../components/AuthCheck";
import LazyLoad from "react-lazyload";
import Placeholder from "../components/ui/Placeholder/Placeholder";

export default function Index() {
  const globalState = useStateContext();
  const router = useRouter();

  useEffect(() => {}, []);

  return AuthCheck(
    <MainLayout>
      <FeaturedMedia
        videoUrl="https://www.youtube.com/embed/HN4oydykJFc"
        title="Better Call Saul"
        location="In theaters and on HBO MAX"
      />
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
      <LazyLoad
        offset={-200}
        placeholder={<Placeholder title="Horror" type="small-v" />}
      >
        <MediaRow
          title="Horror"
          type="small-v"
          endpoint="discover/movie?sort_by=popularity.desc&include_adult=false&page=1&primary_release_year=2021&with_genres=27"
        />
      </LazyLoad>
      <LazyLoad
        offset={-200}
        placeholder={<Placeholder title="Drama" type="large-v" />}
      >
        <MediaRow
          title="Drama"
          type="large-v"
          endpoint="discover/movie?sort_by=popularity.desc&include_adult=false&page=1&primary_release_year=2021&with_genres=18"
        />
      </LazyLoad>
      <LazyLoad
        offset={-200}
        placeholder={<Placeholder title="Sci-fi" type="small-h" />}
      >
        <MediaRow
          title="Sci-fi"
          type="small-h"
          endpoint="discover/movie?sort_by=popularity.desc&include_adult=false&page=1&primary_release_year=2021&with_genres=878"
        />
      </LazyLoad>
    </MainLayout>
  );
}
