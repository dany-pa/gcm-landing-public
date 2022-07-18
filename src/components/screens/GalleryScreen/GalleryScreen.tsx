import { css } from '@emotion/react';
import { BREAKPOINT_LAPTOP, BREAKPOINT_MOBILE, BREAKPOINT_TABLET } from '../../../const/breakpoints';
import { COLOR_PRIMARY } from '../../../const/colors';
import { Wrapper } from '../../ui/Wrapper';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import img1 from '../../../images/carousel/img1.png';
import img2 from '../../../images/carousel/img2.png';
import img3 from '../../../images/carousel/img3.png';
import 'swiper/css';
import 'swiper/css/navigation';

import { Title, Text, Button } from '../../ui';
import { GALLERY_ANCHOR } from '../../../const/urls';

const imgStyle = css({
    width: 285,
    height: 285,
    borderRadius: 13,
    position: 'relative',
});
const activeImgStyle = css({
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
});
const activeImgWrapperStyle = css({
    '&::after': {
        content: '""',
        position: 'absolute',
        width: 285,
        height: 15,
        backgroundColor: COLOR_PRIMARY,
        bottom: 0,
        left: 0,

        [`@media (max-width: ${BREAKPOINT_TABLET}px)`]: {
            margin: '0 auto',
            right: 0,
        },
    },
});

const sectionStyle = css({
    backgroundColor: '#915FF4',
    padding: '65px 0',

    '.swiper-button-prev, .swiper-button-next': {
        color: '#FFD9F7',
    },
});

const imgWrapperStyle = css({
    [`@media (max-width: ${BREAKPOINT_TABLET}px)`]: {
        textAlign: 'center',
    },
});

const slides = [img1, img2, img3];
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
                    {slides.map((slide, index) => {
                        return (
                            <SwiperSlide key={index}>
                                {({ isActive, isVisible }) => {
                                    return (
                                        <div css={[imgWrapperStyle, isActive ? activeImgWrapperStyle : {}]}>
                                            <img
                                                css={[
                                                    imgStyle,
                                                    isActive ? activeImgStyle : {},
                                                    isVisible
                                                        ? {
                                                              filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
                                                          }
                                                        : {},
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
