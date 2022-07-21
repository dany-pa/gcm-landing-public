import SecuredByBitcoinIcon from '../../../images/benefits/securedByBitcoin.svg';
import interactiveEvolutionIcon from '../../../images/benefits/interactiveEvolution.svg';
import ownIPIcon from '../../../images/benefits/ownIP.svg';
import universeWeBuildIcon from '../../../images/benefits/universeWeBuild.svg';
import dropsIcon from '../../../images/benefits/drops.svg';
import { css } from '@emotion/react';
import { BREAKPOINT_LAPTOP, BREAKPOINT_TABLET, BREAKPOINT_MOBILE } from '../../../const/breakpoints';

export const BENEFITS = [
    {
        id: 1,
        text: 'Secured<br /> by Bitcoin',
        icon: SecuredByBitcoinIcon,
        iconStyle: css({
            width: 156,
            height: 147,
            [`@media (max-width: ${BREAKPOINT_LAPTOP}px)`]: {
                width: 137,
                height: 129,
            },
            [`@media (max-width: ${BREAKPOINT_TABLET}px)`]: {
                width: 123,
                height: 116,
            },
            [`@media (max-width: ${BREAKPOINT_MOBILE}px)`]: {
                width: 89,
                height: 84,
            },
        }),
        style: css({
            [`@media (max-width: ${BREAKPOINT_TABLET}px)`]: {
                marginRight: 10,
            },
        }),
    },
    {
        id: 2,
        text: 'Interactive<br /> evolution<br /> of GM NFTs',
        icon: interactiveEvolutionIcon,
        iconStyle: css({
            width: 139,
            height: 110,
            [`@media (max-width: ${BREAKPOINT_LAPTOP}px)`]: {
                width: 122,
                height: 96,
            },
            [`@media (max-width: ${BREAKPOINT_TABLET}px)`]: {
                width: 120,
                height: 95,
            },
            [`@media (max-width: ${BREAKPOINT_MOBILE}px)`]: {
                width: 76,
                height: 105,
            },
        }),
        innerStyle: css({
            [`@media (max-width: ${BREAKPOINT_TABLET}px)`]: {
                flexDirection: 'row-reverse',
            },
        }),
        style: css({
            [`@media (max-width: ${BREAKPOINT_TABLET}px)`]: {
                width: 324,
                height: 211,
                flexDirection: 'row-reverse',
                marginRight: 10,
            },
            [`@media (max-width: ${BREAKPOINT_MOBILE}px)`]: {
                width: 241,
                height: 147,
            },
        }),
    },
    {
        id: 3,
        text: 'You own the IP',
        icon: ownIPIcon,
        iconStyle: css({
            width: 112,
            height: 131,
            [`@media (max-width: ${BREAKPOINT_LAPTOP}px)`]: {
                width: 98,
                height: 115,
            },
            [`@media (max-width: ${BREAKPOINT_TABLET}px)`]: {
                width: 96,
                height: 113,
            },
            [`@media (max-width: ${BREAKPOINT_MOBILE}px)`]: {
                width: 92,
                height: 73,
            },
        }),
        style: {},
    },
    {
        id: 4,
        text: 'A universe<br /> we build<br /> together',
        icon: universeWeBuildIcon,
        iconStyle: css({
            width: 110,
            height: 152,
            [`@media (max-width: ${BREAKPOINT_LAPTOP}px)`]: {
                width: 96,
                height: 134,
            },
            [`@media (max-width: ${BREAKPOINT_TABLET}px)`]: {
                width: 93,
                height: 135,
            },
            [`@media (max-width: ${BREAKPOINT_MOBILE}px)`]: {
                width: 59,
                height: 70,
            },
        }),
        innerStyle: css({
            [`@media (max-width: ${BREAKPOINT_TABLET}px)`]: {
                flexDirection: 'row-reverse',
            },
        }),
        style: css({
            [`@media (max-width: ${BREAKPOINT_TABLET}px)`]: {
                width: 324,
                height: 211,
            },
            [`@media (max-width: ${BREAKPOINT_MOBILE}px)`]: {
                width: 241,
                height: 147,
            },
        }),
    },
    {
        id: 5,
        text: 'Access to the<br /> allfuture drops<br /> and roadmap<br />activations',
        icon: dropsIcon,
        iconStyle: css({
            width: 148,
            height: 148,
            [`@media (max-width: ${BREAKPOINT_LAPTOP}px)`]: {
                width: 130,
                height: 130,
            },
            [`@media (max-width: ${BREAKPOINT_LAPTOP}px)`]: {
                width: 112,
                height: 112,
            },
            [`@media (max-width: ${BREAKPOINT_MOBILE}px)`]: {
                width: 93,
                height: 93,
            },
        }),
        innerStyle: css({
            [`@media (max-width: ${BREAKPOINT_TABLET}px)`]: {
                flexDirection: 'row-reverse',
            },
        }),
        style: css({
            [`@media (max-width: ${BREAKPOINT_TABLET}px)`]: {
                width: 549,
                height: 211,
            },
            [`@media (max-width: ${BREAKPOINT_MOBILE}px)`]: {
                width: 408,
                height: 147,
            },
        }),
    },
];
