import TwitterIcon from '../../../images/twitter-mobile.svg';
import DiscordIcon from '../../../images/discord-mobile.svg';
import {
    sectionStyle,
    panelStyle,
    textWrapperStyle,
    titleStyle,
    textStyle,
    iconsWrapperStyle,
    iconStyle,
    bubbleStyle_1,
    bubbleStyle_2,
    bubbleStyle_3,
} from './styles';
import { DISCORD_URL, TWITTER_URL } from '../../../const/urls';
import { Bubble } from '../../Bubble';

export const JoinUsScreen = () => {
    return (
        <section css={sectionStyle}>
            <div css={panelStyle}>
                <Bubble style={bubbleStyle_1} />
                <Bubble style={bubbleStyle_2} />
                <Bubble style={bubbleStyle_3} />
                <div css={textWrapperStyle}>
                    <h3 css={titleStyle}>JOIN US NOW!</h3>
                    <p css={textStyle}>
                        You’re invited <br />
                        to Galactic Market
                    </p>
                </div>
                <div css={iconsWrapperStyle}>
                    <a
                        href={DISCORD_URL}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img
                            src={DiscordIcon}
                            css={iconStyle}
                        />
                    </a>
                    <a
                        href={TWITTER_URL}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img
                            src={TwitterIcon}
                            css={iconStyle}
                        />
                    </a>
                </div>
            </div>
        </section>
    );
};
