import { css } from '@emotion/react';
import { BREAKPOINT_TABLET, BREAKPOINT_MOBILE } from '../../const/breakpoints';

// eslint-disable-next-line import/no-duplicates
import DesktopFooterImg from '../../images/footer.png';
// eslint-disable-next-line import/no-duplicates
import TabletFooterImg from '../../images/footer.png';
// eslint-disable-next-line import/no-duplicates
import MobileFooterImg from '../../images/footer.png';

export const footerImg = css({
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
