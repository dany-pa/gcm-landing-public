import { Wrapper, Text, Title } from '../../ui';
import stackIcon from '../../../images/stack.png';
import { BENEFITS_SCREEN_ID } from '../../../const/urls';
import {
    sectionStyle,
    benefitWrapperStyle,
    benefitStyle,
    Benefit,
    benefitInnerStyle,
    stackPanelStyle,
    titleStyle,
    textStyle,
    stackIconStyle,
    benefitTextStyle,
    stackInnerPanelStyle,
    textFirstStyle,
} from './styles';
import { BENEFITS } from './const';
import { css } from '@emotion/react';

export const BenefitsScreen = () => {
    return (
        <section
            css={sectionStyle}
            id={BENEFITS_SCREEN_ID}
        >
            <Wrapper>
                <div css={benefitWrapperStyle}>
                    {BENEFITS.map((benefit) => {
                        return (
                            <div
                                css={benefitStyle}
                                key={benefit.id}
                            >
                                <Benefit />
                                <div css={benefitInnerStyle}>
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
                    <div css={stackInnerPanelStyle}>
                        <Title style={titleStyle}>
                            <strong>Galactic Market is Built on Stacks.</strong>
                        </Title>
                        <Text style={css([textStyle, textFirstStyle])}>
                            Stacks is an open-source blockchain network
                            <br className="hideOnTablet" /> that leverages the security and capital
                            <br className="hideOnTablet" /> of Bitcoin or decentralized apps and smart
                            <br className="hideOnTablet" /> contracts.
                        </Text>
                        <Text style={textStyle}>
                            And what's more important, a great community
                            <br className="hideOnTablet" /> of great creative and mindful people.
                        </Text>
                    </div>
                    <a
                        href="https://www.stacks.co/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img
                            src={stackIcon}
                            css={stackIconStyle}
                        />
                    </a>
                </div>
            </Wrapper>
        </section>
    );
};
