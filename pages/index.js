import {useStateContext} from "../components/HBOProvider";
import {useEffect} from 'react';
import { useRouter } from 'next/router';
import MainLayout from '../components/Layout/MainLayout';
import FeaturedMedia from '../components/ui/FeaturedMedia/FeaturedMedia';
import MediaRow from '../components/ui/MediaRow/MediaRow';
import AuthCheck from '../components/AuthCheck';

export default function Index() {
  const globalState = useStateContext();
  const router = useRouter();

  useEffect(() => {
  }, [])

  return AuthCheck(
    <MainLayout>
      <FeaturedMedia />
      <MediaRow title="Horror" type="small-v" />
      <MediaRow title="Drama" type="large-v" />
      <MediaRow title="Sci-fi" type="small-h" />
      <MediaRow title="Series" type="large-h" />
    </MainLayout>
  )
}
