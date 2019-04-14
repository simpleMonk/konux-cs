import React from 'react';
import styled from 'styled-components';
import {KonuxHeader} from '../components/design-systems/KonuxHeader/KonuxHeader';

const FlexibleLayout = styled.div`
    display: flex;
    flex:1 1 auto;
    flex-direction: column;
`;

const Header = styled.header`
    width: 100%;
    height: 78px;
`;

const MainSection = styled.section`
    width: 100%;
`;

const MainPage : React.FC = () => (
    <FlexibleLayout>
        <Header>
            <KonuxHeader/>
        </Header>   
        <MainSection />
    </FlexibleLayout>
    
  );
MainPage.displayName = 'MainPage';

export {MainPage};

