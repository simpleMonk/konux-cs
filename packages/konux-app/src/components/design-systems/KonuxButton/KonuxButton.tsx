import React from 'react';
import styled from 'styled-components';
import { Colors } from '../../../utils/Colors';

const KonuxButton = styled.button`
  display: inline-block;
  margin-bottom: 0;
  font-weight: normal;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  background-image: none;
  border: 1px solid ${Colors.LIGHTGRAY};
  white-space: nowrap;
  padding: 6px 9px;
  font-size: 13px;
  line-height: 1.42857;
  border-radius: 3px;
  user-select: none;
  background-color: ${Colors.WHITE};
`;
KonuxButton.displayName = 'KonuxButton';

const KonuxPrimaryButton = styled(KonuxButton)`
  background-color: ${Colors.ACCENT};
  color: ${Colors.WHITE};
  border: 1px solid ${Colors.ACCENT};
`;

KonuxPrimaryButton.displayName = 'KonuxPrimaryButton';

export { KonuxButton, KonuxPrimaryButton };
