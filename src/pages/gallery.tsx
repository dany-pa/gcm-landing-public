import { MENU_LINKS } from '../const/general';
import { GalleryHeader } from '../components/GalleryHeader';
import { DefaultLayout } from '../layouts/DefaultLayout';

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
            <GalleryHeader />
        </DefaultLayout>
    );
}

export default GalleryPage;
