import { css } from '@emotion/react';
import { BREAKPOINT_LAPTOP, BREAKPOINT_MOBILE, BREAKPOINT_TABLET } from '../../../const/breakpoints';
import { COLOR_PRIMARY } from '../../../const/colors';

export const imgStyle = css({
    width: 285,
    height: 285,
    borderRadius: 13,
    position: 'relative',
    transition: '0.3s',
    filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
    [`@media (max-width: ${BREAKPOINT_TABLET}px)`]: {
        width: 257,
        height: 257,
    },
    [`@media (max-width: ${BREAKPOINT_TABLET}px)`]: {
        width: 240,
        height: 240,
    },
});
export const activeImgStyle = css({
    width: 400,
    height: 400,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    margin: 0,
    position: 'relative',
    right: -58,
});
export const activeImgWrapperStyle = css({
    '&::after': {
        content: '""',
        position: 'absolute',
        width: 400,
        height: 15,
        backgroundColor: COLOR_PRIMARY,
        bottom: 0,
        left: 58,

        [`@media (max-width: ${BREAKPOINT_TABLET}px)`]: {
            margin: '0 auto',
            right: 0,
        },
    },
});

export const sectionStyle = css({
    padding: '65px 75px',

    [`@media (max-width: ${BREAKPOINT_LAPTOP}px)`]: {
        paddingRight: 0,
        paddingLeft: 0,
        paddingBottom: 150,
    },
    [`@media (max-width: ${BREAKPOINT_TABLET}px)`]: {
        paddingBottom: 65,
    },
});

export const imgWrapperStyle = css({
    [`@media (max-width: ${BREAKPOINT_LAPTOP}px)`]: {
        marginRight: 40,
    },
    [`@media (max-width: ${BREAKPOINT_MOBILE}px)`]: {
        maxWidth: '100%',
        margin: 0,
        display: 'flex',
    },
});

export const activeSlideStyle = css({
    filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
});

export const textWrapperStyle = css({
    display: 'flex',
    [`@media (max-width: ${BREAKPOINT_LAPTOP}px)`]: {
        alignItems: 'center',
    },
});
export const innerStyle = css({ marginRight: 'auto' });
export const titleStyle = css({
    margin: '20px 0 30px 0',
    fontWeight: 700,
    [`@media (max-width: ${BREAKPOINT_LAPTOP}px)`]: {
        fontSize: 25,
        lineHeight: '30px',
        marginBottom: 49,
    },
    [`@media (max-width: ${BREAKPOINT_TABLET}px)`]: {
        fontSize: 20,
        lineHeight: '25px',
        marginBottom: 25,
    },
    [`@media (max-width: ${BREAKPOINT_MOBILE}px)`]: {
        fontSize: 18,
        lineHeight: '25px',
        marginBottom: 50,
        marginTop: 40,
    },
});
export const textStyle = css({
    marginBottom: '30px',
    [`@media (max-width: ${BREAKPOINT_TABLET}px)`]: {
        fontSize: 19,
        lineHeight: '25px',
    },
    [`@media (max-width: ${BREAKPOINT_MOBILE}px)`]: {
        fontSize: 12,
        lineHeight: '16px',
        marginTop: -30,
    },
});
export const wrapperStyle = css({
    maxWidth: 'calc(285px * 3 + 40px)',
    minWidth: 'calc(285px * 3 + 40px)',
    margin: '0 auto',
    position: 'relative',

    [`@media (max-width: ${BREAKPOINT_LAPTOP}px)`]: {
        display: 'flex',
    },
    [`@media (max-width: ${BREAKPOINT_TABLET}px)`]: {
        flexWrap: 'wrap',
    },
    [`@media (max-width: ${BREAKPOINT_MOBILE}px)`]: {
        justifyContent: 'center',
    },
});

export const slideRowStyle = css({
    margin: '20px 0',
    'img:nth-of-type(2)': {
        marginRight: 20,
        marginLeft: 20,
    },
    display: 'flex',

    [`@media (max-width: ${BREAKPOINT_LAPTOP}px)`]: {
        'img:nth-of-type(3)': {
            display: 'none',
        },
        'img:nth-of-type(2)': {
            margin: 0,
        },
        'img:nth-of-type(1)': {
            marginRight: 20,
        },
    },

    [`@media (max-width: ${BREAKPOINT_MOBILE}px)`]: {
        flexWrap: 'wrap',
        img: { display: 'block !important', width: 152, height: 152, margin: '0 0 13px 0 !important' },
    },
});

export const buttonStyle = css({
    [`@media (max-width: ${BREAKPOINT_LAPTOP}px)`]: {
        position: 'absolute',
        left: 205,
        bottom: -90,
    },
    [`@media (max-width: ${BREAKPOINT_TABLET}px)`]: {
        position: 'static',
    },
});
