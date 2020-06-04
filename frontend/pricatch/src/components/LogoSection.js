import React from "react";
import { StyledLogoSection } from "./LogoSection.styled";

import flipkartlogo from "./assets/brand-logos/flipkartlogo.png";

const LogoSection = () => {
    return (
        <StyledLogoSection>
            <div className='supported-sites-title'>
                <div className='horizontal-lines' />
                <p className='supported-sites'>Supported Sites</p>
                <div className='horizontal-lines' />
            </div>
            <div className='brand-logos'>
                <div className='brand-logo-row'>
                    <div className='brand-logo-col'>
                        <img
                            src={flipkartlogo}
                            alt='flipkart'
                            className='brand-logo-img'
                        />
                    </div>
                    <div className='brand-logo-col'>
                        <img
                            src={flipkartlogo}
                            alt='flipkart'
                            className='brand-logo-img'
                        />
                    </div>
                    <div className='brand-logo-col'>
                        <img
                            src={flipkartlogo}
                            alt='flipkart'
                            className='brand-logo-img'
                        />
                    </div>
                </div>
                <div className='brand-logo-row'>
                    <div className='brand-logo-col'>
                        <img
                            src={flipkartlogo}
                            alt='flipkart'
                            className='brand-logo-img'
                        />
                    </div>
                    <div className='brand-logo-col'>
                        <img
                            src={flipkartlogo}
                            alt='flipkart'
                            className='brand-logo-img'
                        />
                    </div>
                    <div className='brand-logo-col'>
                        <img
                            src={flipkartlogo}
                            alt='flipkart'
                            className='brand-logo-img'
                        />
                    </div>
                </div>
            </div>
        </StyledLogoSection>
    );
};

export default LogoSection;
