import React from "react";
import styled from "styled-components";
import CarListItem from './CarListItem';

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    gap: 2rem;
    flex-wrap: wrap;
`

function CarList(props) {
    const { cars, onClickItem } = props;

    return (
        <Wrapper>
            {cars.map((car, index) => {
                return (
                    <CarListItem 
                        key={car.id}
                        car={car}
                        onClick={() => {
                            onClickItem(car);
                        }}
                    />
                )
            })}
        </Wrapper>
    )
}

export default CarList;