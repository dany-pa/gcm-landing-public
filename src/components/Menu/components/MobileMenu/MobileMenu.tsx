import { SerializedStyles } from '@emotion/react';
import { FC } from 'react';
import { DISCORD_URL, TWITTER_URL } from '../../../../const/urls';
import { MenuLinkType } from '../../../../types/general';
import { LogoIcon, DiscordMobileIcon, TwitterMobileIcon, CloseIcon } from '../../../icons';
import { MenuLink } from '../../../ui/MenuLink';
import {
    wrapperStyle,
    closeButtonStyle,
    logoIconStyle,
    navStyle,
    linkStyle,
    iconsWrapperStyle,
    twitterIconStyle,
    iconStyle,
} from './styles';

interface Props {
    style?: SerializedStyles;
    links: MenuLinkType[];
    onCloseClick?: () => void;
}

export const MobileMenu: FC<Props> = ({ style, links, onCloseClick }) => {
    return (
        <div css={[wrapperStyle, style]}>
            <button
                css={closeButtonStyle}
                onClick={onCloseClick}
            >
                <CloseIcon />
            </button>
            <div css={logoIconStyle}>
                <LogoIcon />
            </div>
            <nav css={navStyle}>
                {links.map((link) => {
                    return (
                        <MenuLink
                            title={link.title}
                            anchor={link.anchor}
                            key={link.title}
                            style={linkStyle}
                            onClick={onCloseClick}
                        />
                    );
                })}
            </nav>
            <div css={iconsWrapperStyle}>
                <a
                    href={TWITTER_URL}
                    css={[twitterIconStyle, iconStyle]}
                    target="_blank"
                    rel="noreferrer"
                >
                    <TwitterMobileIcon />
                </a>
                <a
                    href={DISCORD_URL}
                    target="_blank"
                    css={iconStyle}
                    rel="noreferrer"
                >
                    <DiscordMobileIcon />
                </a>
            </div>
        </div>
    );
};
