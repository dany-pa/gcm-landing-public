import { Wrapper } from '../../ui/Wrapper';

import { Title, Text, Button } from '../../ui';
import { GALLERY_SCREEN_ID } from '../../../const/urls';
import { SLIDES } from './const';
import {
    sectionStyle,
    imgWrapperStyle,
    imgStyle,
    textWrapperStyle,
    innerStyle,
    titleStyle,
    textStyle,
    wrapperStyle,
    slideRowStyle,
    buttonStyle,
} from './styles';

export const GalleryScreen = () => {
    return (
        <section
            css={sectionStyle}
            id={GALLERY_SCREEN_ID}
        >
            <Wrapper style={wrapperStyle}>
                <div css={imgWrapperStyle}>
                    {SLIDES.map((row, index) => {
                        return (
                            <div
                                css={slideRowStyle}
                                key={index}
                            >
                                {row.map((slide) => {
                                    return (
                                        <img
                                            key={slide.id}
                                            css={[imgStyle, slide.style]}
                                            src={slide.img}
                                        />
                                    );
                                })}
                            </div>
                        );
                    })}
                </div>
                <div css={textWrapperStyle}>
                    <div css={innerStyle}>
                        <Title
                            type="secondary"
                            style={titleStyle}
                        >
                            A collection of 3,030 Characters <br /> welcoming you to The Market
                        </Title>

                        <Text
                            type="secondary"
                            style={textStyle}
                        >
                            Galactic Market is a place to unite everybody <br /> through gamification for different
                            stages
                            <br />
                            of a project, questing, defining your <strong>Character</strong>
                            <br /> design, lore and more imaginable and <br /> unimaginable things we discover together.
                        </Text>
                        <Text
                            type="secondary"
                            style={textStyle}
                        >
                            <strong>Imagination is a form of freedom after all!</strong>
                        </Text>
                        <Button style={buttonStyle}>VIEW MORE</Button>
                    </div>
                </div>
            </Wrapper>
        </section>
    );
};
