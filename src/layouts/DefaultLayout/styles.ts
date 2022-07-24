import { css } from '@emotion/react';
import { BREAKPOINT_LAPTOP, BREAKPOINT_MOBILE, BREAKPOINT_TABLET } from '../../const/breakpoints';

export const mainStyle = css({
    width: '100vw',
    paddingTop: '40px',
    [`@media (max-width: ${BREAKPOINT_LAPTOP}px)`]: {
        paddingTop: 25,
    },
});

export const headerWrapperStyle = css({
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'nowrap',
    [`@media (max-width: ${BREAKPOINT_TABLET}px)`]: {
        display: 'none',
    },
});

export const iconsWrapperStyle = css({
    display: 'flex',

    [`@media (max-width: ${BREAKPOINT_TABLET}px)`]: {
        display: 'none',
    },
    [`@media (max-width: ${BREAKPOINT_MOBILE}px)`]: {
        display: 'flex',
    },
});

export const discordIconStyle = css({
    marginRight: 35,
    marginLeft: 110,
    [`@media (max-width: ${BREAKPOINT_MOBILE}px)`]: {
        marginRight: 35,
        marginLeft: 0,
    },
});

export const menuWrapperStyle = css({
    display: 'none',
    justifyContent: 'flex-end',
    [`@media (max-width: ${BREAKPOINT_TABLET}px)`]: {
        display: 'flex',
        position: 'fixed',
        zIndex: 999,
        left: 0,
        right: 0,
        width: '100%',
        justifyContent: 'flex-end',
    },
    [`@media (max-width: ${BREAKPOINT_MOBILE}px)`]: {
        justifyContent: 'space-between',
    },
});

export const mobileMenuStyle = css({
    display: 'none',
    [`@media (max-width: ${BREAKPOINT_TABLET}px)`]: {
        display: 'flex',
    },
});

export const menuIconStyle = css({
    width: 40,
    height: 25,
});

export const menuButtonStyle = css({
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
});
