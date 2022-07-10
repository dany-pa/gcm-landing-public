import { COLOR_BACKGROUND } from '../const/colors';
import { css } from '@emotion/react';
import { DefaultLayout } from '../layouts/DefaultLayout';

const mainStyle = css({
    backgroundColor: COLOR_BACKGROUND,
    width: '100vw',
    height: '100vh',
});
// markup
function IndexPage() {
    return (
        <DefaultLayout>
            <main css={mainStyle}>test</main>
        </DefaultLayout>
    );
}

export default IndexPage;
