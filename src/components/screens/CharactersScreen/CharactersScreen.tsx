import { Wrapper, Text } from '../../ui';
import { CHARACTERS_ANCHOR } from '../../../const/urls';
import { CHARACTERS, SLIDES } from './constants';
import {
    characterImgStyle,
    infoPanelStyle,
    sectionStyle,
    slideImgStyle,
    slideStyle,
    textStyle,
    titleStyle,
} from './styles';

import { Navigation, Controller } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { useState } from 'react';

export const CharactersScreen = () => {
    const [topSlider, setTopSlider] = useState(null);
    return (
        <section
            css={sectionStyle}
            id={CHARACTERS_ANCHOR}
        >
            <Wrapper>
                <Swiper
                    slidesPerView={1}
                    watchSlidesProgress={true}
                    onSwiper={setTopSlider}
                    enabled={false}
                    loop={true}
                    centeredSlides={true}
                >
                    {CHARACTERS.map((character) => {
                        return (
                            <SwiperSlide key={character.id}>
                                <div css={[slideStyle]}>
                                    <div css={infoPanelStyle}>
                                        <Text
                                            type="secondary"
                                            style={titleStyle}
                                        >
                                            <strong>{character.title}</strong>
                                        </Text>
                                        <Text
                                            type="secondary"
                                            style={textStyle}
                                        >
                                            {character.text}
                                        </Text>
                                    </div>
                                    <img
                                        css={[characterImgStyle, character.style]}
                                        src={character.icon}
                                    />
                                </div>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
                <Swiper
                    className="bottom-slider"
                    slidesPerView={3}
                    modules={[Navigation, Controller]}
                    navigation
                    watchSlidesProgress={true}
                    controller={{ control: topSlider! }}
                    slideToClickedSlide
                    centeredSlides={true}
                >
                    {SLIDES.map((slide, index) => {
                        return (
                            <SwiperSlide key={index}>
                                {({ isActive }) => {
                                    return (
                                        <img
                                            src={slide}
                                            css={[
                                                slideImgStyle,
                                                isActive
                                                    ? {
                                                          filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
                                                      }
                                                    : {},
                                            ]}
                                        />
                                    );
                                }}
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </Wrapper>
        </section>
    );
};
