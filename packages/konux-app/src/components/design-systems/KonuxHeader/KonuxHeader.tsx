import React from 'react';
import styled from 'styled-components';
import { Colors } from '../../../utils/Colors';
import konuxLogo from '../../../assests/images/konux.svg';

export const StyledHeader = styled.div`
  width: 100%;
  height: 78px;
  position: relative;
  background-color: ${Colors.WHITE};
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.15);
`;

const KonuxLogo = styled.img`
  height: 47px;
  padding: 15px;  
`;

KonuxLogo.displayName = 'KonuxLogo';

const KonuxHeader: React.FC = () => (
  <StyledHeader>
    <KonuxLogo src={konuxLogo} alt="KonuxLogo" />
  </StyledHeader>
);
KonuxHeader.displayName = 'KonuxHeader';

export {KonuxHeader};

