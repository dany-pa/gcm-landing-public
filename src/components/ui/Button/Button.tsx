import { css, SerializedStyles } from '@emotion/react';
import { FC, PropsWithChildren } from 'react';
import { BREAKPOINT_LAPTOP } from '../../../const/breakpoints';

const buttonStyle = css({
    backgroundColor: '#0DB7E8',
    color: '#FFFFFF',
    border: 'none',
    padding: '15px 45px',
    borderRadius: 24,
    fontSize: 20,
    lineHeight: '24px',
    fontWeight: 700,
    cursor: 'pointer',
    transition: '0.3s',
    boxShadow: '0 0 0 1px #0DB7E8, inset 0 0 0px 5px #5f5fce',
    position: 'relative',
    zIndex: 1,

    '&:hover': {
        backgroundColor: '#00C6FF',
        boxShadow: '0 0 0 1px #00C6FF, inset 0 0 0px 5px #5f5fce',
    },

    [`@media (max-width: ${BREAKPOINT_LAPTOP}px)`]: {
        fontSize: 12,
        lineHeight: '15px',
    },
});

interface Props {
    style?: SerializedStyles;
}

export const Button: FC<PropsWithChildren<Props>> = ({ children, style }) => {
    return <button css={[buttonStyle, style]}>{children}</button>;
};
