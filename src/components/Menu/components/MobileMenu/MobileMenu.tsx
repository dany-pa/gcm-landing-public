import { SerializedStyles } from '@emotion/react';
import { FC } from 'react';
import { COLOR_BACKGROUND } from '../../../../const/colors';
import { DISCORD_URL, TWITTER_URL } from '../../../../const/urls';
import { MenuLinkType } from '../../../../types/general';
import { LogoIcon, DiscordMobileIcon, TwitterMobileIcon, CloseIcon, DiscordIcon, TwitterIcon } from '../../../icons';
import { Wrapper } from '../../../ui';
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
    headerWrapperStyle,
    discordStyle,
    iconsHeaderWrapperStyle,
} from './styles';

interface Props {
    style?: SerializedStyles;
    links: MenuLinkType[];
    onCloseClick?: () => void;
}

export const MobileMenu: FC<Props> = ({ style, links, onCloseClick }) => {
    return (
        <div css={[wrapperStyle, style]}>
            <Wrapper style={headerWrapperStyle}>
                <div css={iconsHeaderWrapperStyle}>
                    <a
                        href={DISCORD_URL}
                        target="_blank"
                        css={discordStyle}
                        rel="noreferrer"
                    >
                        <DiscordIcon color={COLOR_BACKGROUND} />
                    </a>
                    <a
                        href={TWITTER_URL}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <TwitterIcon color={COLOR_BACKGROUND} />
                    </a>
                </div>
                <button
                    css={closeButtonStyle}
                    onClick={onCloseClick}
                >
                    <CloseIcon />
                </button>
            </Wrapper>
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
