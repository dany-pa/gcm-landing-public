import { css, SerializedStyles } from '@emotion/react';
import { FC } from 'react';
import { COLOR_PRIMARY } from '../../const/colors';

interface Props {
    title: string;
    anchor: string;
    color?: string;
    style?: SerializedStyles;
}

export const MenuLink: FC<Props> = ({ title, anchor, color = COLOR_PRIMARY, style }) => {
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

        '&:hover': {
            borderColor: 'currentColor',
        },
    });
    return (
        <a
            css={[linkStyle, style]}
            href={`#${anchor}`}
            key={title}
        >
            {title}
        </a>
    );
};
