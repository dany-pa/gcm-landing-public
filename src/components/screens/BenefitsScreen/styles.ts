import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { BREAKPOINT_TABLET, BREAKPOINT_LAPTOP, BREAKPOINT_MOBILE } from '../../../const/breakpoints';

export const sectionStyle = css({
    padding: '30px 0 155px 0',

    [`@media (max-width: ${BREAKPOINT_LAPTOP}px)`]: {
        paddingBottom: 55,
    },
    [`@media (max-width: ${BREAKPOINT_TABLET}px)`]: {
        paddingBottom: 70,
    },
    [`@media (max-width: ${BREAKPOINT_MOBILE}px)`]: {
        paddingBottom: 33,
    },
});

export const Benefit = styled.div(
    css({
        width: '100%',
        height: '100%',
        borderRadius: 20,
        border: '1px solid #99E0F14D',
        background:
            'linear-gradient(180deg, rgba(153, 224, 241, 0.3) 0%, rgba(182, 232, 245, 0.21) 35.94%, rgba(221, 244, 250, 0.24) 63.54%, rgba(246, 252, 253, 0.27) 80.73%, rgba(255, 255, 255, 0.3) 100%)',
        transform: 'rotate(-180deg)',
        filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',

        [`@media (max-width: ${BREAKPOINT_TABLET}px)`]: {
            borderRadius: 32,
        },
        [`@media (max-width: ${BREAKPOINT_MOBILE}px)`]: {
            borderRadius: 23,
        },
    })
);

export const benefitWrapperStyle = css({
    paddingBottom: '30px',
    display: 'flex',
    justifyContent: 'space-between',
    [`@media (max-width: ${BREAKPOINT_TABLET}px)`]: {
        display: 'block',
    },
});

export const benefitStyle = css({
    position: 'relative',
    width: 207,
    height: 412,
    [`@media (max-width: ${BREAKPOINT_LAPTOP}px)`]: {
        width: 182,
        height: 362,
    },

    [`@media (max-width: ${BREAKPOINT_TABLET}px)`]: {
        height: 140,
        width: '100%',
        marginBottom: 15,
    },

    [`@media (max-width: ${BREAKPOINT_MOBILE}px)`]: {
        height: 134,
    },
});

export const benefitInnerStyle = css({
    position: 'absolute',
    top: 0,
    height: '100%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingTop: 50,
    [`@media (max-width: ${BREAKPOINT_TABLET}px)`]: {
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        padding: '0 50px',
    },
    [`@media (max-width: ${BREAKPOINT_MOBILE}px)`]: {
        padding: '0 25px',
    },
});

export const stackPanelStyle = css({
    backgroundColor: '#5014BC',
    width: '100%',
    borderRadius: 40,
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    padding: '30px 30px 30px 84px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    [`@media (max-width: ${BREAKPOINT_TABLET}px)`]: {
        width: 555,
        margin: '0 auto 30px auto',
        position: 'relative',
        paddingLeft: '64px',
    },
    [`@media (max-width: ${BREAKPOINT_MOBILE}px)`]: {
        width: '100%',
        flexDirection: 'column',
        borderRadius: 26,
        padding: '19px 27px',
    },
});

export const stackIconStyle = css({
    width: 290,
    height: 290,

    [`@media (max-width: ${BREAKPOINT_LAPTOP}px)`]: {
        width: 264,
        height: 264,
    },
    [`@media (max-width: ${BREAKPOINT_TABLET}px)`]: {
        width: 168,
        height: 168,
        position: 'absolute',
        right: '-35px',
        top: '-25px',
    },
    [`@media (max-width: ${BREAKPOINT_MOBILE}px)`]: {
        width: 79,
        height: 79,
        position: 'static',
    },
});

export const titleStyle = css({
    marginBottom: 48,
    [`@media (max-width: ${BREAKPOINT_TABLET}px)`]: {
        marginBottom: 25,
        fontSize: 19,
        lineHeight: '20px',
    },
    [`@media (max-width: ${BREAKPOINT_MOBILE}px)`]: {
        marginBottom: 15,
        fontSize: 20,
    },
});

export const textFirstStyle = css({
    marginBottom: 30,
    [`@media (max-width: ${BREAKPOINT_TABLET}px)`]: {
        marginBottom: 25,
    },
    [`@media (max-width: ${BREAKPOINT_MOBILE}px)`]: {
        marginBottom: 15,
    },
});

export const textStyle = css({
    [`@media (max-width: ${BREAKPOINT_TABLET}px)`]: {
        fontSize: 19,
    },
    [`@media (max-width: ${BREAKPOINT_MOBILE}px)`]: {
        marginBottom: 20,
        fontSize: 12,
        lineHeight: '16px',
    },
});

export const benefitTextStyle = css({
    textAlign: 'center',
    height: 121,
    [`@media (max-width: ${BREAKPOINT_LAPTOP}px)`]: {
        height: 108,
    },
    [`@media (max-width: ${BREAKPOINT_MOBILE}px)`]: {
        textAlign: 'left',
        fontSize: 14,
    },
});

export const benefitIconStyle = css({
    [`@media (max-width: ${BREAKPOINT_TABLET}px)`]: {
        width: '20%',
    },
});

export const stackInnerPanelStyle = css({
    marginRight: 50,
    [`@media (max-width: ${BREAKPOINT_LAPTOP}px)`]: {
        marginRight: 25,
    },
    [`@media (max-width: ${BREAKPOINT_TABLET}px)`]: {
        marginRight: 40,
    },
    [`@media (max-width: ${BREAKPOINT_MOBILE}px)`]: {
        marginRight: 0,
    },
});
