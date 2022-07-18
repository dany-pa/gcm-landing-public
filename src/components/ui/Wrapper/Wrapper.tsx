import { css, SerializedStyles } from '@emotion/react';
import { FC, PropsWithChildren } from 'react';
import { BREAKPOINT_MOBILE, BREAKPOINT_TABLET } from '../../../const/breakpoints';
interface Props {
    style?: SerializedStyles;
}

export const Wrapper: FC<PropsWithChildren<Props>> = ({ style, children }) => {
    const wrapperStyle = css({
        paddingLeft: 112,
        paddingRight: 112,
        [`@media (max-width: ${BREAKPOINT_TABLET}px)`]: {
            paddingLeft: 100,
            paddingRight: 100,
        },

        [`@media (max-width: ${BREAKPOINT_MOBILE}px)`]: {
            paddingLeft: 35,
            paddingRight: 35,
        },
    });

    return <div css={[wrapperStyle, style]}>{children}</div>;
};
