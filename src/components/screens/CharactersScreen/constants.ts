import { css } from '@emotion/react';
import { BREAKPOINT_LAPTOP, BREAKPOINT_MOBILE, BREAKPOINT_TABLET } from '../../../const/breakpoints';
import firstCharacterBig from '../../../images/characters/1_big.png';
import secondCharacterBig from '../../../images/characters/2_big.png';
import thirdCharacterBig from '../../../images/characters/3_big.png';

import Mini_1 from '../../../images/characters/1_mini.png';
import Mini_2 from '../../../images/characters/2_mini.png';
import Mini_3 from '../../../images/characters/3_mini.png';

export const CHARACTERS = [
    {
        id: 1,
        title: 'Not your average crush. Loves being in public, but still feeling shy sometimes.',
        text: 'Will ape into any party , but only after getting a job done.',
        icon: firstCharacterBig,
        style: css({
            width: 734,
            height: 950,
            [`@media (max-width: ${BREAKPOINT_LAPTOP}px)`]: {
                width: 716,
                height: 757,
            },
            [`@media (max-width: ${BREAKPOINT_TABLET}px)`]: {
                width: 644,
                height: 644,
            },
            [`@media (max-width: ${BREAKPOINT_MOBILE}px)`]: {
                width: 480,
                height: 500,
            },
        }),
    },
    {
        id: 2,
        title: 'He is calm and prudent. Believes that the best way to show anything is by actions. It is his proof of work.',
        text: 'Wishes to buy a farm in the countryside.',
        icon: secondCharacterBig,
        style: css({
            width: 663,
            height: 804,
            [`@media (max-width: ${BREAKPOINT_LAPTOP}px)`]: {
                width: 731,
                height: 731,
            },
            [`@media (max-width: ${BREAKPOINT_TABLET}px)`]: {
                width: 644,
                height: 567,
            },
            [`@media (max-width: ${BREAKPOINT_MOBILE}px)`]: {
                width: 480,
                height: 446,
            },
        }),
    },
    {
        id: 3,
        title: "The woman of web3. We usually don't know what they look like. In the world of anonymity, she prefers to be judged only by skills.",
        text: 'Smart, bold and purposeful, yet mysterious and beautiful.',
        icon: thirdCharacterBig,
        style: css({
            width: 663,
            height: 830,
            [`@media (max-width: ${BREAKPOINT_LAPTOP}px)`]: {
                width: 655,
                height: 731,
            },
            [`@media (max-width: ${BREAKPOINT_TABLET}px)`]: {
                width: 644,
                height: 500,
            },
            [`@media (max-width: ${BREAKPOINT_MOBILE}px)`]: {
                width: 480,
                height: 440,
            },
        }),
    },
];

export const SLIDES = [Mini_3, Mini_2, Mini_1];
