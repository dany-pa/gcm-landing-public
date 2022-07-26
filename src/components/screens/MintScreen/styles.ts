import { css } from '@emotion/react';
import { BREAKPOINT_TABLET, BREAKPOINT_MOBILE, BREAKPOINT_LAPTOP } from '../../../const/breakpoints';
import { COLOR_BACKGROUND, COLOR_PRIMARY, COLOR_SECONDARY, COLOR_WHITE } from '../../../const/colors';

import MintBG from '../../../images/mintBG.png';

export const sectionStyle = css({
    width: '100%',
    height: 'calc(100vh - (60px * 2))',
    marginTop: -40,
    maxHeight: 980,
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 34,

    backgroundImage: `url(${MintBG})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    [`@media (max-width: ${BREAKPOINT_LAPTOP}px)`]: {
        marginTop: -25,
        borderRadius: 0,
        height: '100vh',
        maxHeight: '100vh',
    },
});

export const mintPanelStyle = css({
    position: 'relative',
});

export const mintPanelBodyStyle = css({
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    display: 'flex',
    padding: '50px 0 50px 50px',
    [`@media (max-width: ${BREAKPOINT_TABLET}px)`]: {
        padding: '30px 0 30px 30px',
    },
});

export const mintPanelImgStyle = css({
    boxShadow: '0px 10px 10px rgba(0, 0, 0, 0.25)',
    borderRadius: 76,
    width: 974,
    height: 500,

    [`@media (max-width: ${BREAKPOINT_LAPTOP}px)`]: {
        width: 920,
        height: 475,
    },

    [`@media (max-width: ${BREAKPOINT_TABLET}px)`]: {
        width: 650,
        height: 340,
        borderRadius: 54,
    },
});

export const mintImgStyle = css({
    boxShadow: '0px 4px 4px 0px #00000040',
    borderRadius: 34,
    width: 335,
    height: 335,
    objectFit: 'cover',

    [`@media (max-width: ${BREAKPOINT_LAPTOP}px)`]: {
        width: 317,
        height: 317,
    },

    [`@media (max-width: ${BREAKPOINT_TABLET}px)`]: {
        width: 224,
        height: 224,
    },
});

export const mintPanelInnerLeftStyle = css({
    marginRight: 115,
    display: 'flex',
    flexDirection: 'column',
    height: '100%',

    '.mintedText': {
        paddingLeft: 30,
        marginTop: 'auto',
    },

    [`@media (max-width: ${BREAKPOINT_LAPTOP}px)`]: {
        '.mintedText': {
            paddingLeft: 40,
        },
    },

    [`@media (max-width: ${BREAKPOINT_TABLET}px)`]: {
        marginBottom: 40,
        marginTop: 0,
        marginRight: 80,
    },
});

export const titleStyle = css({
    fontSize: 36,
    lineHeight: '40px',
    fontWeight: 900,
    color: COLOR_WHITE,
    textTransform: 'uppercase',
    paddingBottom: 20,

    [`@media (max-width: ${BREAKPOINT_TABLET}px)`]: {
        fontSize: 20,
        lineHeight: '25px',
        paddingBottom: 10,
    },
});

export const textStyle = css({
    fontSize: 24,
    lineHeight: '30px',
    fontWeight: 400,
    color: COLOR_WHITE,
    textTransform: 'uppercase',
    strong: {
        fontWeight: 700,
    },

    [`@media (max-width: ${BREAKPOINT_LAPTOP}px)`]: {
        fontSize: 22,
        lineHeight: '26px',
    },

    [`@media (max-width: ${BREAKPOINT_TABLET}px)`]: {
        fontSize: 14,
        lineHeight: '17px',
    },
});

export const buttonStyle = css({
    width: 150,
    height: 45,
    fontSize: 20,
    lineHeight: '25px',
    fontWeight: 700,
    marginTop: 'auto',

    [`@media (max-width: ${BREAKPOINT_TABLET}px)`]: {
        width: 100,
        height: 30,
        fontSize: 14,
        lineHeight: '17px',
        padding: 0,
        marginBottom: 20,
    },
});

export const inputButtonStyle = css({
    width: 40,
    height: 40,
    backgroundColor: COLOR_PRIMARY,
    borderRadius: 7,
    border: 'none',
    color: COLOR_WHITE,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',

    [`@media (max-width: ${BREAKPOINT_TABLET}px)`]: {
        width: 26,
        height: 26,
    },
});

export const minusBtnStyle = css({
    img: {
        width: 20,
        height: 4,
    },
    [`@media (max-width: ${BREAKPOINT_TABLET}px)`]: {
        img: {
            width: 14,
        },
    },
});

export const plusBtnStyle = css({
    img: {
        width: 20,
        height: 20,
    },
    [`@media (max-width: ${BREAKPOINT_TABLET}px)`]: {
        img: {
            width: 14,
            height: 14,
        },
    },
});

export const inputStyle = css({
    width: 108,
    height: 40,
    border: 'none',
    backgroundColor: COLOR_WHITE,
    margin: '0 12px',
    fontSize: 24,
    fontWeight: 700,
    lineHeight: '29px',
    color: '#775DB7',
    textAlign: 'center',

    [`@media (max-width: ${BREAKPOINT_TABLET}px)`]: {
        width: 72,
        height: 26,
        margin: '0 9px',
        fontSize: 18,
        lineHeight: '22px',
    },
});

export const inputTextStyle = css({
    color: COLOR_WHITE,
    fontWeight: 14,
    lineHeight: '17px',
    paddingLeft: 30,
    paddingTop: 15,

    [`@media (max-width: ${BREAKPOINT_TABLET}px)`]: {
        fontSize: 10,
        lineHeight: '12px',
        paddingTop: 10,
        paddingLeft: 20,
    },
});

export const inputWrapperStyle = css({});

export const textTotalStyle = css({
    fontSize: 14,
    lineHeight: '17px',
    marginRight: 10,
    [`@media (max-width: ${BREAKPOINT_LAPTOP}px)`]: {
        fontSize: 12,
        lineHeight: '15px',
    },

    [`@media (max-width: ${BREAKPOINT_TABLET}px)`]: {
        fontSize: 11,
        lineHeight: '14px',
        marginRight: 5,
    },
});

export const pricePanelStyle = css({
    width: 91,
    height: 26,
    backgroundColor: COLOR_WHITE,
    borderRadius: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#775DB7',
    strong: {
        marginRight: 5,
    },
    [`@media (max-width: ${BREAKPOINT_LAPTOP}px)`]: {
        width: 80,
        height: 30,
    },
    [`@media (max-width: ${BREAKPOINT_TABLET}px)`]: {
        width: 59,
        height: 20,
        fontSize: 11,
        lineHeight: '14px',
    },
});

export const totalWrapperStyle = css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
    marginLeft: 50,
    [`@media (max-width: ${BREAKPOINT_LAPTOP}px)`]: {
        marginLeft: 60,
    },
    [`@media (max-width: ${BREAKPOINT_TABLET}px)`]: {
        marginTop: 5,
        marginLeft: 20,
    },
});

export const centerWrapperStyle = css({
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingTop: 70,
    [`@media (max-width: ${BREAKPOINT_LAPTOP}px)`]: {
        paddingTop: 70,
    },
    [`@media (max-width: ${BREAKPOINT_TABLET}px)`]: {
        paddingTop: 35,
    },
});

export const mintPanelInnerRightStyle = css({
    display: 'flex',
    flexDirection: 'column',
});
