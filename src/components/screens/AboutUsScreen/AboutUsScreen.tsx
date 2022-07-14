import { css } from '@emotion/react';
import { COLOR_BACKGROUND, COLOR_PRIMARY, COLOR_SECONDARY, COLOR_WHITE } from '../../../const/colors';
import { LogoIcon } from '../../icons';
import { Button } from '../../ui/Button';
import { Wrapper } from '../../ui/Wrapper';
import AboutUsPanel from '../../../images/aboutUsPanel.svg';
import AboutUsPanelBorder from '../../../images/border.svg';
import { BREAKPOINT_LAPTOP, BREAKPOINT_MOBILE, BREAKPOINT_TABLET } from '../../../const/breakpoints';
import { Title } from '../../ui/Title';
import { Text } from '../../ui/Text';
import styled from '@emotion/styled';

const sectionStyle = css({
    backgroundColor: COLOR_BACKGROUND,
});

const panelStyle = css({
    position: 'relative',
    left: -42,
    top: -50,
    filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
    transform: 'rotate(182deg)',
    // // mixBlendMode: 'color-burn',
    // mixBlendMode: 'soft-light',
    opacity: '0.6',
    // opacity: '0.45',
    // backgroundBlendMode: 'soft-light',
});

const panelBorerStyle = css({
    position: 'absolute',
    top: 0,
    backgroundBlendMode: 'screen',
    mixBlendMode: 'screen',
    opacity: '0.5',
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
    backgroundColor: COLOR_PRIMARY,
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

export const AboutUsScreen = () => {
    return (
        <section css={sectionStyle}>
            <Wrapper>
                <div css={{ position: 'relative', color: COLOR_SECONDARY }}>
                    <div css={{ position: 'relative' }}>
                        {/* <img
                            css={panelBorerStyle}
                            src={AboutUsPanelBorder}
                        /> */}
                        <img
                            src={AboutUsPanel}
                            css={panelStyle}
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
                        }}
                    >
                        <div
                            css={{
                                position: 'absolute',
                                top: 0,
                                p: {
                                    fontSize: 20,
                                    lineHeight: '25px',
                                    fontWeight: 500,
                                    marginBottom: '25px',
                                },
                            }}
                        >
                            <Title type="secondary">GALACTIC MARKET CATS</Title>
                            <Text type="secondary">
                                <strong>
                                    is more than just a pfp collection.
                                    <br /> It is a character for the free universe,
                                    <br /> the world, the story we build together.
                                </strong>
                            </Text>
                            <Text type="secondary">
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
