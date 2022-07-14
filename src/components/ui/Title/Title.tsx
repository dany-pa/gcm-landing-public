import { css, SerializedStyles } from '@emotion/react';
import styled from '@emotion/styled';
import { FC, PropsWithChildren, useMemo } from 'react';
import { COLOR_PRIMARY, COLOR_SECONDARY } from '../../../const/colors';

const TitleStyled = styled.h2({
    fontSize: 30,
    lineHeight: '35px',
    fontWeight: 900,
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
