import { css, Global } from '@emotion/react';

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
    `}
        />
    );
};
