import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { VisualSection } from './VisualSection';

const WrapperDiv = styled.div`
    display: flex;
    height: 550px;
    width: 750px;
    flex: 1;
`;

const props = {
  data: [
    { x: '2018-04-20T12:45:03+04:00', y: 1 },
    { x: '2018-04-21T12:45:03+04:00', y: 10 },
    { x: '2018-04-22T12:45:03+04:00', y: 12 },
    { x: '2018-04-23T12:45:03+04:00', y: 6 }
  ]
}

storiesOf('Visual Section', module)
  .add('Section Details', () => <WrapperDiv><VisualSection {...props} ></VisualSection></WrapperDiv>)
  ;
