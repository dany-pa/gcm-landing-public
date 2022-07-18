import { css } from '@emotion/react';
import { COLOR_BACKGROUND, COLOR_PRIMARY } from '../../../const/colors';
import TwitterIcon from '../../../images/twitter-mobile.svg';
import DiscordIcon from '../../../images/discord-mobile.svg';
import { BREAKPOINT_MOBILE, BREAKPOINT_TABLET } from '../../../const/breakpoints';

const sectionStyle = css({
    backgroundColor: COLOR_BACKGROUND,
    paddingBottom: 50,
});

const panelStyle = css({
    width: 685,
    height: 231,
    borderRadius: 23,
    backgroundColor: '#551EBD',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'center',
    position: 'relative',
    [`@media (max-width: ${BREAKPOINT_TABLET}px)`]: {
        width: 430,
        height: 213,
        flexDirection: 'column',
        padding: '25px 0 15px 150px',
    },
    [`@media (max-width: ${BREAKPOINT_MOBILE}px)`]: {
        width: 319,
        height: 158,
        padding: '15px 0 15px 108px',
    },
});

const iconsWrapperStyle = css({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '100%',
    position: 'absolute',
    right: 25,
    top: 0,
    a: {
        display: 'block',
    },

    'a + a': {
        marginTop: 18,
    },
    [`@media (max-width: ${BREAKPOINT_TABLET}px)`]: {
        position: 'static',
        flexDirection: 'row',
        justifyContent: 'flex-start',

        'a + a': {
            marginTop: 0,
            marginLeft: 45,
        },
    },
    [`@media (max-width: ${BREAKPOINT_MOBILE}px)`]: {
        'a + a': {
            marginLeft: 35,
        },
    },
});

const iconStyle = css({
    width: 72,
    height: 72,
    [`@media (max-width: ${BREAKPOINT_TABLET}px)`]: {
        width: 52,
        height: 52,
    },
    [`@media (max-width: ${BREAKPOINT_MOBILE}px)`]: {
        width: 38,
        height: 38,
    },
});

const textWrapperStyle = css({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: '50px',
    [`@media (max-width: ${BREAKPOINT_TABLET}px)`]: {
        padding: 0,
    },
});

const titleStyle = css({
    fontSize: 50,
    lineHeight: '35px',
    color: COLOR_PRIMARY,
    fontWeight: 900,
    [`@media (max-width: ${BREAKPOINT_TABLET}px)`]: {
        fontSize: 30,
        lineHeight: '30px',
    },
    [`@media (max-width: ${BREAKPOINT_MOBILE}px)`]: {
        fontSize: 20,
        lineHeight: '25px',
    },
});

const textStyle = css({
    color: COLOR_PRIMARY,
    fontSize: 30,
    lineHeight: '35px',
    [`@media (max-width: ${BREAKPOINT_TABLET}px)`]: {
        fontSize: 25,
        lineHeight: '30px',
        margin: '15px 0',
    },
    [`@media (max-width: ${BREAKPOINT_MOBILE}px)`]: {
        fontSize: 20,
        lineHeight: '25px',
        margin: '0 0 15px 0',
    },
});

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
