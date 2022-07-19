import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { BREAKPOINT_TABLET, BREAKPOINT_LAPTOP, BREAKPOINT_MOBILE } from '../../../const/breakpoints';

export const sectionStyle = css({
    padding: '30px 0 0 0',
});

export const Benefit = styled.div(
    css({
        width: '100%',
        height: '100%',
        borderRadius: 20,
        background:
            'linear-gradient(180deg, rgba(153, 224, 241, 0.3) 0%, rgba(182, 232, 245, 0.21) 35.94%, rgba(221, 244, 250, 0.24) 63.54%, rgba(246, 252, 253, 0.27) 80.73%, rgba(255, 255, 255, 0.3) 100%)',
        transform: 'rotate(-180deg)',
        filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',

        [`@media (max-width: ${BREAKPOINT_TABLET}px)`]: {
            borderRadius: 32,
        },
    })
);

export const benefitWrapperStyle = css({
    paddingBottom: '30px',
    display: 'flex',
    justifyContent: 'space-between',
    [`@media (max-width: ${BREAKPOINT_TABLET}px)`]: {
        flexWrap: 'wrap',
        justifyContent: 'center',
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
        height: 212,
        marginBottom: 15,
    },
    [`@media (max-width: ${BREAKPOINT_MOBILE}px)`]: {
        width: 147,
        height: 147,
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
    justifyContent: 'space-around',
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
        width: 415,
        margin: '0 auto 30px auto',
        position: 'relative',
        paddingLeft: '64px',
    },
});

export const stackIconStyle = css({
    width: 290,
    height: 290,

    [`@media (max-width: ${BREAKPOINT_TABLET}px)`]: {
        width: 168,
        height: 168,
        position: 'absolute',
        right: '-20px',
        top: '-25px',
    },
    [`@media (max-width: ${BREAKPOINT_MOBILE}px)`]: {
        width: 136,
        height: 136,
    },
});

export const wrapperStyle = css({
    [`@media (max-width: ${BREAKPOINT_TABLET}px)`]: {
        display: 'flex',
        flexDirection: 'column-reverse',
    },
});

export const titleStyle = css({
    marginBottom: 40,
    [`@media (max-width: ${BREAKPOINT_MOBILE}px)`]: {
        marginBottom: 15,
    },
});

export const textStyle = css({
    marginBottom: 30,
    [`@media (max-width: ${BREAKPOINT_MOBILE}px)`]: {
        marginBottom: 15,
    },
});

export const benefitTextStyle = css({ textAlign: 'center' });