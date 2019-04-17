import React from 'react';
import { FunctionComponent, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { TimeSeriesType, ChartOptions } from '../../types';
import { LineChart } from '../../../utils/LineChart';
import './KonuxTimeSeries.scss';

const OFFSET = 50;

const TimeSeriesContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex: 1 1 auto;
`;

/**
 * Responsive timeseries components
 */
const KonuxTimeSeries: FunctionComponent<TimeSeriesType> = (
  props: TimeSeriesType
) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const getContainerWidth = () => {
    return containerRef.current
      ? containerRef.current.offsetWidth - OFFSET * 2
      : 300;
  };
  const getContainerHeight = () => {
    return containerRef.current
      ? containerRef.current.offsetHeight - OFFSET * 3
      : 300;
  };

  useEffect(() => {
    const chartOptions: ChartOptions = {
      width: getContainerWidth(),
      height: getContainerHeight(),
      margin: {
        top: OFFSET,
        right: OFFSET,
        bottom: OFFSET * 3,
        left: OFFSET
      },
      data: props.data
    };
    const lineChart = LineChart(containerRef.current, chartOptions);
    const redrawLineChart = () =>
      lineChart.render(getContainerWidth(), getContainerHeight());

    lineChart.initialize();
    window.addEventListener('resize', redrawLineChart);
    return () => {
      window.addEventListener('resize', redrawLineChart);
    };
  }, [props.data]);

  return <TimeSeriesContainer ref={containerRef} />;
};

export { KonuxTimeSeries };
