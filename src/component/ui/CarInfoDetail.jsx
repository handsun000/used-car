import React, { useContext } from "react";
import styled from "styled-components";
import CarContext from './../context/CarContext';

const CarDetail = styled.div`
    display: flex;
    gap: 1.5rem;
    flex-direction: column;
`;

const CarDetailItem = styled.div`
    display: flex;
    flex-direction: column;
`;

const ItemLabel = styled.span`
    font-size: 1.125rem;
    line-height: 1.75rem;
    font-weight: 700;
`;
const ItemValue = styled.span`
    font-size: 1.125rem;
    line-height: 1.75rem;
    font-weight: 400;
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3rem;
`;

const CarDetailWrapper = styled.div`
    display: flex;
    gap: 5rem;
    padding-top: 0.5rem;
`;

function CarInfoDetail(props) {
    const {car} = useContext(CarContext);
    console.log("CarInfoDetail");
    console.log(car);
    return (
        <Wrapper>
            <div>
                <ItemLabel>기본정보</ItemLabel>
            </div>
            <CarDetailWrapper>
                <CarDetail>
                    <CarDetailItem>
                        <ItemLabel>
                            차종
                        </ItemLabel>
                        <ItemValue>
                            {car.kind}
                        </ItemValue>
                    </CarDetailItem>
                    <CarDetailItem>
                        <ItemLabel>
                            색상
                        </ItemLabel>
                        <ItemValue>
                            {car.color}
                        </ItemValue>
                    </CarDetailItem>
                    <CarDetailItem>
                        <ItemLabel>
                            내장
                        </ItemLabel>
                        <ItemValue>
                            {car.inside}
                        </ItemValue>
                    </CarDetailItem>
                    <CarDetailItem>
                        <ItemLabel>
                            연료 타입
                        </ItemLabel>
                        <ItemValue>
                            {car.oil}
                        </ItemValue>
                    </CarDetailItem>
                    <CarDetailItem>
                        <ItemLabel>
                            변속기
                        </ItemLabel>
                        <ItemValue>
                            {car.transmission}
                        </ItemValue>
                    </CarDetailItem>
                    <CarDetailItem>
                        <ItemLabel>
                            인승
                        </ItemLabel>
                        <ItemValue>
                            {car.person}
                        </ItemValue>
                    </CarDetailItem>
                    <CarDetailItem>
                        <ItemLabel>
                            압류
                        </ItemLabel>
                        <ItemValue>
                            {car.seizure}
                        </ItemValue>
                    </CarDetailItem>
                </CarDetail>
                <CarDetail>
                    <CarDetailItem>
                        <ItemLabel>
                            복합연비 (km/ℓ)
                        </ItemLabel>
                        <ItemValue>
                            {car.efficiency}
                        </ItemValue>
                    </CarDetailItem>
                    <CarDetailItem>
                        <ItemLabel>
                            배기량 (cc)
                        </ItemLabel>
                        <ItemValue>
                            {car.displacement}
                        </ItemValue>
                    </CarDetailItem>
                    <CarDetailItem>
                        <ItemLabel>
                            구동방식
                        </ItemLabel>
                        <ItemValue>
                            {car.driving}
                        </ItemValue>
                    </CarDetailItem>
                    <CarDetailItem>
                        <ItemLabel>
                            연식
                        </ItemLabel>
                        <ItemValue>
                            {car.year}
                        </ItemValue>
                    </CarDetailItem>
                    <CarDetailItem>
                        <ItemLabel>
                            등록번호
                        </ItemLabel>
                        <ItemValue>
                            {car.number}
                        </ItemValue>
                    </CarDetailItem>
                    <CarDetailItem>
                        <ItemLabel>
                            세금미납
                        </ItemLabel>
                        <ItemValue>
                            {car.tax}
                        </ItemValue>
                    </CarDetailItem>
                    <CarDetailItem>
                        <ItemLabel>
                            저당
                        </ItemLabel>
                        <ItemValue>
                            {car.mortgage}
                        </ItemValue>
                    </CarDetailItem>
                </CarDetail>
            </CarDetailWrapper>
        </Wrapper>
    )
}

export default CarInfoDetail;