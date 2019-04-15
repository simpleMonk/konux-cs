import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { VisualSection } from './VisualSection';

const WrapperDiv = styled.div`
    display: flex;
    height: 450px;
    width: 450px;
`;

storiesOf('Visual Section', module)
  .add('Section Details', () => <WrapperDiv><VisualSection>Hello</VisualSection></WrapperDiv>)
  ;
