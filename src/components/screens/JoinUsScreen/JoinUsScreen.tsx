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
                    <a href="#">
                        <img
                            src={DiscordIcon}
                            css={iconStyle}
                        />
                    </a>
                    <a href="#">
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
