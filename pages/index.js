import { useStateContext } from "../components/HBOProvider";
import { useEffect } from "react";
import { useRouter } from "next/router";
import MainLayout from "../components/Layout/MainLayout";
import FeaturedMedia from "../components/ui/FeaturedMedia/FeaturedMedia";
import MediaRow from "../components/ui/MediaRow/MediaRow";
import AuthCheck from "../components/AuthCheck";

export default function Index() {
  const globalState = useStateContext();
  const router = useRouter();

  useEffect(() => {}, []);

  return AuthCheck(
    <MainLayout>
      <FeaturedMedia />
      <MediaRow
        title="Movies"
        type="large-h"
        endpoint="discover/movie?sort_by=popularity.desc"
      />
      <MediaRow
        title="Horror"
        type="small-v"
        endpoint="discover/movie?sort_by=popularity.desc&include_adult=false&include_video=true&page=1&primary_release_year=2021&with_genres=27"
      />
      <MediaRow
        title="Drama"
        type="large-v"
        endpoint="discover/movie?sort_by=popularity.desc&include_adult=false&include_video=true&page=1&primary_release_year=2021&with_genres=18"
      />
      <MediaRow
        title="Sci-fi"
        type="small-h"
        endpoint="discover/movie?sort_by=popularity.desc&include_adult=false&include_video=true&page=1&primary_release_year=2021&with_genres=878"
      />
      
    </MainLayout>
  );
}
