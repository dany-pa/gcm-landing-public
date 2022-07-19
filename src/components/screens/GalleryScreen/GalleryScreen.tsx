import { BREAKPOINT_LAPTOP, BREAKPOINT_MOBILE, BREAKPOINT_TABLET } from '../../../const/breakpoints';
import { Wrapper } from '../../ui/Wrapper';

import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// eslint-disable-next-line import/no-unresolved
import 'swiper/css';
// eslint-disable-next-line import/no-unresolved
import 'swiper/css/navigation';

import { Title, Text, Button } from '../../ui';
import { GALLERY_ANCHOR } from '../../../const/urls';
import { SLIDES } from './const';
import {
    sectionStyle,
    imgWrapperStyle,
    activeImgWrapperStyle,
    imgStyle,
    activeImgStyle,
    activeSlideStyle,
    wrapperStyle,
    innerStyle,
    titleStyle,
    textStyle,
} from './styles';

export const GalleryScreen = () => {
    return (
        <section
            css={sectionStyle}
            id={GALLERY_ANCHOR}
        >
            <Wrapper>
                <Swiper
                    slidesPerView={3}
                    modules={[Navigation]}
                    loop={true}
                    navigation
                    watchSlidesProgress={true}
                    breakpoints={{
                        [BREAKPOINT_LAPTOP]: {
                            slidesPerView: 3,
                        },
                        [BREAKPOINT_TABLET]: {
                            slidesPerView: 2,
                            centeredSlides: true,
                        },
                        [BREAKPOINT_MOBILE]: {
                            slidesPerView: 1,
                            centeredSlides: true,
                        },
                        0: {
                            slidesPerView: 1,
                            centeredSlides: false,
                        },
                    }}
                >
                    {SLIDES.map((slide, index) => {
                        return (
                            <SwiperSlide key={index}>
                                {({ isActive, isVisible }) => {
                                    return (
                                        <div css={[imgWrapperStyle, isActive ? activeImgWrapperStyle : {}]}>
                                            <img
                                                css={[
                                                    imgStyle,
                                                    isActive ? activeImgStyle : {},
                                                    isVisible ? activeSlideStyle : {},
                                                ]}
                                                src={slide}
                                            />
                                        </div>
                                    );
                                }}
                            </SwiperSlide>
                        );
                    })}
                </Swiper>

                <div css={wrapperStyle}>
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
                        <Button>VIEW MORE</Button>
                    </div>
                </div>
            </Wrapper>
        </section>
    );
};
