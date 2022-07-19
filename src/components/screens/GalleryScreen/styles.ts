import { css } from '@emotion/react';
import { BREAKPOINT_TABLET } from '../../../const/breakpoints';
import { COLOR_PRIMARY } from '../../../const/colors';

export const imgStyle = css({
    width: 285,
    height: 285,
    borderRadius: 13,
    position: 'relative',
});
export const activeImgStyle = css({
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
});
export const activeImgWrapperStyle = css({
    '&::after': {
        content: '""',
        position: 'absolute',
        width: 285,
        height: 15,
        backgroundColor: COLOR_PRIMARY,
        bottom: 0,
        left: 0,

        [`@media (max-width: ${BREAKPOINT_TABLET}px)`]: {
            margin: '0 auto',
            right: 0,
        },
    },
});

export const sectionStyle = css({
    padding: '65px 0',

    '.swiper-button-prev, .swiper-button-next': {
        color: '#FFD9F7',
    },
});

export const imgWrapperStyle = css({
    [`@media (max-width: ${BREAKPOINT_TABLET}px)`]: {
        textAlign: 'center',
    },
});

export const activeSlideStyle = css({
    filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
});

export const wrapperStyle = css({ display: 'flex' });
export const innerStyle = css({ marginLeft: 'auto' });
export const titleStyle = css({ margin: '20px 0 30px 0' });
export const textStyle = css({ marginBottom: '30px' });
