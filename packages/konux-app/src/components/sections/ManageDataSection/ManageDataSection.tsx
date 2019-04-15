import React from 'react';
import styled from 'styled-components';
import { KonuxPrimaryButton } from '../../design-systems/KonuxButton/KonuxButton';
import { KonuxInput } from '../../design-systems/KonuxInput/KonuxInput';
import { Colors } from '../../../utils/Colors';

const FlexibleLayout = styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
`;

const StyledFlexibleLayout = styled(FlexibleLayout)`
  min-width: 30%;
  min-height: 250px;
  flex: 0 1 auto;
  position: relative;
  margin: 15px;
  background: ${Colors.WHITE};
  box-shadow: -4px 4px 4px -4px hsla(0,0%,0%,0.15);
  margin: 0.6px;
`;

const TitleHeader = styled.header`
  height: 78px;
  box-shadow: 0 4px 1px -4px rgba(0, 0, 0, 0.15);
  padding: 0 15px;
  font-size: 22px;
  align-items: center;
  display: flex;
`;

const Cell = styled.div`
  display: flex;
  flex: 1 1 auto;
  margin: 15px 0;
`;

const FormSection = styled.div`
  padding: 15px 15px;
  flex: 1 1 auto;
`;

const StyledKonuxPrimaryButton = styled(KonuxPrimaryButton)`
  width: 100%;
`;

const ManageDataSection: React.FC = () => (
  <StyledFlexibleLayout>
    <TitleHeader>
      <span>Manage Data</span>
    </TitleHeader>
    <FormSection>
      <Cell>
        <KonuxInput type="text" placeholder="Add point here" />
      </Cell>
      <Cell>
        <StyledKonuxPrimaryButton
          name="addpoint"
          aria-label="Add a point here"
          type="button"
        >
          Add Point
        </StyledKonuxPrimaryButton>
      </Cell>
    </FormSection>
  </StyledFlexibleLayout>
);
ManageDataSection.displayName = 'ManageDataSection';

export { ManageDataSection };
