import { css, Global } from '@emotion/react';
import BackgroundImg from '../../../images/background.png';
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
            background-image: url(${BackgroundImg});
            background-position: center;
            background-repeat: repeat-y;
            background-size: cover;
        }
    `}
        />
    );
};
