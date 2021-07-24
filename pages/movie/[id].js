import MainLayout from '../../components/Layout/MainLayout';
import FeaturedMedia from '../../components/ui/FeaturedMedia/FeaturedMedia';
import MediaRow from '../../components/ui/MediaRow/MediaRow';
import CastInfo from '../../components/ui/CastInfo/CastInfo';
import AuthCheck from '../../components/AuthCheck';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function MoviePage(props) {
    const router = useRouter();
    const api_key = "bea23fa52dfceb92799aa605744eeb8e";
    const [mediaData, setMediaData] = useState({});

    useEffect(() => {
        axios
          .get(
            `https://api.themoviedb.org/3/movie/${props.params.id}?api_key=${api_key}&language=en-US&`
          )
          .then((response) => {
            setMediaData(response.data);
            console.log(response)
            console.log("Success ", response);
          })
          .catch((error) => {
            console.log("Error ", error);
          });
      }, []);

    return AuthCheck(
      <MainLayout>
          <h1>{props.params.id}</h1>
          <FeaturedMedia title={mediaData.title} />
          {/* <MediaRow title="More Like This" type="small-v" /> */}
          <CastInfo />
      </MainLayout>
    )
  }

  export async function getServerSideProps(context){
      return { 
          props: {
              params: context.query
          }
      }
  }