import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { ManageDataSection } from './ManageDataSection';
import { string } from 'prop-types';

const WrapperDiv = styled.div`
    display: flex;
    flex: 1;
`;

const data = {x: "2018-04-20T12:45:03+04:00", y:6}

const handleNewDataPoint= (point) => {};

storiesOf('Managed Data Section', module)
  .add('Section Details', () => <WrapperDiv><ManageDataSection {...handleNewDataPoint}/></WrapperDiv>)
  ;
