import { Text } from '../../ui';
import { STORY_ANCHOR } from '../../../const/urls';

import { sliderWrapper, sliderStyle, sliderInnerStyle, sectionStyle } from './styles';
import { STORIES } from './const';

import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

export const StoryScreen = () => {
    return (
        <section
            css={sectionStyle}
            id={STORY_ANCHOR}
        >
            <Swiper
                slidesPerView={1}
                loop={true}
                modules={[Pagination]}
                pagination={{
                    clickable: true,
                }}
                watchSlidesProgress={true}
            >
                {STORIES.map((storie) => {
                    return (
                        <SwiperSlide key={storie.id}>
                            <div
                                css={[
                                    sliderWrapper,
                                    {
                                        backgroundImage: `url(${storie.background})`,
                                    },
                                ]}
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
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </section>
    );
};
