import React from "react";
import styled from "styled-components";
import Header from "../ui/Header";
import CarList from "../list/CarList";
import data from "../../data.json";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
`;


const InfoWrapper = styled.div`
    background: black;
`;
const InfoDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 86%;
    max-width: 1680px;
    margin-left: auto;
    margin-right: auto;
    padding-top: 3rem;
    padding-bottom: 4rem;
`;

const InfoH1 = styled.h1`
    font-size: 3rem;
    line-height: 3.75rem;
    color: #fff;
    margin: 0;
`;

const InfoP = styled.p`
    font-size: 1.125rem;
    line-height: 1.75rem;
    color: #bfbfbf;
`;

const CarWrapper = styled.div`
    background: #f4f4f4;

`;

function MainPage(props) {

    const navigate = useNavigate();

    return (
        <Wrapper>
            <Header/>
            <InfoWrapper>
                <InfoDiv>
                    <InfoH1>Mercedes-Benz Certified</InfoH1>
                    <InfoP>손승진 인증 중고차 스토어에 오신 것을 환영합니다!</InfoP>
                </InfoDiv>
            </InfoWrapper>
            
            <CarWrapper>
                <CarList
                    cars={data}
                    onClickItem={(item)=> {
                        navigate(`/car/${item.id}`);
                    }}
                />
            </CarWrapper>
        </Wrapper>
    )
}

export default MainPage;