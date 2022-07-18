import { css } from '@emotion/react';
import { FC } from 'react';
import { BREAKPOINT_MOBILE, BREAKPOINT_TABLET } from '../../const/breakpoints';
import { COLOR_BACKGROUND } from '../../const/colors';

import DesktopFooterImg from '../../images/footer.png';
import TabletFooterImg from '../../images/footer.png';
import MobileFooterImg from '../../images/footer.png';

const footerStyle = css({
    backgroundColor: COLOR_BACKGROUND,
});

const footerImg = css({
    backgroundImage: `url(${DesktopFooterImg})`,
    backgroundPosition: 'center bottom',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    height: 900,
    [`@media (max-width: ${BREAKPOINT_TABLET}px)`]: {
        backgroundImage: `url(${TabletFooterImg})`,
        height: 652,
    },
    [`@media (max-width: ${BREAKPOINT_MOBILE}px)`]: {
        backgroundImage: `url(${MobileFooterImg})`,
        height: 500,
    },
});

export const Footer: FC = () => {
    return (
        <footer css={footerStyle}>
            <div css={footerImg}></div>
        </footer>
    );
};
