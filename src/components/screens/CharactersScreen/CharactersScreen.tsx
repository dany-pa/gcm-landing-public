import { Wrapper, Text } from '../../ui';
import { CHARACTERS_ANCHOR } from '../../../const/urls';
import { CHARACTERS, SLIDES } from './constants';
import {
    activeImgStyle,
    bubbleStyle_1,
    bubbleStyle_2,
    bubbleStyle_3,
    bubbleStyle_4,
    characterImgStyle,
    infoPanelStyle,
    sectionStyle,
    slideImgStyle,
    slideStyle,
    textStyle,
    titleStyle,
    wrapperStyle,
} from './styles';

// eslint-disable-next-line import/no-named-as-default
import Swiper, { Controller } from 'swiper';
import { Swiper as ReactSwiper, SwiperSlide } from 'swiper/react';
// eslint-disable-next-line import/no-unresolved
import 'swiper/css';
// eslint-disable-next-line import/no-unresolved
import 'swiper/css/navigation';
import { useCallback, useEffect, useState } from 'react';
import { Bubble } from '../../Bubble';

export const CharactersScreen = () => {
    const [topSlider, setTopSlider] = useState<Swiper | null>(null);
    const [activeSlider, setActiveSlider] = useState(0);

    const handleClickNext = useCallback(() => {
        if (activeSlider === SLIDES.length - 1) return;
        setActiveSlider(activeSlider + 1);
    }, [activeSlider]);
    const handleClickPrev = useCallback(() => {
        if (activeSlider === 0) return;
        setActiveSlider(activeSlider - 1);
    }, [activeSlider]);

    useEffect(() => {
        const nextBtn = document.querySelector('.bottom-slider .swiper-button-next');
        nextBtn?.addEventListener('click', handleClickNext);

        const prevBtn = document.querySelector('.bottom-slider .swiper-button-prev');
        prevBtn?.addEventListener('click', handleClickPrev);

        return () => {
            nextBtn?.removeEventListener('click', handleClickNext);
            prevBtn?.removeEventListener('click', handleClickPrev);
        };
    }, [handleClickNext, handleClickPrev]);

    const handleSliderClick = useCallback((index: number) => {
        setActiveSlider(index);
    }, []);

    useEffect(() => {
        if (!topSlider) return;
        topSlider.slideTo(activeSlider);
    }, [activeSlider, topSlider]);

    return (
        <section
            css={sectionStyle}
            id={CHARACTERS_ANCHOR}
        >
            <Wrapper style={wrapperStyle}>
                <Bubble style={bubbleStyle_1} />
                <Bubble style={bubbleStyle_2} />
                <Bubble style={bubbleStyle_3} />
                <Bubble style={bubbleStyle_4} />
                <ReactSwiper
                    slidesPerView={1}
                    watchSlidesProgress={true}
                    onSwiper={setTopSlider}
                    enabled={true}
                    loop={false}
                    centeredSlides={false}
                    allowTouchMove={false}
                >
                    {CHARACTERS.map((character) => {
                        return (
                            <SwiperSlide key={character.id}>
                                <div css={slideStyle}>
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
                </ReactSwiper>
                <ReactSwiper
                    className="bottom-slider"
                    slidesPerView={3}
                    modules={[Controller]}
                    controller={{ control: topSlider ?? undefined }}
                    slideToClickedSlide
                    navigation
                >
                    {SLIDES.map((slide, index) => {
                        return (
                            <SwiperSlide
                                key={index}
                                onClick={() => handleSliderClick(index)}
                            >
                                <img
                                    src={slide}
                                    css={[slideImgStyle, activeSlider === index ? activeImgStyle : {}]}
                                />
                            </SwiperSlide>
                        );
                    })}
                </ReactSwiper>
            </Wrapper>
        </section>
    );
};
