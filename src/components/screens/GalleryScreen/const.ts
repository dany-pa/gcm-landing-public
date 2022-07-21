import { BREAKPOINT_LAPTOP } from '../../../const/breakpoints';
import img1 from '../../../images/carousel/img1.png';
import img2 from '../../../images/carousel/img2.png';

export const SLIDES = [
    [
        {
            id: 1,
            img: img2,
        },
        {
            id: 2,
            img: img1,
            style: {},
        },
        {
            id: 3,
            img: img2,
            style: {
                [`@media (max-width: ${BREAKPOINT_LAPTOP}px)`]: {
                    display: 'none',
                },
            },
        },
    ],
    [
        {
            id: 4,
            img: img2,
            style: {},
        },
        {
            id: 5,
            img: img1,
            style: {},
        },
        {
            id: 6,
            img: img2,
            style: {
                [`@media (max-width: ${BREAKPOINT_LAPTOP}px)`]: {
                    display: 'none',
                },
            },
        },
    ],
];
