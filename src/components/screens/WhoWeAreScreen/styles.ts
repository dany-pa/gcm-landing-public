import { css } from '@emotion/react';
import { BREAKPOINT_LAPTOP, BREAKPOINT_MOBILE, BREAKPOINT_TABLET } from '../../../const/breakpoints';

export const sectionStyle = css({
    padding: '100px 0',
    [`@media (max-width: ${BREAKPOINT_LAPTOP}px)`]: {
        padding: '35px 0 60px 0',
    },
});

export const wrapperStyle = css({
    maxWidth: 1050,
    marginLeft: 'calc((100vw - 1050px) / 2)',
    marginRight: 'calc((100vw - 1050px) / 2)',
    [`@media (max-width: ${BREAKPOINT_LAPTOP}px)`]: {
        maxWidth: 1000,
        marginLeft: 'calc((100vw - 1000px) / 2)',
        marginRight: 'calc((100vw - 1000px) / 2)',
    },
    [`@media (max-width: ${BREAKPOINT_TABLET}px)`]: {
        maxWidth: 550,
        marginLeft: 'calc((100vw - 550px) / 2)',
        marginRight: 'calc((100vw - 550px) / 2)',
    },

    [`@media (max-width: ${BREAKPOINT_MOBILE}px)`]: {
        maxWidth: 400,
        marginLeft: 'calc((100vw - 400px) / 2)',
        marginRight: 'calc((100vw - 400px) / 2)',
    },
});

export const personStyle = css({
    width: 324,
    height: 576,
    background:
        'linear-gradient(180deg, rgba(153, 224, 241, 0.25) 0%, rgba(182, 232, 245, 0.175) 30.21%, rgba(221, 244, 250, 0.2) 64.06%, rgba(246, 252, 253, 0.225) 81.25%, rgba(255, 255, 255, 0.25) 100%)',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: '53px 53px 32px 32px',
    [`@media (max-width: ${BREAKPOINT_LAPTOP}px)`]: {
        width: 324,
        height: 581,
    },
    [`@media (max-width: ${BREAKPOINT_TABLET}px)`]: {
        width: '100%',
        height: 277,
        display: 'flex',
        borderRadius: '15px',
        marginBottom: 32,
    },
    [`@media (max-width: ${BREAKPOINT_MOBILE}px)`]: {
        height: 191,
    },
});

export const personText = css({
    padding: '15px 55px 30px 40px',
    height: 'calc(100% - 288px)',
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    [`@media (max-width: ${BREAKPOINT_LAPTOP}px)`]: {
        padding: '25px 55px 30px 35px',
    },
    [`@media (max-width: ${BREAKPOINT_TABLET}px)`]: {
        height: 'auto',
        padding: '15px 50px 15px 0',
        justifyContent: 'space-around',
    },
});

export const personImgStyle = css({
    width: 324,
    height: 288,
    borderRadius: '53px 53px 0 0',
    [`@media (max-width: ${BREAKPOINT_TABLET}px)`]: {
        width: 249,
        height: '100%',
        objectFit: 'cover',
        borderRadius: '15px 0 0 15px',
        marginRight: 30,
    },
    [`@media (max-width: ${BREAKPOINT_MOBILE}px)`]: {
        width: 172,
        height: '100%',
    },
});

export const personsWrapperStyle = css({
    display: 'flex',
    justifyContent: 'space-between',
    [`@media (max-width: ${BREAKPOINT_TABLET}px)`]: {
        flexDirection: 'column',
    },
});

export const twitterIconStyle = css({
    display: 'block',
    position: 'absolute',
    top: 0,
    right: -20,

    img: {
        width: '100%',
        height: '100%',
    },
    [`@media (max-width: ${BREAKPOINT_TABLET}px)`]: {
        flexDirection: 'column',
        width: 34,
        height: 27,
    },
    [`@media (max-width: ${BREAKPOINT_MOBILE}px)`]: {
        width: 24,
        height: 19,
    },
});

export const titleStyle = css({ textAlign: 'center', paddingBottom: 100 });
export const titlePersonStyle = css({ position: 'relative' });
export const nameStyle = css({ paddingBottom: 5 });
export const personTextStyle = css({
    [`@media (max-width: ${BREAKPOINT_MOBILE}px)`]: {
        fontSize: 12,
    },
});
