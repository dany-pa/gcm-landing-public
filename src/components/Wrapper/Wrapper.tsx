import { css, SerializedStyles } from '@emotion/react';
import { FC, PropsWithChildren } from 'react';
import { BREAKPOINT_MOBILE, BREAKPOINT_TABLET } from '../../const/breakpoints';
interface Props {
    style?: SerializedStyles;
}

export const Wrapper: FC<PropsWithChildren<Props>> = ({ style, children }) => {
    const wrapperStyle = css({
        paddingLeft: 186,
        paddingRight: 76,

        [`@media (max-width: ${BREAKPOINT_TABLET}px)`]: {
            paddingLeft: 106,
            paddingRight: 50,
        },

        [`@media (max-width: ${BREAKPOINT_MOBILE}px)`]: {
            paddingLeft: 40,
            paddingRight: 40,
        },
    });

    return <div css={[wrapperStyle, style]}>{children}</div>;
};
