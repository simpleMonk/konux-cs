import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { KonuxTimeSeries } from './KonuxTimeSeries';

const WrapperDiv = styled.div`
    display: flex;
    height: 500px;
    width: 600px
`;

const props = {
    data : [
        { x: '2018-04-20T12:45:03+04:00', y: 0 },
        { x: '2018-04-21T12:45:03+04:00', y: 19 },
        { x: '2018-04-22T12:45:03+04:00', y: 10 },
        { x: '2018-04-23T12:45:03+04:00', y: 5 }
    ]
}

storiesOf('KonuxTimeSeries', module)
  .add('Time Series', () => <WrapperDiv><KonuxTimeSeries {...props}/></WrapperDiv>)
  ;
