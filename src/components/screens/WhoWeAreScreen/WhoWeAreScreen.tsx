import { css } from '@emotion/react';
import { COLOR_BACKGROUND } from '../../../const/colors';
import { Wrapper } from '../../ui/Wrapper';
import AngryImg from '../../../images/whoWeAre/angry.png';
import SannyImg from '../../../images/whoWeAre/sanny.png';
import DanyImg from '../../../images/whoWeAre/dany.png';
import TwitterIcon from '../../../images/whoWeAre/twitter.svg';
import { BREAKPOINT_LAPTOP, BREAKPOINT_MOBILE, BREAKPOINT_TABLET } from '../../../const/breakpoints';
import { Title } from '../../ui/Title';
import { Text } from '../../ui/Text';
import { WHO_WE_ARE_ANCHOR } from '../../../const/urls';

const sectionStyle = css({
    backgroundColor: COLOR_BACKGROUND,
    padding: '100px 0',
    [`@media (max-width: ${BREAKPOINT_LAPTOP}px)`]: {
        padding: '35px 0 60px 0',
    },
});

const personStyle = css({
    width: 324,
    height: 576,
    background:
        'linear-gradient(180deg, rgba(153, 224, 241, 0.25) 0%, rgba(182, 232, 245, 0.175) 30.21%, rgba(221, 244, 250, 0.2) 64.06%, rgba(246, 252, 253, 0.225) 81.25%, rgba(255, 255, 255, 0.25) 100%)',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: '53px 53px 32px 32px',
    [`@media (max-width: ${BREAKPOINT_TABLET}px)`]: {
        width: '100%',
        height: 277,
        display: 'flex',
        borderRadius: '15px',
        marginBottom: 32,
    },
    [`@media (max-width: ${BREAKPOINT_MOBILE}px)`]: {
        height: 191,
    },
});

const personText = css({
    padding: '15px 55px 30px 40px',
    height: 'calc(100% - 288px)',
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    [`@media (max-width: ${BREAKPOINT_TABLET}px)`]: {
        height: 'auto',
        padding: '15px 50px 15px 0',
        justifyContent: 'space-around',
    },
});

const personImgStyle = css({
    width: 324,
    height: 288,
    borderRadius: '53px 53px 0 0',
    [`@media (max-width: ${BREAKPOINT_TABLET}px)`]: {
        width: 249,
        height: '100%',
        objectFit: 'cover',
        borderRadius: '15px 0 0 15px',
        marginRight: 30,
    },
});

const personsWrapperStyle = css({
    display: 'flex',
    justifyContent: 'space-between',
    [`@media (max-width: ${BREAKPOINT_TABLET}px)`]: {
        flexDirection: 'column',
    },
});

const twitterIconStyle = css({
    display: 'block',
    position: 'absolute',
    top: 0,
    right: -20,

    img: {
        width: '100%',
        height: '100%',
    },
    [`@media (max-width: ${BREAKPOINT_TABLET}px)`]: {
        flexDirection: 'column',
        width: 34,
        height: 27,
    },
});

const persons = [
    {
        id: 1,
        img: AngryImg,
        name: 'Angry Brother',
        position: 'Galactic Market Mewnder',
        text: 'Not angry by any means. A big fan of DeGenerative Art. Once Tried to mine BTC in the dorm.',
        twitter: '#',
    },
    {
        id: 2,
        img: SannyImg,
        name: 'Sunny Letters',
        position: 'Meowrtist',
        text: 'Love rockets and sweet Pocky. Dreams of fly to the Moon to make a graffiti in a moon crater.',
        twitter: '#',
    },
    {
        id: 3,
        img: DanyImg,
        name: 'Dany Pa',
        position: 'Demeowloper',
        text: "Couldn't find the best ice cream, so decided to mint one. Hate eggs. Doesn't know that eggs are an ingredient for ice cream.",
        twitter: '#',
    },
];

export const WhoWeAreScreen = () => {
    return (
        <section
            css={sectionStyle}
            id={WHO_WE_ARE_ANCHOR}
        >
            <Wrapper>
                <Title style={css({ textAlign: 'center', paddingBottom: 100 })}>Who we are?</Title>
                <div css={personsWrapperStyle}>
                    {persons.map((person) => {
                        return (
                            <div
                                key={person.id}
                                css={personStyle}
                            >
                                <img
                                    src={person.img}
                                    css={personImgStyle}
                                />

                                <div css={personText}>
                                    <div css={{ position: 'relative' }}>
                                        <Text style={css({ paddingBottom: 5 })}>
                                            <strong>{person.name}</strong>
                                        </Text>
                                        <Text>{person.position}</Text>
                                        <a
                                            href={person.twitter}
                                            target="_blank"
                                            rel="noreferrer"
                                            css={twitterIconStyle}
                                        >
                                            <img src={TwitterIcon} />
                                        </a>
                                    </div>
                                    <Text type="secondary">{person.text}</Text>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </Wrapper>
        </section>
    );
};
