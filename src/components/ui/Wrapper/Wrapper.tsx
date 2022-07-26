import { css, SerializedStyles } from '@emotion/react';
import { FC, PropsWithChildren } from 'react';
import { BREAKPOINT_LAPTOP, BREAKPOINT_MOBILE, BREAKPOINT_TABLET } from '../../../const/breakpoints';
interface Props {
    style?: SerializedStyles;
}

export const Wrapper: FC<PropsWithChildren<Props>> = ({ style, children }) => {
    const wrapperStyle = css({
        minWidth: 1070,
        maxWidth: 1070,
        margin: '0 auto',
        [`@media (max-width: ${BREAKPOINT_LAPTOP}px)`]: {
            minWidth: 950,
            maxWidth: 950,
        },
        [`@media (max-width: ${BREAKPOINT_TABLET}px)`]: {
            maxWidth: 550,
            minWidth: 550,
        },

        [`@media (max-width: ${BREAKPOINT_MOBILE}px)`]: {
            maxWidth: 320,
            minWidth: 320,
        },
    });

    return (
        <div
            css={[wrapperStyle, style]}
            className="wrapper"
        >
            {children}
        </div>
    );
};
