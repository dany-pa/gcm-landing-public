import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { BREAKPOINT_LAPTOP, BREAKPOINT_TABLET } from '../../../const/breakpoints';
import { COLOR_BACKGROUND, COLOR_PRIMARY, COLOR_SECONDARY, COLOR_WHITE } from '../../../const/colors';
import { Wrapper } from '../../ui/Wrapper';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import img1 from '../../../images/carousel/img1.png';
import img2 from '../../../images/carousel/img2.png';
import img3 from '../../../images/carousel/img3.png';
import 'swiper/css';
import 'swiper/css/navigation';
import { useState } from 'react';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Title } from '../../ui/Title';
import { Text } from '../../ui/Text';
import { Button } from '../../ui/Button';

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    // variableWidth: true,
    centerMode: true,
    centerPadding: 0,
};

const imgStyle = css({
    width: 285,
    height: 285,
    borderRadius: 13,
});
const activeImgStyle = css({});

const sectionStyle = css({
    backgroundColor: '#915FF4',
    padding: '65px 0',

    // '.swiper-container .swiper-slide-active': {
    '.slick-current ': {
        // img: {
        //     width: 500,
        //     height: 500,
        // },
        // transform: 'scale(1.5)',
    },
});
export const GalleryScreen = () => {
    const [activeSlider, setActiveSlider] = useState(0);
    return (
        <section css={sectionStyle}>
            <Wrapper>
                {/* <Swiper
                    spaceBetween={0}
                    slidesPerView={3}
                    onSlideChange={(swiper) => setActiveSlider(swiper.activeIndex)}
                    modules={[Navigation]}
                    navigation
                    loop
                    centeredSlides={true}
                >
                    <SwiperSlide>
                        <img
                            css={[imgStyle, activeImgStyle]}
                            src={img1}
                        />
                    </SwiperSlide>

                    <SwiperSlide>
                        <img
                            css={imgStyle}
                            src={img2}
                        />
                    </SwiperSlide>

                    <SwiperSlide>
                        <img
                            css={imgStyle}
                            src={img3}
                        />
                    </SwiperSlide>
                </Swiper> */}

                <Slider {...settings}>
                    <div>
                        <img
                            css={imgStyle}
                            src={img1}
                        />
                    </div>
                    <div>
                        <img
                            css={imgStyle}
                            src={img2}
                        />
                    </div>
                    <div>
                        <img
                            css={imgStyle}
                            src={img3}
                        />
                    </div>
                    <div>
                        <img
                            css={imgStyle}
                            src={img1}
                        />
                    </div>
                    <div>
                        <img
                            css={imgStyle}
                            src={img2}
                        />
                    </div>
                    <div>
                        <img
                            css={imgStyle}
                            src={img3}
                        />
                    </div>
                </Slider>
                <div css={{ display: 'flex' }}>
                    <div css={{ marginLeft: 'auto' }}>
                        <Title
                            type="secondary"
                            style={css({ margin: '20px 0 30px 0' })}
                        >
                            A collection of 3,030 Characters <br /> welcoming you to The Market
                        </Title>

                        <Text
                            type="secondary"
                            style={css({ marginBottom: '30px' })}
                        >
                            Galactic Market is a place to unite everybody <br /> through gamification for different
                            stages
                            <br />
                            of a project, questing, defining your <strong>Character</strong>
                            <br /> design, lore and more imaginable and <br /> unimaginable things we discover together.
                        </Text>
                        <Text
                            type="secondary"
                            style={css({ marginBottom: '30px' })}
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
