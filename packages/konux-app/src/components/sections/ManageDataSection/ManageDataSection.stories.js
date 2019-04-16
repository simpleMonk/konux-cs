import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { ManageDataSection } from './ManageDataSection';

const WrapperDiv = styled.div`
    display: flex;
    flex: 1;
`;

storiesOf('Managed Data Section', module)
  .add('Section Details', () => <WrapperDiv><ManageDataSection/></WrapperDiv>)
  ;
