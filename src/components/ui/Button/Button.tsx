import { css, SerializedStyles } from '@emotion/react';
import { FC, PropsWithChildren } from 'react';
import { BREAKPOINT_MOBILE } from '../../../const/breakpoints';

const buttonStyle = css({
    backgroundColor: '#0DB7E8',
    color: '#FFFFFF',
    border: 'none',
    width: 174,
    height: 52,
    borderRadius: 24,
    fontSize: 12,
    lineHeight: '14px',
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

    '&:disabled': {
        opacity: '0.5',
        cursor: 'not-allowed',
    },

    [`@media (max-width: ${BREAKPOINT_MOBILE}px)`]: {
        width: 118,
        height: 35,
    },
});

interface Props {
    style?: SerializedStyles;
    disabled?: boolean;
}

export const Button: FC<PropsWithChildren<Props>> = ({ children, style, disabled = false }) => {
    return (
        <button
            css={[buttonStyle, style]}
            disabled={disabled}
        >
            {children}
        </button>
    );
};
