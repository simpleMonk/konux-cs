import React, { useState, useEffect, useReducer } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { ManageDataSection } from '../ManageDataSection/ManageDataSection';
import { VisualSection } from '../VisualSection/VisualSection';
import { Colors } from '../../../utils/Colors';
import { TimeSeriesType } from '../../types';
import { API_GET_URL } from '../../../utils/AppConstants';

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
    data: []
  });

  const [fetchState, dispatch] = useReducer(reducer, 'NOT_LOADED');

  function reducer(state: any, action: any) {
    switch (action.type) {
      case 'LOADED':
        setTimeSeriesData({ data: action.data });
        return 'LOADED';
        break;
      case 'NOT_LOADED':
        return 'NOT_LOADED';
        break;
      case 'ERROR':
        return 'ERROR';
        break;
      default:
        return 'NOT_LOADED';
    }
  }

  useEffect(() => {
    async function callGetApi() {
      const results = await axios(API_GET_URL);
      if (results.status === 200) {
        dispatch({ type: 'LOADED', data: results.data.values });
      } else {
        dispatch({ type: 'ERROR', data: [] });
      }
    }
    callGetApi();
  }, [dispatch]);

  const props = { ...timeSeriesData, fetchState: fetchState };

  return (
    <StyledMainSection>
      <VisualSection {...props} />
      <ManageDataSection />
    </StyledMainSection>
  );
};

export { MainSection };
