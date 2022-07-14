import { css, SerializedStyles } from '@emotion/react';
import styled from '@emotion/styled';
import { FC, PropsWithChildren, useMemo } from 'react';
import { COLOR_PRIMARY, COLOR_SECONDARY } from '../../../const/colors';

const TextStyled = styled.h2({
    fontSize: 22,
    lineHeight: '25px',
    fontWeight: 500,
});

interface Props {
    type?: 'primary' | 'secondary';
    style?: SerializedStyles;
}

export const Text: FC<PropsWithChildren<Props>> = ({ children, type = 'primary', style }) => {
    const colorStyle = useMemo(() => {
        return { color: type == 'primary' ? COLOR_PRIMARY : COLOR_SECONDARY };
    }, [type]);
    return <TextStyled css={[style, colorStyle]}>{children}</TextStyled>;
};
