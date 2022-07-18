import { FC, PropsWithChildren, useCallback, useState } from 'react';
import { GlobalStyle } from '../../components/theme/GlobalStyles';
import { Menu } from '../../components/Menu';
import { Wrapper } from '../../components/ui/Wrapper';
import { COLOR_BACKGROUND } from '../../const/colors';
import { css } from '@emotion/react';
import { DiscordIcon, TwitterIcon, MenuIcon } from '../../components/icons';
import { BREAKPOINT_TABLET } from '../../const/breakpoints';
import { MobileMenu } from '../../components/Menu/components/MobileMenu';
import { MenuLinkType } from '../../types/general';
import {
    ABOUT_US_ANCHOR,
    BENEFITS_ANCHOR,
    CHARACTERS_ANCHOR,
    DISCORD_URL,
    GALLERY_ANCHOR,
    STORY_ANCHOR,
    TWITTER_URL,
    WHO_WE_ARE_ANCHOR,
} from '../../const/urls';
const mainStyle = css({
    backgroundColor: COLOR_BACKGROUND,
    width: '100vw',
    height: '200vh',
    paddingTop: '40px',
});

const headerWrapperStyle = css({
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'nowrap',
    [`@media (max-width: ${BREAKPOINT_TABLET}px)`]: {
        display: 'none',
    },
});

const iconsWrapperStyle = css({
    display: 'flex',
});

const discordIconStyle = css({
    marginRight: 35,
    marginLeft: 110,
});

const menuWrapperStyle = css({
    display: 'none',
    justifyContent: 'flex-end',
    [`@media (max-width: ${BREAKPOINT_TABLET}px)`]: {
        display: 'flex',
    },
});

const mobileMenuStyle = css({
    display: 'none',
    [`@media (max-width: ${BREAKPOINT_TABLET}px)`]: {
        display: 'flex',
    },
});

const menuIconStyle = css({
    width: 40,
    height: 25,
});

const menuButtonStyle = css({
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
    position: 'fixed',
});

const links: MenuLinkType[] = [
    { title: 'ABOUT US', anchor: ABOUT_US_ANCHOR },
    { title: 'GALLERY', anchor: GALLERY_ANCHOR },
    { title: 'BENEFITS', anchor: BENEFITS_ANCHOR },
    { title: 'CHARACTERS', anchor: CHARACTERS_ANCHOR },
    { title: 'STORY', anchor: STORY_ANCHOR },
    { title: 'WHO WE ARE', anchor: WHO_WE_ARE_ANCHOR },
];

export const DefaultLayout: FC<PropsWithChildren> = ({ children }) => {
    const [isShowMenu, setIsShowMenu] = useState(false);

    const handleCloseClick = useCallback(() => {
        setIsShowMenu(false);
    }, []);

    const handleOpenMenuClick = useCallback(() => {
        setIsShowMenu(true);
    }, []);

    return (
        <div>
            <GlobalStyle />
            <main css={mainStyle}>
                <header>
                    <Wrapper style={headerWrapperStyle}>
                        <Menu links={links} />
                        <div css={iconsWrapperStyle}>
                            <a
                                href={DISCORD_URL}
                                target="_blank"
                                css={discordIconStyle}
                                rel="noreferrer"
                            >
                                <DiscordIcon />
                            </a>
                            <a
                                href={TWITTER_URL}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <TwitterIcon />
                            </a>
                        </div>
                    </Wrapper>
                    {!isShowMenu ? (
                        <Wrapper style={menuWrapperStyle}>
                            <button
                                css={menuButtonStyle}
                                onClick={handleOpenMenuClick}
                            >
                                <MenuIcon style={menuIconStyle} />
                            </button>
                        </Wrapper>
                    ) : (
                        <MobileMenu
                            style={mobileMenuStyle}
                            links={links}
                            onCloseClick={handleCloseClick}
                        />
                    )}
                </header>
                {children}
            </main>
        </div>
    );
};
