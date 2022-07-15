import { css } from '@emotion/react';
import { COLOR_BACKGROUND, COLOR_SECONDARY } from '../../../const/colors';
import { LogoIcon } from '../../icons';
import { Button } from '../../ui/Button';
import { Wrapper } from '../../ui/Wrapper';
import City from '../../../images/city.png';
import { BREAKPOINT_LAPTOP, BREAKPOINT_MOBILE, BREAKPOINT_TABLET } from '../../../const/breakpoints';

const logoIconWrapperStyle = css({
    width: 352,
    height: 239,
    marginTop: 90,
    marginBottom: 40,
    [`@media (max-width: ${BREAKPOINT_TABLET}px)`]: {
        margin: '100px auto 0 auto',
        width: 401,
        height: 272,
    },
    [`@media (max-width: ${BREAKPOINT_MOBILE}px)`]: {
        marginTop: 25,
        width: 285,
        height: 193,
    },
});

const cityImgStyle = css({
    width: '100vw',
    marginTop: 70,
    marginLeft: -5,
    order: 2,
    [`@media (max-width: ${BREAKPOINT_TABLET}px)`]: {
        order: 3,
    },
    [`@media (max-width: ${BREAKPOINT_MOBILE}px)`]: {
        width: '172vw',
        marginLeft: '-20vw',
    },
});

const buttonStyle = css({
    [`@media (max-width: ${BREAKPOINT_TABLET}px)`]: {
        display: 'none',
    },
});

const titleStyle = css({
    color: COLOR_SECONDARY,
    fontSize: 50,
    lineHeight: '55px',
    textAlign: 'center',
    position: 'relative',
    top: -180,
    order: 3,

    [`@media (max-width: ${BREAKPOINT_LAPTOP}px)`]: {
        fontSize: 45,
    },

    [`@media (max-width: ${BREAKPOINT_TABLET}px)`]: {
        fontSize: 30,
        lineHeight: '35px',
        order: 2,
        position: 'static',
        marginTop: 45,
    },

    [`@media (max-width: ${BREAKPOINT_MOBILE}px)`]: {
        fontSize: 20,
        lineHeight: '25px',
        marginTop: 20,
    },
});

const sectionStyle = css({
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: COLOR_BACKGROUND,
    width: '100vw',
    overflow: 'hidden',
});

const wrapperStyle = css({
    order: 1,
});

export const MainScreen = () => {
    return (
        <section css={sectionStyle}>
            <Wrapper style={wrapperStyle}>
                <div css={logoIconWrapperStyle}>
                    <LogoIcon color={COLOR_SECONDARY} />
                </div>
                <Button style={buttonStyle}>VIEW MORE</Button>
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
