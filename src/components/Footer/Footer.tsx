import { FC } from 'react';
import { footerStyle, footerImg } from './styles';

export const Footer: FC = () => {
    return (
        <footer css={footerStyle}>
            <div css={footerImg}></div>
        </footer>
    );
};
