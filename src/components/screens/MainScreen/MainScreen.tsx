import { COLOR_SECONDARY } from '../../../const/colors';
import { LogoIcon } from '../../icons';
import { Wrapper, Button } from '../../ui';
import City from '../../../images/city.png';
import { ABOUT_US_ANCHOR } from '../../../const/urls';
import { sectionStyle, wrapperStyle, logoIconWrapperStyle, buttonStyle, cityImgStyle, titleStyle } from './styles';

export const MainScreen = () => {
    return (
        <section css={sectionStyle}>
            <Wrapper style={wrapperStyle}>
                <div css={logoIconWrapperStyle}>
                    <LogoIcon color={COLOR_SECONDARY} />
                </div>
                <a href={`#${ABOUT_US_ANCHOR}`}>
                    <Button style={buttonStyle}>MINT</Button>
                </a>
            </Wrapper>
            <img
                css={cityImgStyle}
                src={City}
            />
            <h2 css={titleStyle}>
                The place with no boundaries
                <br /> for imagination.
            </h2>
        </section>
    );
};
