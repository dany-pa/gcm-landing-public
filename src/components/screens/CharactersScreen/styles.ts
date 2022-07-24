import { css } from '@emotion/react';
import { BREAKPOINT_LAPTOP, BREAKPOINT_MOBILE, BREAKPOINT_TABLET } from '../../../const/breakpoints';

export const wrapperStyle = css({
    position: 'relative',
    marginRight: 0,

    [`@media (max-width: ${BREAKPOINT_LAPTOP}px)`]: {
        marginLeft: 'calc((100vw - 950px) / 2)',
        marginRight: 0,
    },
    [`@media (max-width: ${BREAKPOINT_TABLET}px)`]: {
        maxWidth: 550,
        margin: '0 auto',
    },
    [`@media (max-width: ${BREAKPOINT_MOBILE}px)`]: {
        maxWidth: '100vw',
        width: '100vw',
        margin: '0 auto',
    },
});

export const sectionStyle = css({
    paddingTop: 350,
    paddingBottom: 250,
    [`@media (max-width: ${BREAKPOINT_LAPTOP}px)`]: {
        paddingBottom: 28,
    },
    [`@media (max-width: ${BREAKPOINT_TABLET}px)`]: {
        paddingTop: 70,
    },
    [`@media (max-width: ${BREAKPOINT_MOBILE}px)`]: {
        paddingTop: 100,
    },

    '.bottom-slider': {
        maxWidth: 490,
        marginTop: -250,
        marginLeft: 0,
        overflow: 'visible',
        [`@media (max-width: ${BREAKPOINT_LAPTOP}px)`]: {
            maxWidth: 415,
            marginTop: -190,
        },
        [`@media (max-width: ${BREAKPOINT_TABLET}px)`]: {
            maxWidth: 320,
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
        // color: '#FFD9F7',
        display: 'none',
    },
});

export const infoPanelStyle = css({
    width: 494,
    minWidth: 494,
    height: 469,
    padding: '0px 35px 0px 35px',
    background:
        'linear-gradient(180deg, rgba(153, 224, 241, 0.25) 0%, rgba(182, 232, 245, 0.175) 28.13%, rgba(221, 244, 250, 0.2) 56.77%, rgba(246, 252, 253, 0.225) 77.6%, rgba(255, 255, 255, 0.25) 97.4%)',
    boxShadow: ' 0px 4px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: 45,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    border: '2px solid #99E0F140',

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
    width: 952,
    height: 952,
    marginLeft: -150,
    marginTop: -100,
    objectFit: 'contain',
    [`@media (max-width: ${BREAKPOINT_LAPTOP}px)`]: {
        width: 731,
        height: 731,
        marginTop: -40,
        marginLeft: -120,
    },
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
    margin: 15,
    cursor: 'pointer',
    borderRadius: 20,
    filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
    width: 114,
    height: 114,
    [`@media (max-width: ${BREAKPOINT_LAPTOP}px)`]: {
        width: 105,
        height: 105,
    },
    [`@media (max-width: ${BREAKPOINT_TABLET}px)`]: {
        width: 70,
        height: 70,
        borderRadius: 7,
    },
    [`@media (max-width: ${BREAKPOINT_MOBILE}px)`]: {
        width: 66,
        height: 66,
        margin: 10,
    },
});

export const activeImgStyle = css({
    width: 134,
    height: 134,
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

export const bubbleStyle_1 = css({
    width: 114,
    height: 114,
    top: -250,
    left: 'calc(250px - (114px / 2))',
    [`@media (max-width: ${BREAKPOINT_LAPTOP}px)`]: {
        width: 84,
        height: 84,
        top: 'calc(-1 * (84px + 70px))',
        left: 'calc(429px - (429px / 3))',
    },
    [`@media (max-width: ${BREAKPOINT_TABLET}px)`]: {
        width: 104,
        height: 104,
        top: 'calc(-1 * (104px + 15px))',
        left: 20,
    },
    [`@media (max-width: ${BREAKPOINT_MOBILE}px)`]: {
        width: 102,
        height: 102,
        top: 'calc(-102px - 50px / 2)',
        left: 0,
    },
});
export const bubbleStyle_2 = css({
    width: 92,
    height: 92,
    top: 'calc((92px + 68px) * -1)',
    left: 70,
    [`@media (max-width: ${BREAKPOINT_LAPTOP}px)`]: {
        width: 64,
        height: 64,
        left: 'calc(429px /2)',
        top: 'calc(-1 * (64px + 5px))',
    },
    [`@media (max-width: ${BREAKPOINT_TABLET}px)`]: {
        width: 78,
        height: 78,
        right: 20,
        left: 'initial',
        top: 'calc(263px / 2 - 78px)',
    },
    [`@media (max-width: ${BREAKPOINT_MOBILE}px)`]: {
        width: 63,
        height: 63,
        top: 'calc(214px / 2 - (63px / 2))',
        right: 'calc(320px - 63px)',
    },
});
export const bubbleStyle_3 = css({
    width: 114,
    height: 114,
    left: 250,
    top: -130,
    [`@media (max-width: ${BREAKPOINT_LAPTOP}px)`]: {
        width: 100,
        height: 100,
        left: 'calc(429px - 100px)',
        top: 'calc(-1 * (100px / 2))',
    },
    [`@media (max-width: ${BREAKPOINT_TABLET}px)`]: {
        width: 125,
        height: 125,
        right: -40,
        left: 'initial',
        top: 'calc(263px - 40px)',
    },
    [`@media (max-width: ${BREAKPOINT_MOBILE}px)`]: {
        width: 74,
        height: 74,
        top: 'calc(214px - 74px /2)',
        right: 0,
    },
});
export const bubbleStyle_4 = css({
    width: 64,
    height: 64,
    right: 584,
    top: 'calc(469px - 64px - 20px)',
    [`@media (max-width: ${BREAKPOINT_LAPTOP}px)`]: {
        display: 'none',
    },
    [`@media (max-width: ${BREAKPOINT_MOBILE}px)`]: {
        display: 'block',
        width: 56,
        height: 56,
        top: 'calc(214px + 74px / 2)',
        right: 74,
    },
});
