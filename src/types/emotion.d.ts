import '@emotion/react';

declare module '@emotion/react' {
    export interface Theme {
        colors: {
            background: string;
            primary: string;
            primaryDark: string;
            primaryLight: string;
            secondary: string;
            white: string;
        };
        fonts: {
            default: string;
        };
    }
}
