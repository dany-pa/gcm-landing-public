import { css } from '@emotion/react';
import { COLOR_BACKGROUND } from '../../../const/colors';
import { Wrapper } from '../../ui/Wrapper';
import firstCharacterBig from '../../../images/characters/1_big.png';
import secondCharacterBig from '../../../images/characters/2_big.png';
import thirdCharacterBig from '../../../images/characters/3_big.png';
import { Text } from '../../ui/Text';
import { BREAKPOINT_TABLET } from '../../../const/breakpoints';

const sectionStyle = css({
    backgroundColor: COLOR_BACKGROUND,
    padding: '100px',
});

const infoPanelStyle = css({
    minWidth: 551,
    height: 547,
    padding: '0 50px',
    background:
        'linear-gradient(180deg, rgba(153, 224, 241, 0.25) 0%, rgba(182, 232, 245, 0.175) 28.13%, rgba(221, 244, 250, 0.2) 56.77%, rgba(246, 252, 253, 0.225) 77.6%, rgba(255, 255, 255, 0.25) 97.4%)',
    boxShadow: ' 0px 4px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: 45,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    [`@media (max-width: ${BREAKPOINT_TABLET}px)`]: {
        height: 263,
        alignItems: 'flex-start',
        marginBottom: '-30px',
    },
});

const slideStyle = css({
    position: 'relative',
    display: 'flex',
    [`@media (max-width: ${BREAKPOINT_TABLET}px)`]: {
        flexWrap: 'wrap',
    },
});

const characterImgStyle = css({
    width: 700,
    height: 700,
    objectFit: 'cover',
});

const characters = [
    {
        id: 1,
        title: 'Not your average crush. Loves being in public, but still feeling shy sometimes.',
        text: 'Will ape into any party , but only after getting a job done.',
        icon: firstCharacterBig,
    },
    {
        id: 2,
        title: 'He is calm and prudent. Believes that the best way to show anything is by actions. It is his proof of work.',
        text: 'Wishes to buy a farm in the countryside.',
        icon: secondCharacterBig,
    },
    {
        id: 3,
        title: "The woman of web3. We usually don't know what they look like. In the world of anonymity, she prefers to be judged only by skills.",
        text: 'Smart, bold and purposeful, yet mysterious and beautiful.',
        icon: thirdCharacterBig,
    },
];

export const CharactersScreen = () => {
    return (
        <section css={sectionStyle}>
            <Wrapper>
                {characters.map((character) => {
                    return (
                        <div
                            css={slideStyle}
                            key={character.id}
                        >
                            <div css={infoPanelStyle}>
                                <Text type="secondary">
                                    <strong>{character.title}</strong>
                                </Text>
                                <Text type="secondary">{character.text}</Text>
                            </div>
                            <img
                                css={characterImgStyle}
                                src={character.icon}
                            />
                        </div>
                    );
                })}
            </Wrapper>
        </section>
    );
};
