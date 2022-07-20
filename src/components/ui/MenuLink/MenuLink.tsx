import { css, SerializedStyles } from '@emotion/react';
import { FC } from 'react';
import { COLOR_PRIMARY } from '../../../const/colors';

import ScrollIntoView from 'react-scroll-into-view';

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
        padding: '0 10px',
        textDecoration: 'none',
        transition: '.3s',
        borderRadius: 20,
        border: '1px solid transparent',
        whiteSpace: 'nowrap',
        cursor: 'pointer',

        '&:hover': {
            borderColor: 'currentColor',
        },
    });
    return (
        <ScrollIntoView selector={`#${anchor}`}>
            <a
                css={[linkStyle, style]}
                // href={`#${anchor}`}
                key={title}
                onClick={onClick}
            >
                {title}
            </a>
        </ScrollIntoView>
    );
};
