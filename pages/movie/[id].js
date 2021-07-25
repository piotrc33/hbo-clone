import MainLayout from "../../components/Layout/MainLayout";
import FeaturedMedia from "../../components/ui/FeaturedMedia/FeaturedMedia";
import MediaRow from "../../components/ui/MediaRow/MediaRow";
import CastInfo from "../../components/ui/CastInfo/CastInfo";
import AuthCheck from "../../components/AuthCheck";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import LazyLoad from "react-lazyload";
import Placeholder from "../../components/ui/Placeholder/Placeholder";
import axios from "axios";

export default function MoviePage({params}) {
  const router = useRouter();
  const api_key = "bea23fa52dfceb92799aa605744eeb8e";
  const [mediaData, setMediaData] = useState({});
  const ulrMediaId = params.id;

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${ulrMediaId}?api_key=${api_key}&language=en-US&`
      )
      .then((response) => {
        setMediaData(response.data);
        //console.log(response);
        console.log("Success ", response);
      })
      .catch((error) => {
        console.log("Error ", error);
      });
  }, [ulrMediaId]);

  return AuthCheck(
    <MainLayout>
      <FeaturedMedia
        mediaUrl={`https://image.tmdb.org/t/p/w1280${mediaData.backdrop_path}`}
        title={mediaData.title}
        location="In theaters and on HBO MAX"
        linkUrl="/movie/id"
        type="poster"
      />
      <LazyLoad
        offset={-200}
        placeholder={<Placeholder title="More Like This" type="small-v" />}
      >
        <MediaRow
          title="More Like This"
          type="small-v"
          endpoint={`movie/${ulrMediaId}/similar?`}
        />
      </LazyLoad>
      <CastInfo mediaId={ulrMediaId}/>
    </MainLayout>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {
      params: context.query,
    },
  };
}
