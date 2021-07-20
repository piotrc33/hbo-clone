import MainLayout from '../components/Layout/MainLayout';
import FeaturedMedia from '../components/ui/FeaturedMedia/FeaturedMedia';
import ForYouList from '../components/ui/ForYouList/ForYouList';
import JustAdded from '../components/ui/JustAdded/JustAdded';
import PosterView from '../components/ui/PosterView/PosterView';
import CastInfo from '../components/ui/CastInfo/CastInfo';

export default function Movie() {
    return (
      <MainLayout>
          <FeaturedMedia />
          <PosterView />
          <CastInfo />
      </MainLayout>
    )
  }