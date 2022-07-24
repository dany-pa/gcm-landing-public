import { css, SerializedStyles } from '@emotion/react';
import { FC } from 'react';
import { COLOR_BACKGROUND, COLOR_PRIMARY, COLOR_WHITE } from '../../../const/colors';

import ScrollIntoView from 'react-scroll-into-view';
import { BREAKPOINT_MOBILE, BREAKPOINT_TABLET } from '../../../const/breakpoints';

interface Props {
    title: string;
    anchor: string;
    color?: string;
    style?: SerializedStyles;
    onClick?: () => void;
}

export const MenuLink: FC<Props> = ({ title, anchor, color = COLOR_PRIMARY, style, onClick }) => {
    const linkStyle = css({
        color: color,
        fontSize: 16,
        lineHeight: '43px',
        padding: '5px 10px',
        textDecoration: 'none',
        transition: '.3s',
        borderRadius: 20,
        border: '1px solid transparent',
        whiteSpace: 'nowrap',
        cursor: 'pointer',
        fontWeight: 400,

        '&:hover': {
            borderColor: COLOR_PRIMARY,
            color: COLOR_WHITE,
        },

        [`@media (max-width: ${BREAKPOINT_TABLET}px)`]: {
            fontSize: 25,
            lineHeight: '30px',
            fontWeight: 500,

            '&:hover': {
                borderColor: COLOR_BACKGROUND,
                color: COLOR_BACKGROUND,
            },
        },
        [`@media (max-width: ${BREAKPOINT_MOBILE}px)`]: {
            fontSize: 20,
            lineHeight: '30px',
        },
    });
    return (
        <ScrollIntoView selector={`#${anchor}`}>
            <a
                css={[linkStyle, style]}
                key={title}
                onClick={onClick}
            >
                {title}
            </a>
        </ScrollIntoView>
    );
};
