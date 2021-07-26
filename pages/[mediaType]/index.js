import { useStateContext } from "../../components/HBOProvider";
import { useEffect } from "react";
import { useRouter } from "next/router";
import MainLayout from "../../components/Layout/MainLayout";
import FeaturedMedia from "../../components/ui/FeaturedMedia/FeaturedMedia";
import MediaRow from "../../components/ui/MediaRow/MediaRow";
import AuthCheck from "../../components/AuthCheck";
import LazyLoad from "react-lazyload";
import Placeholder from "../../components/ui/Placeholder/Placeholder";
import GenreNav from "../../components/ui/GenreNav/GenreNav";


export default function Index() {
  const globalState = useStateContext();
  const router = useRouter();

  useEffect(() => {}, []);

  return AuthCheck(
    <MainLayout>
      {/* <FeaturedMedia
        mediaUrl="https://www.youtube.com/embed/wZti8QKBWPo"
        title="Nobody"
        location="In theaters and on HBO MAX"
        linkUrl="/movie/615457"
        type="video"
      /> */}
      <GenreNav />
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
