import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { BREAKPOINT_LAPTOP, BREAKPOINT_TABLET, BREAKPOINT_MOBILE } from '../../../const/breakpoints';
import { COLOR_WHITE, COLOR_SECONDARY } from '../../../const/colors';

export const sectionStyle = css({
    width: '100%',
    paddingTop: 50,
});

export const panelStyle = css({
    position: 'relative',
    mixBlendMode: 'normal',
    width: 744,
    height: 513,
    [`@media (max-width: ${BREAKPOINT_LAPTOP}px)`]: {
        width: 680,
        height: 470,
    },
    [`@media (max-width: ${BREAKPOINT_TABLET}px)`]: {
        width: 627,
        height: 433,
    },
    [`@media (max-width: ${BREAKPOINT_MOBILE}px)`]: {
        display: 'none',
    },
});
export const mobilePanelStyle = css({
    display: 'none',
    width: 408,
    height: 398,
    mixBlendMode: 'normal',
    opacity: '0.45',
    position: 'relative',
    [`@media (max-width: ${BREAKPOINT_MOBILE}px)`]: {
        display: 'block',
        width: 325,
        height: 361,
    },
});

export const AdvanceStyled = styled.div({
    color: COLOR_WHITE,
    fontSize: 30,
    lineHeight: '55px',
});

export const DividerStyled = styled.div({
    backgroundColor: COLOR_WHITE,
    height: '73px',
    width: 3,
});

export const advanceWrapperStyle = css({
    backgroundColor: '#8E38C2',
    padding: '10px 0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',

    [`@media (max-width: ${BREAKPOINT_LAPTOP}px)`]: {
        padding: '5px 0',
        display: 'none',
    },

    [`@media (max-width: ${BREAKPOINT_TABLET}px)`]: {
        display: 'none',
    },
});

export const aboutUsPanelWrapper = css({
    position: 'relative',
    color: COLOR_SECONDARY,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 150,
    [`@media (max-width: ${BREAKPOINT_LAPTOP}px)`]: {
        marginBottom: 50,
    },
});

export const aboutUsImgWrapper = css({
    position: 'relative',
    backdropFilter: 'blur(5px)',
    zIndex: 5,
});

export const titleWrapperStyle = css({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    position: 'absolute',

    [`@media (max-width: ${BREAKPOINT_TABLET}px)`]: {
        paddingLeft: 45,
    },
    [`@media (max-width: ${BREAKPOINT_MOBILE}px)`]: {
        paddingLeft: 28,
    },
});

export const titleStyle = css({
    marginBottom: 20,
    [`@media (max-width: ${BREAKPOINT_MOBILE}px)`]: {
        lineHeight: '14px',
        marginBottom: 20,
    },
});
export const subtitleStyle = css({
    marginBottom: 25,
    [`@media (max-width: ${BREAKPOINT_MOBILE}px)`]: {
        fontSize: 12,
        marginBottom: 20,
        lineHeight: '16px',
    },
});
export const textStyle = css({
    marginBottom: 25,
    [`@media (max-width: ${BREAKPOINT_MOBILE}px)`]: {
        fontSize: 12,
        marginBottom: 20,
        lineHeight: '16px',
    },
});
export const advanceNumberStyle = css({ fontWeight: 900 });

export const bubbleStyle_1 = css({
    top: -60,
    left: 80,
    width: 174,
    height: 174,
    zIndex: 6,
    [`@media (max-width: ${BREAKPOINT_LAPTOP}px)`]: {
        width: 156,
        height: 156,
        top: -80,
        left: 50,
    },
    [`@media (max-width: ${BREAKPOINT_TABLET}px)`]: {
        width: 142,
        height: 142,
        left: 0,
        top: -160,
    },
    [`@media (max-width: ${BREAKPOINT_MOBILE}px)`]: {
        width: 88,
        height: 88,
        left: 'calc(-1 * (100vw - 320px) / 2 - 44px)',
        top: -70,
    },
});
export const bubbleStyle_2 = css({
    top: -130,
    left: -20,
    width: 124,
    height: 124,
    [`@media (max-width: ${BREAKPOINT_LAPTOP}px)`]: {
        width: 86,
        height: 86,
    },
    [`@media (max-width: ${BREAKPOINT_TABLET}px)`]: {
        display: 'none',
    },
});
export const bubbleStyle_3 = css({
    bottom: -90,
    left: '50%',
    width: 84,
    height: 84,
    [`@media (max-width: ${BREAKPOINT_LAPTOP}px)`]: {
        width: 62,
        height: 62,
        left: '100%',
        bottom: 0,
    },
    [`@media (max-width: ${BREAKPOINT_TABLET}px)`]: {
        width: 92,
        height: 92,
        bottom: -60,
    },
    [`@media (max-width: ${BREAKPOINT_MOBILE}px)`]: {
        display: 'none',
    },
});
export const bubbleStyle_4 = css({
    right: 190,
    width: 110,
    height: 110,
    [`@media (max-width: ${BREAKPOINT_LAPTOP}px)`]: {
        width: 90,
        height: 90,
    },
    [`@media (max-width: ${BREAKPOINT_TABLET}px)`]: {
        right: 0,
    },
    [`@media (max-width: ${BREAKPOINT_MOBILE}px)`]: {
        width: 88,
        height: 88,
        bottom: -100,
    },
});
export const bubbleStyle_5 = css({
    right: 265,
    top: 150,
    width: 74,
    height: 74,
    [`@media (max-width: ${BREAKPOINT_LAPTOP}px)`]: {
        width: 62,
        height: 62,
        right: 'initial',
        top: 'initial',
        left: 200,
        bottom: 150,
    },
    [`@media (max-width: ${BREAKPOINT_TABLET}px)`]: {
        left: 'initial',
        right: 80,
    },
    [`@media (max-width: ${BREAKPOINT_MOBILE}px)`]: {
        width: 48,
        height: 48,
        bottom: -25,
        zIndex: 6,
    },
});

export const textWrapperStyle = css({
    zIndex: 6,
});
