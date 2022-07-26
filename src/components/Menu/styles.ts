import { css } from '@emotion/react';
import { BREAKPOINT_TABLET } from '../../const/breakpoints';

export const navStyle = css({
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
});

export const logoIconWrapperStyle = css({
    width: 128,
    height: 87,

    [`@media (max-width: ${BREAKPOINT_TABLET}px)`]: {
        display: 'none',
    },
});
