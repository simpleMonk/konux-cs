import React from 'react';
import { storiesOf } from '@storybook/react';
import { KonuxDateTimePicker } from './KonuxDateTimePicker';
import { DateTimeProps } from '../../types';

const props = {
    dateTime : '2018-04-20T12:45:03+04:00',
}

storiesOf('KonuxDateTimePicker', module)
  .add('DateTimePicker - Passprops', () => <KonuxDateTimePicker {...props}/>)
  .add('DateTimePicker', () => <KonuxDateTimePicker />) ;
