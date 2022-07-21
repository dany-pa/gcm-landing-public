import { FC } from 'react';
import { desktopImgStyle, imgStyle, mobileImgStyle, copyrightStyle } from './styles';
import DesktopFooterImg from '../../images/footer.png';
import MobileFooterImg from '../../images/footerMobile.png';

export const Footer: FC = () => {
    return (
        <footer css={{ position: 'relative' }}>
            <div css={copyrightStyle}>@galacticmarcetcats</div>
            <img
                src={DesktopFooterImg}
                css={[imgStyle, desktopImgStyle]}
            />
            <img
                src={MobileFooterImg}
                css={[imgStyle, mobileImgStyle]}
            />
        </footer>
    );
};
