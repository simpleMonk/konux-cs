import React from 'react';
import styled from 'styled-components';
import { ManageDataSection } from '../ManageDataSection/ManageDataSection';
import { VisualSection } from '../VisualSection/VisualSection';
import { Colors } from '../../../utils/Colors';

const StyledMainSection = styled.section`
  width: 100%;
  display: flex;
  flex: 1 1 auto;
  flex-direction: row;
  background: ${Colors.LIGHTBLUE};

  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;

const MainSection = () => {
  return (
    <StyledMainSection>
      <VisualSection />
      <ManageDataSection />
    </StyledMainSection>
  );
};
MainSection.displayName = 'MainSection';

export { MainSection };
