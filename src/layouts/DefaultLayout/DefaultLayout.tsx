import { FC, PropsWithChildren, useCallback, useState } from 'react';
import { GlobalStyle } from '../../components/theme/GlobalStyles';
import { Menu } from '../../components/Menu';
import { Wrapper } from '../../components/ui/Wrapper';
import { DiscordIcon, TwitterIcon, MenuIcon } from '../../components/icons';
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
import {
    mainStyle,
    headerWrapperStyle,
    iconsWrapperStyle,
    discordIconStyle,
    menuWrapperStyle,
    menuButtonStyle,
    menuIconStyle,
    mobileMenuStyle,
} from './styles';

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
