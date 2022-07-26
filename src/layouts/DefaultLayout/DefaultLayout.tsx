import { FC, PropsWithChildren, useCallback, useState } from 'react';
import { GlobalStyle } from '../../components/theme/GlobalStyles';
import { Menu } from '../../components/Menu';
import { Wrapper } from '../../components/ui/Wrapper';
import { DiscordIcon, TwitterIcon, MenuIcon } from '../../components/icons';
import { MobileMenu } from '../../components/Menu/components/MobileMenu';
import { MenuLinkType } from '../../types/general';
import { DISCORD_URL, TWITTER_URL } from '../../const/urls';
import {
    mainStyle,
    headerWrapperStyle,
    iconsWrapperStyle,
    discordIconStyle,
    menuWrapperStyle,
    menuButtonStyle,
    menuIconStyle,
    mobileMenuStyle,
    headerMintStyle,
} from './styles';
import { MENU_LINKS } from '../../const/general';

interface Props {
    isMintPage?: boolean;
    links?: MenuLinkType[];
}

export const DefaultLayout: FC<PropsWithChildren<Props>> = ({ children, isMintPage = false, links = MENU_LINKS }) => {
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
                <header css={isMintPage ? headerMintStyle : {}}>
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
