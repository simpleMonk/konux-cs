import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { KonuxInput } from './KonuxInput';

const WrapperDiv = styled.div`
    display: flex;
`;

storiesOf('KonuxInput', module)
  .add('Input', () => <WrapperDiv><KonuxInput  placeholder="Placeholder text for KonuxInput" /></WrapperDiv>)
  ;
