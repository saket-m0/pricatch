import React, { useState, useRef } from "react";
import pricatchlogo from "./assets/logo/pricatchlogo.png";
import * as actions from "../store/actions/auth";
import { connect } from "react-redux";

import { default as Burger } from "./Burger";
import { default as Menu } from "./Menu";
import { StyledNavbar } from "./Navbar.styled";
import { useOnClickOutside } from "./hooks";
import Popup from "reactjs-popup";
import UserPopup from "./UserPopup";

const Navbar = (props) => {
    const [open, setOpen] = useState(false);
    const node = useRef();
    useOnClickOutside(node, () => setOpen(false));

    const gotoAbout = (event) => {
        event.preventDefault();
        window.scrollTo({
            top: props.RefForAbout.current.offsetTop,
            behavior: "smooth",
        });
    };

    return (
        <div ref={node}>
            <StyledNavbar>
                <Burger open={open} setOpen={setOpen} />
                <Menu open={open} setOpen={setOpen} />
                <div className='logo'>
                    <img src={pricatchlogo} alt='Logo'></img>
                </div>
                <ul className='nav-links'>
                    <li>
                        <a href='/' onClick={(event) => gotoAbout(event)}>
                            About
                        </a>
                    </li>
                    <li>
                        <a href='/'>Contact</a>
                    </li>
                    <li>
                        {props.isAuthenticated ? (
                            <button className='login' onClick={props.logout}>
                                <span className='logintext'>Logout</span>
                                <i className='fas fa-sign-out-alt'></i>
                            </button>
                        ) : (
                            <Popup
                                className='popup-wrapper'
                                modal
                                trigger={
                                    <button className='login'>
                                        <span className='logintext'>Login</span>
                                        <i className='fas fa-sign-in-alt'></i>
                                    </button>
                                }>
                                {(close) => <UserPopup close={close} />}
                            </Popup>
                        )}
                    </li>
                </ul>
                <div className='login-icon'>
                    {props.isAuthenticated ? (
                        <button className='login'>
                            <i
                                className='fas fa-sign-out-alt'
                                style={{ fontSize: "2rem" }}></i>
                        </button>
                    ) : (
                        <Popup
                            className='popup-wrapper'
                            modal
                            trigger={
                                <button className='login'>
                                    <i
                                        className='fas fa-sign-in-alt'
                                        style={{ fontSize: "2rem" }}></i>
                                </button>
                            }>
                            {(close) => <UserPopup close={close} />}
                        </Popup>
                    )}
                </div>
            </StyledNavbar>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(actions.logout()),
    };
};

export default connect(null, mapDispatchToProps)(Navbar);
