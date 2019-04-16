import React, { useState } from 'react';
import styled from 'styled-components';
import { ManageDataSection } from '../ManageDataSection/ManageDataSection';
import { VisualSection } from '../VisualSection/VisualSection';
import { Colors } from '../../../utils/Colors';
import { TimeSeriesType } from '../../types';

const StyledMainSection = styled.section`
  width: 100%;
  display: flex;
  flex: 1 1 auto;
  flex-direction: row;
  background: ${Colors.LIGHTBLUE};

  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
    flex-direction: column-reverse;
  }

  @media (min-width: 360px) and (max-width: 767px) {
    flex-direction: column-reverse;
  }
`;

const MainSection = () => {
  const [timeSeriesData, setTimeSeriesData] = useState<TimeSeriesType>({
    data: [
      { x: '2018-04-20T12:45:03+04:00', y: 1 },
      { x: '2018-04-21T12:45:03+04:00', y: 10 },
      { x: '2018-04-22T12:45:03+04:00', y: 12 },
      { x: '2018-04-23T12:45:03+04:00', y: 6 }
    ]
  });
  return (
    <StyledMainSection>
      <VisualSection {...timeSeriesData} />
      <ManageDataSection />
    </StyledMainSection>
  );
};

export { MainSection };
