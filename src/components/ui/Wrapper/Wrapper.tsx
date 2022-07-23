import { css, SerializedStyles } from '@emotion/react';
import { FC, PropsWithChildren } from 'react';
import { BREAKPOINT_LAPTOP, BREAKPOINT_MOBILE, BREAKPOINT_TABLET } from '../../../const/breakpoints';
interface Props {
    style?: SerializedStyles;
}

export const Wrapper: FC<PropsWithChildren<Props>> = ({ style, children }) => {
    const wrapperStyle = css({
        maxWidth: 1070,
        marginLeft: 'calc((100vw - 1070px) / 2)',
        marginRight: 'calc((100vw - 1070px) / 2)',
        [`@media (max-width: ${BREAKPOINT_LAPTOP}px)`]: {
            maxWidth: 950,
            marginLeft: 'calc((100vw - 950px) / 2)',
            marginRight: 'calc((100vw - 950px) / 2)',
        },
        [`@media (max-width: ${BREAKPOINT_TABLET}px)`]: {
            maxWidth: 550,
            marginLeft: 'calc((100vw - 550px) / 2)',
            marginRight: 'calc((100vw - 550px) / 2)',
        },

        [`@media (max-width: ${BREAKPOINT_MOBILE}px)`]: {
            maxWidth: 320,
            marginLeft: 'calc((100vw - 320px) / 2)',
            marginRight: 'calc((100vw - 320px) / 2)',
        },
    });

    return <div css={[wrapperStyle, style]}>{children}</div>;
};
