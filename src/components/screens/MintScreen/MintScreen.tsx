import {
    buttonStyle,
    centerWrapperStyle,
    inputButtonStyle,
    inputStyle,
    inputTextStyle,
    inputWrapperStyle,
    mintImgStyle,
    mintPanelBodyStyle,
    mintPanelImgStyle,
    mintPanelInnerLeftStyle,
    mintPanelInnerRightStyle,
    mintPanelStyle,
    pricePanelStyle,
    sectionStyle,
    textStyle,
    textTotalStyle,
    titleStyle,
    totalWrapperStyle,
} from './styles';
import MintPanelIMG from '../../../images/mintPanel.png';
import MintIMG from '../../../images/mintImg.png';
import MinusImg from '../../../images/minus.svg';
import PlusImg from '../../../images/plus.svg';
import { Button } from '../../ui';
import { useCallback, useState } from 'react';

export const MintScreen = () => {
    const [mintCount, setMintCount] = useState(0);

    const handleClickPlus = useCallback(() => {
        setMintCount(mintCount + 1);
    }, [mintCount]);

    const handleClickMinus = useCallback(() => {
        if (mintCount === 0) return;
        setMintCount(mintCount - 1);
    }, [mintCount]);

    return (
        <section css={sectionStyle}>
            <div css={mintPanelStyle}>
                <img
                    css={mintPanelImgStyle}
                    src={MintPanelIMG}
                    alt=""
                />
                <div css={mintPanelBodyStyle}>
                    <div css={mintPanelInnerLeftStyle}>
                        <img
                            src={MintIMG}
                            alt=""
                            css={mintImgStyle}
                        />
                        <div
                            className="mintedText"
                            css={textStyle}
                        >
                            <strong>xxxx / 3030</strong> MINTED
                        </div>
                    </div>
                    <div css={mintPanelInnerRightStyle}>
                        <div css={titleStyle}>
                            Take your
                            <br /> Galactic
                            <br /> Market Cat
                        </div>
                        <div css={textStyle}>
                            <strong>Price per 1 NFT :</strong> 80 STX
                        </div>
                        <div css={centerWrapperStyle}>
                            <div css={inputWrapperStyle}>
                                <div css={{ display: 'flex' }}>
                                    <button
                                        css={inputButtonStyle}
                                        onClick={handleClickMinus}
                                    >
                                        <img
                                            src={MinusImg}
                                            alt=""
                                        />
                                    </button>
                                    <input
                                        type="number"
                                        css={inputStyle}
                                        value={mintCount}
                                        disabled
                                    />
                                    <button
                                        css={inputButtonStyle}
                                        onClick={handleClickPlus}
                                    >
                                        <img
                                            src={PlusImg}
                                            alt=""
                                        />
                                    </button>
                                </div>
                                <div css={inputTextStyle}>Сhoose an amount</div>
                            </div>
                            <div css={totalWrapperStyle}>
                                <div css={[textStyle, textTotalStyle]}>
                                    <strong>Total</strong>
                                </div>
                                <div css={pricePanelStyle}>
                                    <strong>80 </strong> STX
                                </div>
                            </div>
                        </div>
                        <Button style={buttonStyle}>MINT</Button>
                    </div>
                </div>
            </div>
        </section>
    );
};
