import { DEFAULT_TITLE, MENU_LINKS } from '../const/general';
import { GalleryHeader } from '../components/GalleryHeader';
import { DefaultLayout } from '../layouts/DefaultLayout';
import { Helmet } from 'react-helmet';

function GalleryPage() {
    const links = MENU_LINKS.map((link) => ({
        ...link,
        link: `/${link.link}`,
    }));

    return (
        <DefaultLayout
            isMintPage={true}
            links={links}
            isShowLogo={true}
        >
            <Helmet>
                <title>{DEFAULT_TITLE} - Gallery</title>
            </Helmet>
            <GalleryHeader />
        </DefaultLayout>
    );
}

export default GalleryPage;
