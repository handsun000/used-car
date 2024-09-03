import React from "react";
import { useContext } from "react";
import styled from "styled-components";
import CarContext from './../context/CarContext';


const ItemLabel = styled.span`
    font-size: 1.125rem;
    line-height: 1.75rem;
    font-weight: 700;
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3rem;
`;

const CarLink = styled.div`
    padding: 30px 20px;
    float: left;
    border: 1px solid #ddd;
    border-radius: 7px;
    display: flex;
    flex-direction: column;
    gap: 4rem;
    width: 47.82%;
`;

const CarLinkWrapper = styled.div`
    display: flex;
    width: 106%;
`;

const CarLinkTitle = styled.span`
    font-size: 14px;
`;

const CarLinkValue = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: baseline;
    gap: 0.3rem;
`;

const CarLinkValueSpan = styled.span`
    font-size: 14px;
    color: #2666c6;
`;

const CarInfoWrapper = styled.div`
    display: flex;
    gap: 2rem;
    flex-direction: column;
`;

const CarInfoBox = styled.div`
    display: flex;
    gap: 3rem;
`;

const CarInfoTitle = styled.span`
    font-size: 14px;
    color: #999;
`;

const CarInfoValue = styled.span`
    font-size: 14px;
    color: #2666c6;
`;

const CarInfoContainer = styled.div`
    display: flex;
    gap: 1rem;
`;

function CarInfoLink(props) {
    const {car} = useContext(CarContext);

    console.log("CarInfoLink");
    console.log(car);
    return (
        <Wrapper>
            <div>
                <ItemLabel>성능점검·보험사고이력정보</ItemLabel>
            </div>
            <CarLinkWrapper>
                <CarLink>
                    <CarLinkTitle>성능점검기록부</CarLinkTitle>
                    <CarLinkValue>
                        <CarLinkValueSpan>내역보기 </CarLinkValueSpan>
                        <CarLinkValueSpan>▶</CarLinkValueSpan>
                    </CarLinkValue>
                </CarLink>
                <CarLink>
                    <CarLinkTitle>보험사고정보</CarLinkTitle>
                    <CarLinkValue>
                        <CarLinkValueSpan>{car.crush} </CarLinkValueSpan>
                        <CarLinkValueSpan>▶</CarLinkValueSpan>
                    </CarLinkValue>
                </CarLink>
            </CarLinkWrapper>
            <CarInfoWrapper>
                <CarInfoBox>
                    <CarInfoContainer>
                        <CarInfoTitle>전손이력</CarInfoTitle>
                        <CarInfoValue> <strong>{car.loss}</strong></CarInfoValue>
                    </CarInfoContainer>
                    <CarInfoContainer>
                        <CarInfoTitle>침수이력</CarInfoTitle>
                        <CarInfoValue><strong>{car.flooding}</strong></CarInfoValue>
                    </CarInfoContainer>
                </CarInfoBox>
                <CarInfoBox>
                    <CarInfoContainer>
                        <CarInfoTitle>용도이력</CarInfoTitle>
                        <CarInfoValue><strong>{car.usage}</strong></CarInfoValue>
                    </CarInfoContainer>
                    <CarInfoContainer>
                        <CarInfoTitle>소유자변경</CarInfoTitle>
                        <CarInfoValue><strong>{car.owner}</strong></CarInfoValue>
                    </CarInfoContainer>
                </CarInfoBox>
            </CarInfoWrapper>
        </Wrapper>
    )
}

export default CarInfoLink;