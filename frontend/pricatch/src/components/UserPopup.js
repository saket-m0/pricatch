import React, { Component } from "react";
import Login from "./Login";
import Register from "./Register";
import { StyledUserPopup } from "./UserPopup.styled";

class UserPopup extends Component {
    state = { showContent: false, FormTopRef: React.createRef() };

    handleToggle = (event) => {
        event.preventDefault();
        this.setState({
            showContent: !this.state.showContent,
        });
    };

    render() {
        return (
            <StyledUserPopup>
                <div>
                    <div className='close' onClick={this.props.close}>
                        &times;
                    </div>
                    {this.state.showContent === false ? (
                        <Login btnValue='Login' />
                    ) : (
                        <Register refForTop={this.state.FormTopRef} />
                    )}
                    <p className='userPopupText'>
                        {this.state.showContent === false
                            ? "Dont have an account?"
                            : "Already have an account?"}
                        <button
                            className='togglelink'
                            onClick={(event) => this.handleToggle(event)}>
                            {this.state.showContent === false
                                ? "Sign Up"
                                : "Login"}
                        </button>
                    </p>
                </div>
            </StyledUserPopup>
        );
    }
}

export default UserPopup;
