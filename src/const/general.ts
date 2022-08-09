import { MenuLinkType } from '../types/general';
import {
    ABOUT_US_SCREEN_ID,
    GALLERY_SCREEN_ID,
    BENEFITS_SCREEN_ID,
    CHARACTERS_SCREEN_ID,
    STORY_SCREEN_ID,
    WHO_WE_ARE_SCREEN_ID,
} from './urls';

export const PRICE_ONE_NFT = 80;

export const MENU_LINKS: MenuLinkType[] = [
    { title: 'ABOUT US', link: `#${ABOUT_US_SCREEN_ID}` },
    { title: 'GALLERY', link: `/gallery` },
    { title: 'BENEFITS', link: `#${BENEFITS_SCREEN_ID}` },
    { title: 'CHARACTERS', link: `#${CHARACTERS_SCREEN_ID}` },
    { title: 'STORY', link: `#${STORY_SCREEN_ID}` },
    { title: 'WHO WE ARE', link: `#${WHO_WE_ARE_SCREEN_ID}` },
];

export const DEFAULT_TITLE = ' Galactic Matket Cats';
