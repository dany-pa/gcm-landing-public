import { MintScreen } from '../components/screens';

import { DefaultLayout } from '../layouts/DefaultLayout';

function MintPage() {
    return <DefaultLayout isMintPage={true}>{<MintScreen />}</DefaultLayout>;
}

export default MintPage;
