import { BREAKPOINT_LAPTOP } from '../../../const/breakpoints';
import img1 from '../../../images/carousel/img1.png';
import img2 from '../../../images/carousel/img2.png';
import img3 from '../../../images/carousel/img3.png';
import img4 from '../../../images/carousel/img4.png';
import img5 from '../../../images/carousel/img5.png';
import img6 from '../../../images/carousel/img6.png';

export const SLIDES = [
    [
        {
            id: 1,
            img: img5,
        },
        {
            id: 2,
            img: img1,
            style: {},
        },
        {
            id: 3,
            img: img3,
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
            img: img6,
            style: {},
        },
        {
            id: 5,
            img: img2,
            style: {},
        },
        {
            id: 6,
            img: img4,
            style: {
                [`@media (max-width: ${BREAKPOINT_LAPTOP}px)`]: {
                    display: 'none',
                },
            },
        },
    ],
];
