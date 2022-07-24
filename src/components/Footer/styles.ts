import { css } from '@emotion/react';
import { BREAKPOINT_TABLET } from '../../const/breakpoints';

export const imgStyle = css({ maxWidth: '100vw', margin: '0 auto', display: 'block' });
export const desktopImgStyle = css({
    [`@media (max-width: ${BREAKPOINT_TABLET}px)`]: {
        display: 'none',
    },
});
export const mobileImgStyle = css({
    display: 'none',
    minWidth: '100vw',
    [`@media (max-width: ${BREAKPOINT_TABLET}px)`]: {
        display: 'block',
    },
});

export const copyrightStyle = css({
    color: '#2EA5ED',
    position: 'absolute',
    bottom: 45,
    zIndex: 999,
    width: '100%',
    textAlign: 'center',
    fontSize: 12,
    lineHeight: '14px',
    fontWeight: 700,
    [`@media (max-width: ${BREAKPOINT_TABLET}px)`]: {
        bottom: 25,
    },
});
