import { SerializedStyles } from '@emotion/react';
import styled from '@emotion/styled';
import { FC, PropsWithChildren, useMemo } from 'react';
import { BREAKPOINT_MOBILE } from '../../../const/breakpoints';
import { COLOR_PRIMARY, COLOR_SECONDARY } from '../../../const/colors';

const TitleStyled = styled.h2({
    fontSize: 30,
    lineHeight: '35px',
    fontWeight: 900,

    [`@media (max-width: ${BREAKPOINT_MOBILE}px)`]: {
        fontSize: 20,
        lineHeight: '20px',
    },
});

interface Props {
    type?: 'primary' | 'secondary';
    style?: SerializedStyles;
}

export const Title: FC<PropsWithChildren<Props>> = ({ children, style, type = 'primary' }) => {
    const colorStyle = useMemo(() => {
        return { color: type == 'primary' ? COLOR_PRIMARY : COLOR_SECONDARY };
    }, [type]);
    return <TitleStyled css={[style, colorStyle]}>{children}</TitleStyled>;
};
