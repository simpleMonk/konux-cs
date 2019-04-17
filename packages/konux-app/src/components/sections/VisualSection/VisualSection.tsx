import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { KonuxTimeSeries } from '../../design-systems/KonuxTimeSeries/KonuxTimeSeries';
import { Colors } from '../../../utils/Colors';
import { TimeSeriesType } from '../../types';

const FlexibleLayout = styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
`;

const StyledFlexibleLayout = styled(FlexibleLayout)`
  position: relative;
  box-shadow: 0px 1px 4px 0px hsla(0, 0%, 0%, 0.2);
  margin: 23px;
  background: ${Colors.WHITE};
`;

const ErrorContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex: 1 1 auto;
  justify-content: center;
  align-items: center;
`;

const PlaceHolderDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex: 1 1 auto;
  background: ${Colors.WHITE};
  justify-content: center;
  align-items: center;
`;

const InnerPlaceHolderDiv = styled.div`
  width: calc(100% - 40px);
  height: calc(100% - 40px);
  display: flex;
  flex: 1 1 auto;
  background: ${Colors.LIGHTESTGRAY};
  justify-content: center;
  align-items: center;
  margin: 20px;
`;

interface Props extends TimeSeriesType {
  fetchState: string;
}

function getView(props: Props) {
  switch (props.fetchState) {
    case 'LOADED':
      return <KonuxTimeSeries {...props} />;
      break;
    case 'NOT_LOADED':
      return (
        <PlaceHolderDiv>
          <InnerPlaceHolderDiv>
            <h3>Loading...</h3>
          </InnerPlaceHolderDiv>
        </PlaceHolderDiv>
      );
      break;
    case 'ERROR':
      return (
        <ErrorContainer>
          {' '}
          <h3>Error fetching Data.</h3>
        </ErrorContainer>
      );
      break;
    default:
      return <PlaceHolderDiv />;
  }
}

/**
 * Visual section to render Timeseries chart based on Data or
 * render error/placeholder appropriately
 */
const VisualSection: FunctionComponent<Props> = (props: Props) => (
  <StyledFlexibleLayout>{getView(props as Props)}</StyledFlexibleLayout>
);
VisualSection.displayName = 'VisualSection';

export { VisualSection };
