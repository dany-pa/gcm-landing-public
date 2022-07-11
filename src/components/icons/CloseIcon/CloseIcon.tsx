import { FC } from 'react';
import { COLOR_BACKGROUND } from '../../../const/colors';

interface Props {
    color?: string;
}

export const CloseIcon: FC<Props> = ({ color = COLOR_BACKGROUND }) => {
    return (
        <svg
            width="100%"
            height="100%"
            viewBox="0 0 47 47"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M44 44L3.00005 3"
                stroke={color}
                strokeWidth="7"
                strokeMiterlimit="10"
            />
            <path
                d="M44 3L3.00005 44"
                stroke={color}
                strokeWidth="7"
                strokeMiterlimit="10"
            />
        </svg>
    );
};
