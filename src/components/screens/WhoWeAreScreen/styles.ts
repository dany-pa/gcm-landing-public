import { css } from '@emotion/react';
import { BREAKPOINT_LAPTOP, BREAKPOINT_MOBILE, BREAKPOINT_TABLET } from '../../../const/breakpoints';

export const sectionStyle = css({
    padding: '100px 0 300px 0',
    [`@media (max-width: ${BREAKPOINT_LAPTOP}px)`]: {
        padding: '35px 0 100px 0',
    },
});

export const wrapperStyle = css({
    [`@media (max-width: ${BREAKPOINT_LAPTOP}px)`]: {
        maxWidth: 1000,
    },
    [`@media (max-width: ${BREAKPOINT_TABLET}px)`]: {
        maxWidth: 550,
    },

    [`@media (max-width: ${BREAKPOINT_MOBILE}px)`]: {
        maxWidth: 400,
    },
});

export const personStyle = css({
    width: 324,
    height: 576,
    background:
        'linear-gradient(180deg, rgba(153, 224, 241, 0.25) 0%, rgba(182, 232, 245, 0.175) 30.21%, rgba(221, 244, 250, 0.2) 64.06%, rgba(246, 252, 253, 0.225) 81.25%, rgba(255, 255, 255, 0.25) 100%)',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: '53px 53px 32px 32px',
    display: 'flex',
    flexDirection: 'column',
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
        flexDirection: 'row',
    },
    [`@media (max-width: ${BREAKPOINT_MOBILE}px)`]: {
        height: 191,
        width: 360,
        marginRight: 'auto',
        marginLeft: 'auto',
    },
});

export const personText = css({
    padding: '15px 35px 30px 35px',
    height: 'calc(100% - 288px)',
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    border: '2px solid rgb(153 224 241 / 25%)',
    borderRadius: 32,
    borderTop: 'none',
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,

    [`@media (max-width: ${BREAKPOINT_LAPTOP}px)`]: {
        padding: '25px 25px 25px 25px',
    },
    [`@media (max-width: ${BREAKPOINT_TABLET}px)`]: {
        height: 'auto',
        padding: '15px 50px 15px 0',
        justifyContent: 'space-around',
        paddingLeft: 30,
        border: '2px solid rgb(153 224 241 / 25%)',
        borderLeft: 0,
        borderRadius: 15,
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
    },
    [`@media (max-width: ${BREAKPOINT_MOBILE}px)`]: {
        paddingRight: 30,
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
    },
    [`@media (max-width: ${BREAKPOINT_MOBILE}px)`]: {
        width: 172,
        height: '100%',
    },
});

export const personsWrapperStyle = css({
    display: 'flex',
    justifyContent: 'space-between',

    '.person:nth-of-type(1) .titlePerson': {
        marginBottom: 25,
    },
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

export const titleStyle = css({
    textAlign: 'center',
    paddingBottom: 100,
    fontSize: 50,
    lineHeight: '60px',
    [`@media (max-width: ${BREAKPOINT_LAPTOP}px)`]: {
        fontSize: 25,
        lineHeight: '35px',
        paddingBottom: 30,
    },
    [`@media (max-width: ${BREAKPOINT_TABLET}px)`]: {
        fontSize: 30,
    },
});
export const titlePersonStyle = css({
    position: 'relative',
    marginBottom: 40,
    [`@media (max-width: ${BREAKPOINT_TABLET}px)`]: {
        marginBottom: 15,
    },
});
export const nameStyle = css({ paddingBottom: 5 });
export const personTextStyle = css({
    fontSize: 20,
    lineHeight: '25px',
    [`@media (max-width: ${BREAKPOINT_TABLET}px)`]: {
        fontSize: 16,
        lineHeight: '20px',
    },
    [`@media (max-width: ${BREAKPOINT_MOBILE}px)`]: {
        fontSize: 12,
        lineHeight: '16px',
    },
});
