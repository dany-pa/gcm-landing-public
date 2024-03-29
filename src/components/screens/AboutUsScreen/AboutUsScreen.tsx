import { Wrapper, Title, Text } from '../../ui';
import AboutUsPanel from '../../../images/webp/aboutUsPanel.webp';
import MobilePanelAboutUs from '../../../images/mobilePanelAboutUs.png';

import { ABOUT_US_SCREEN_ID } from '../../../const/urls';
import {
    sectionStyle,
    aboutUsPanelWrapper,
    aboutUsImgWrapper,
    panelStyle,
    mobilePanelStyle,
    advanceWrapperStyle,
    AdvanceStyled,
    DividerStyled,
    titleWrapperStyle,
    titleStyle,
    subtitleStyle,
    textStyle,
    advanceNumberStyle,
    bubbleStyle_1,
    bubbleStyle_2,
    bubbleStyle_3,
    bubbleStyle_4,
    bubbleStyle_5,
    textWrapperStyle,
} from './styles';
import { Bubble } from '../../Bubble';

export const AboutUsScreen = () => {
    return (
        <section
            css={sectionStyle}
            id={ABOUT_US_SCREEN_ID}
        >
            <Wrapper>
                <div css={aboutUsPanelWrapper}>
                    <div css={aboutUsImgWrapper}>
                        <img
                            src={AboutUsPanel}
                            css={panelStyle}
                        />
                        <img
                            src={MobilePanelAboutUs}
                            css={mobilePanelStyle}
                        />
                    </div>
                    <div css={titleWrapperStyle}>
                        <Bubble style={bubbleStyle_1} />
                        <Bubble style={bubbleStyle_2} />
                        <Bubble style={bubbleStyle_3} />
                        <Bubble style={bubbleStyle_4} />
                        <Bubble style={bubbleStyle_5} />
                        <div css={textWrapperStyle}>
                            <Title
                                type="secondary"
                                style={titleStyle}
                            >
                                GALACTIC MARKET CATS
                            </Title>
                            <Text
                                type="secondary"
                                style={subtitleStyle}
                            >
                                <strong>
                                    is more than just a pfp collection.
                                    <br className="hideOnLaptop showOnTablet" /> It is a character
                                    <br className="hideOnDesktop hideOnTablet" /> for the free universe,
                                    <br className="hideOnLaptop showOnTablet" /> the world, the story we
                                    <br className="hideOnDesktop hideOnTablet" /> build together.
                                </strong>
                            </Text>
                            <Text
                                type="secondary"
                                style={textStyle}
                            >
                                Many of us didn't have great experience
                                <br /> with expressing creativity.
                            </Text>
                            <Text
                                type="secondary"
                                style={textStyle}
                            >
                                <strong>GM Cats NFT</strong> serves as a pass to a community
                                <br className="hideOnMobile" /> of people who support each other's creative vision.{' '}
                                <br className="hideOnTablet showOnMobile" />
                                <br className="hideOnDesktop hideOnLaptop showOnMobile" />
                                The Market with noboundaries for Imagination
                                <br className="hideOnTablet" />
                                can be created only together.
                            </Text>
                        </div>
                    </div>
                </div>
            </Wrapper>
            <div css={advanceWrapperStyle}>
                <AdvanceStyled>
                    <strong css={advanceNumberStyle}>3030</strong> nft collection
                </AdvanceStyled>
                <DividerStyled />
                <AdvanceStyled>
                    <strong css={advanceNumberStyle}>3</strong> unique characters
                </AdvanceStyled>
                <DividerStyled />
                <AdvanceStyled>infinite universe</AdvanceStyled>
            </div>
        </section>
    );
};
