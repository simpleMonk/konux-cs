import React from 'react';
import styled from 'styled-components';
import { KonuxHeader } from '../components/design-systems/KonuxHeader/KonuxHeader';
import { ManageDataSection } from '../components/sections/ManageDataSection/ManageDataSection';
import { VisualSection } from '../components/sections/VisualSection/VisualSection';

const FlexibleLayout = styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
`;

const Header = styled.header`
  width: 100%;
  height: 78px;
`;

const MainSection = styled.section`
  width: 100%;
  display: flex;
  flex: 1 1 auto;
  flex-direction: row;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const MainPage: React.FC = () => (
  <FlexibleLayout>
    <Header>
      <KonuxHeader />
    </Header>
    <MainSection>
      <ManageDataSection />
      <VisualSection />
    </MainSection>
  </FlexibleLayout>
);
MainPage.displayName = 'MainPage';

export { MainPage };
