import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { KonuxTimeSeries } from '../../design-systems/KonuxTimeSeries/KonuxTimeSeries';
import { Colors } from '../../../utils/Colors';
import { TimeSeriesType } from '../../types';

const FlexibleLayout = styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
`;

const StyledFlexibleLayout = styled(FlexibleLayout)`
  position: relative;
  box-shadow: 0px 1px 4px 0px hsla(0, 0%, 0%, 0.2);
  margin: 23px;
  background: ${Colors.WHITE};
`;

const VisualSection: FunctionComponent<TimeSeriesType> = (
  props: TimeSeriesType
) => (
  <StyledFlexibleLayout>
    <KonuxTimeSeries {...props} />
  </StyledFlexibleLayout>
);
VisualSection.displayName = 'VisualSection';

export { VisualSection };
