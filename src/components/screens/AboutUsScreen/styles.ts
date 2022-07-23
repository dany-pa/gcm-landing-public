import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { BREAKPOINT_LAPTOP, BREAKPOINT_TABLET, BREAKPOINT_MOBILE } from '../../../const/breakpoints';
import { COLOR_WHITE, COLOR_SECONDARY } from '../../../const/colors';

export const sectionStyle = css({
    width: '100vw',
    overflow: 'hidden',
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
