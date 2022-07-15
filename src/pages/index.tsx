import { AboutUsScreen } from '../components/screens/AboutUsScreen';
import { BenefitsScreen } from '../components/screens/BenefitsScreen';
import { GalleryScreen } from '../components/screens/GalleryScreen';
import { MainScreen } from '../components/screens/MainScreen';
import { DefaultLayout } from '../layouts/DefaultLayout';

// markup
function IndexPage() {
    return (
        <DefaultLayout>
            <MainScreen />
            <AboutUsScreen />
            <GalleryScreen />
            <BenefitsScreen />
        </DefaultLayout>
    );
}

export default IndexPage;
