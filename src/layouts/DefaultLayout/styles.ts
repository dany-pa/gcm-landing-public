import { css } from '@emotion/react';
import { BREAKPOINT_TABLET } from '../../const/breakpoints';

export const mainStyle = css({
    width: '100vw',
    height: '200vh',
    paddingTop: '40px',
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
});

export const discordIconStyle = css({
    marginRight: 35,
    marginLeft: 110,
});

export const menuWrapperStyle = css({
    display: 'none',
    justifyContent: 'flex-end',
    [`@media (max-width: ${BREAKPOINT_TABLET}px)`]: {
        display: 'flex',
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
    position: 'fixed',
    zIndex: 999,
});
