import { css } from '@emotion/react';
import { BREAKPOINT_LAPTOP, BREAKPOINT_TABLET, BREAKPOINT_MOBILE } from '../../const/breakpoints';
import '@fontsource/montserrat/variable.css';

export const wrapperStyle = css({
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
});

export const headerStyle = css({
    width: 985,
    margin: '0 auto',
    display: 'flex',
    position: 'relative',
    marginTop: 186,
    marginBottom: 102,
    background: '#5014BC',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: '18px',
    [`@media (max-width: ${BREAKPOINT_LAPTOP}px)`]: {
        maxWidth: 919,
    },
    [`@media (max-width: ${BREAKPOINT_TABLET}px)`]: {
        maxWidth: 540,
        marginTop: 50,
        marginBottom: 45,
    },
    [`@media (max-width: ${BREAKPOINT_MOBILE}px)`]: {
        maxWidth: 319,
        marginTop: 70,
        marginBottom: 22,
    },
});

export const imageStyle = css({
    width: 217,
    height: 314,
    position: 'absolute',
    left: 70,
    top: -55,
    [`@media (max-width: ${BREAKPOINT_LAPTOP}px)`]: {
        left: 53,
        top: -40,
        width: 189,
        height: 286,
    },
    [`@media (max-width: ${BREAKPOINT_TABLET}px)`]: {
        left: 29,
        top: 15,
        width: 134,
        height: 194,
    },
    [`@media (max-width: ${BREAKPOINT_MOBILE}px)`]: {
        left: 22,
        top: 10,
        width: 108,
        height: 157,
    },
});

export const titleStyle = css({
    fontFamily: 'MontserratVariable, sans-serif',
    fontStyle: 'normal',
    fontWeight: '900',
    fontSize: '55px',
    padding: '74px 80px 86px',
    paddingLeft: 369,
    lineHeight: '60px',
    color: '#0DB7E8',
    [`@media (max-width: ${BREAKPOINT_LAPTOP}px)`]: {
        padding: '72px 52px 88px 331px',
    },
    [`@media (max-width: ${BREAKPOINT_TABLET}px)`]: {
        fontSize: 35,
        lineHeight: '40px',
        padding: '65px 98px 75px 225px',
    },
    [`@media (max-width: ${BREAKPOINT_MOBILE}px)`]: {
        fontSize: 20,
        lineHeight: '25px',
        fontWeight: 700,
        padding: '60px 44px 65px 157px',
    },
});

export const containerStyle = css({
    display: 'grid',
    maxWidth: 985,
    margin: '0 auto',
    gridTemplateColumns: '1fr 1fr 1fr',
    gap: '50px 96px',
    [`@media (max-width: ${BREAKPOINT_LAPTOP}px)`]: {
        maxWidth: 919,
        gridTemplateColumns: '1fr 1fr 1fr',
        gap: '59px 97px',
    },
    [`@media (max-width: ${BREAKPOINT_TABLET}px)`]: {
        maxWidth: 540,
        gridTemplateColumns: '1fr 1fr',
        gap: '25px 59px',
    },
    [`@media (max-width: ${BREAKPOINT_MOBILE}px)`]: {
        maxWidth: 319,
        gridTemplateColumns: '1fr 1fr',
        gap: '12.5px 12.5px',
    },
});

export const itemStyle = css({
    width: 262,
    height: 262,
    filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
    borderRadius: 13,
    [`@media (max-width: ${BREAKPOINT_LAPTOP}px)`]: {
        width: 240,
        height: 240,
    },
    [`@media (max-width: ${BREAKPOINT_TABLET}px)`]: {
        width: 240,
        height: 240,
    },
    [`@media (max-width: ${BREAKPOINT_MOBILE}px)`]: {
        width: 151,
        height: 151,
    },
});

export const buttonStyle = css({ margin: '0 auto', marginTop: 120, marginBottom: 88 });
