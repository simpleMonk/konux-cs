import React from 'react';
import styled from 'styled-components';
import { Colors } from '../../../utils/Colors';

const KonuxInput = styled.input`
  display: block;
  font-family: Roboto;
  width: 100%;
  height: 32px;
  padding: 6px 9px;
  font-size: 13px;
  line-height: 1.42857;
  color: ${Colors.GRAY};
  background-color: ${Colors.WHITE};
  background-image: none;
  border: 1px solid ${Colors.LIGHTGRAY};
  border-radius: 3px;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;

  &:focus {
    border-color: ${Colors.ACCENT};
    outline: 0;
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
      0 0 8px rgba(39, 142, 252, 0.6);
  }
`;
KonuxInput.displayName = 'KonuxInput';

export { KonuxInput };
