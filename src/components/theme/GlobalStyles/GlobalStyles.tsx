import { css, Global } from '@emotion/react';
import BackgroundImg from '../../../images/webp/background.webp';
import '@fontsource/montserrat/variable.css';

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
                    max-width: 1280px;
                    margin: 0 auto;
                }

                @media (min-width: 1300px) {
                    main {
                        box-shadow: 0px 4px 22px rgba(0, 0, 0, 0.7);
                        border-radius: 34px;
                        margin-top: 60px;
                        margin-bottom: 60px;
                    }
                },

                strong {
                    font-weight: 700;
                }
            `}
        />
    );
};
