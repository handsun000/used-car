import React, { useState } from "react";
import { keyframes, styled } from 'styled-components';

const Wrapper = styled.div`
    background: white;
    transition: height .3s ease;
    height: auto;
`;

const Container = styled.div`
    padding: 3rem 2rem;
`;

const OptionWrapper = styled.div`
    background: #f8f8f8;
    border: 1px solid #e5e5e5;
    box-shadow: 0 0 4px 0 rgba(0,0,0,.1);
    width: 83.3333333333%;
    margin: 0 auto;
`;

const OptionContainer = styled.div`
    border-bottom: 1px solid #e5e5e5;
    padding: 2rem 3rem;
    display: flex;
    justify-content: space-between;
    cursor: pointer;
`;

const OptionTitle = styled.span`
    font-size: 1.125rem;
    line-height: 1.75rem;
    font-weight: 700;
`;

const OptionArrow = styled.span`
    font-size: 1.5rem;
    line-height: 1.75rem;
    font-weight: 700;
`;

const OptionCnt = styled(OptionTitle)`
    color: blue;
    font-weight: 500;
`;

const ImgArrow = styled.img.attrs({
    src: require('../../assets/right-arrow.png'),
    alt: "",
})`
    width: 20px;
`;

const OptionListWrapper = styled.div`
    background: white;
    transition: height .65s ease, opacity .5s ease .3s;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    align-content: center;
    justify-content: flex-start;
    gap: 10px 0;
    padding: 1rem 2rem;
`;

const OptionList = styled.li`
    width: 200px;
    list-style-type: none;
`;

const fadeIn = keyframes`
    0%{
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`;

const fadeOut = keyframes`
    0% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
`;

function CarOption(props) {

    const [toggle1, setToggle1] = useState(false);
    const [toggle2, setToggle2] = useState(false);
    const [toggle3, setToggle3] = useState(false);
    const [toggle4, setToggle4] = useState(false);
    const [toggle5, setToggle5] = useState(false);

    return (
        <Wrapper>
            <Container>
                <OptionWrapper>
                    <OptionContainer onClick={() => setToggle1(!toggle1)}>
                        <OptionTitle>외관 (<OptionCnt>3</OptionCnt>)</OptionTitle>
                        <ImgArrow style={toggle1 ? { transform: "rotate(90deg)", transition: "all ease 0.5s" } : { transition: "all ease 0.5s" }} />
                    </OptionContainer>
                    {toggle1 ? 
                        <OptionListWrapper style={toggle1? {animation: `${fadeIn} 0.15s ease-out`}: {animation:""}}>
                            <OptionList>제논라이트(HID)</OptionList>
                            <OptionList>썬루프</OptionList>
                            <OptionList>알루미늄휠</OptionList>
                            <OptionList>전동접이식미러</OptionList>
                            <OptionList>주간주행등(DRL)</OptionList>
                            <OptionList>파노라마썬루프</OptionList>
                            <OptionList>루프랙</OptionList>
                            <OptionList>LED리어램프</OptionList>
                            <OptionList>하이빔 어시스트</OptionList>
                            <OptionList>고스트 도어 클로징</OptionList>
                            <OptionList>자동슬라이딩도어</OptionList>
                            <OptionList>전동사이드스탭</OptionList>
                            <OptionList>어댑티드헤드램프</OptionList>
                        </OptionListWrapper> : ''
                    }
                    <OptionContainer onClick={() => setToggle2(!toggle2)}>
                        <OptionTitle>내장 (<OptionCnt>10</OptionCnt>)</OptionTitle>
                        <ImgArrow style={toggle2 ? { transform: "rotate(90deg)", transition: "all ease 0.5s" } : { transition: "all ease 0.5s" }} />
                    </OptionContainer>
                    <OptionContainer onClick={() => setToggle3(!toggle3)}>
                        <OptionTitle>안전 (<OptionCnt>13</OptionCnt>)</OptionTitle>
                        <ImgArrow style={toggle3 ? { transform: "rotate(90deg)", transition: "all ease 0.5s" } : { transition: "all ease 0.5s" }} />
                    </OptionContainer>
                    <OptionContainer onClick={() => setToggle4(!toggle4)}>
                        <OptionTitle>편의 (<OptionCnt>8</OptionCnt>)</OptionTitle>
                        <ImgArrow style={toggle4 ? { transform: "rotate(90deg)", transition: "all ease 0.5s" } : { transition: "all ease 0.5s" }} />
                    </OptionContainer>
                    <OptionContainer onClick={() => setToggle5(!toggle5)}>
                        <OptionTitle>멀티 (<OptionCnt>3</OptionCnt>)</OptionTitle>
                        <ImgArrow style={toggle5 ? { transform: "rotate(90deg)", transition: "all ease 0.5s" } : { transition: "all ease 0.5s" }} />
                    </OptionContainer>
                </OptionWrapper>
            </Container>
        </Wrapper>
    )
}

export default CarOption;