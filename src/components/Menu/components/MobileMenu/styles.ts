import { css } from '@emotion/react';
import { BREAKPOINT_MOBILE } from '../../../../const/breakpoints';
import { COLOR_BACKGROUND } from '../../../../const/colors';

export const wrapperStyle = css({
    padding: '40px 0 70px 0',
    width: '100vw',
    height: '100vh',
    backgroundColor: '#2EA5ED',
    position: 'fixed',
    top: 0,
    zIndex: 99,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',

    [`@media (max-width: ${BREAKPOINT_MOBILE}px)`]: {
        padding: '40px 0 0 0',
        justifyContent: 'flex-start',
    },
});

export const navStyle = css({
    display: 'flex',
    flexDirection: 'column',
});

export const linkStyle = css({
    color: COLOR_BACKGROUND,
    textAlign: 'center',
    borderRadius: 32,
    padding: '10px 5px',
    display: 'block',
    lineHeight: '30px',
    fontSize: 25,
    marginBottom: 20,
    [`@media (max-width: ${BREAKPOINT_MOBILE}px)`]: {
        marginBottom: 10,
    },
});

export const iconsHeaderWrapperStyle = css({
    display: 'none',
    [`@media (max-width: ${BREAKPOINT_MOBILE}px)`]: {
        display: 'flex',
    },
});
export const iconsWrapperStyle = css({
    display: 'flex',
    [`@media (max-width: ${BREAKPOINT_MOBILE}px)`]: {
        display: 'none',
    },
});

export const twitterIconStyle = css({
    marginRight: 50,
    [`@media (max-width: ${BREAKPOINT_MOBILE}px)`]: {
        marginRight: 37,
    },
});

export const iconStyle = css({
    width: 51,
    height: 51,
    filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',

    [`@media (max-width: ${BREAKPOINT_MOBILE}px)`]: {
        width: 37,
        height: 37,
    },
});

export const headerWrapperStyle = css({
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
    [`@media (max-width: ${BREAKPOINT_MOBILE}px)`]: {
        paddingBottom: 40,
        justifyContent: 'space-between',
    },
});

export const discordStyle = css({
    marginRight: 35,
});

export const closeButtonStyle = css({
    border: 'none',
    backgroundColor: 'transparent',
    cursor: 'pointer',
    width: 41,
    height: 41,
    [`@media (max-width: ${BREAKPOINT_MOBILE}px)`]: {
        width: 31,
        height: 31,
    },
});

export const logoIconStyle = css({
    width: 291,
    height: 197,
    [`@media (max-width: ${BREAKPOINT_MOBILE}px)`]: {
        width: 167,
        height: 147,
        marginBottom: 10,
    },
});
