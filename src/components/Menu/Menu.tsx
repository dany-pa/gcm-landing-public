import { FC } from 'react';
import { MenuLinkType } from '../../types/general';
import { MenuLink } from '../ui/MenuLink';
import { navStyle } from './styles';

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
                        link={link.link}
                        key={link.title}
                    />
                );
            })}
        </nav>
    );
};
