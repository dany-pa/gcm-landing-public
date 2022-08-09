import { AppConfig, UserSession, showConnect, openContractCall } from '@stacks/connect';

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
import { CONTRACT_ADDRESS, CONTRACT_NAME, MAX_MINT_COUNT, MINT_FUNCTION_NAME, MIN_MINT_COUNT } from './constants';

export const MintScreen = () => {
    const [mintCount, setMintCount] = useState(1);

    const handleClickPlus = useCallback(() => {
        if (mintCount === MAX_MINT_COUNT) return;
        setMintCount(mintCount + 1);
    }, [mintCount]);

    const handleClickMinus = useCallback(() => {
        if (mintCount === MIN_MINT_COUNT) return;
        setMintCount(mintCount - 1);
    }, [mintCount]);

    const totalPrice = useMemo(() => {
        return mintCount * PRICE_ONE_NFT;
    }, [mintCount]);

    const isDisabledMintBtn = useMemo(() => {
        return mintCount === 0;
    }, [mintCount]);

    const [stxAddress, setStxAddress] = useState<string | undefined>(undefined);
    const [userSession, setUserSession] = useState<UserSession | undefined>(undefined);
    const createSession = useCallback(() => {
        const appConfig = new AppConfig(['store_write']);
        const session = new UserSession({ appConfig });
        setUserSession(session);
    }, []);

    const callMintContract = useCallback(() => {
        openContractCall({
            contractAddress: CONTRACT_ADDRESS,
            contractName: CONTRACT_NAME,
            functionName: MINT_FUNCTION_NAME,
            functionArgs: [],
        });
    }, []);

    const handleMintClick = useCallback(() => {
        createSession();

        if (stxAddress) {
            callMintContract();
            return;
        }

        showConnect({
            appDetails: {
                name: 'Galactic Market Cats',
                icon: window.location.origin + '/favicon.ico',
            },
            onFinish: (response) => {
                setStxAddress(response.authResponsePayload.profile.stxAddress.testnet);
            },
            userSession: userSession,
        });
    }, [callMintContract, createSession, stxAddress, userSession]);

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
                                        type="text"
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
                            onClick={handleMintClick}
                        >
                            {stxAddress ? 'MINT' : 'CONNECT'}
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};
