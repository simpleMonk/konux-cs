import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import * as d3 from 'd3';
import { KonuxPrimaryButton } from '../../design-systems/KonuxButton/KonuxButton';
import { KonuxInput } from '../../design-systems/KonuxInput/KonuxInput';
import { KonuxDateTimePicker } from '../../design-systems/KonuxDateTimePicker/KonuxDateTimePicker';
import { Colors } from '../../../utils/Colors';
import { API_POST_URL } from '../../../utils/AppConstants';
import { Point } from '../../types';

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
  box-shadow: -4px 4px 4px -4px hsla(0, 0%, 0%, 0.15);
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

const FormSection = styled.form`
  padding: 15px 15px;
  flex: 1 1 auto;
`;

const StyledKonuxPrimaryButton = styled(KonuxPrimaryButton)`
  width: 100%;
`;

interface Props {
  handleNewDataPoint(point: Point): void;
}

/**
 * ManageDataSection is a stateful component to render add form and
 * push the new data to parent component
 */
function ManageDataSection(props: Props) {
  const [dataPoint, setDataPoint] = useState('0');
  const [dataPointDateTime, setDataPointDateTime] = useState(new Date());

  const handleDataPointChange = (ev: React.FormEvent<HTMLInputElement>) => {
    ev.preventDefault();
    setDataPoint(ev.currentTarget.value);
  };

  const handleDateTimeChange = (dt: Date) => {
    setDataPointDateTime(dt);
  };

  const handleOnAddPoint = (ev: React.FormEvent<HTMLButtonElement>) => {
    const timeFormat = d3.timeFormat('%Y-%m-%dT%H:%M:%S%Z');
    axios
      .post(API_POST_URL, {
        x: timeFormat(dataPointDateTime),
        y: parseFloat(dataPoint)
      })
      .then(function(response: any) {
        if (response.data.status === 'ok') {
          props.handleNewDataPoint({
            x: timeFormat(dataPointDateTime),
            y: parseFloat(dataPoint)
          });
        }
        setDataPoint('0');
        setDataPointDateTime(new Date());
      })
      .catch(function(error: any) {
        console.log(error);
      });
  };

  return (
    <StyledFlexibleLayout>
      <TitleHeader>
        <span>Manage Data</span>
      </TitleHeader>
      <FormSection>
        <Cell>
          <KonuxInput
            type="number"
            placeholder="Add point here"
            value={dataPoint}
            onChange={handleDataPointChange}
          />
        </Cell>
        <Cell>
          <KonuxDateTimePicker
            dateTime={dataPointDateTime}
            onChange={handleDateTimeChange}
          />
        </Cell>
        <Cell>
          <StyledKonuxPrimaryButton
            name="addpoint"
            aria-label="Add a point here"
            type="button"
            onClick={handleOnAddPoint}
          >
            Add Point
          </StyledKonuxPrimaryButton>
        </Cell>
      </FormSection>
    </StyledFlexibleLayout>
  );
}

export { ManageDataSection };
