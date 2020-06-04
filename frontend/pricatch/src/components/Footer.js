import React from "react";
import { StyledFooter } from "./Footer.styled";

const Footer = () => {
    return (
        <StyledFooter>
            <div className = 'footer'>
                <p className='credit-text'>Made with <i className="fas fa-heart"></i> by Saket Mahajan</p>
            </div>
        </StyledFooter>
    );
};

export default Footer
