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

const notLoadedProps = {
  data: [],
  fetchState: 'NOT_LOADED'
}

const loadedProps = {
  data : [
    { x: '2018-04-20T12:45:03+04:00', y: 0 },
    { x: '2018-04-21T12:45:03+04:00', y: 19 },
    { x: '2018-04-22T12:45:03+04:00', y: 10 },
    { x: '2018-04-23T12:45:03+04:00', y: 5 }
],
  fetchState: 'LOADED'
}

const errorProps = {
  data : [],
  fetchState: 'ERROR'
}

storiesOf('Visual Section', module)
  .add('Section Details - Not Loaded', () => <WrapperDiv><VisualSection {...notLoadedProps} ></VisualSection></WrapperDiv>)
  .add('Section Details - Loaded', () => <WrapperDiv><VisualSection {...loadedProps} ></VisualSection></WrapperDiv>)
  .add('Section Details - Error', () => <WrapperDiv><VisualSection {...errorProps} ></VisualSection></WrapperDiv>)

  ;
