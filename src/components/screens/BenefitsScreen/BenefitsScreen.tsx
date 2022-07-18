import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { COLOR_BACKGROUND } from '../../../const/colors';
import { Wrapper, Text } from '../../ui';
import SecuredByBitcoinIcon from '../../../images/benefits/securedByBitcoin.svg';
import interactiveEvolutionIcon from '../../../images/benefits/interactiveEvolution.svg';
import ownIPIcon from '../../../images/benefits/ownIP.svg';
import universeWeBuildIcon from '../../../images/benefits/universeWeBuild.svg';
import dropsIcon from '../../../images/benefits/drops.svg';
import stackIcon from '../../../images/stack.png';
import { BREAKPOINT_LAPTOP, BREAKPOINT_MOBILE, BREAKPOINT_TABLET } from '../../../const/breakpoints';
import { BENEFITS_ANCHOR } from '../../../const/urls';

const sectionStyle = css({
    backgroundColor: COLOR_BACKGROUND,
    boxShadow: 'inset 0px 10px 10px 9px rgba(0,0,0, 0.1)',
    padding: '30px 0 0 0',
});

const Benefit = styled.div(
    css({
        width: '100%',
        height: '100%',
        borderRadius: 20,
        background:
            'linear-gradient(180deg, rgba(153, 224, 241, 0.3) 0%, rgba(182, 232, 245, 0.21) 35.94%, rgba(221, 244, 250, 0.24) 63.54%, rgba(246, 252, 253, 0.27) 80.73%, rgba(255, 255, 255, 0.3) 100%)',
        transform: 'rotate(-180deg)',
        filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',

        [`@media (max-width: ${BREAKPOINT_TABLET}px)`]: {
            borderRadius: 32,
        },
    })
);

const benefitWrapperStyle = css({
    paddingBottom: '30px',
    display: 'flex',
    justifyContent: 'space-between',
    [`@media (max-width: ${BREAKPOINT_TABLET}px)`]: {
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
});

const benefits = [
    {
        id: 1,
        text: 'Secured<br /> by Bitcoin',
        icon: SecuredByBitcoinIcon,
        iconStyle: css({
            width: 156,
            height: 147,
            [`@media (max-width: ${BREAKPOINT_LAPTOP}px)`]: {
                width: 137,
                height: 129,
            },
            [`@media (max-width: ${BREAKPOINT_TABLET}px)`]: {
                width: 119,
                height: 112,
            },
            [`@media (max-width: ${BREAKPOINT_MOBILE}px)`]: {
                width: 89,
                height: 84,
            },
        }),
        style: css({
            [`@media (max-width: ${BREAKPOINT_TABLET}px)`]: {
                order: 1,
                marginRight: 15,
            },
        }),
    },
    {
        id: 2,
        text: 'Interactive<br /> evolution<br /> of GM NFTs',
        icon: interactiveEvolutionIcon,
        iconStyle: css({
            width: 139,
            height: 110,
            [`@media (max-width: ${BREAKPOINT_LAPTOP}px)`]: {
                width: 122,
                height: 96,
            },
            [`@media (max-width: ${BREAKPOINT_TABLET}px)`]: {
                width: 102,
                height: 141,
            },
            [`@media (max-width: ${BREAKPOINT_MOBILE}px)`]: {
                width: 76,
                height: 105,
            },
        }),
        innerStyle: css({
            [`@media (max-width: ${BREAKPOINT_TABLET}px)`]: {
                flexDirection: 'row-reverse',
            },
        }),
        style: css({
            [`@media (max-width: ${BREAKPOINT_TABLET}px)`]: {
                width: 324,
                height: 211,
                order: 3,
                flexDirection: 'row-reverse',
                marginRight: 15,
            },
            [`@media (max-width: ${BREAKPOINT_MOBILE}px)`]: {
                width: 241,
                height: 157,
            },
        }),
    },
    {
        id: 3,
        text: 'You own the IP',
        icon: ownIPIcon,
        iconStyle: css({
            width: 112,
            height: 131,
            [`@media (max-width: ${BREAKPOINT_LAPTOP}px)`]: {
                width: 98,
                height: 115,
            },
            [`@media (max-width: ${BREAKPOINT_TABLET}px)`]: {
                width: 124,
                height: 98,
            },
            [`@media (max-width: ${BREAKPOINT_MOBILE}px)`]: {
                width: 92,
                height: 73,
            },
        }),
        style: css({
            [`@media (max-width: ${BREAKPOINT_TABLET}px)`]: {
                order: 4,
            },
        }),
    },
    {
        id: 4,
        text: 'A universe<br /> we build<br /> together',
        icon: universeWeBuildIcon,
        iconStyle: css({
            width: 110,
            height: 152,
            [`@media (max-width: ${BREAKPOINT_LAPTOP}px)`]: {
                width: 96,
                height: 134,
            },
            [`@media (max-width: ${BREAKPOINT_TABLET}px)`]: {
                width: 79,
                height: 93,
            },
            [`@media (max-width: ${BREAKPOINT_MOBILE}px)`]: {
                width: 59,
                height: 70,
            },
        }),
        innerStyle: css({
            [`@media (max-width: ${BREAKPOINT_TABLET}px)`]: {
                flexDirection: 'row-reverse',
            },
        }),
        style: css({
            [`@media (max-width: ${BREAKPOINT_TABLET}px)`]: {
                width: 324,
                height: 211,
                order: 1,
            },
            [`@media (max-width: ${BREAKPOINT_MOBILE}px)`]: {
                width: 241,
                height: 157,
            },
        }),
    },
    {
        id: 5,
        text: 'Access to the<br /> allfuture drops<br /> and roadmap<br />activations',
        icon: dropsIcon,
        iconStyle: css({
            width: 148,
            height: 148,
            [`@media (max-width: ${BREAKPOINT_LAPTOP}px)`]: {
                width: 130,
                height: 130,
            },
            [`@media (max-width: ${BREAKPOINT_LAPTOP}px)`]: {
                width: 125,
                height: 125,
            },
            [`@media (max-width: ${BREAKPOINT_MOBILE}px)`]: {
                width: 93,
                height: 93,
            },
        }),
        innerStyle: css({
            [`@media (max-width: ${BREAKPOINT_TABLET}px)`]: {
                flexDirection: 'row-reverse',
            },
        }),
        style: css({
            [`@media (max-width: ${BREAKPOINT_TABLET}px)`]: {
                width: 549,
                height: 211,
                order: 5,
            },
            [`@media (max-width: ${BREAKPOINT_MOBILE}px)`]: {
                width: 408,
                height: 157,
            },
        }),
    },
];

const benefitStyle = css({
    position: 'relative',
    width: 207,
    height: 412,
    [`@media (max-width: ${BREAKPOINT_LAPTOP}px)`]: {
        width: 182,
        height: 362,
    },

    [`@media (max-width: ${BREAKPOINT_TABLET}px)`]: {
        height: 212,
        marginBottom: 15,
    },
    [`@media (max-width: ${BREAKPOINT_MOBILE}px)`]: {
        width: 157,
        height: 157,
    },
});

const benefitInnerStyle = css({
    position: 'absolute',
    top: 0,
    height: '100%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
});

const stackPanelStyle = css({
    backgroundColor: '#5014BC',
    width: '100%',
    borderRadius: 40,
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    padding: '30px 30px 30px 84px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    [`@media (max-width: ${BREAKPOINT_TABLET}px)`]: {
        width: 555,
        margin: '0 auto 30px auto',
        position: 'relative',
        paddingLeft: '64px',
    },
});

const stackIconStyle = css({
    width: 290,
    height: 290,

    [`@media (max-width: ${BREAKPOINT_TABLET}px)`]: {
        width: 168,
        height: 168,
        position: 'absolute',
        right: '-20px',
        top: '-25px',
    },
});

const wrapperStyle = css({
    [`@media (max-width: ${BREAKPOINT_TABLET}px)`]: {
        display: 'flex',
        flexDirection: 'column-reverse',
    },
});

export const BenefitsScreen = () => {
    return (
        <section
            css={sectionStyle}
            id={BENEFITS_ANCHOR}
        >
            <Wrapper style={wrapperStyle}>
                <div css={benefitWrapperStyle}>
                    {benefits.map((benefit) => {
                        return (
                            <div
                                css={[benefitStyle, benefit.style]}
                                key={benefit.id}
                            >
                                <Benefit />
                                <div css={[benefitInnerStyle, benefit.innerStyle]}>
                                    <img
                                        src={benefit.icon}
                                        alt=""
                                        css={benefit.iconStyle}
                                    />
                                    <Text
                                        type="secondary"
                                        style={css({ textAlign: 'center' })}
                                    >
                                        <strong dangerouslySetInnerHTML={{ __html: benefit.text }} />
                                    </Text>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div css={stackPanelStyle}>
                    <div css={{ marginRight: 50 }}>
                        <Text style={css({ marginBottom: 40 })}>
                            <strong>Galactic Market is Built on Stacks.</strong>
                        </Text>
                        <Text style={css({ marginBottom: 30 })}>
                            Stacks is an open-source blockchain network
                            <br /> that leverages the security and capital
                            <br /> of Bitcoin or decentralized apps and smart
                            <br /> contracts.
                        </Text>
                        <Text>
                            And what's more important, a great community
                            <br /> of great creative and mindful people.
                        </Text>
                    </div>
                    <img
                        src={stackIcon}
                        css={stackIconStyle}
                    />
                </div>
            </Wrapper>
        </section>
    );
};
