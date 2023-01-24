import QRCode from 'qrcode';
import React, {FC, useEffect, useRef, useState} from 'react';

import {
  BankQRCode,
  CopyArea,
  DataContainer,
  CardContainer
} from './styles';

import { FlexWithGap } from '../../components/Base';
import {
  LargeText,
  MediumText, SmallText,
} from '../../components/Base/Text';
import {
  LargeContentWrapper,
  SmallContentWrapper,
} from '../../components/Base/Wrappers';
import {getBuyDetailsAction} from "../../state/actions/buyAction";
import {useAppDispatch, useAppSelector} from "../../state/hooks";
import {resetBuyState} from "../../state/reducers/buyReducer";

export const DataField: FC<{ title: string; value: string }> = ({
                                                                  value,
                                                                  title,
                                                                }) => {
  return (
      <FlexWithGap gap="8px" alignItems="center">
        <SmallText fontWeight={400}>{title}</SmallText>
        <MediumText fontWeight={600} color="#516AE4">
          {value}
        </MediumText>
      </FlexWithGap>
  );
};

export const TxBuy = () => {
  const dispatch = useAppDispatch()
  const effectRan = useRef(false);

  const {
    requestId,
    ibanTo,
    depositComment,
      outputUsdtAmount,
    depositCurrency,
  } = useAppSelector((state) => state.buy);

  const [qr, setQr] = useState<string | null>(null);

  useEffect(() => {
    if (effectRan.current === false) {
      dispatch(getBuyDetailsAction());

      return () => {
        effectRan.current = true;
        dispatch(resetBuyState());
      };
    }
    return () => {
      dispatch(resetBuyState());
    };
  }, []);

  const generateQR = async (address: string) => {
    try {
      return await QRCode.toDataURL(address, {
        type: 'image/webp',
        width: 600,
        margin: 1,
        color: { dark: '#000000', light: '#ffffff' },
      });
    } catch (err) {
      console.error(err);
      return null;
    }
  };

  useEffect(() => {
    (async () => {
      if (ibanTo) setQr(await generateQR(ibanTo));
    })();
  }, [ibanTo]);

  return (
      <LargeContentWrapper justifyContent="center" alignItems="center">
            <SmallContentWrapper
                justifyContent="center"
                maxWidth="599px !important"
            >
              <CardContainer>
                <FlexWithGap width="100%" gap="24px" alignItems="start">
                  {qr && <BankQRCode src={qr} alt="qr-code" />}
                  <DataContainer>
                    <DataField title="Transaction ID:" value={`#${requestId}`} />
                    {depositCurrency && (
                        <DataField title="Currency:" value={depositCurrency} />
                    )}
                    <DataField title="Payment comment:" value={depositComment} />
                    <DataField
                        title="Output amount:"
                        value={outputUsdtAmount.toString()}
                    />
                  </DataContainer>
                </FlexWithGap>
                <FlexWithGap gap="5px" flexDirection="column" mt="16px">
                  <MediumText fontWeight={700}>IBAN:</MediumText>
                  <CopyArea>
                    <LargeText fontWeight={500}>{ibanTo}</LargeText>
                  </CopyArea>
                </FlexWithGap>
              </CardContainer>
            </SmallContentWrapper>
      </LargeContentWrapper>
  );
};
