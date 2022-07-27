import { COLOR_SECONDARY } from '../../../const/colors';
import { LogoIcon } from '../../icons';
import { Wrapper, Button } from '../../ui';
import City from '../../../images/webp/city.webp';
import CityLaptop from '../../../images/cityLaptop.png';
import CityTablet from '../../../images/cityTablet.png';
import CityMobile from '../../../images/cityMobile.png';
import { ABOUT_US_SCREEN_ID } from '../../../const/urls';
import { sectionStyle, wrapperStyle, logoIconWrapperStyle, buttonStyle, cityImgStyle, titleStyle } from './styles';

export const MainScreen = () => {
    return (
        <section css={sectionStyle}>
            <Wrapper style={wrapperStyle}>
                <div css={logoIconWrapperStyle}>
                    <LogoIcon color={COLOR_SECONDARY} />
                </div>
                <a href={`#${ABOUT_US_SCREEN_ID}`}>
                    <Button style={buttonStyle}>MINT</Button>
                </a>
            </Wrapper>
            <img
                className="hideOnLaptop"
                css={cityImgStyle}
                src={City}
            />
            <img
                className="hideOnDesktop hideOnTablet"
                css={cityImgStyle}
                src={CityLaptop}
            />
            <img
                className="hideOnDesktop hideOnLaptop showOnTablet hideOnMobile"
                css={cityImgStyle}
                src={CityTablet}
            />
            <img
                className="hideOnDesktop hideOnLaptop hideOnTablet showOnMobile"
                css={cityImgStyle}
                src={CityMobile}
            />
            <h2 css={titleStyle}>
                The place with no boundaries
                <br /> for imagination.
            </h2>
        </section>
    );
};
