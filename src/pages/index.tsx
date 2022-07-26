import {
    MainScreen,
    AboutUsScreen,
    BenefitsScreen,
    CharactersScreen,
    GalleryScreen,
    StoryScreen,
    JoinUsScreen,
    WhoWeAreScreen,
} from '../components/screens';
import { Footer } from '../components/Footer';

import { DefaultLayout } from '../layouts/DefaultLayout';

function IndexPage() {
    return (
        <DefaultLayout>
            <MainScreen />
            <AboutUsScreen />
            <GalleryScreen />
            <BenefitsScreen />
            <CharactersScreen />
            <StoryScreen />
            <WhoWeAreScreen />
            <JoinUsScreen />
            <Footer />
        </DefaultLayout>
    );
}

export default IndexPage;
