import React, { useState } from 'react';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Colors } from '../../../utils/Colors';
import { DateTimePropsWithEvents } from '../../types';
import './KonuxDateTimePicker.scss';

const StyledDatePicker = styled(DatePicker)`
  display: block;
  font-family: Roboto;
  width: 100%;
  height: 32px;
  padding: 6px 9px;
  font-size: 13px;
  line-height: 1.42857;
  color: ${Colors.GRAY};
  background-color: ${Colors.WHITE};
  background-image: none;
  border: 1px solid ${Colors.LIGHTGRAY};
  border-radius: 3px;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;

  &:focus {
    border-color: ${Colors.ACCENT};
    outline: 0;
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
      0 0 8px rgba(39, 142, 252, 0.6);
  }
`;

/**
 * Datetime picker to set and handle date time values.
 */
const KonuxDateTimePicker = (props: DateTimePropsWithEvents) => {
  const [selectedDate, setSelectedDate] = useState(
    props && props.dateTime ? new Date(props.dateTime) : new Date()
  );
  const handleDateChange = (
    dt: Date,
    ev: React.FormEvent<HTMLInputElement>
  ) => {
    setSelectedDate(dt);
    props.onChange(new Date(dt));
  };

  return (
    <StyledDatePicker
      selected={selectedDate}
      onChange={handleDateChange}
      showTimeSelect
      timeFormat="HH:mm"
      timeIntervals={15}
      dateFormat="MMMM d, yyyy h:mm aa"
      timeCaption="time"
    />
  );
};

export { KonuxDateTimePicker };
