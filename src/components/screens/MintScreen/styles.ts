import { css } from '@emotion/react';
import { BREAKPOINT_TABLET, BREAKPOINT_MOBILE, BREAKPOINT_LAPTOP } from '../../../const/breakpoints';
import { COLOR_PRIMARY, COLOR_SECONDARY, COLOR_WHITE } from '../../../const/colors';

import MintBG from '../../../images/mintBG.png';

export const sectionStyle = css({
    width: '100%',
    height: 'calc(100vh - (60px * 2))',
    marginTop: -40,
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
});

export const mintPanelImgStyle = css({
    boxShadow: '0px 10px 10px rgba(0, 0, 0, 0.25)',
    borderRadius: 76,
    width: 974,
    height: 500,
});

export const mintImgStyle = css({
    boxShadow: '0px 4px 4px 0px #00000040',
    borderRadius: 34,
});

export const mintPanelInnerLeftStyle = css({
    paddingRight: 115,
    display: 'flex',
    flexDirection: 'column',
    '.mintedText': {
        paddingLeft: 30,
        marginTop: 'auto',
    },
});

export const titleStyle = css({
    fontSize: 36,
    lineHeight: '40px',
    fontWeight: 900,
    color: COLOR_WHITE,
    textTransform: 'uppercase',
    paddingBottom: 20,
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
});

export const buttonStyle = css({
    width: 150,
    height: 45,
    padding: '10px 0',
    fontSize: 20,
    lineHeight: '25px',
    fontWeight: 700,
    marginTop: 'auto',
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
});

export const inputStyle = css({
    width: 108,
    height: 40,
    border: 'none',
    backgroundColor: COLOR_WHITE,
    margin: '0 12px',
    fontSize: 24,
    fontWeight: 700,
    lineHeight: 29,
    color: '#775DB7',
    textAlign: 'center',
});

export const inputTextStyle = css({
    color: COLOR_WHITE,
    fontWeight: 14,
    lineHeight: '17px',
    paddingLeft: 30,
    paddingTop: 15,
});

export const inputWrapperStyle = css({});

export const textTotalStyle = css({
    fontSize: 14,
    lineHeight: '17px',
    marginRight: 10,
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
});

export const totalWrapperStyle = css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
    marginLeft: 50,
});

export const centerWrapperStyle = css({
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingTop: 70,
});

export const mintPanelInnerRightStyle = css({
    display: 'flex',
    flexDirection: 'column',
});
