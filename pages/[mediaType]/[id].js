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

export default function MoviePage({ params, mediaType }) {
  const router = useRouter();
  const api_key = "bea23fa52dfceb92799aa605744eeb8e";
  const [mediaData, setMediaData] = useState({});
  const urlMediaId = params.id;
  // let mediaType = mediaType === 'movie' ? 'movie' : 'tv';

  useEffect(() => {
    console.log(mediaType);
    axios
      .get(
        `https://api.themoviedb.org/3/${mediaType}/${urlMediaId}?api_key=${api_key}&language=en-US&`
      )
      .then((response) => {
        setMediaData(response.data);
        //console.log(response);
        console.log("Success ", response);
      })
      .catch((error) => {
        console.log("Error ", error);
      });
  }, [urlMediaId]);

  return AuthCheck(
    <MainLayout>
      <FeaturedMedia
        mediaUrl={`https://image.tmdb.org/t/p/w1280${mediaData.backdrop_path}`}
        title={mediaType === "movie" ? mediaData.title : mediaData.name}
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
          endpoint={`${mediaType}/${urlMediaId}/similar?`}
        />
      </LazyLoad>
      <CastInfo mediaId={urlMediaId} mediaType={mediaType} />
    </MainLayout>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {
      params: context.query,
      mediaType: context.query.mediaType,
    },
  };
}
