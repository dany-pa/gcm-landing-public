import { COLOR_SECONDARY } from '../../../const/colors';
import { LogoIcon } from '../../icons';
import { Wrapper, Button } from '../../ui';
import City from '../../../images/webp/city.webp';
import CityLaptop from '../../../images/cityLaptop.png';
import CityTablet from '../../../images/cityTablet.png';
import CityMobile from '../../../images/cityMobile.png';
import { sectionStyle, wrapperStyle, logoIconWrapperStyle, cityImgStyle, titleStyle } from './styles';
import ScrollIntoView from 'react-scroll-into-view';
import { ABOUT_US_SCREEN_ID } from '../../../const/urls';

export const MainScreen = () => {
    return (
        <section css={sectionStyle}>
            <Wrapper style={wrapperStyle}>
                <div css={logoIconWrapperStyle}>
                    <LogoIcon color={COLOR_SECONDARY} />
                </div>
                {/* <Link
                    to="/mint"
                    style={{ textDecoration: 'none' }}
                >
                    <Button style={buttonStyle}>MINT</Button>
                </Link> */}

                <ScrollIntoView selector={`#${ABOUT_US_SCREEN_ID}`}>
                    <Button>VIEW MORE</Button>
                </ScrollIntoView>
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
