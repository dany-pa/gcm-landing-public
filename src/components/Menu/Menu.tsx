import { css } from '@emotion/react';
import { FC } from 'react';
import { COLOR_PRIMARY } from '../../const/colors';

interface MenuLink {
    title: string;
    anchor: string;
}

const links: MenuLink[] = [
    { title: 'ABOUT US', anchor: 'about_us' },
    { title: 'GALLERY', anchor: 'gallery' },
    { title: 'BENEFITS', anchor: 'benefits' },
    { title: 'CHARACTERS', anchor: 'characters' },
    { title: 'STORY', anchor: 'story' },
    { title: 'WHO WE ARE', anchor: 'who_we_are' },
];

const navStyle = css({
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
});

const linkStyle = css({
    color: COLOR_PRIMARY,
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

export const Menu: FC = () => {
    return (
        <nav css={navStyle}>
            {links.map((link) => {
                return (
                    <a
                        css={linkStyle}
                        href={`#${link.anchor}`}
                        key={link.title}
                    >
                        {link.title}
                    </a>
                );
            })}
        </nav>
    );
};
