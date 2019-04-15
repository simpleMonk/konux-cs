import React from 'react';
import { FunctionComponent, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { TimeSeriesType, ChartOptions } from '../../types';
import { LineChart } from '../../../utils/LineChart';
import './KonuxTimeSeries.scss';

const OFFSET = 50;

const TimeSeriesContianer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex: 1 1 auto;
`;

const KonuxTimeSeries: FunctionComponent<TimeSeriesType> = (
  props: TimeSeriesType
) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const chartOptions: ChartOptions = {
      width: containerRef.current
        ? containerRef.current.offsetWidth - OFFSET * 2
        : 300,
      height: containerRef.current
        ? containerRef.current.offsetHeight - OFFSET * 3
        : 300,
      margin: {
        top: OFFSET,
        right: OFFSET,
        bottom: OFFSET * 3,
        left: OFFSET
      },
      data: [
        { x: '2018-04-20T12:45:03+04:00', y: 1 },
        { x: '2018-04-21T12:45:03+04:00', y: 10 },
        { x: '2018-04-22T12:45:03+04:00', y: 12 },
        { x: '2018-04-23T12:45:03+04:00', y: 6 }
      ]
    };
    const lineChart = LineChart(containerRef.current, chartOptions);
    lineChart.initialize();
    return () => {
      lineChart.destroy();
    };
  });

  return <TimeSeriesContianer ref={containerRef} />;
};

export { KonuxTimeSeries };
