import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { MainSection } from './MainSection';

const WrapperDiv = styled.div`
    display: flex;
    width: 100%
    min-height: 800px;
    flex: 1;
`;

storiesOf('Main Section', module)
  .add('Section Details', () => <WrapperDiv><MainSection /></WrapperDiv>)
  ;
