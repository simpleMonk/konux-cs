import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { KonuxTimeSeries } from './KonuxTimeSeries';

const WrapperDiv = styled.div`
    display: flex;
`;

const props = {
    data : [
        { x: '2018-04-20T12:45:03+04:00', y: 10 },
        { x: '2018-04-21T12:45:03+04:00', y: 10 },
        { x: '2018-04-22T12:45:03+04:00', y: 10 },
        { x: '2018-04-23T12:45:03+04:00', y: 10 }
    ]
}

storiesOf('KonuxTimeSeries', module)
  .add('Input', () => <WrapperDiv><KonuxTimeSeries {...props}/></WrapperDiv>)
  ;
