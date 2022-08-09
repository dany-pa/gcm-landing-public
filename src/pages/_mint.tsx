import { Helmet } from 'react-helmet';
import { MintScreen } from '../components/screens';
import { DEFAULT_TITLE, MENU_LINKS } from '../const/general';

import { DefaultLayout } from '../layouts/DefaultLayout';

function MintPage() {
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
                <title>{DEFAULT_TITLE} - Mint</title>
            </Helmet>
            <MintScreen />
        </DefaultLayout>
    );
}

export default MintPage;
