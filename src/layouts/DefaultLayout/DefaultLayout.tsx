import { FC, PropsWithChildren } from 'react';
import { GlobalStyle } from '../../components/theme/GlobalStyles';
import { DefaultTheme } from '../../components/theme/DefaultTheme';

export const DefaultLayout: FC<PropsWithChildren> = ({ children }) => {
    return (
        <DefaultTheme>
            <GlobalStyle />
            {children}
        </DefaultTheme>
    );
};
