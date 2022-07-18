import { css } from '@emotion/react';
import { COLOR_BACKGROUND, COLOR_SECONDARY, COLOR_WHITE } from '../../../const/colors';
import { Wrapper, Title, Text } from '../../ui';
import AboutUsPanel from '../../../images/aboutUsPanel.png';
import MobilePanelAboutUs from '../../../images/mobilePanelAboutUs.png';
import { BREAKPOINT_LAPTOP, BREAKPOINT_MOBILE, BREAKPOINT_TABLET } from '../../../const/breakpoints';
import styled from '@emotion/styled';
import { ABOUT_US_ANCHOR } from '../../../const/urls';

const sectionStyle = css({
    backgroundColor: COLOR_BACKGROUND,
    width: '100vw',
    overflow: 'hidden',
});

const panelStyle = css({
    position: 'relative',
    mixBlendMode: 'normal',
    width: 744,
    height: 513,
    [`@media (max-width: ${BREAKPOINT_LAPTOP}px)`]: {
        width: 680,
        height: 470,
    },
    [`@media (max-width: ${BREAKPOINT_TABLET}px)`]: {
        width: 627,
        height: 433,
    },
    [`@media (max-width: ${BREAKPOINT_MOBILE}px)`]: {
        display: 'none',
    },
});
const mbilePanelStyle = css({
    display: 'none',
    width: 408,
    height: 398,
    mixBlendMode: 'normal',
    opacity: '0.45',
    position: 'relative',
    [`@media (max-width: ${BREAKPOINT_MOBILE}px)`]: {
        display: 'block',
    },
});

const AdvanceStyled = styled.div({
    color: COLOR_WHITE,
    fontSize: 30,
    lineHeight: '55px',
});

const DividerStyled = styled.div({
    backgroundColor: COLOR_WHITE,
    height: '73px',
    width: 3,
});

const advanceWrapperStyle = css({
    backgroundColor: '#8E38C2',
    padding: '10px 0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',

    [`@media (max-width: ${BREAKPOINT_LAPTOP}px)`]: {
        padding: '5px 0',
    },

    [`@media (max-width: ${BREAKPOINT_TABLET}px)`]: {
        display: 'none',
    },
});

const AboutUsPanelWrapper = css({
    position: 'relative',
    color: COLOR_SECONDARY,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 150,
    [`@media (max-width: ${BREAKPOINT_LAPTOP}px)`]: {
        marginBottom: 50,
    },
});

const AboutUsImgWrapper = css({
    position: 'relative',
});

export const AboutUsScreen = () => {
    return (
        <section
            css={sectionStyle}
            id={ABOUT_US_ANCHOR}
        >
            <Wrapper>
                <div css={AboutUsPanelWrapper}>
                    <div css={AboutUsImgWrapper}>
                        <img
                            src={AboutUsPanel}
                            css={panelStyle}
                        />
                        <img
                            src={MobilePanelAboutUs}
                            css={mbilePanelStyle}
                        />
                    </div>
                    <div
                        css={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '100%',
                            height: '100%',
                            position: 'absolute',
                        }}
                    >
                        <div>
                            <Title
                                type="secondary"
                                style={css({ marginBottom: 20 })}
                            >
                                GALACTIC MARKET CATS
                            </Title>
                            <Text
                                type="secondary"
                                style={css({ marginBottom: 25 })}
                            >
                                <strong>
                                    is more than just a pfp collection.
                                    <br /> It is a character for the free universe,
                                    <br /> the world, the story we build together.
                                </strong>
                            </Text>
                            <Text
                                type="secondary"
                                style={css({ marginBottom: 25 })}
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
                    <strong>3030</strong> nft collection
                </AdvanceStyled>
                <DividerStyled />
                <AdvanceStyled>
                    <strong>3</strong> unique cherecters
                </AdvanceStyled>
                <DividerStyled />
                <AdvanceStyled>infinite universe</AdvanceStyled>
            </div>
        </section>
    );
};
