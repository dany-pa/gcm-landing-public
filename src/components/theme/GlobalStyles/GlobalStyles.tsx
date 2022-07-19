import { css, Global } from '@emotion/react';
import BackgroundImg from '../../../images/background.png';

export const GlobalStyle = () => {
    return (
        <Global
            styles={css`
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Arial'; /*какой на самом деле должен быть?*/
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
