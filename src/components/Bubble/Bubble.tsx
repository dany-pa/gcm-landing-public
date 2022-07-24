import { css, SerializedStyles } from '@emotion/react';
import { FC } from 'react';
import BubbleImg from '../../images/bubble.png';

const BubbleStyle = css({
    position: 'absolute',
    objectFit: 'cover',
});

interface Props {
    style?: SerializedStyles;
}

export const Bubble: FC<Props> = ({ style }) => {
    return (
        <img
            src={BubbleImg}
            css={[BubbleStyle, style]}
        />
    );
};
