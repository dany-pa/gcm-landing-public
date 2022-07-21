import { css } from '@emotion/react';
import { BREAKPOINT_TABLET, BREAKPOINT_MOBILE, BREAKPOINT_LAPTOP } from '../../../const/breakpoints';
import { COLOR_SECONDARY } from '../../../const/colors';

export const logoIconWrapperStyle = css({
    width: 352,
    height: 239,
    marginTop: 90,
    marginBottom: 40,
    [`@media (max-width: ${BREAKPOINT_TABLET}px)`]: {
        margin: '100px auto 0 auto',
        width: 401,
        height: 272,
    },
    [`@media (max-width: ${BREAKPOINT_MOBILE}px)`]: {
        marginTop: 25,
        width: 285,
        height: 193,
    },
});

export const cityImgStyle = css({
    width: '100vw',
    marginTop: 70,
    marginLeft: -5,
    order: 2,
    [`@media (max-width: ${BREAKPOINT_TABLET}px)`]: {
        order: 3,
    },
    [`@media (max-width: ${BREAKPOINT_MOBILE}px)`]: {
        width: '172vw',
        marginLeft: '-20vw',
    },
});

export const buttonStyle = css({
    width: 170,
    height: 50,
    padding: 0,
    [`@media (max-width: ${BREAKPOINT_TABLET}px)`]: {
        display: 'none',
    },
});

export const titleStyle = css({
    color: COLOR_SECONDARY,
    fontSize: 50,
    fontWeight: 700,
    lineHeight: '55px',
    textAlign: 'center',
    position: 'relative',
    top: -280,
    order: 3,

    [`@media (max-width: ${BREAKPOINT_LAPTOP}px)`]: {
        top: -180,
        fontSize: 45,
    },

    [`@media (max-width: ${BREAKPOINT_TABLET}px)`]: {
        fontSize: 30,
        lineHeight: '35px',
        order: 2,
        position: 'static',
        marginTop: 45,
    },

    [`@media (max-width: ${BREAKPOINT_MOBILE}px)`]: {
        fontSize: 20,
        lineHeight: '25px',
        marginTop: 20,
    },
});

export const sectionStyle = css({
    display: 'flex',
    flexDirection: 'column',
    width: '100vw',
    overflow: 'hidden',
    marginBottom: -150,
});

export const wrapperStyle = css({
    order: 1,
});
