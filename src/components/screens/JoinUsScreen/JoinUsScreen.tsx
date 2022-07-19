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
} from './styles';
import { DISCORD_URL, TWITTER_URL } from '../../../const/urls';

export const JoinUsScreen = () => {
    return (
        <section css={sectionStyle}>
            <div css={panelStyle}>
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
