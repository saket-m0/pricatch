import React from "react";
import { bool, func } from "prop-types";
import { StyledBurger } from "./Burger.styled";

const Burger = ({ open, setOpen }) => {
    return (
        <StyledBurger open={open} onClick={() => setOpen(!open)}>
            <div className='burgerBars' />
            <div className='burgerBars' />
            <div className='burgerBars' />
        </StyledBurger>
    );
};

Burger.propTypes = {
    open: bool.isRequired,
    setOpen: func.isRequired,
};

export default Burger;
