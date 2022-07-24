import { css } from '@emotion/react';
import { BREAKPOINT_TABLET, BREAKPOINT_MOBILE, BREAKPOINT_LAPTOP } from '../../../const/breakpoints';
import { COLOR_PRIMARY } from '../../../const/colors';

export const sectionStyle = css({
    paddingBottom: 50,
});

export const panelStyle = css({
    width: 685,
    height: 231,
    borderRadius: 23,
    backgroundColor: '#551EBD',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'center',
    position: 'relative',
    [`@media (max-width: ${BREAKPOINT_TABLET}px)`]: {
        width: 430,
        height: 213,
        flexDirection: 'column',
        padding: '25px 0 15px 150px',
    },
    [`@media (max-width: ${BREAKPOINT_MOBILE}px)`]: {
        width: 319,
        height: 158,
        padding: '15px 0 15px 108px',
    },
});

export const iconsWrapperStyle = css({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '100%',
    position: 'absolute',
    right: 25,
    top: 0,
    a: {
        display: 'block',
    },

    'a + a': {
        marginTop: 18,
    },
    [`@media (max-width: ${BREAKPOINT_TABLET}px)`]: {
        position: 'static',
        flexDirection: 'row',
        justifyContent: 'flex-start',

        'a + a': {
            marginTop: 0,
            marginLeft: 45,
        },
    },
    [`@media (max-width: ${BREAKPOINT_MOBILE}px)`]: {
        'a + a': {
            marginLeft: 35,
        },
    },
});

export const iconStyle = css({
    width: 72,
    height: 72,
    [`@media (max-width: ${BREAKPOINT_TABLET}px)`]: {
        width: 52,
        height: 52,
    },
    [`@media (max-width: ${BREAKPOINT_MOBILE}px)`]: {
        width: 38,
        height: 38,
    },
});

export const textWrapperStyle = css({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: '50px',
    [`@media (max-width: ${BREAKPOINT_TABLET}px)`]: {
        padding: 0,
    },
});

export const titleStyle = css({
    fontSize: 50,
    lineHeight: '35px',
    color: COLOR_PRIMARY,
    fontWeight: 900,
    [`@media (max-width: ${BREAKPOINT_LAPTOP}px)`]: {
        fontSize: 40,
        lineHeight: '35px',
    },
    [`@media (max-width: ${BREAKPOINT_TABLET}px)`]: {
        fontSize: 25,
        lineHeight: '30px',
    },
    [`@media (max-width: ${BREAKPOINT_MOBILE}px)`]: {
        fontSize: 20,
        lineHeight: '25px',
    },
});

export const textStyle = css({
    color: COLOR_PRIMARY,
    fontSize: 30,
    lineHeight: '35px',
    [`@media (max-width: ${BREAKPOINT_TABLET}px)`]: {
        fontSize: 25,
        lineHeight: '30px',
        margin: '15px 0',
    },
    [`@media (max-width: ${BREAKPOINT_MOBILE}px)`]: {
        fontSize: 20,
        lineHeight: '25px',
        margin: '0 0 15px 0',
    },
});

export const bubbleStyle_1 = css({
    width: 70,
    height: 70,
    left: 'calc(-1 * 70px - 30px)',
    top: 'calc(-1 * 70px / 2)',
    [`@media (max-width: ${BREAKPOINT_TABLET}px)`]: {
        width: 80,
        height: 80,
        left: 'calc(-1 * 70px)',
        top: 'calc(-1 * 70px - 25px)',
    },
    [`@media (max-width: ${BREAKPOINT_MOBILE}px)`]: {
        width: 52,
        height: 52,
        left: -10,
        top: 'calc(-1 * 52px - 25px)',
    },
});

export const bubbleStyle_2 = css({
    width: 110,
    height: 110,
    left: 10,
    top: 25,
    [`@media (max-width: ${BREAKPOINT_TABLET}px)`]: {
        left: 30,
        top: 'calc(-1 * (110px / 2))',
    },
    [`@media (max-width: ${BREAKPOINT_MOBILE}px)`]: {
        width: 68,
        height: 68,
        top: 'calc(-1 * (68px / 2) -20px)',
        left: 40,
    },
});
export const bubbleStyle_3 = css({
    width: 156,
    height: 156,
    left: 'calc(-1 * 156px + 35px)',
    bottom: -50,
    [`@media (max-width: ${BREAKPOINT_TABLET}px)`]: {
        width: 142,
        height: 142,
        left: 'calc(-1 * 142px / 2)',
        top: 'calc(142px / 4)',
    },
    [`@media (max-width: ${BREAKPOINT_MOBILE}px)`]: {
        width: 88,
        height: 88,
        left: -25,
        top: -10,
    },
});
