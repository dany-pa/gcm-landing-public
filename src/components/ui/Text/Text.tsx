import { SerializedStyles } from '@emotion/react';
import styled from '@emotion/styled';
import { FC, PropsWithChildren, useMemo } from 'react';
import { BREAKPOINT_MOBILE, BREAKPOINT_TABLET } from '../../../const/breakpoints';
import { COLOR_PRIMARY, COLOR_SECONDARY, COLOR_WHITE } from '../../../const/colors';

const TextStyled = styled.h2({
    fontSize: 22,
    lineHeight: '25px',
    fontWeight: 500,

    [`@media (max-width: ${BREAKPOINT_TABLET}px)`]: {
        fontSize: 20,
    },
    [`@media (max-width: ${BREAKPOINT_MOBILE}px)`]: {
        fontSize: 14,
        lineHeight: '20px',
    },
});

interface Props {
    type?: 'primary' | 'secondary' | 'white';
    style?: SerializedStyles;
}

export const Text: FC<PropsWithChildren<Props>> = ({ children, type = 'primary', style }) => {
    const colorStyle = useMemo(() => {
        const colors = {
            primary: COLOR_PRIMARY,
            secondary: COLOR_SECONDARY,
            white: COLOR_WHITE,
        };
        return { color: colors[type] || COLOR_PRIMARY };
    }, [type]);
    return <TextStyled css={[style, colorStyle]}>{children}</TextStyled>;
};
