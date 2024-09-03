import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";


const Wrapper = styled.div`
    background: black;
`;

const HeaderStyle = styled.div`
    display: flex;
    align-items: center;
    color: white;
`;
const HeaderText = styled.div`
    color: white;
    width: 86%;
    margin-left: auto;
    margin-right: auto;
    height: 6rem;
    display: flex;
    align-items: center;
    cursor: pointer;
`
const NavDiv = styled.div`
    border-top: 1px solid #262626;
`;

function Header(props) {
    const navigate = useNavigate();

    return (
        <Wrapper>
            <HeaderStyle><HeaderText onClick={() => navigate('/')}>Mercedes-Benz</HeaderText></HeaderStyle>
            <NavDiv/>
        </Wrapper>
    )
}

export default Header;