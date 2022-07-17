import { AboutUsScreen } from '../components/screens/AboutUsScreen';
import { BenefitsScreen } from '../components/screens/BenefitsScreen';
import { GalleryScreen } from '../components/screens/GalleryScreen';
import { MainScreen } from '../components/screens/MainScreen';
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
        </DefaultLayout>
    );
}

export default IndexPage;
