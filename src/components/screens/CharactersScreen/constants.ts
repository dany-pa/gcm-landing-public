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
            marginTop: -90,
            marginLeft: -100,
            [`@media (max-width: ${BREAKPOINT_LAPTOP}px)`]: {
                width: 716,
                height: 767,
                marginTop: -40,
                marginLeft: -120,
            },
            [`@media (max-width: ${BREAKPOINT_TABLET}px)`]: {
                width: 644,
                height: 567,
                margin: '0 auto',
            },
            [`@media (max-width: ${BREAKPOINT_MOBILE}px)`]: {
                width: 480,
                height: 446,
            },
        }),
    },
    {
        id: 2,
        title: 'He is calm and prudent. Believes that the best way to show anything is by actions. It is his proof of work.',
        text: 'Wishes to buy a farm in the countryside.',
        icon: secondCharacterBig,
        style: css({
            [`@media (max-width: ${BREAKPOINT_TABLET}px)`]: {
                width: 644,
                height: 567,
                margin: '0 auto',
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
            [`@media (max-width: ${BREAKPOINT_TABLET}px)`]: {
                width: 644,
                height: 567,
                margin: '0 auto',
            },
            [`@media (max-width: ${BREAKPOINT_MOBILE}px)`]: {
                width: 480,
                height: 446,
            },
        }),
    },
];

export const SLIDES = [Mini_1, Mini_2, Mini_3];
