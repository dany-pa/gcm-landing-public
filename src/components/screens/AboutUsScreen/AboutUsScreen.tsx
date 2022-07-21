import { Wrapper, Title, Text } from '../../ui';
import AboutUsPanel from '../../../images/aboutUsPanel.png';
import MobilePanelAboutUs from '../../../images/mobilePanelAboutUs.png';
import { ABOUT_US_ANCHOR } from '../../../const/urls';
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
} from './styles';

export const AboutUsScreen = () => {
    return (
        <section
            css={sectionStyle}
            id={ABOUT_US_ANCHOR}
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
                        <div>
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
                                    <br /> It is a character for the free universe,
                                    <br /> the world, the story we build together.
                                </strong>
                            </Text>
                            <Text
                                type="secondary"
                                style={textStyle}
                            >
                                Many of us didn't have great experience
                                <br /> with expressing creativity.
                            </Text>
                            <Text type="secondary">
                                <strong>GM Cats NFT</strong> serves as a pass to a community
                                <br /> of people whosupport each other's creative vision.
                                <br /> The Market with noboundaries for Imagination
                                <br /> can be created only together.
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
                    <strong css={advanceNumberStyle}>3</strong> unique cherecters
                </AdvanceStyled>
                <DividerStyled />
                <AdvanceStyled>infinite universe</AdvanceStyled>
            </div>
        </section>
    );
};
