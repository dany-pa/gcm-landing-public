import { Wrapper, Text } from '../../ui';
import stackIcon from '../../../images/stack.png';
import { BENEFITS_ANCHOR } from '../../../const/urls';
import {
    sectionStyle,
    wrapperStyle,
    benefitWrapperStyle,
    benefitStyle,
    Benefit,
    benefitInnerStyle,
    stackPanelStyle,
    titleStyle,
    textStyle,
    stackIconStyle,
    benefitTextStyle,
} from './styles';
import { BENEFITS } from './const';

export const BenefitsScreen = () => {
    return (
        <section
            css={sectionStyle}
            id={BENEFITS_ANCHOR}
        >
            <Wrapper style={wrapperStyle}>
                <div css={benefitWrapperStyle}>
                    {BENEFITS.map((benefit) => {
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
                                        style={benefitTextStyle}
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
                        <Text style={titleStyle}>
                            <strong>Galactic Market is Built on Stacks.</strong>
                        </Text>
                        <Text style={textStyle}>
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
