import {
    MainScreen,
    AboutUsScreen,
    BenefitsScreen,
    CharactersScreen,
    GalleryScreen,
    StoryScreen,
} from '../components/screens';
import { WhoWeAreScreen } from '../components/screens/WhoWeAreScreen';

import { BREAKPOINT_LAPTOP, BREAKPOINT_MOBILE, BREAKPOINT_TABLET } from '../const/breakpoints';

import { DefaultLayout } from '../layouts/DefaultLayout';

// markup
function IndexPage() {
    return (
        <DefaultLayout>
            <div
                style={{
                    width: '100%',
                    height: '30px',
                    backgroundColor: 'red',
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    zIndex: 99,
                    textAlign: 'center',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <div
                    css={{
                        [`@media (max-width: ${BREAKPOINT_LAPTOP}px)`]: {
                            display: 'none',
                        },
                    }}
                >
                    DESKTOP
                </div>
                <div
                    css={{
                        display: 'none',
                        [`@media (max-width: ${BREAKPOINT_LAPTOP}px)`]: {
                            display: 'block',
                        },
                        [`@media (max-width: ${BREAKPOINT_TABLET}px)`]: {
                            display: 'none',
                        },
                    }}
                >
                    LAPTOP
                </div>
                <div
                    css={{
                        display: 'none',
                        [`@media (max-width: ${BREAKPOINT_TABLET}px)`]: {
                            display: 'block',
                        },
                        [`@media (max-width: ${BREAKPOINT_MOBILE}px)`]: {
                            display: 'none',
                        },
                    }}
                >
                    TABLET
                </div>
                <div
                    css={{
                        display: 'none',
                        [`@media (max-width: ${BREAKPOINT_MOBILE}px)`]: {
                            display: 'block',
                        },
                    }}
                >
                    MOBILE
                </div>
            </div>
            <MainScreen />
            <AboutUsScreen />
            <GalleryScreen />
            <BenefitsScreen />
            {/* <CharactersScreen /> */}
            <StoryScreen />
            <WhoWeAreScreen />
        </DefaultLayout>
    );
}

export default IndexPage;
