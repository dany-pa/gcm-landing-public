import { FC } from 'react';
import { desktopImgStyle, imgStyle, mobileImgStyle, copyrightStyle } from './styles';
import DesktopFooterImg from '../../images/webp/footer.webp';
import MobileFooterImg from '../../images/webp/footerMobile.webp';

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
