import { css } from '@emotion/react';
import { BREAKPOINT_LAPTOP, BREAKPOINT_MOBILE, BREAKPOINT_TABLET } from '../../../const/breakpoints';
import { COLOR_BACKGROUND } from '../../../const/colors';

export const sectionStyle = css({
    backgroundColor: COLOR_BACKGROUND,

    '.bottom-slider': {
        maxWidth: 690,
        marginLeft: 0,
        [`@media (max-width: ${BREAKPOINT_LAPTOP}px)`]: {
            maxWidth: 490,
        },
        [`@media (max-width: ${BREAKPOINT_TABLET}px)`]: {
            maxWidth: 370,
        },
        [`@media (max-width: ${BREAKPOINT_MOBILE}px)`]: {
            maxWidth: 314,
        },
    },
    '.swiper-button-prev,.swiper-button-next': {
        color: '#FFD9F7',
    },
});

export const infoPanelStyle = css({
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
        minWidth: 429,
        height: 429,
        padding: '0px 40px',
    },
    [`@media (max-width: ${BREAKPOINT_TABLET}px)`]: {
        minWidth: 551,
        height: 263,
        alignItems: 'flex-start',
        marginBottom: '-30px',
        padding: '35px 100px 40px 60px',
        justifyContent: 'space-around',
    },
    [`@media (max-width: ${BREAKPOINT_MOBILE}px)`]: {
        minWidth: 400,
        height: 217,
        padding: '29px 40px 0px 40px',
        justifyContent: 'flex-start',
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
    objectFit: 'cover',
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
        lineHeight: '20px',
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
        lineHeight: '17px',
    },
});

export const slideImgStyle = css({
    borderRadius: 20,
    width: 145,
    height: 145,
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
        width: 60,
        height: 60,
    },
});
