import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    height: 100%;
    width: 30%;
    box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.1), 0 2px 4px 0 rgba(0, 0, 0, 0.1);
    background: #fff;
`;

const Img = styled.img`
    src: url(../../assets/car1.jpg);
    width: 100%;
`;

const CarTitle = styled.p`
    font-size: 2.125rem;
    line-height: 2.75rem;
    min-height: 130px;
    margin: 0;
`;

const CarPrice = styled.p`
    font-size: 1.5rem;
    line-height: 2.25rem;
    margin: 0;
`;

const CarDescriptor = styled.p`
    font-size: 1.125rem;
    line-height: 1.75rem;
    margin: 0;
`;

const CarInfo = styled.p`
    font-size: 1rem;
    line-height: 1.5rem;
`;

const CarInfoWrapper = styled.div`
    margin-left: 1.5rem;
`;


function CarListItem(props) {

    const {car, onClick} = props;

    return (
        <Wrapper onClick={onClick}>
            <Img src={require(`../../assets/${car.img}.jpg`)} alt="" />
            <CarInfoWrapper>
                <CarTitle>{car.title}</CarTitle>
                <strong><CarPrice>{car.price}</CarPrice></strong>
                <CarDescriptor>(VAT 포함)</CarDescriptor>
                <CarInfo>{car.date}</CarInfo>
                <CarInfo>{car.degree}</CarInfo>
                <CarInfo>{car.oil}</CarInfo>
            </CarInfoWrapper>
        </Wrapper>
    )
}

export default CarListItem;