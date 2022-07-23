import { css } from '@emotion/react';
import { BREAKPOINT_LAPTOP, BREAKPOINT_MOBILE, BREAKPOINT_TABLET } from '../../../const/breakpoints';

export const wrapperStyle = css({
    maxWidth: '100vw',
    marginRight: 0,
    [`@media (max-width: ${BREAKPOINT_MOBILE}px)`]: {
        maxWidth: '100vw',
        width: '100vw',
        margin: '0 auto',
    },
});

export const sectionStyle = css({
    paddingTop: 125,
    paddingBottom: 250,
    [`@media (max-width: ${BREAKPOINT_LAPTOP}px)`]: {
        paddingBottom: 28,
        paddingTop: 55,
    },
    [`@media (max-width: ${BREAKPOINT_TABLET}px)`]: {
        paddingTop: 70,
    },
    [`@media (max-width: ${BREAKPOINT_MOBILE}px)`]: {
        paddingTop: 33,
    },

    '.bottom-slider': {
        maxWidth: 690,
        marginTop: -250,
        marginLeft: 0,
        overflow: 'visible',
        [`@media (max-width: ${BREAKPOINT_LAPTOP}px)`]: {
            maxWidth: 490,
            marginTop: -190,
        },
        [`@media (max-width: ${BREAKPOINT_TABLET}px)`]: {
            maxWidth: 370,
            marginTop: -130,
            marginLeft: 'auto',
        },
        [`@media (max-width: ${BREAKPOINT_MOBILE}px)`]: {
            maxWidth: 265,
            marginTop: -50,
        },

        '.swiper-wrapper': {
            alignItems: 'center',
        },

        '.swiper-button-prev': {
            left: -45,
        },
        '.swiper-button-next': {
            [`@media (max-width: ${BREAKPOINT_LAPTOP}px)`]: {
                right: -5,
            },
            [`@media (max-width: ${BREAKPOINT_TABLET}px)`]: {
                right: -25,
            },
        },
    },
    '.swiper-button-prev,.swiper-button-next': {
        color: '#FFD9F7',
        [`@media (max-width: ${BREAKPOINT_MOBILE}px)`]: {
            display: 'none',
        },
    },
});

export const infoPanelStyle = css({
    width: 551,
    minWidth: 551,
    height: 547,
    padding: '0px 92px 0px 77px',
    background:
        'linear-gradient(180deg, rgba(153, 224, 241, 0.25) 0%, rgba(182, 232, 245, 0.175) 28.13%, rgba(221, 244, 250, 0.2) 56.77%, rgba(246, 252, 253, 0.225) 77.6%, rgba(255, 255, 255, 0.25) 97.4%)',
    boxShadow: ' 0px 4px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: 45,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',

    [`@media (max-width: ${BREAKPOINT_LAPTOP}px)`]: {
        width: 429,
        minWidth: 429,
        height: 429,
        padding: '0px 40px',
    },
    [`@media (max-width: ${BREAKPOINT_TABLET}px)`]: {
        width: 551,
        minWidth: 551,
        height: 263,
        alignItems: 'flex-start',
        marginBottom: '-30px',
        padding: '35px 130px 40px 60px',
        justifyContent: 'space-around',
    },
    [`@media (max-width: ${BREAKPOINT_MOBILE}px)`]: {
        width: 320,
        minWidth: 320,
        maxWidth: 320,
        height: 214,
        padding: '0 0 0 25px',
        justifyContent: 'center',
        margin: '0 auto',
        borderRadius: 25,
    },
});

export const slideStyle = css({
    position: 'relative',
    display: 'flex',
    [`@media (max-width: ${BREAKPOINT_TABLET}px)`]: {
        flexWrap: 'wrap',
    },
});

export const characterImgStyle = css({
    width: 700,
    height: 700,
    objectFit: 'contain',
    [`@media (max-width: ${BREAKPOINT_MOBILE}px)`]: {
        transform: 'scale(1.3)',
    },
});

export const titleStyle = css({
    fontSize: 30,
    lineHeight: '35px',
    marginBottom: 50,
    [`@media (max-width: ${BREAKPOINT_LAPTOP}px)`]: {
        fontSize: 25,
        lineHeight: '30px',
    },

    [`@media (max-width: ${BREAKPOINT_TABLET}px)`]: {
        fontSize: 19,
        lineHeight: '25px',
        marginBottom: 0,
    },
    [`@media (max-width: ${BREAKPOINT_MOBILE}px)`]: {
        marginBottom: 20,
        fontSize: 14,
        lineHeight: '16px',
        width: '70%',
    },
});

export const textStyle = css({
    fontSize: 25,
    lineHeight: '30px',
    [`@media (max-width: ${BREAKPOINT_LAPTOP}px)`]: {
        fontSize: 22,
        lineHeight: '25px',
    },
    [`@media (max-width: ${BREAKPOINT_TABLET}px)`]: {
        fontSize: 19,
        lineHeight: '25px',
    },
    [`@media (max-width: ${BREAKPOINT_MOBILE}px)`]: {
        fontSize: 14,
        lineHeight: '16px',
    },
});

export const slideImgStyle = css({
    transition: '0.3s',
    margin: 25,
    cursor: 'pointer',
    borderRadius: 20,
    filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
    width: 145,
    height: 145,
    [`@media (max-width: ${BREAKPOINT_LAPTOP}px)`]: {
        width: 105,
        height: 105,
        margin: 20,
    },
    [`@media (max-width: ${BREAKPOINT_TABLET}px)`]: {
        width: 70,
        height: 70,
        margin: 26,
        borderRadius: 7,
    },
    [`@media (max-width: ${BREAKPOINT_MOBILE}px)`]: {
        width: 66,
        height: 66,
        margin: 10,
    },
});

export const activeImgStyle = css({
    width: 170,
    height: 170,
    margin: 0,
    [`@media (max-width: ${BREAKPOINT_LAPTOP}px)`]: {
        margin: 0,
        width: 125,
        height: 125,
    },
    [`@media (max-width: ${BREAKPOINT_TABLET}px)`]: {
        margin: 0,
        width: 96,
        height: 96,
    },
    [`@media (max-width: ${BREAKPOINT_MOBILE}px)`]: {
        margin: 0,
        width: 88,
        height: 88,
    },
});
