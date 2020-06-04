import React from "react";
import { bool } from "prop-types";
import { StyledMenu } from "./Menu.styled";

const Menu = ({ open }) => {
    return (
        <StyledMenu open={open}>
            <a href='/' className='SidebarLinks'>About</a>
            <a href='/' className='SidebarLinks'>Contact</a>
        </StyledMenu>
    );
};

Menu.propTypes = {
    open: bool.isRequired,
};

export default Menu;
