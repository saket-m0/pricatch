import React, { useState, useRef } from "react";
import { useOnClickOutside } from "./hooks";
import { StyledHeader } from "./Header.styled";
import pricatchicon from "./assets/logo/pricatchicon.png";
import ecommerceicon from "./assets/logo/ecommerceicon.png";
import trackpriceicon from "./assets/logo/trackpriceicon.png";
import emailicon from "./assets/logo/emailicon.png";
import ProductFormContainer from "./ProductFormContainer";
import Navbar from "./Navbar";

const Header = (props) => {
    const [open, setOpen] = useState(false);
    const node = useRef();
    const ProductFormContainerRef = React.createRef();
    useOnClickOutside(node, () => setOpen(false));

    const handleTogle = () => {
        setOpen(!open);
        if (!open) {
            window.scrollTo({
                top: ProductFormContainerRef.current.offsetTop,
                behavior: "smooth",
            });
        } else {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        }
    };
    return (
        <StyledHeader>
            <div className='header'>
                <Navbar {...props} />

                <div className='headercontent'>
                    <img
                        src={pricatchicon}
                        alt='Pricatch'
                        className='HeaderIcon'
                    />
                    <h1 className='title' ref={ProductFormContainerRef}>
                        Start Tracking
                    </h1>
                    <p className='tagline'>
                        Why buy now when you can get them later at Reduced
                        Prices
                    </p>
                    <div ref={node}>
                        <button
                            className='GetStarted'
                            open={open}
                            onClick={() => handleTogle()}>
                            <span className='GetStartedtext'>Get Started </span>
                        </button>
                        <div className='ProductFormContainer'>
                            <ProductFormContainer
                                open={open}
                                setOpen={setOpen}
                            />
                        </div>
                    </div>
                    <div className='header-content-row'>
                        <div className='header-content-column'>
                            <h3 className='header-content-title'>
                                Track Prices of Products you want to buy
                            </h3>
                            <div className='header-content-info'>
                                <div className='header-content-icon'>
                                    <img
                                        src={trackpriceicon}
                                        alt='Track Price'
                                        className='ContentIcon'></img>
                                </div>
                                <div className='header-content-text'>
                                    <p className='NestedContent'>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Nam fermentum ante ut
                                        ornare ultrices. Cras odio arcu, blandit
                                        quis ante et, suscipit convallis arcu.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='header-content-column'>
                            <h3 className='header-content-title'>
                                Get E Mail Notification when price lowers
                            </h3>
                            <div className='header-content-info'>
                                <div className='header-content-icon'>
                                    <img
                                        src={emailicon}
                                        alt='Track Price'
                                        className='ContentIcon'></img>
                                </div>
                                <div className='header-content-text'>
                                    <p className='NestedContent'>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Nam fermentum ante ut
                                        ornare ultrices. Cras odio arcu, blandit
                                        quis ante et, suscipit convallis arcu.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='header-content-column'>
                            <h3 className='header-content-title'>
                                Supports popular E Commerce websites
                            </h3>
                            <div className='header-content-info'>
                                <div className='header-content-icon'>
                                    <img
                                        src={ecommerceicon}
                                        alt='Track Price'
                                        className='ContentIcon'></img>
                                </div>
                                <div className='header-content-text'>
                                    <p className='NestedContent'>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Nam fermentum ante ut
                                        ornare ultrices. Cras odio arcu, blandit
                                        quis ante et, suscipit convallis arcu.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </StyledHeader>
    );
};

export default Header;
