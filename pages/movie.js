import MainLayout from '../components/Layout/MainLayout';
import FeaturedMedia from '../components/ui/FeaturedMedia/FeaturedMedia';
import PosterView from '../components/ui/PosterView/PosterView';
import CastInfo from '../components/ui/CastInfo/CastInfo';
import AuthCheck from '../components/AuthCheck';

export default function Movie() {
    return AuthCheck(
      <MainLayout>
          <FeaturedMedia />
          <PosterView />
          <CastInfo />
      </MainLayout>
    )
  }