import { MintScreen } from '../components/screens';
import { MENU_LINKS } from '../const/general';

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
        >
            {<MintScreen />}
        </DefaultLayout>
    );
}

export default MintPage;
