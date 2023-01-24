import styled from 'styled-components';

import { Box, Flex } from '../../components/Base';

export const BankQRCode = styled.img`
  width: 180px;
  height: 180px;
`;
export const DataContainer = styled(Flex)`
  width: 100%;
  flex-direction: column;
  align-items: start;
  gap: 8px;
`;
export const CopyImage = styled.img`
  width: 16px;
  height: 16px;
  cursor: pointer;
`;
export const Divider = styled(Box)`
  width: 100%;
  height: 1px;
  background-color: #eae9f2;
`;
export const CopyArea = styled(Flex)`
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 12px 24px;
  border-radius: 24px;
  background-color: #f6f8fa;
  border: 1px solid #d0d7de;
  box-sizing: border-box;
`;

export const CardContainer = styled(Flex)`
  width: 100%;
  flex-direction: column;
  padding: 40px 32px;
  box-sizing: border-box;
  border-radius: 8px;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.15);
  background-color: #ffffff;
`;
