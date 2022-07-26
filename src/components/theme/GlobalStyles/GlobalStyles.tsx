import { css, Global } from '@emotion/react';
import BackgroundImg from '../../../images/webp/background.webp';
import '@fontsource/montserrat/variable.css';
import { BREAKPOINT_LAPTOP, BREAKPOINT_MOBILE, BREAKPOINT_TABLET } from '../../../const/breakpoints';

export const GlobalStyle = () => {
    return (
        <Global
            styles={css`
                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                    font-family: 'MontserratVariable', sans-serif;
                    font-weight: 500;
                }
                html{
                    min-height: 100vh;
                    max-width: 100vw;
                    overflow-x: hidden;
                    overflow-y: overlay;
                }

                body{
                    overflow-x: hidden;
                    overflow-y: auto;
                    background: linear-gradient(180deg, #8E38C2 1.04%, #FFAC89 100%);
                }

                main{
                    background-image: url(${BackgroundImg});
                    background-position: center;
                    background-repeat: repeat-y;
                    background-size: cover;
                    margin: 0 auto;
                }

                @media (min-width: ${BREAKPOINT_LAPTOP}px) {
                    .hideOnDesktop{
                        display: none;
                    }
                    .showOnDesktop{
                        display: block;
                    }
                }
               
                @media (max-width: ${BREAKPOINT_LAPTOP}px) {
                    .hideOnLaptop{
                        display: none;
                    }
                    .showOnLaptop{
                        display: block;
                    }
                }
                @media (max-width: ${BREAKPOINT_TABLET}px) {
                    .hideOnTablet{
                        display: none;
                    }
                    .showOnTablet{
                        display: block;
                    }
                }
                @media (max-width: ${BREAKPOINT_MOBILE}px) {
                    .hideOnMobile{
                        display: none;
                    }
                    .showOnMobile{
                        display: block;
                    }
                }



                

                @media (min-width: 1600px) {
                    main {
                        box-shadow: 0px 4px 22px rgba(0, 0, 0, 0.7);
                        border-radius: 34px;
                        margin-top: 60px;
                        margin-bottom: 60px;
                        max-width: 1280px;
                    }
                },

                strong {
                    font-weight: 700;
                }
            `}
        />
    );
};
