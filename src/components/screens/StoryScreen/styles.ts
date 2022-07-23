import { css } from '@emotion/react';
import { COLOR_BACKGROUND, COLOR_WHITE } from '../../../const/colors';
import BackgroundPanel from '../../../images/story/panel.png';
import BulletIcon from '../../../images/story/bullet.svg';
import { BREAKPOINT_MOBILE } from '../../../const/breakpoints';

export const sectionStyle = css({
    backgroundColor: COLOR_BACKGROUND,
    '.swiper-pagination ': {
        bottom: 90,
        [`@media (max-width: ${BREAKPOINT_MOBILE}px)`]: {
            bottom: 70,
        },
    },

    '.swiper-pagination-bullet': {
        background: 'none',
        backgroundImage: `url(${BulletIcon})`,
        backgroundPosition: 'center',
        backgroundSize: 'auto',
        width: 20,
        height: 20,
        opacity: 1,
        [`@media (max-width: ${BREAKPOINT_MOBILE}px)`]: {
            width: 16,
            height: 16,
        },
    },

    '.swiper-pagination-bullet-active': {
        backgroundImage: 'none',
        backgroundColor: COLOR_WHITE,
        width: 20,
        height: 20,
        [`@media (max-width: ${BREAKPOINT_MOBILE}px)`]: {
            width: 16,
            height: 16,
        },
    },
});

export const sliderStyle = css({
    backgroundImage: `url(${BackgroundPanel})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: 561,
    height: 288,
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingTop: '30px',
    [`@media (max-width: ${BREAKPOINT_MOBILE}px)`]: {
        width: 351,
        height: 181,
        paddingTop: 15,
    },
});

export const sliderInnerStyle = css({
    height: '70%',
    width: '70%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    [`@media (max-width: ${BREAKPOINT_MOBILE}px)`]: {
        width: '80%',
    },
});

export const sliderWrapper = css({
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
    height: '100vh',
    paddingBottom: '50px',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
});
