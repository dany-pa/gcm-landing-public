import { SerializedStyles } from '@emotion/react';
import { FC } from 'react';

interface Props {
    style?: SerializedStyles;
}

export const MenuIcon: FC<Props> = ({ style }) => {
    return (
        <svg
            width="64"
            height="44"
            viewBox="0 0 64 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            css={style}
        >
            <path
                d="M0 42H64M0 2H32H64M10.1463 22.3922H33.9512H53.0732"
                stroke="#0DB7E8"
                strokeWidth="4"
            />
        </svg>
    );
};
