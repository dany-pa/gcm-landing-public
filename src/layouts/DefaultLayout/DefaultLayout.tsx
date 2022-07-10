import { FC, PropsWithChildren } from 'react';
import { GlobalStyle } from '../../components/theme/GlobalStyles';
import { DefaultTheme } from '../../components/theme/DefaultTheme';
import { Menu } from '../../components/Menu';
import { Wrapper } from '../../components/Wrapper';
import { COLOR_BACKGROUND } from '../../const/colors';
import { css } from '@emotion/react';
import { DiscordIcon, TwitterIcon, MenuIcon } from '../../components/icons';
import { BREAKPOINT_TABLET } from '../../const/breakpoints';

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

export const DefaultLayout: FC<PropsWithChildren> = ({ children }) => {
    return (
        <DefaultTheme>
            <GlobalStyle />
            <main css={mainStyle}>
                <header>
                    <Wrapper style={headerWrapperStyle}>
                        <Menu />
                        <div css={iconsWrapperStyle}>
                            <a
                                href="#"
                                css={discordIconStyle}
                            >
                                <DiscordIcon />
                            </a>
                            <a href="">
                                <TwitterIcon />
                            </a>
                        </div>
                    </Wrapper>
                    <Wrapper style={menuWrapperStyle}>
                        <button css={menuButtonStyle}>
                            <MenuIcon style={menuIconStyle} />
                        </button>
                    </Wrapper>
                </header>
                {children}
            </main>
        </DefaultTheme>
    );
};
