import { css } from '@emotion/react';
import { COLOR_BACKGROUND } from '../../../const/colors';
import BackgroundStory1 from '../../../images/story/storieBG_1.png';
import BackgroundStory2 from '../../../images/story/storieBG_2.png';
import BackgroundStory3 from '../../../images/story/storieBG_3.png';
import BackgroundPanel from '../../../images/story/panel.png';
import { Text } from '../../ui/Text';

const sectionStyle = css({
    backgroundColor: COLOR_BACKGROUND,
});

const sliderStyle = css({
    backgroundImage: `url(${BackgroundPanel})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: 561,
    height: 288,
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingTop: '30px',
});

const sliderInnerStyle = css({
    height: '70%',
    width: '70%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
});

const sliderWrapper = css({
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
    height: '100vh',
    paddingBottom: '50px',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
});

const stories = [
    {
        id: 1,
        title: 'The Mysterious Planet full of Cats.',
        text: [
            'Somewhere in the Galaxy, beyond space and time, a small planet exists.',
            "Just like Earth, there are cities, fields and seas. It's a lovely place.",
        ],
        background: BackgroundStory1,
    },
    {
        id: 2,
        title: 'But this space is different.',
        text: ["The planet is inhabited with creatures, who're just like human beings, but Cats."],
        background: BackgroundStory2,
    },
    {
        id: 3,
        title: "They're free from doubt, as no boundaries are set.",
        text: ['In such a world, everything can happen, just imagine!'],
        background: BackgroundStory3,
    },
];

export const StoryScreen = () => {
    return (
        <section css={sectionStyle}>
            {stories.map((storie) => {
                return (
                    <div
                        css={[
                            sliderWrapper,
                            {
                                backgroundImage: `url(${storie.background})`,
                            },
                        ]}
                        key={storie.id}
                    >
                        <div css={sliderStyle}>
                            <div css={sliderInnerStyle}>
                                <Text type="white">
                                    <strong>{storie.title}</strong>
                                </Text>
                                {storie.text.map((text, index) => {
                                    return (
                                        <Text
                                            type="white"
                                            key={index}
                                        >
                                            {text}
                                        </Text>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                );
            })}
        </section>
    );
};
