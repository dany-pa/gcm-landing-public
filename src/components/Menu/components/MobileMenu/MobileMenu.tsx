import { css, SerializedStyles } from '@emotion/react';
import { FC } from 'react';
import { BREAKPOINT_MOBILE } from '../../../../const/breakpoints';
import { COLOR_BACKGROUND, COLOR_SECONDARY } from '../../../../const/colors';
import { DISCORD_URL, TWITTER_URL } from '../../../../const/urls';
import { MenuLinkType } from '../../../../types/general';
import { LogoIcon, DiscordMobileIcon, TwitterMobileIcon, CloseIcon } from '../../../icons';
import { MenuLink } from '../../../ui/MenuLink';

const wrapperStyle = css({
    padding: '40px 0 70px 0',
    width: '100vw',
    height: '100vh',
    backgroundColor: COLOR_SECONDARY,
    position: 'fixed',
    top: 0,
    zIndex: 99,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',

    [`@media (max-width: ${BREAKPOINT_MOBILE}px)`]: {
        padding: '20px 0',
    },
});

const navStyle = css({
    display: 'flex',
    flexDirection: 'column',
});

const linkStyle = css({
    color: COLOR_BACKGROUND,
    textAlign: 'center',
    borderRadius: 32,
    padding: '10px 5px',
    lineHeight: '30px',
    fontSize: 25,
    marginBottom: 30,
    [`@media (max-width: ${BREAKPOINT_MOBILE}px)`]: {
        marginBottom: 10,
    },
});

const iconsWrapperStyle = css({
    display: 'flex',
});

const twitterIconStyle = css({
    marginRight: 50,
    [`@media (max-width: ${BREAKPOINT_MOBILE}px)`]: {
        marginRight: 37,
    },
});

const iconStyle = css({
    width: 51,
    height: 51,
    filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',

    [`@media (max-width: ${BREAKPOINT_MOBILE}px)`]: {
        width: 37,
        height: 37,
    },
});

const closeButtonStye = css({
    border: 'none',
    backgroundColor: 'transparent',
    cursor: 'pointer',
    position: 'fixed',
    right: 22,
    top: 20,
    width: 41,
    height: 41,
    [`@media (max-width: ${BREAKPOINT_MOBILE}px)`]: {
        width: 31,
        height: 31,
    },
});

const logoIconStyle = css({
    width: 291,
    height: 197,
    [`@media (max-width: ${BREAKPOINT_MOBILE}px)`]: {
        width: 193,
        height: 131,
    },
});

interface Props {
    style?: SerializedStyles;
    links: MenuLinkType[];
    onCloseClick?: () => void;
}

export const MobileMenu: FC<Props> = ({ style, links, onCloseClick }) => {
    return (
        <div css={[wrapperStyle, style]}>
            <button
                css={closeButtonStye}
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
                    css={[iconStyle]}
                    rel="noreferrer"
                >
                    <DiscordMobileIcon />
                </a>
            </div>
        </div>
    );
};
