import styled from 'styled-components';
import { space, typography, layout } from 'styled-system';

import { getFontSize, getFontWeight } from './funcs';
import { TextProps } from './types';

const Text = styled.div<TextProps>`
  color: ${({ color }) => color ?? '#0B061F'};
  font-size: ${getFontSize};
  font-weight: ${getFontWeight};
  line-height: 1.5;
  word-spacing: -1px;
  white-space: nowrap;
  ${({ textTransform }) => textTransform && `text-transform: ${textTransform};`}
  ${({ ellipsis }) =>
    ellipsis &&
    `white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;`}

  ${space}
  ${typography}
  ${layout}
`;

Text.defaultProps = {
  size: 'md',
  ellipsis: false,
};

export default Text;

export const SmallText = styled(Text).attrs({ size: 'sm' })<TextProps>``;
export const MediumText = styled(Text).attrs({ size: 'md' })<TextProps>``;
export const LargeText = styled(Text).attrs({ size: 'lg' })<TextProps>``;
