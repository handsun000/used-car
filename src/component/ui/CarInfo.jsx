import React from "react";
import { styled } from 'styled-components';
import CarInfoDetail from "./CarInfoDetail";
import CarInfoLink from "./CarInfoLink";

const InfoWrapper = styled.div`
    background: #fff;
    padding: 3rem 2rem;
    display: flex;
    align-items: center;
    margin: 0 auto;
    justify-content: space-evenly;
`;

function CarInfo(props) {
    
    return (
        <InfoWrapper>
            <CarInfoDetail />
            <CarInfoLink />
        </InfoWrapper>
    )
}

export default CarInfo;