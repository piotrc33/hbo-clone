import MainLayout from '../components/Layout/MainLayout';
import FeaturedMedia from '../components/ui/FeaturedMedia/FeaturedMedia';
import MediaRow from '../components/ui/MediaRow/MediaRow';
import CastInfo from '../components/ui/CastInfo/CastInfo';
import AuthCheck from '../components/AuthCheck';

export default function Movie() {
    return AuthCheck(
      <MainLayout>
          <FeaturedMedia />
          <MediaRow title="More Like This" type="small-v" />
          <CastInfo />
      </MainLayout>
    )
  }