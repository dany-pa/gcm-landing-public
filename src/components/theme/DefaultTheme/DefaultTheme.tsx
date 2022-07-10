import { FC, PropsWithChildren } from 'react';
import { ThemeProvider, Theme } from '@emotion/react';

const theme: Theme = {
    colors: {
        background: '#7349C7',
        primary: '#0DB7E8',
        primaryDark: '#1AA9E4', //надеюсь уберем
        primaryLight: '#00BDFF', //надеюсь уберем
        secondary: '#FFB774',
        white: '#FFFFFF',
    },
    fonts: {
        default: 'Montserrat, -apple-system, sans-serif, serif',
    },
};

export const DefaultTheme: FC<PropsWithChildren> = ({ children }) => {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
