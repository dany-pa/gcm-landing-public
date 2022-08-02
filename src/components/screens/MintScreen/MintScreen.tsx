import {
    buttonStyle,
    centerWrapperStyle,
    desktopMintPanelImgStyle,
    hideOnMobile,
    inputButtonStyle,
    inputStyle,
    inputTextStyle,
    inputWrapperStyle,
    mintImgStyle,
    mintPanelBodyStyle,
    mintPanelInnerLeftStyle,
    mintPanelInnerRightStyle,
    mintPanelStyle,
    minusBtnStyle,
    mobileMintPanelImgStyle,
    plusBtnStyle,
    pricePanelStyle,
    sectionStyle,
    textStyle,
    textTotalStyle,
    titleStyle,
    totalWrapperStyle,
} from './styles';
import MintPanelIMG from '../../../images/mintPanel.png';
import MobileMintPanelIMG from '../../../images/mobileMintPanel.png';
import MintIMG from '../../../images/mintIMG.png';
import MinusImg from '../../../images/minus.svg';
import PlusImg from '../../../images/plus.svg';
import { Button } from '../../ui';
import { useCallback, useMemo, useState } from 'react';
import { PRICE_ONE_NFT } from '../../../const/general';

export const MintScreen = () => {
    const [mintCount, setMintCount] = useState(0);

    const handleClickPlus = useCallback(() => {
        setMintCount(mintCount + 1);
    }, [mintCount]);

    const handleClickMinus = useCallback(() => {
        if (mintCount === 0) return;
        setMintCount(mintCount - 1);
    }, [mintCount]);

    const totalPrice = useMemo(() => {
        return mintCount * PRICE_ONE_NFT;
    }, [mintCount]);

    const isDisabledMintBtn = useMemo(() => {
        console.log(mintCount);
        return mintCount === 0;
    }, [mintCount]);

    return (
        <section css={sectionStyle}>
            <div css={mintPanelStyle}>
                <img
                    css={desktopMintPanelImgStyle}
                    src={MintPanelIMG}
                    alt=""
                />
                <img
                    css={mobileMintPanelImgStyle}
                    src={MobileMintPanelIMG}
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
                            <br css={hideOnMobile} /> Galactic
                            <br /> Market Cat
                        </div>
                        <div css={textStyle}>
                            <strong>Price per 1 NFT :</strong> 80 STX
                        </div>
                        <div css={centerWrapperStyle}>
                            <div css={inputWrapperStyle}>
                                <div css={{ display: 'flex' }}>
                                    <button
                                        css={[inputButtonStyle, minusBtnStyle]}
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
                                        css={[inputButtonStyle, plusBtnStyle]}
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
                                    <strong>{totalPrice} </strong> STX
                                </div>
                            </div>
                        </div>
                        <Button
                            style={buttonStyle}
                            disabled={isDisabledMintBtn}
                        >
                            MINT
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};
