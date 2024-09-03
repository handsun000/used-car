import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { styled } from 'styled-components';
import Header from "../ui/Header";

import data from "../../data.json";
import CarInfo from './../ui/CarInfo';
import { useContext } from "react";
import CarContext from './../context/CarContext';
import CarOption from './../ui/CarOption';

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
`;

const CarWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-image: linear-gradient(#f4f4f4, #f4f4f4), linear-gradient(#000, #000);
    gap: 1.5rem;
`;

const Img = styled.img`
    src: url(../../assets/car1.jpg);
    width: 60%;
`;

const Toggle = styled.div`
    background: #f4f4f4;
    padding-top: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    
`;

const ToggleText = styled.p`
    margin: 0;
    padding: 10px 20px 10px 20px;
    cursor: pointer;
`;

const SimpleInfo = styled.div`
    width: 30%;
    background: #fff;
    padding: 1.5rem 1.5rem 2rem;
    box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.1), 0 2px 4px 0 rgba(0, 0, 0, 0.1);
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

const CarInfos = styled.p`
    font-size: 1rem;
    line-height: 1.5rem;
`;



function CarViewPage(props) {

    const { carId } = useParams();
    const [tab, setTab] = useState(0);

    const car = data.find((item) => {
        return item.id == carId;
    });

    return (
        <Wrapper>
            <Header />

            <CarWrapper>
                <Img src={require(`../../assets/${car.img}.jpg`)} alt="" />
                <SimpleInfo>
                    <CarTitle>{car.title}</CarTitle>
                    <strong><CarPrice>{car.price}</CarPrice></strong>
                    <CarDescriptor>(VAT 포함)</CarDescriptor>
                    <CarInfos>{car.date}</CarInfos>
                    <CarInfos>{car.degree}</CarInfos>
                    <CarInfos>{car.oil}</CarInfos>
                </SimpleInfo>
            </CarWrapper>
            <Toggle>
                <ToggleText style={tab == 0 ? { background: '#00adef' } : { background: '#f4f4f4' }} onClick={() => setTab(0)}><strong>차량 정보</strong></ToggleText>
                <ToggleText style={tab == 1 ? { background: '#00adef' } : { background: '#f4f4f4' }} onClick={() => setTab(1)}><strong>옵션</strong></ToggleText>
                <ToggleText style={tab == 2 ? { background: '#00adef' } : { background: '#f4f4f4' }} onClick={() => setTab(2)}><strong>추가 정보</strong></ToggleText>
            </Toggle>

            {tab == 0 ?
                <CarContext.Provider value={{car}}>
                    <CarInfo /> 
                </CarContext.Provider>
                : ''
            }
            {tab == 1 ?
                <CarOption /> : ''
            }
            {tab == 2 ?
                '' : ''
            }
        </Wrapper>
    )
}

export default CarViewPage;