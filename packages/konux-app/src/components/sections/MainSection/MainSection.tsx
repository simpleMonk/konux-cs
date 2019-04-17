import React, { useState, useEffect, useReducer, useRef } from 'react';
import * as d3 from 'd3';
import styled from 'styled-components';
import axios from 'axios';
import { ManageDataSection } from '../ManageDataSection/ManageDataSection';
import { VisualSection } from '../VisualSection/VisualSection';
import { Colors } from '../../../utils/Colors';
import { TimeSeriesType, Point } from '../../types';
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

/**
 * Mainsection to render visual and add form
 */
const MainSection = () => {
  //State to manage timeseries data
  const [timeSeriesData, setTimeSeriesData] = useState<TimeSeriesType>({
    data: []
  });

  //state to manage loading
  const [fetchState, dispatch] = useReducer(reducer, 'NOT_LOADED'); //ERROR/LOADED

  /**
   * Reducer to handle different loading states
   */
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

  // Effect to get data
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

  const timeSeriesProps = { ...timeSeriesData, fetchState: fetchState };
  const compareDatePoints = (a: Point, b: Point) => {
    let same = new Date(a.x).getTime() === new Date(b.x).getTime();
    if (same) return 0;
    // Check if the first is greater than second
    if (a.x > b.x) return 1;
    // Check if the first is less than second
    if (a.x < b.x) return -1;

    return 0;
  };
  const handleNewDataPoint = (newDataPoint: Point) => {
    dispatch({ type: 'NOT_LOADED' });
    const newTimeSeriesData = [...timeSeriesData.data, newDataPoint].sort(
      compareDatePoints
    );
    dispatch({ type: 'LOADED', data: newTimeSeriesData });
  };
  const manageDataProps = { handleNewDataPoint: handleNewDataPoint };

  return (
    <StyledMainSection>
      <VisualSection {...timeSeriesProps} />
      <ManageDataSection {...manageDataProps} />
    </StyledMainSection>
  );
};

export { MainSection };
