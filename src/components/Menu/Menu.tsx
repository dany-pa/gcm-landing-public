import { FC } from 'react';
import { COLOR_SECONDARY } from '../../const/colors';
import { MenuLinkType } from '../../types/general';
import { LogoIcon } from '../icons';
import { MenuLink } from '../ui/MenuLink';
import { logoIconWrapperStyle, navStyle } from './styles';

interface Props {
    links: MenuLinkType[];
    isShowLogo?: boolean;
}

export const Menu: FC<Props> = ({ links, isShowLogo = false }) => {
    return (
        <nav
            css={navStyle}
            className="nav"
        >
            {isShowLogo && (
                <div css={logoIconWrapperStyle}>
                    <LogoIcon color={COLOR_SECONDARY} />
                </div>
            )}
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
