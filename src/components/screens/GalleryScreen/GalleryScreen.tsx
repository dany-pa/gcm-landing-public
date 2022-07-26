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
                            A collection of 3,030 Characters <br className="hideOnLaptop showOnTablet" /> welcoming{' '}
                            <br className="hideOnDesktop hideOnTablet" /> you to The Market
                        </Title>

                        <Text
                            type="secondary"
                            style={textStyle}
                        >
                            Galactic Market is a place
                            <br className="hideOnDesktop hideOnTablet" /> to unite everybody{' '}
                            <br className="hideOnLaptop showOnTablet" /> through{' '}
                            <br className="hideOnDesktop hideOnTablet" />
                            gamification for different <br className="hideOnDesktop hideOnTablet" />
                            stages
                            <br />
                            of a project, questing, <br className="hideOnDesktop hideOnTablet" /> defining your{' '}
                            <br className="hideOnDesktop hideOnLaptop showOnTablet" />
                            <strong>Character</strong>
                            <br className="hideOnTablet" /> design, lore and more{' '}
                            <br className="hideOnDesktop hideOnTablet" /> imaginable{' '}
                            <br className="hideOnDesktop hideOnLaptop showOnTablet" /> and{' '}
                            <br className="hideOnTablet" /> unimaginable things we
                            <br className="hideOnDesktop hideOnTablet" /> discover{' '}
                            <br className="hideOnDesktop hideOnLaptop showOnTablet" />
                            together.
                            <br className="hideOnDesktop hideOnLaptop showOnMobile" />
                            <br className="hideOnDesktop hideOnLaptop showOnMobile" />
                        </Text>
                        <Text
                            type="secondary"
                            style={textStyle}
                        >
                            <strong>
                                Imagination is a form
                                <br className="hideOnDesktop hideOnTablet" /> of freedom after all!
                            </strong>
                        </Text>
                        <Button style={buttonStyle}>VIEW MORE</Button>
                    </div>
                </div>
            </Wrapper>
        </section>
    );
};
