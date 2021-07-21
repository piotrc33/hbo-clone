import {useStateContext} from "../components/HBOProvider";
import {useEffect} from 'react';
import { useRouter } from 'next/router';
import MainLayout from '../components/Layout/MainLayout';
import FeaturedMedia from '../components/ui/FeaturedMedia/FeaturedMedia';
import ForYouList from '../components/ui/ForYouList/ForYouList';
import JustAdded from '../components/ui/JustAdded/JustAdded';
import PosterView from '../components/ui/PosterView/PosterView';
import AuthCheck from '../components/AuthCheck';

export default function Index() {
  const globalState = useStateContext();
  const router = useRouter();

  useEffect(() => {
  }, [])

  return AuthCheck(
    <MainLayout>
      <FeaturedMedia />
      <ForYouList />
      <JustAdded />
      <PosterView />
    </MainLayout>
  )
}
