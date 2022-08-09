import { Helmet } from 'react-helmet';
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
import { DEFAULT_TITLE } from '../const/general';

function IndexPage() {
    return (
        <DefaultLayout>
            <Helmet>
                <title>{DEFAULT_TITLE} - Home</title>
            </Helmet>
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
