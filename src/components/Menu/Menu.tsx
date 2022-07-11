import { css } from '@emotion/react';
import { FC } from 'react';
import { MenuLinkType } from '../../types/general';
import { MenuLink } from '../MenuLink';

const navStyle = css({
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
});

interface Props {
    links: MenuLinkType[];
}

export const Menu: FC<Props> = ({ links }) => {
    return (
        <nav css={navStyle}>
            {links.map((link) => {
                return (
                    <MenuLink
                        title={link.title}
                        anchor={link.anchor}
                        key={link.title}
                    />
                );
            })}
        </nav>
    );
};
